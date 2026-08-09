---
layout: post
title: "Using DuckDB’s Hilbert Function with GeoP"
date: 2025-01-15
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/using-duckdbs-hilbert-function-with-geop-8ebc9137fb8a
image: https://miro.medium.com/v2/resize:fit:1400/1*I1aggfbTkgky9-93gbNdwA.gif
also_at_name: "cloudnativegeo.org"
also_at_url: https://cloudnativegeo.org/blog/2025/01/using-duckdbs-hilbert-function-with-geoparquet/
---

## Using DuckDB’s Hilbert Function with GeoParquet

DuckDB continues to be my go to tool for geospatial processing, after I [discovered it over a year ago](https://cloudnativegeo.org/blog/2023/09/duckdb-the-indispensable-geospatial-tool-you-didnt-know-you-were-missing/). Since that time its functionality has continued to expand, and as of version 1.1 it reads and writes GeoParquet natively, as long as you have the [spatial extension](https://duckdb.org/docs/extensions/spatial/overview.html) installed.

```
LOAD spatial;
CREATE TABLE fields AS 
  (SELECT * from 'https://data.source.coop/kerner-lab/fields-of-the-world-cambodia/boundaries_cambodia_2021.parquet');
  COPY fields TO 'cambodia-fields.parquet';
```

Be sure to always run `LOAD spatial;` or the table won’t get a geometry column, it will just create blobs. If you see errors or your output data is just Parquet and not GeoParquet that’s likely the source of your problems. I often forget to add it at the beginning of my sessions — perhaps there is some nice way to configure DuckDB to always load it, but I don’t know it (yet).

I also do recommend that you always use zstd compression, as it generally results in at least 20% smaller files, and its speed is comparable to snappy.

```
COPY fields TO 'c-fields.parquet' (FORMAT 'parquet', COMPRESSION 'zstd')
```

## Spatial Optimization

DuckDB’s GeoParquet writer always includes the new [bounding box column](https://medium.com/radiant-earth-insights/geoparquet-1-1-coming-soon-9b72c900fbf2#8e83), which enables much faster spatial filtering (EDIT: It actually does not always include the bbox column, you need to add it manually — instructions below). If you are translating GIS data from any format with a spatial index (GeoPackage, FlatGeobuf, Shapefiles) into DuckDB then you don’t need to do anything additional. But sometimes you get data that is not spatially ordered at all. Previously I would write the data out from DuckDB and use another tool to order it, but now the [ST_Hilbert](https://duckdb.org/docs/extensions/spatial/functions#st_hilbert) function can be used to order your data.

I recently got [help on the DuckDB Spatial discussions](https://github.com/duckdb/duckdb-spatial/discussions/419) for how to properly do this, so wanted to write that up for everyone. I’ve been processing Planet metadata that gets served from Planet’s [Data API](https://developers.planet.com/docs/apis/data/), working to try to make a [STAC-GeoParquet](https://github.com/stac-utils/stac-geoparquet/blob/main/spec/stac-geoparquet-spec.md) version of it. The data is ordered by time, so when you load the full dataset it just fills in everywhere.

![](https://miro.medium.com/v2/resize:fit:1400/1*I1aggfbTkgky9-93gbNdwA.gif)

I had a false start with the Hilbert curve function, which resulted in a cool pattern of loading the data.

![](https://miro.medium.com/v2/resize:fit:1400/1*ffaJ7_pIha_VMjo4mD5tkA.gif)

Unfortunately the resulting ordering isn’t all that helpful to optimize spatial queries.

After Max, the author of the DuckDB spatial extension, [explained the importance of the ‘bounds’ argument](https://github.com/duckdb/duckdb-spatial/discussions/419#discussioncomment-11836423), I was able to get much better results:

![](https://miro.medium.com/v2/resize:fit:1400/1*liSxvgirsA1K7X-m9vh0Jw.gif)

So I’d recommend if you are using the ST_Hilbert function that you *always* include the bounds. For a global dataset like mine you can just do something like:

```
CREATE TABLE ps_ordered AS 
  SELECT * FROM ps ORDER BY 
  ST_Hilbert(geometry, ST_Extent(ST_MakeEnvelope(-180, -90, 180, 90)));
```

You can just order as you write the Parquet:

```
COPY (SELECT * FROM ps ORDER BY 
      ST_Hilbert(geometry, ST_Extent(ST_MakeEnvelope(-180, -90, 180, 90))
   TO 'ps-sorted.parquet'  (FORMAT 'parquet', COMPRESSION 'zstd');
```

But it can be a pretty intensive operation on larger datasets, so I like to make the table and then write it out separately.

One cool thing is that proper ordering can help the size of the data, by enabling better compression. The original data was 1.37 gigabytes, and I believe was ordered by time. The badly ordered one was 2.21 gigabytes, and then the properly ordered one was only 1.24 gigabytes.

![](/assets/img/posts/using-duckdbs-hilbert-function-with-geop/1_75t36eFk_tAc0hE94H2hnw.png)

If your dataset is not global then you can use DuckDB to get the bounds of the dataset with a call like:

```
SELECT st_extent(ST_Extent_Agg(COLUMNS(geometry)))::BOX_2D
```

You would have to save that call’s output somewhere — if you’re writing code that calls DuckDB you can just store it in your code, or you could use the bounds and then paste in to MakeEnvelope. Or you can try to do it all in one call — I’ve not tested extensively, but I believe this call should work (credit due to ChatGPT for this one):

```
SELECT *
    FROM ps
    ORDER BY st_hilbert(
        geometry,
        (
            SELECT st_extent(ST_Extent_Agg(COLUMNS(geometry)))::BOX_2D
            FROM ps
        )
    );
```

You can use that to create the table, or to directly write the data out.

## Writing the bbox column

As of DuckDB 1.3.x the bbox column is not actually written out automatically. I apologize for saying that above — it took me a couple months to realize that I had just happened to be mostly working with data like Overture that already had the bbox column.

You can write out the bbox column manually, though it’s not quite fully spec compliant as it doesn’t write the proper GeoParquet metadata. But some clients will still understand it. To add a bbox you can do a call like:

```
(
    SELECT struct_pack(xmin := ddb_box.min_x, ymin := ddb_box.min_y, xmax := ddb_box.max_x, ymax := ddb_box.max_y)
    FROM (SELECT unnest(ST_Extent(<table_name>.<geometry_column>)::BOX_2D)) AS ddb_box
) as bbox 
```

In the example above it’d be:

```
SELECT *, 
    (
        SELECT struct_pack(xmin := ddb_box.min_x, ymin := ddb_box.min_y, xmax := ddb_box.max_x, ymax := ddb_box.max_y)
        FROM (SELECT unnest(ST_Extent(<table_name>.<geometry_column>)::BOX_2D)) AS ddb_box
    ) as bbox
    FROM ps
    ORDER BY st_hilbert(
        geometry,
        (
            SELECT st_extent(ST_Extent_Agg(COLUMNS(geometry)))::BOX_2D
            FROM ps
        )
    );
```

I hope this post helps others, and soon gets into the LLM’s. A big thanks to Max for all his amazing work on the spatial extension, and helping me figure out how to get the Hilbert curve working!

![](/assets/img/posts/using-duckdbs-hilbert-function-with-geop/1_rkeac_6sq32hFtJABU1PbQ.png)

*Gratuitous Picture to use in story profile*
