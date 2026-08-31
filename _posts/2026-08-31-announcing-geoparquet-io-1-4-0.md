---
layout: post
title: "Announcing geoparquet-io 1.4.0!"
date: 2026-08-31
image: /assets/img/posts/announcing-geoparquet-io-1-4-0/hilbert-vs-str-sort.png
---

I’m excited to announce the [latest release](https://github.com/geoparquet/geoparquet-io/releases/tag/v1.4.0) of [geoparquet-io](https://geoparquet.io/), version 1.4.0. We’ve been making bursty progress since launch, mostly driven by the real world needs of [Portolan](https://portolan-sdi.org/) (specifically [portolan-cli](https://portolan-sdi.github.io/portolan-cli/)). We’ll soon be talking about that project a lot, but from the perspective of geoparquet-io it’s served as a natural place to put many things that felt beyond the scope of what reasonably fit in the geoparquet-io library. And the portolan-cli in turn has driven a ton of improvements into gpio, as it’s been used to convert a bunch of diverse real world datasets into well-formatted geoparquet.

## Since GeoParquet 1.0

We haven’t talked much about GeoParquet since the 1.0 release, so I’ll start with this section summarizing what has been done from 1.0 to 1.3. There were over 60 PR’s across numerous modules, improving the overall quality and reliability with many minor fixes and improvements. Some of the major areas of improvement included:

* **Better support for s3 compatible storage**, adding write capabilities to non AWS s3 to complement the reading options that came earlier. This enables data to be written to open source aws alternatives like minio, or soveriegn s3 implementations like hetzner. (TODO: link to issue). So gpio can now easily be a tool to read and write geoparquet to any s3 data source (along with gcp and azure directly).
* **Improved WFS / Features API support** - added WFS 2.0, along with ‘tiling’ strategies that let you pull down a complete dataset from WFS even if there are limits on how much you can page a request.
* **GeoArrow geometry types read & write** - we initially didn’t support geoarrow native types in geoparquet, as they never were widely adopted. But they do serve some nice niche use cases, and are often used in high-performance systems that have end-to-end control over the data types. So version 1.1 GeoParquet’s using the GeoArrow geometry types now work well with geoparquet-io.
* **ArcGIS Server improvements** - these were mostly a set of improvements to handle more types of data and more real world services, driven mainly through portolan-cli working on mass converting full catalogs of ArcGIS Server data.
* **Vecorel and fiboa support** - these are two emerging standards that emerged as part of the [Fields of The World](https://fieldsofthe.world/) project, and they standardize agricultural field boundaries (fiboa) and provide a more generic way to standardize other columns. geoparquet-io will now always preserve their input and output, and there is a fiboa plugin to enable easy writing of that format.
* **Carto support** - it’s now easy to extract data from any Carto endpoint and transform it into GeoParquet with geoparquet-io.

## New in 1.4.0

For 1.4.0 I’m pleased to share that we had three new contributors, and saw a wider number of users report key bugs.

Top of the list is [Cayetano Benavent](https://github.com/cayetanobv) who was putting geoparquet-io through its paces creating Portolan catalogs from ArcGIS Servers. One of the nicest improvements he added is the ability to handle different types of curves. DuckDB (our core engine) can’t handle the curves natively, so instead we’ll translate it into a line or polygon equivalent, performing an approximation. He added ten PR’s in total, including fixes for nulls and reprojection across CSV and GeoJSON conversions.

[Stefan Ekehaug](https://github.com/oakhill87) had a couple nice bug fixes, and then just yesterday submitted [Sort Tile Recursive (STR) sorting](https://geoparquet.io/cli/sort/#str) as an alternative to Hilbert sorting. [Kanahiro Iguchi](https://spatialty.io/) did some great [benchmarking on spatial sort algorithms for GeoParquet](https://github.com/Kanahiro/spatial-sort-benchmark) and found that did STR the best in terms of spatial locality and remote query performance.

![Row group bounding boxes over northern France, Hilbert sorting on the left and STR pack on the right](/assets/img/posts/announcing-geoparquet-io-1-4-0/hilbert-vs-str-sort.png)

And then [Sanjay Santhanam](https://github.com/Sanjays2402) fixed duckdb spatial installation errors, ArcGIS error reporting and empty geometry bbox issues.

[Nissim](https://nlebovits.github.io/), my geoparquet-io co-maintainer, came through in force again with 29 PR’s, including many improvements to our WFS support, PMTiles output and numerous bug fixes and nice refactors.

As for myself, many of my changes came from building the [Fields of the World Portolan Catalog](https://source.coop/ftw/global-data). I’ll talk more about that whole process in a separate blog post, but it’s a truly global dataset with over a billion rows of data. It really stretches the tooling, and it was satisfying to hack things together to get it working with DuckDB and then circle back and improve the core geoparquet-io library to make it easy for anyone (including me) to do similar processing in the future.

There were a number of improvements to better enhance and partition data. The clearest ‘feature’ that I added was the ability to process ‘aggregates’ of a given dataset. You can select which columns you want to aggregate, and then produce new geoparquet’s that show the summaries of the columns.

![Help output for the gpio process aggregate a5 command, listing its options](/assets/img/posts/announcing-geoparquet-io-1-4-0/gpio-process-aggregate-help.png)

So you can do a call like:

```
gpio process aggregate a5 buildings.parquet cells.parquet --auto \
    --metric "avg:height,max:height," --breakdown roof_material
```

And you’ll get an a5 grid with columns for the average height in that cell, the max height in that cell, and a set of counts for each roof material that is in that. This allows you to do full visualization of different aspects of the data. See the [Aggregating Data Guide](https://geoparquet.io/guide/process-aggregate/) in the docs for a full explanation of all the options and when to use them.

![The Aggregating Data guide in the geoparquet-io docs, showing a table of which statistics to choose](/assets/img/posts/announcing-geoparquet-io-1-4-0/aggregating-data-guide.png)

The aggregates can be ‘stacked’ in different zoom levels for global datasets, to make it easier to really see where the data is:

![Zooming through stacked aggregate levels of a global dataset](/assets/img/posts/announcing-geoparquet-io-1-4-0/aggregates-animation.gif)

I find it nicer than just thinning features, the default behavior with tippecanoe, as you can’t really get a full sense of the data. This lets you visualize any of the columns you chose to aggregate - above you can quickly see the counts, the max height, the average height and also the ‘source’ of the data.

I don’t yet consider the complete feature ‘done’ - I want to get to a couple simple high level commands that will do a complete aggregation with no input. I’ve have some `--auto` flags in there, but I’m not yet fully satisfied that they make great results in all cases. I have a suspicion that for global datasets that it may be better to just reuse some consistent ‘steps’ of aggregation levels, and I want to explore that idea a bit more. But I think the added commands will certainly be useful as they are now. It also lead to adding a new `gpio process` command group, and I hope we can enhance it with more cool processing.

In my testing of the aggregation I also realized that our partitioning in geoparquet-io didn’t work with different CRS’s. I was testing aggregation of [Dutch Kadaster Buildings](https://portolan-sdi.github.io/portolan-nl-demo/#/tudelft/3dbag/collection.json), which uses the same underlying code as partitioning, and it didn’t work at all. So with PR [#530](https://github.com/geoparquet/geoparquet-io/issues/530) we can now partition or aggregate data in any projection.

The other major project I took on was to improve our core testing infrastructure. On my claude max plan I had a good bit of extra Fable credit at the end of the week, so I asked about things we could improve to make this a truly exemplar open source project.

![‘Verdict at a glance’ from an AI code review of geoparquet-io, grading architecture, duplication, performance, correctness, testing and docs](/assets/img/posts/announcing-geoparquet-io-1-4-0/code-review-verdict.png)

I think this will serve as a roadmap for improvements over the coming months. But it suggested some things that are fairly big swings, so the first thing I wanted to do was improve our testing so that we can we have more confidence before doing any refactoring. So for 1.4.0 we’ve mostly fixed key bugs and landed improvements to our test suite. There are now tests to ensure that the python API and the CLI always stay in sync. This surfaced some small ways that they had diverted. This technically introduced a ‘breaking change’, as any change to the API that would make existing code not work right is breaking. But we evaluated the changes and they are all quite minor, mostly just the defaults of a few functions, so we decided that was not worth calling this ‘2.0’. You can read more [details in the PR](https://github.com/geoparquet/geoparquet-io/pull/661).

We also added a full ‘e2e’ (end-to-end) suite of tests, to better test real user journeys. And we connected all the docs examples to be real test examples, so they are guaranteed to work and raise errors of things break. These changes in turn identified a number of bugs, and a majority of those have been fixed, though I still have some more I’d like to do in the next release.

So we hope you like the release! I am feeling like we now have had enough usage and bug fixes / improvements from real world experience that I feel confident recommending it to anyone. And I suspect we’ll have a steady stream of improvements as Portolan starts to spread, as it’s going to lead to more usage, as there’s a ton of data to convert to geoparquet, and we want geoparquet-io to be the go to tool for any conversion (though we are also quite happy for people to use DuckDB, GDAL/OGR or really any other tool aas well :) )
