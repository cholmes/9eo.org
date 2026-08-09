---
layout: post
title: "More Cloud Optimized GeoTIFF — QGIS Tutorial and an online COG validator"
date: 2017-10-20
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/more-cloud-optimized-geotiff-qgis-tutorial-and-an-online-cog-validator-f4115c9cbe14
image: /assets/img/posts/more-cloud-optimized-geotiff-qgis-tutorial-and-an-online-cog/1_YtTMHpmfDgH2ob1AseCXHQ.png
---

Just wanted to do a quick follow-up from [last week’s post](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed) on the [Cloud Optimized GeoTIFF](http://cogeo.org) format.

First, I wanted to explain a bit more about how to use QGIS with Cloud Optimized GeoTiffs (COG’s), so I made [a tutorial](http://www.cogeo.org/qgis-tutorial.html) on [cogeo.org](http://cogeo.org) to walk people through loading a COG from [OpenAerialMap](http://openaerialmap.org) in to QGIS. The technique is a bit of a hack, since QGIS is currently very much built around the assumption that all your raster files are on the desktop. So when you try to open a raster file there is not an option to enter an online URL, instead you get a file dialog.

![](/assets/img/posts/more-cloud-optimized-geotiff-qgis-tutorial-and-an-online-cog/1_lnDEmlK5WPW6la_cFNUlgg.png)

*‘Add Raster Layer’ opens a local file dialog for your local machine. The other options for rasters are specific services (WMS+WCS).*

The key to making it work in QGIS today is leveraging the [GDAL VRT driver](http://www.gdal.org/gdal_vrttut.html), as a backdoor way to be able to enter configuration for VSI Curl, which as Sean Gillies [points out](https://sgillies.net/2017/10/14/geodata-in-the-cloud.html) was born more than seven years ago. It has definitely taken awhile for the rest of the world to catch up to that innovation, but there seems to be some [real momentum](http://www.cogeo.org/#implementations) now.

Sean also linked to [Even Rouault’s post](http://erouault.blogspot.com/2017/10/gdal-and-cloud-storage.html) on more GDAL innovations for cloud storage. More support for Google Cloud and adding Azure and Alibaba is a huge advancement, providing an even more solid and diverse foundation for [Cloud Native Geospatial](https://medium.com/planet-stories/cloud-native-geospatial-part-1-basic-assumptions-and-workflows-aa67b6156b53).

Even deserves most all the credit for building out the core components of Cloud Optimized GeoTIFF’s and turning it from an idea in to reality. In his post he also highlights s[ource code for a online service](https://github.com/rouault/cog_validator) that provides validation. And just today [Radiant](https://radiant.earth/) put up [a hosted service](http://cog-validate.radiant.earth/html) of Even’s code that anyone can use.

![](/assets/img/posts/more-cloud-optimized-geotiff-qgis-tutorial-and-an-online-cog/1_YtTMHpmfDgH2ob1AseCXHQ.png)

*The COG Validator running at [cog-validate.radiant.earth](http://cog-validate.radiant.earth/html)*

It is great to see more tooling support, and how existing products like QGIS can make use of COG’s with a bit of hacking. The QGIS + COG tutorial ends with a ‘[call for help](http://www.cogeo.org/qgis-tutorial.html#call-for-help)’ that QGIS developers will hopefully respond to. A true Cloud Native Geospatial environment should enable desktop software to stream data from the cloud instead of treating the computer it runs on as the primary environment. I’d love to see QGIS evolve from its desktop base to become a premier tool to bridge the desktop and the geospatial cloud. And hopefully other vendors start to move in that direction as well.
