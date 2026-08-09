---
layout: post
title: "GeoParquet 1.0.0-beta.1 Released!"
date: 2022-12-19
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/geoparquet-1-0-0-beta-1-released-6390ecb4c6d0
image: /assets/img/posts/geoparquet-1-0-0-beta-1-released/1_n7sgpX2L_G6M8Xl0zUsl_g.png
---

I’m pleased to share that [GeoParquet](https://geoparquet.org/), a new geospatial format for vector data, just had its first ‘beta’ release. This is an exciting milestone, signifying that the core contributors believe that we’re almost ready for a stable 1.0.0 release. The next step is to solicit diverse implementations and feedback, to make sure that the core is very solid. This means we’ve got no major changes planned, but are retaining the ‘beta’ label so any critical feedback can be incorporated. So please try it out and let us know what you think — more info below on how to do that.

## About GeoParquet

The core idea behind GeoParquet is simply to standardize how geospatial data is represented in the awesome [Parquet](https://parquet.apache.org/) format, which was [released](https://blog.twitter.com/engineering/en_us/a/2013/announcing-parquet-10-columnar-storage-for-hadoop) in 2013 as a columnar data format to handle analytic workflows with complex, nested data. The official website does not do the best job of actually explaining it, so I recommend this [article from Data Bricks](https://www.databricks.com/glossary/what-is-parquet). The most compelling table compares it to CSV files, where it’s better on every dimension — size stored, time to run and cost to use:

![](/assets/img/posts/geoparquet-1-0-0-beta-1-released/1_16KUiqMyHK5ovSDJ_mxwgg.png)

Parquet has proven to be very popular with data scientists, and it has emerged as a standard import and export format for the wave of Cloud Native data tools including BigQuery, Snowflake, DataBricks, Redshift, Athena, Presto, Azure Data Lake and many more. One of the awesome things about these new tools is that a majority of them already support spatial types and operations. But each of them has pretty limited ways of importing geospatial data, that are almost entirely incompatible with one another. So the driving use case of GeoParquet 1.0.0 is to enable these new cloud tools to import and export any geospatial data in Parquet. Right now there is a lot of extra work you must do to move geospatial data between systems, but it should be as simple as any non-spatial import or export where it ‘just works’. There’s a whole lot more potential for the format, which we’ll explore in a future post, but 1.0.0 is firmly focused on enabling interoperability for any Parquet file representing geospatial data.

### The specification

The [GeoParquet specification itself](https://geoparquet.org/releases/v1.0.0-beta.1/) is relatively simple — it’s mostly metadata in Parquet (as JSON) about the geospatial columns, with the actual geometries encoded as [Well-Known Binary](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry). But we anticipate that there will be at least one alternate encoding in the future, so the standard has an `encoding` value. The new encoding is incubating as [GeoArrow](https://github.com/geoarrow/geoarrow/blob/main/format.md), and is very promising, but will likely not be ready for GeoParquet 1.0.0.

The spec does support alternate coordinate reference systems, since we anticipate that it will be used directly for analysis and people want to be able to do that without reprojecting from lat/long. Multiple geometry columns are allowed, though one has to be designated as the ‘primary’ one. And we support both spherical and planar encodings of geometries, communicating which one is used with the `edges` metadata value.

![](/assets/img/posts/geoparquet-1-0-0-beta-1-released/1_n7sgpX2L_G6M8Xl0zUsl_g.png)

### Advantages & Caveats

Building on Parquet leads to a bunch of cool side-effects for geospatial data. For one the file size of GeoParquet data is quite small compared to popular formats like GeoPackage, Shapefiles, GeoJSON and Flatgeobuf — often a half, a third or even less of the size. It is comparable in size to a zipped Shapefile, often even a bit smaller, but does not need to be unzipped. It often also encodes and decodes data much faster, and indeed the columnar nature of GeoParquet helped inspire a [new API for OGR](https://gdal.org/development/rfc/rfc86_column_oriented_api.html) that performs 4 times faster in benchmarks with GeoParquet.

One main caveat for 1.0 is that there are not yet any ‘spatial optimizations’, so large datasets will often not perform quite as well if you try to visualize a large GeoParquet file on its own. We were originally going to try to include a spatial index or at least some sort of best practice recommendation for how to optimize spatial data in Parquet, but decided to focus on getting to 1.0 as soon as possible. Many tools add their own spatial index, and the GeoArrow columnar geometry encoding may allow us to take advantage of native Parquet optimizations in the future. Our hope is to get the 1.0.0 standard solid and stable, focused on the import and export use case, so that large Cloud Data Warehouses like BigQuery, Snowflake and Redshift will adopt it before making their own special geospatial format in Parquet.

## Trying it out

Though the standard is still quite young, there are already a number of implementations, so even if you’re just a user of geospatial data who wants to convert some data and play with it a bit there’s a few options. One of the easiest is an [online conversion tool for GeoJSON](https://tschaub.net/gpq/), so if you’ve got any GeoJSON you can easily convert it. The latest versions of GDAL/OGR also have a [Parquet driver](https://gdal.org/drivers/vector/parquet.html) to convert any existing geospatial data to the format, and the extra libraries to support it are shipping on several distributions (conda, homebrew, etc). So if you’re comfortable with the command-line and `ogr2ogr` that’s a great way to go. And Microsoft’s Planetary Computer is already providing some key datasets as GeoParquet, [STAC metadata](https://planetarycomputer.microsoft.com/docs/quickstarts/stac-geoparquet/) of all their rasters as well as [Building Footprints](https://planetarycomputer.microsoft.com/dataset/ms-buildings), so you can also just download those and try them out.

You can use the latest versions of QGIS to visualize GeoParquet, at least on Windows and Linux (Mac support is coming soon). [GeoPandas](https://geopandas.org/) and [Apache Sedona](https://sedona.apache.org/) (spatial capabilities for Spark and Flink) also both support GeoParquet, enabling cool data science workflows. And there’s libraries with [implementations](https://geoparquet.org/#implementations) in R, Python, C/C++, Go, Julia and Scala. And if you’re a BigQuery user there are now [conversion tools](https://github.com/geoparquet/bigquery-converter) to import or export GeoParquet.

## The Path to 1.0.0

Getting to 1.0-beta.1 has been a great collaboration with many different organizations and individuals. We’ve had over 16 people [contribute](https://github.com/opengeospatial/geoparquet/graphs/contributors) to the specification repository, with more giving feedback in various ways.

![](/assets/img/posts/geoparquet-1-0-0-beta-1-released/1_-JlddddGMai7HsQDQwF7Lw.png)

*Initial collaborators on GeoParquet*

Like I mentioned above we don’t anticipate changes for 1.0.0, but we want to expand the number of implementations to be very sure we have a stable base that many people can build upon. So we’ve set [some criteria](https://github.com/opengeospatial/geoparquet/discussions/122) for what needs to be true for us to go to 1.0.0, and the next months will be spent working towards those. They are things like:

- At least 10 ‘implementations’ of various software packages.

- At least 5 different ‘data providers’ who have adopted this.

- At least 20 different ‘production’ datasets.

- Accessible validation engine

- Test data

We want to have a fully formed ecosystem of tools and data by the time we go to 1.0.0, so that we’re sure it works in practice, not just in theory. We put together [geoparquet.org](https://geoparquet.org) for the beta.1 release, but it’s very bare bones, so we aim to expand that to better explain the spec and the ecosystem.

And the plan is for GeoParquet to be an official [Open Geospatial Consortium](https://ogc.org) (OGC) standard. The spec has been incubated in an [opengeospatial repository on github](https://github.com/opengeospatial/geoparquet/), and we are working on forming an official Standards Working Group (SWG).

So please help us out! If you’ve got data that you can convert and publish officially that would be a huge help. If you’ve got a software implementation that understands geospatial data then consider adding support for GeoParquet (which should be pretty easy if you already work with GDAL/OGR). And if you’re a user try it out and [give us feedback](https://github.com/opengeospatial/geoparquet/discussions) on how it works. We welcome contributions to [the website](https://github.com/geoparquet/geoparquet.github.io), the[ spec](https://github.com/opengeospatial/geoparquet/tree/main/format-specs), and just helping us explain it to more people. It’s an exciting time, and in my next post I’ll explain where we see it going after 1.0, any why there is incredible potential for Parquet and GeoParquet to be a leading geospatial format of the future.
