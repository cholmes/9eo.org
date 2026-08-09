---
layout: post
title: "Officially Announcing Geoparquet-io: a CLI/Python tool for GeoParquet"
date: 2026-03-09
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/officially-announcing-geoparquet-io-a-cli-python-tool-for-geoparquet-08a40b47e1fc
image: /assets/img/posts/officially-announcing-geoparquet-io-a-cli-python-tool-for-ge/1_5FD-IvBLRMgjw4m2te3YOQ.png
---

I’m very proud we’ve reached the first 1.0 milestone for [geoparquet-io](https://geoparquet.io)! We’ve published a [blog post on cloudnativegeo.org](https://cloudnativegeo.org/blog/2026/03/introducing-geoparquet-io/) to announce it, so start there for what it is. The main goal is to make it easier to work with GeoParquet, which I am confident is the geospatial vector data format of the future.

![](/assets/img/posts/officially-announcing-geoparquet-io-a-cli-python-tool-for-ge/1_5FD-IvBLRMgjw4m2te3YOQ.png)

The project started in conjunction with writing up ‘[Best Practices for Distributing GeoParquet](https://github.com/opengeospatial/geoparquet/blob/main/format-specs/distributing-geoparquet.md)’, to make it easy to check compliance with those practices, and then it grew to make it easy to implement those practices by default. In particular there were almost no tools to easily partition GeoParquet spatially across large datasets. The tool now [enables partitioning](https://geoparquet.io/guide/partition/) by H3, S2, QuadKey, KD-Tree and recently A5. Plus it makes implementing [admin-partitioning](https://medium.com/radiant-earth-insights/the-admin-partitioned-geoparquet-distribution-59f0ca1c6d96) super easy by automatically pulling in Overture and [GAUL boundaries](https://openknowledge.fao.org/items/aebf0333-a0e3-4177-9d4a-bb2472d0367e) — see [the docs](https://geoparquet.io/guide/partition/#by-admin-boundaries) for more info.

It’s further evolved to be my goto tool for working with GeoParquet, and indeed with any vector data, with both CLI and Python. I use it like a ‘cloud-native gdal/ogr’, to pull and transform data from any cloud bucket (or [BigQuery](https://geoparquet.io/guide/extract/?h=bigquery#extracting-from-bigquery) and [ArcGIS Feature Services](https://geoparquet.io/cli/extract/?h=arcgis#extract-arcgis)), and then upload it to other buckets, transforming it in a variety of ways along the way. Formatting a new dataset for sharing on [Source Cooperative](https://www.linkedin.com/preload/#) used to take me a couple hours of DuckDB data munging, and now it’s a one or two liner and the download/upload time. All credit is due to the libraries we build on, especially DuckDB and GDAL/OGR, plus [obstore](https://developmentseed.org/obstore/v0.2.0/) and PyArrow. And a big shout-out to [GeoArrow](https://geoarrow.org/), which is a key enabling format under the hood.

I’ll aim to highlight some of my favorite features in the coming weeks and months, and would love you to try it out and let me know how it goes. And a huge thanks goes to [Nissim Lebovits](https://www.linkedin.com/preload/#) — without him it’d be a half finished project that shows promise, and I think it’s now has the potential to be a foundational tool for working with geospatial data. We had a great ‘relay race’, where I did the initial work, and when my efforts flagged he picked it up and made several weeks of awesome improvements. It inspired me to push on it more in December, and then as I got busy with Planet Labs (my day job) he was able to finish off all the core features and get us to a first real release.

Please try it out and let us know how it goes — our goal is to fix bugs plus take compelling suggestions and then call it 1.0.0 when it feels solid. And contributions are welcome! And no worries if you’re not an expert developer, just fire up your favorite AI coding tool, point it at the [CLAUDE.md](https://github.com/geoparquet/geoparquet-io/blob/main/CLAUDE.md) file, and describe what you want. Test it out and then request to make a Pull Request — we’ll review and get it in the next release.
