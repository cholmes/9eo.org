---
layout: post
title: "Cloud Optimized GeoTIFF Birds of a Feather at FOSS4G-NA"
date: 2018-05-18
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/cloud-optimized-geotiff-birds-of-a-feather-at-foss4g-na-def26572ae1b
image: /assets/img/posts/cloud-optimized-geotiff-birds-of-a-feather-at-foss4g-na/1_AYGJoBtuJqW0yKJiqDKR2Q.png
---

[FOSS4G North America](https://2018.foss4g-na.org/) was a great time, and there was a lot of enthusiasm for Cloud Optimized GeoTIFF’s.

I shared a number of the cool new examples in my keynote, and then Eugene from Azavea gave a really great overview of the format, along with a number of best practices learned as he implemented it in GeoTrellis and RasterFoundry. It was standing room only for Eugene, in an already quite large room, so was quite cool to see so many people interested in COG.

We signed up for a Birds of a Feather session, and more than 20 people showed up! And Even Rouault, the author of the COG spec, even dialed in from France (though I’m glad we didn’t try to bring in more people, as the experience of me walking around the room so my laptop’s built in mic picked up at least some of what was going on was subpar to say the least). Drew from DevSeed took some great notes, you can read the [raw notes](https://cryptpad.fr/code/#/1/edit/5JKq9WUUR9DH607TR9zx7Q/8v6DcTnYmOdvB-D7wXwH0lr1/) he took.

To get an idea where everyone was coming from we went around the room and had people share their use or potential uses of COG. Most everyone had at least some experience, and a number of people had gone really deep and had great best practices to share. We ended up discussing a couple major topics.

### Megatiles

An issue that many had hit was that their data is larger than really makes sense to distribute as one COG. It is theoretically possible to use [BigTIFF](http://www.bigtiff.org/) and put 40 terabytes in to a single COG, but it’s not so practical. So most everyone attending wanted some scheme to organize collections of COG’s that could be easily addressed. And Azavea and Planet both had already built a way to handle it. Ian from Planet described how he set his up, and he brought the word ‘megatile’ to the discussion, which is more fun than the ‘meta-tile’ name that most people end up using. The core idea is to just use a naming scheme that a tile service can use to figure out what to serve up, without having to rely on any external database or key. Azavea and Planet were both interested in comparing notes and writing up a best practice / recommendation. This will likely end up as a little side specification to the main spec.

There was also discussion of how to handle ‘time’ in larger collections of COG’s. Azavea introduces a date-time tag to all the data they import, and generally people felt it best to have one COG per time stamp, and that performance was reasonable. But likely an area for more exploration, what the cloud equivalent or optimized version of NetCDF would be.

### Analysis

The [GeoBlaze](https://geoblaze.io/) team shared their desire to do pure javascript analysis, leveraging [geotiff.js](https://github.com/geotiffjs/geotiff.js), and will likely start on that soon. But no changes seemed immediately needed. There was also discussion of the display of analytic data, particular the issues with trying to do automatic color stretches with tiled data, which can lead to results like:

![](/assets/img/posts/cloud-optimized-geotiff-birds-of-a-feather-at-foss4g-na/1_AYGJoBtuJqW0yKJiqDKR2Q.png)

*Data CC-BY-SA Planet, from Hurricane Harvey data release, served on [tiles.rdnt.io](http://github.com/radiantearth/tiles.rdnt.io)*

Seth successfully got [marblecutter-virtual](https://github.com/mojodna/marblecutter-virtual) leveraging GDAL files that were created with [gdal_translate](http://www.gdal.org/gdal_translate.html) using the `-stats` command to calculate global statistics for the file that can be read by the COG tools, instead of each tile having to calculate its own statistics. Once someone else successfully uses the same construct it should get added to the spec as at least a ‘recommendation’

### Benchmarking

There was interest in running more benchmarking, to compare how the COG format compared to other formats (particularly MRF and jpeg2000). Someone mentioned that Esri had done some benchmarking and may have tools we could use. Matt from DevSeed also had an interesting idea of a benchmarking tool that could make recommendations of how to format your COG to best meet your use case and data, as the COG spec still leaves quite a bit of options open to the user, like what compression to use and exactly how to organize your tiles and pyramids.

### Spec Next Steps

The discussion closed with some plans for how to take the spec forward. Though the [GDAL COG wiki page](https://trac.osgeo.org/gdal/wiki/CloudOptimizedGeoTIFF) has served us well people thought it was time to put it in a little more of ‘neutral’ place, since there are now non-GDAL implementations. There was rough consensus to make a github repo with the spec, and also to start a mailing list. And there was also interest in evolving the spec a bit to handle some sort of ‘tiering’ of requirements. Currently [Landsat on AWS](https://landsatonaws.com/) is not technically compliant with COG as it uses external overviews, but it’d be nice to have a ‘level’ that makes that acceptable. Higher levels or profiles could make additional recommendations, like using web mercator and web-tile compatible tiling, for web-focused use cases. But all of that will take some discussion and specification evolving.

If you are interested in pitching in to help and discuss we should have the github repo and mailing list up soon. Thanks to everyone for coming and making it a great discussion! And apologies to everyone who couldn’t be there — perhaps we’ll try to organize a virtual meeting at some point in the future.
