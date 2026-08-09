---
layout: post
title: "Cloud Optimized GeoTIFF Advances"
date: 2018-05-22
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/cloud-optimized-geotiff-advances-6b01750eb5ac
image: /assets/img/posts/cloud-optimized-geotiff-advances/1_zom3lBvQezYu8HPYQ2i_lw.png
---

![](/assets/img/posts/cloud-optimized-geotiff-advances/1_zom3lBvQezYu8HPYQ2i_lw.png)

*The new COG Logo!*

The last month has seen a number of great Cloud Optimized GeoTIFF advances, with lots of enthusiasm at the [FOSS4G-NA conference](https://2018.foss4g-na.org/). There’s new software supporting COGs, a new logo, a new mailing list set up for collaboration, and some great ideas of how to make COGs more useful by surfacing best practices and making the spec a wee bit more formal.

## COG at FOSS4G-NA

<https://www.slideshare.net/EugeneCheipesh/cloud-optimized-geottiffs-enabling-efficient-cloud-workflows>

COG was well represented at FOSS4G-NA, with mentions in the keynote and utilization in several presentations. Eugene Cheipesh from Azavea gave an excellent overview of COGs, along with some ‘lessons learned’ and details about the implementation of COG in GeoTrellis. His slides are to the left, and I highly recommend it to anyone wanting to learn more about COG. You can also download his original PDF the [session description](https://2018.foss4g-na.org/session/cloud-optimized-geotiffs-enabling-efficient-cloud-workflows) on the FOSS4G-NA website.

There was also a great [Birds of a Feather session](https://medium.com/radiant-earth-insights/cloud-optimized-geotiff-birds-of-a-feather-at-foss4g-na-def26572ae1b), which had at least 20 people attend, where people shared their experiences and best practices in using COGs.

## Recent Software Support

In the past few weeks, there has been a number of awesome new COG projects.

### COG Explorer

![](/assets/img/posts/cloud-optimized-geotiff-advances/1_TYWA5kjBHMW4zE9t7f6OSQ.jpeg)

*Pure javascript COG reading, Image courtesy of Planet, CC-BY-SA, explore at [geotiffjs.github.io/cog-explorer/](https://geotiffjs.github.io/cog-explorer/#long=-95.581&lat=29.786&zoom=15&scene=https://storage.googleapis.com/pdd-stac/disasters/hurricane-harvey/0831/SkySat_20170831T195552Z_RGB.tif&bands=&pipeline=)*

While [COG Map](http://www.cogeo.org/map/) and [tiles.rdnt.io ](https://github.com/radiantearth/tiles.rdnt.io)show off an infinitely scalable approach using AWS’s Lambda, the new COG Explorer from EOX uses even fewer servers than ‘serverless.’ It is built on [geotiff.js](https://github.com/geotiffjs/geotiff.js), a pure javascript library that recently added support for COGs, to enable users to stream from online imagery directly to their browser. It’s not just the 8-bit png web tiles; it’s the full geoTIFF information enabling in-browser analysis with Canvas. I was quite curious if this would work, and am quite pleased that performance is totally reasonable, opening up many cool new possibilities.

### Google Earth Engine (GEE)

So I was hoping to say that GEE now reads COGs, as it’s been on their roadmap for a bit. While they didn’t quite get there yet, GEE did reach a neat milestone with being able to output COGs from any operation. So you can tap into the full power of Google Earth, building a full image processing pipeline and drawing on the most extensive collection of Earth imagery data that I know of, and any of your creations you can share as COGs.

![](/assets/img/posts/cloud-optimized-geotiff-advances/1_PQ0JaXNhyR6cBZYkDtvb9Q.png)

The COG shown in the RasterFoundry section below is created with [Open California](https://www.planet.com/products/open-california/) data, generated using GEE’s best pixel composite method to create a cloud-free mosaic of the bay area, clipped to the county boundaries.

### RasterFoundry

[GeoTrellis](https://geotrellis.io/) and [RasterFoundry](https://www.rasterfoundry.com/) now have the most comprehensive support of COGs of any [cloud native geoprocessing engine](https://medium.com/planet-stories/cloud-native-geoprocessing-part-1-the-basics-9670280772c8) that I know of. A couple of months ago they built support for ‘structured COGs,’ replacing their custom avro binary tile format with COGs. This is awesome since it means any data uploaded to RasterFoundry can also be used by any other COG tools. But, they also recently added support for ‘unstructured COGs,’ which let you import any compliant COG online into RasterFoundry. This is super cool to use, as now imported data shows up instantly, and it also saves costs as there is no duplication.

![](https://miro.medium.com/v2/resize:fit:1400/1*9kMaKpfWAz-IYrCrQPniqQ.gif)

*New COG import workflow for RasterFoundry*

You can import data and then start using things like their annotation tool to make labeled training data for machine learning with ease.

![](https://miro.medium.com/v2/resize:fit:1400/1*SnMRtYCO8ec2YheSIb1HeQ.gif)

*Creating a formula and then using the Lab in RasterFoundry*

And you can tap into their ‘lab’ tooling. This is a powerful processing engine rivaled only by Google Earth Engine. But unlike GEE, you don’t have to start coding to do any manipulation of raster data. There’s a ‘model builder’ type GUI that works entirely online. Using the power of [Spark](https://spark.apache.org/), it can do a real-time rendering of any operations. You can select any node in the graph and compare it to another in real-time, and then share the results.

And it can do *all* of this with COGs now. Able to handle massive datasets, with no copying of information, applying full raster processing operations entirely on the fly. This, to me, represents Cloud Native Geospatial.

### QGIS 3.0

QGIS 3.0 was also released with much better support out of the box for COGs.

![](/assets/img/posts/cloud-optimized-geotiff-advances/1_VPnnTvDvNgLF_6bpe-RnbQ.png)

As you can see the ‘new raster layer’ dialog doesn’t require you select a local file. You can type in `/vsicurl/` pre-pended to any COG URL, and it will stream the data direct to QGIS. I’ll update [the tutorial](http://www.cogeo.org/qgis-tutorial.html) soon (or, as always, pull requests are welcome). Even cooler is that QGIS 3.2 is going to make COG access a real top-level citizen, with no need to even prepend `/vsicurl/` — just select an online protocol:

![](/assets/img/posts/cloud-optimized-geotiff-advances/1_j2bW0Nn-r_uyvVasM_dBhA.jpeg)

You can specify different cloud storage, along with authentication, directly from QGIS. Those who live on the bleeding edge can try out [nightly builds](https://qgis.org/en/site/forusers/alldownloads.html) (and let me know what it is like on the bleeding edge).

I am hoping that Esri desktop software will soon catch up to open source, enabling streaming access and analysis with the power of COGs.

### COG Map and tiles.rdnt.io

And in case you missed it, [Radiant.Earth](http://www.radiant.earth) [stood up the COG Map, as well as tiles.rdnt.io ](https://medium.com/radiant-earth-insights/cog-map-and-tiles-rdnt-io-ad0745388a14)— a service that anyone can use to try out COGs.

## The new COG Logo

![](/assets/img/posts/cloud-optimized-geotiff-advances/1_F22uLLWjyuTkV4y9xucHMw.png)

A big thanks to Radiant Earth for making a logo for Cloud Optimized GeoTIFF’s. There are a few different ways to use the logo, including nice ‘file’ representations to show it alongside other similar representations. You can access the full resolution images at [https://github.com/cholmes/www.cogeo.org/tree/master/images/logo](https://github.com/cholmes/www.cogeo.org/tree/master/images/logo).

## COG Collaboration Next Steps

At the Birds of a Feather session at FOSS4G-NA we talked about moving the COG spec forward in a couple of ways.

First, we’ve set up a mailing list to have dedicated discussion. Please join us at [http://lists.osgeo.org/mailman/listinfo/cog](http://lists.osgeo.org/mailman/listinfo/cog)

We will also be setting up a github repository to move the spec to a more neutral ground and to enable pull request style contributions. And there’s a number of best practices we want to add. Likely not to the core spec, but a series of recommendations and micro-specs.

Thanks to everyone for all your great work on COG. It feels like momentum is really growing and we’ll soon move into a truly Cloud Native Geospatial world.
