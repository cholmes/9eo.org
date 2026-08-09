---
layout: post
title: "Cloud Native Geospatial Part 1: Basic Assumptions and Workflows"
date: 2017-09-29
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cloud-native-geospatial-part-1-basic-assumptions-and-workflows-aa67b6156b53
image: /assets/img/posts/cloud-native-geospatial-part-1-basic-assumptions-and-workflo/1_NpjAOp_rZ6lp7z70OfI-9Q.jpeg
---

![](/assets/img/posts/cloud-native-geospatial-part-1-basic-assumptions-and-workflo/1_NpjAOp_rZ6lp7z70OfI-9Q.jpeg)

*Cupertino, California, captured by a Dove satellites on October 26, 2017. Images ©2017 Planet Labs, Inc. [cc-by-sa 4.0](http://creativecommons.org/licenses/by-sa/4.0/)*

The last few years have seen the rapid rise of ‘Cloud Native’ architectures and applications in IT, crystallizing a number of best practices and tools pioneered by Google, Amazon and others for building complete developer workflows that only run on the cloud. At the same time, the geospatial world has been incrementally migrating to ‘the cloud’, but there has been little change in the core architectures and data workflows for producing geospatial information and insight. Desktop algorithms have been ported to the cloud, but users still work in the same way, just leveraging the cloud for processing loads that a single desktop can’t handle, or to put their data up on a web map.

But what would the geospatial world look like if we built everything from the ground up on the cloud?

This series of articles aims to explore what a truly Cloud Native Geospatial world would look like, highlighting the architectures and best practices that are emerging. How does ‘Cloud Native’ translate from developers to geospatial users and practitioners? What changes in people’s workflows and processes when the desktop is no longer even involved in creating geospatial information and insights? Many of the assumptions of how people work with data and gain insight from it change when there is infinite storage and compute capacity, so it is worth throwing out the guide book and seeing where the path leads…

## **The Assumptions**

So how does Cloud Native Geospatial work? Let’s first look at the four assumptions that underpin a truly Cloud Native Geospatial environment:

1. *All* data of interest to a user is in the cloud; and these datasets will be far bigger than one could possibly fit on a desktop computer — worldwide imagery archives, historical gps data for fleets of assets, multi-dimensional weather data, global basemap data, etc.

1. Infinite computation capabilities are available to process massive amounts of data, and the algorithms powering the processing can be shared online and customized collaboratively.

1. Queuing and notification systems are in place, so newly acquired data (from satellites, from ground surveying, etc) can automatically kick off additional data processing, run updates, or send messages out to users.

1. Web tiled online maps are available to visualize any data (both source data and derived data in interim or final processing steps).

## **The Implications**

It makes sense that the developer world was the first to really explore how many core assumptions and workflows change when one takes as a given that *all data and computing can live on the cloud*. The results have been quite powerful, giving rise to a host of innovations, like container orchestration and micro-service architectures not only in pure technology but also processes and methodologies.

Fully exploring all the implications of these four tenets is an extensive project, and indeed will lead to new workflows we haven’t imagined yet. But in the short history of Cloud Native Geospatial a few evolutions have already emerged:

### **No Need to Duplicate Datasets**

When all data is in a cloud location that a variety of software can work with directly, there is no need to maintain multiple copies of any data. The data provider should pay for the storage costs, and then can charge for access. But users of the data access the data ‘in place’, doing what they need — be it building visualizations with web tiles or processing a derived data product.

### **Send Algorithms to the data, not the other way around**

Once the data is in one place**, **this leads to a paradigm shift of sending algorithms *to* the data, instead of the other way around. If all of your data is in the cloud in one location, data becomes too massive to download and process locally, so users must package up their algorithms to run on the cloud. This could be a full container, like a complete Docker processing instance; but with more advanced cloud geospatial systems like RasterFoundry and Google Earth Engine a user just sends a script or a descriptions of operations to run.

![](/assets/img/posts/cloud-native-geospatial-part-1-basic-assumptions-and-workflo/0_VwTU_LALfTiN9Iun..png)

*RasterFoundry algorithms live on the cloud and can be customized by anyone.*

### **The Algorithm Buffet**

With the data accessible in one place and a host of algorithms available on the cloud the processing tools become much more shareable than in the desktop paradigm. Indeed increased collaboration is perhaps the most important thing that the web and the cloud enable. In the future most users will just select from the most popular algorithms, instead of making everyone do their own Top of Atmosphere Radiance conversion, cloud removal, atmospheric correction and surface reflectance calculations to make an NDVI output. There will be one pre-processing plus NDVI algorithm that is the most popular one, and most people can just select it. Web-tiled mapping will enable much of this collaboration around analysis, as any step in a processing chain can be visualized, correcting it on the way.

### **Real-time GIS**

The last major implication to preview here is ‘real time GIS’. As more data flows from new IoT sensors, cell phones and satellite imagery, it will be constantly updating databases. Combine that with the Computer Vision and Deep Learning advances that are also being added to the geospatial toolbox (object identification, change detection, etc) and you’ll have access to a continually updated set of maps. The limitations only lie in the rate of data collection.

With processing on the cloud those updates will kick off new processes to create higher level analytic products, like detecting new planes at an airport, significant changes in an agricultural field’s health or new oil well pads.

![](/assets/img/posts/cloud-native-geospatial-part-1-basic-assumptions-and-workflo/0_EEWVruzCbZzLcw4P..png)

*New Oil Well Pads are identified weekly in an app built by Planet*

### **Maps as verification**

For me, it gets really interesting when the new derived data point turns into an alert that reaches a user who cares about that information. Right now the output of a GIS or Remote Sensing workflow is generally a map, often one embedded in a powerpoint slide. But the point of a map is to communicate some information and insight — that there are 10 new airplanes at this airport. Users who care about that information should be able to subscribe to that information directly; they should get alerted when a certain threshold of information is reached in the area they care about, rather than visually inspect every new image. Any step in that geospatial intelligence processing pipeline should be visualizable, but most users should interact with the information feeds resulting, using a map more to verify than as the primary information interface.

## The Future

With the introduction of accessible, centralized data, and the dramatically different workflows that follow, Cloud Native Geospatial has the potential to introduce new, non-specialized users to the power of geospatial information that GIS practitioners have enjoyed for decades. The beneficiaries of that spatial intelligence today are those who have built up an ecosystem of GIS practitioners who are able to work with the data and create information products by hand — printed maps, reports, curated web maps. When that ecosystem itself is truly Cloud Native, the exploitation of valuable information can be decoupled from the practitioners. The ecosystem of geospatial experts will collaborate to create analyses and insight, but any non-expert user will be able to select and apply those to the geographic area they care about.

With right cloud architecture in place, and an influx of new, creative users deriving insights from geospatial data, we have the potential to discover entirely new applications for GIS technology.

There is much work ahead to make Cloud Native Geospatial a reality, but a diverse community of organizations and individuals are working together to make it happen. Stay tuned for more in this series, as we dive deeper into how Cloud Native Geospatial works and explore some leading cloud native geospatial architectures running right now.

Up next in this series: a look at Cloud Optimized GeoTIFFs — a format on top of which Cloud Native GeoSpatial is built.
