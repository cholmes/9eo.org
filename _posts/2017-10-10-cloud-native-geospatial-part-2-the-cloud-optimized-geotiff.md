---
layout: post
title: "Cloud Native Geospatial Part 2: The Cloud Optimized GeoTIFF"
date: 2017-10-10
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed
image: /assets/img/posts/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff/1_gHIJJWdzChKeYEQRhoCU1A.png
---

![](/assets/img/posts/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff/1_gHIJJWdzChKeYEQRhoCU1A.png)

*Drone Imagery from OpenAerialMap.org, accessed by streaming a Cloud Optimized GeoTIFF*

This article is part of a ‘Cloud Native Geospatial’ series exploring how the geospatial world looks different when systems and workflows are built from the ground up for the cloud. This time we are going to take a deep look at arguably the most important enabling technology for truly cloud native geospatial: the Cloud Optimized GeoTIFF.

Cloud Optimized GeoTIFF’s, also known as COG’s, are a specially formatted GeoTIFF file that leverages a newer feature of HTTP called [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving). You can learn much more about Cloud Optimized GeoTIFF’s at [cogeo.org](http://cogeo.org/). Byte serving is the technology that lets you stream a video or music file online and skip forward or backwards through the content. Instead of having to download the full video file, you can tell the server that you want to start at a particular point. The COG format works the same way by allowing users and processes to access just the portion of a raster file that they need.

Jumping to a desired portion of a raster file opens up varied new workflows, as data can be ‘streamed’ like a video instead of being transferred whole across networks. In the geospatial world users can access online web tiles in a streaming manner, but to do actual analysis requires source raster files. Traditionally that has meant long download times to acquire files that are hundreds of megabytes and larger. This is because the source raster files are distributed online and on the cloud, but they aren’t formatted for streaming, so users must fully download the files before processing and visualization could start.

The Cloud Optimized GeoTIFF format began as a collaboration between Amazon, Planet Labs, MapBox, ESRI and USGS to put the [Landsat Archive onto AWS](https://aws.amazon.com/public-datasets/landsat/) in a more accessible way. The GeoTIFF is the most widely used imagery file format, but there was [extensive](https://lists.osgeo.org/pipermail/landsat-pds/2015-February/000057.html) [discussion](https://lists.osgeo.org/pipermail/landsat-pds/2015-February/000034.html) on the [Landsat-pds](https://lists.osgeo.org/pipermail/landsat-pds/) mailing list on how to best format the data so that it could be streamed and processed on the fly. A good solution for formatting Landsat data enabled companies to all leverage the archive in their existing workflows on Amazon Web Services without duplication and reprocessing. Once this pattern of access was established, new software started leveraging the data in the same way, greatly increasing the use of the data.

From there the practice of formatting GeoTIFF to be optimized for cloud workflows has evolved to a documented best practice, with a full implementation in [GDAL](http://gdal.org) (the most widely used geospatial library) including documentation and performance testing results published on the [GDAL Wiki](https://trac.osgeo.org/gdal/wiki/CloudOptimizedGeoTIFF). Planet Labs transitioned to producing all of the data going through its processing pipeline as Cloud Optimized GeoTIFF’s, with partners like [FarmShots](http://farmshots.com) and [Santiago & Cintra](https://www.sccon.com.br/eng/) re-architecting their domain specific applications to leverage it.

![](/assets/img/posts/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff/0_LkBRRapS6b1IwIF1..png)

*Farmshots applying an NDVI to Cloud Optimized GeoTIFF’s pulled in dynamically from Planet*

Reflecting industry adoption, leading open source projects like GDAL, [QGIS ](http://qgis.org)and [GeoServer](http://geoserver.org) can already read the format (though QGIS and GeoServer take advanced configuration). DigitalGlobe recently shifted their IDAHO system to leverage COG’s, while reprocessing a significant amount of data to make use of it. OpenAerialMap built their whole architecture on turning user uploaded data into web accessible GeoTIFF’s and then streaming tiles directly from that data. GeoTrellis [projects supporting COG](https://github.com/locationtech/geotrellis/issues/2284) on their short term roadmap, and a number of others, including similar cluster computing geospatial processing systems have indicated an intent to support it.

![](/assets/img/posts/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff/0_ykLt732Q2tcZ3q4P..png)

*A COG of drone imagery from St. Maarten served up as tiles on OpenAerialMap.org*

![](https://miro.medium.com/v2/resize:fit:1400/0*jUIr1MU3KaK8Uoe4..png)

*The same COG streamed directly from OpenAerialMap’s S3 bucket into QGIS, saving substantial download time.*

These newer on-the-fly processing systems underscore the power of cloud native geospatial architecture. Such systems can simultaneously process imagery on hundreds and even thousands of computers, returning in seconds analyses that previously would take days or weeks. Despite these modern advances, because the core of the standard is GeoTIFF, any software can read the data, even older desktop applications.

Though the core concept is quite simple — put imagery online and streamable — it is a fundamental building block of a truly cloud native geospatial ecosystem. Data can live on the cloud and numerous software systems can run next to the data to derive value from it without anyone having to incur additional download and storage costs. A full exploration of that ecosystem is a topic for future posts, but the core COG building block will be a foundation to enable users to spend their time actually using data and gaining insights in near real time instead of finding data and relying on a small number of experts who have expert geospatial processing skills.

Although cloud optimized GeoTIFFs are still a relatively new format, backward compatibility and ease of implementation make the format a compelling next step, and the founding group of organizations aim to encourage more software implementers and data providers to adopt it. If you are interested in helping out and learning more, as a software implementer, user or data provider, check out [cogeo.org](http://cogeo.org).

Up next in this series: a couple posts taking deeper looks in to actual Cloud Native Geospatial architectures.
