---
layout: post
title: "GeoParquet 1.0.0-rc.1 released!"
date: 2023-07-31
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/geoparquet-1-0-0-rc-1-released-26df7188bec5
image: /assets/img/posts/geoparquet-1-0-0-rc-1-released/1_KPUJDO5yeDrhp9VbYTL77g.png
---

I’m excited to share that the core [GeoParquet](https://geoparquet.org) team has agreed that the specification is ready for 1.0.0 release. We just cut the [first ‘release candidate,’](https://github.com/opengeospatial/geoparquet/releases/tag/v1.0.0-rc.1) which means that we do not anticipate any more changes to the standard. However, we we want to give one last chance for everyone to give feedback in case we missed something. The spec is up at [geoparquet.org/releases/v1.0.0-rc.1/](https://geoparquet.org/releases/v1.0.0-rc.1/)

### Validators

The ecosystem of tools and data around GeoParquet has continued to grow, and we now have validators that check not only the metadata validity but also the congruence between the data and provided metadata. [GPQ](https://github.com/planetlabs/gpq), a command-line tool and Go library, can run validation on any potential file and report how it lines up against all the requirements of GeoParquet.

![](/assets/img/posts/geoparquet-1-0-0-rc-1-released/1_KPUJDO5yeDrhp9VbYTL77g.png)

[GDAL/OGR](https://gdal.org/) also ships with [a script](https://gdal.org/drivers/vector/parquet.html#validation-script) that can check the validity of the metadata and the actual data.

![](/assets/img/posts/geoparquet-1-0-0-rc-1-released/1_kLtyTt_q68AeE6cal1mKpw.png)

### Spec Additions

The spec has actually been quite stable, with no changes to the spec itself since the beta.1 release. The only addition was a set of guidelines for ‘[Parquet Geospatial Compatibility](https://github.com/opengeospatial/geoparquet/blob/main/format-specs/compatible-parquet.md)’. This came about from a [great community discussion](https://github.com/opengeospatial/geoparquet/discussions/169) about simplifying the standard even more by making metadata optional. The core motivation was that not every producer of data who wants to follow the GeoParquet spec is the person who makes the software, and many people use software that won’t immediately write out the right metadata. The proposal was to allow the production of valid GeoParquet files without including metadata, by simply choosing defaults. The community ended up deciding that allowing those metadata-less files to be valid GeoParquet would ultimately hurt interoperability, and that implementing GeoParquet must mandate metadata.

Nevertheless, we wanted to assist data providers who aim to support the GeoParquet ecosystem, so the compatibility recommendations give a set of requirements and encourage any GeoParquet library to be able to easily read those in. But those libraries that read compatible parquet files will all write out the proper metadata. So, if people use a tool to read compatible files and save the data, it will yield valid GeoParquet, thereby increasing the volume of interoperable data. Our hope is that it’s just a set of interim recommendations, and we aim to work with all software that reads or writes Parquet and supports spatial data to fully implement GeoParquet.

### Ecosystem

The ecosystem of tools supporting GeoParquet continues to grow.

![](/assets/img/posts/geoparquet-1-0-0-rc-1-released/1_AqqRAe08stDC4oXWxDH0ow.png)

The coolest additions in recent months have been the web tools, like [Scribble Maps](https://www.scribblemaps.com/create) and [CARTO](https://docs.carto.com/carto-user-manual/data-explorer/importing-data#supported-formats).

![](https://miro.medium.com/v2/resize:fit:1400/1*79-HZc3QWD759W31GUxv3A.gif)

And I also discovered that [Esri’s ArcGIS GeoAnalytics Engine](https://developers.arcgis.com/geoanalytics/) can load or save GeoParquet with the Python library or the Spark plugin, see their [GeoParquet page](https://developers.arcgis.com/geoanalytics/data-sources/geoparquet/) for more details. We’ve also seen more data in GeoParquet, like the Google Open Buildings Dataset and Eurocrops dataset.

### Next Steps

Our objective is to launch GeoParquet 1.0.0 at the beginning of September, unless we hear any critical feedback. So this is a great time to try it out and make sure it works with your tools. Please do let us know if you add support to a new tool or make a new GeoParquet dataset, so we can add you to the 1.0.0 release announcement.
