---
layout: post
title: "CNG Part 5: Cloud Native Geospatial Architecture Defined"
date: 2017-12-06
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cng-part-5-cloud-native-geospatial-architecture-defined-193d5ffdd681
image: /assets/img/posts/cng-part-5-cloud-native-geospatial-architecture-defined/0_hUuo-SYjfIVyinD7..png
---

![](/assets/img/posts/cng-part-5-cloud-native-geospatial-architecture-defined/0_hUuo-SYjfIVyinD7..png)

*Mosaic by Planet in the Northern Territory, Australia*

Now that we’ve looked at a couple instances of cloud native geospatial instances ([Planet](https://medium.com/planet-stories/cng-part-3-planets-cloud-native-geospatial-architecture-31fb4a20fa77) and [OpenAerialMap](https://medium.com/planet-stories/cng-part-4-open-aerial-maps-cloud-native-geospatial-architecture-a7f784cf7c2f)) we can pull out a more solid definition of what makes for a true Cloud Native Geospatial architecture. For now this is fully focused on imagery — geospatial vector data will be examined in the future. The result of fitting into this architecture paradigm is that other technologies and datasets that follow the same principles will be able to interoperate with ease, combining into one coherent cloud ecosystem of geospatial information.

### **All Imagery Exposed as Cloud-Optimized GeoTIFF’s (COGs)**

Exposing imagery as [COG](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed) is the fundamental building block of a cloud native for geospatial architecture. The properly formatted imagery can sit on a public S3 / Google Cloud / Azure bucket, and even be behind most any type of authorization — as long as it works with HTTP Range requests. Imagery as COG enables workflows that take place completely on the cloud, as operations to process and display web tiles can perform fast enough that there is not a need to download the data for local processing. An organization’s stores of imagery data can sit in one cloud location, and algorithms are sent to operate on the same cloud location as the data.

### **Tiled Web Map Views of all Imagery**

Any imagery online should have an endpoint that serves Web Tiles — the 256x256 pixel images that make up web maps. These are ideally served with OGC compliant [WMTS](http://docs.opengeospatial.org/is/13-082r2/13-082r2.html) (though that spec could use an upgrade to a full JSON / REST approach like [WFS 3.0](https://github.com/opengeospatial/WFS_FES) is undergoing), but following best practices of ‘XYZ tiles’ (like [OpenStreetMap](http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames), [Google Maps](http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/) or [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service)) also works great. This enables users to view data being processed or stored in the cloud at any state. People should not have to download data just to view it, and the online experience should be as good as working locally. Using on-the-fly web tile services that read COG directly like [marblecutter](https://github.com/mojodna/marblecutter) or [rio tiler](https://github.com/mapbox/rio-tiler) makes this easy if the first principle is followed.

### **Crawlable metadata for all imagery**

All imagery metadata should be crawlable online. Unfortunately, there are fewer established best practices and standards for this, though the new[ SpatioTemporal Asset Catalog](https://github.com/radiantearth/stac-spec/) specification looks to help with this. Ideally, any provider of imagery would not even need to stand up their own RESTful endpoint, which is the idea of [STAC Static Catalogs](https://github.com/radiantearth/stac-spec/#static-catalog). Indeed, some software would hopefully crawl static catalogs and stand up more comprehensive search services, like Google does for the broader internet. But the key building block is exposing the core metadata to be crawlable online. Following the [Spatial Data on the Web Best Practices](https://www.w3.org/TR/sdw-bp/) also emphasizes the importance of HTML views of everything for search engine accessibility. Making all metadata crawlable will enable greater discovery of cloud native geospatial data, focusing on reliable access and ingestion into search indexes over every organization providing its own ‘catalog service’ that must be specifically found and then searched.

These three aspects are the true core of any cloud native geospatial architecture. The only other piece that will come in the future is tracking at least the ‘provenance’ of online processing — tracking the creation of new derived data products from existing online imagery. Processing should be done next to the data, and all derived data should link back to the process that created it and the data that went into it. Provenance and online processing will be the subject of a future article.

One may be thinking: ‘Shouldn’t there be more?’ In time there will likely be much more, but the core will stay the same. The core is simple because it is just a fundamental building block that many additional services and products can leverage. The beauty of the architecture is that it doesn’t require a number of different web services and API’s, as it is simply working to expose the data. Numerous web services can be built on top of it, but joining the architecture does not require anything more than putting one’s imagery on the cloud, as long as it’s formatted for interoperability and performance. Indeed a static, reliable architecture opens up the opportunity for additional software to add value on top of the core. The architecture is also quite compatible with the traditional OGC W*S standards as well as the latest proprietary web services, as most software can easily adapt to reading cloud native geospatial data.

Focusing on these fundamental building blocks mirrors how the world wide web was built. The key feature is stable, referenceable information that doesn’t dictate how it should be consumed. And the ability to actually use that information directly as Cloud Optimized GeoTIFF’s, instead of having to download and copy it, can change the landscape in a fundamental way. The resulting cloud native geospatial ecosystem will look different than the geospatial world today, with users able to more easily find relevant and useful information and moving towards near real-time information feeds instead of static maps.

In the next posts we’ll go deeper into the vision and implications of a Cloud Native Geospatial ecosystem, and explore how processing and provenance can work.
