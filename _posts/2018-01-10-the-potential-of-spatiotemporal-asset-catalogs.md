---
layout: post
title: "The Potential of SpatioTemporal Asset Catalogs"
date: 2018-01-10
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/the-potential-of-spatiotemporal-asset-catalogs-a9323927dc8a
image: /assets/img/posts/the-potential-of-spatiotemporal-asset-catalogs/1_iV5EIPi0R3bqEC3TPqESYw.png
---

In my previous post announcing the [SpatioTemporal Asset Catalog specification](https://medium.com/@cholmes/announcing-the-spatiotemporal-asset-catalog-stac-specification-1db58820b9cf), I held off on deeper discussions of the potential implications that this simple building block could help bring about. But I wanted to follow up with more on that potential future, as it’s what gets me really excited and why I’m spending so much time on it.

STAC itself is a pretty simple specification. It just enables a client to search for imagery and other assets across multiple providers. But there are a number of really interesting things it could help if it evolves as the core group hopes. Indeed it aims to be a core building block of [Cloud Native Geospatial](https://medium.com/tag/cloud-native-geospatial/latest) architectures to enable a coherent global ecosystem, instead of a number of similar but non-compatible systems.

### Metadata for Imagery on the Cloud

The [Cloud Optimized GeoTIFF](http://cogeo.org) (COG) is the most [fundamental building block](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed) of the Cloud Native Geospatial world, enabling platforms to stream information between one another. But COG’s by themselves don’t have enough information in them to truly be a part of the web — they cannot be crawled and indexed in any meaningful way without some other structure providing links and additional information.

Pairing a COG with a [STAC Item](https://github.com/radiantearth/stac-spec/tree/dev/json-spec#overview) JSON file provides all the additional metadata to make it useful, and the link structure of the Catalog ensures that search engines will be able to crawl it. And once there are [HTML STAC Items,](https://github.com/radiantearth/stac-spec/blob/dev/roadmap.md#html) every COG can have an online location that users can interact with, and that can show up in search results.

Though COG is the ideal format for STAC, one can make a SpatioTemporal Asset Catalog with any format. The only requirement is that it links to an asset that can be downloaded. But that could be jpeg2000's, multi-dimensional formats like HDF or GRIB, proprietary formats like ECW or MrSID, or wrappers like NITF. Large geospatial organizations like [NGA](https://en.wikipedia.org/wiki/National_Geospatial-Intelligence_Agency) have been adopting Amazon S3 (though in their[ ‘secret region’ on C2S](https://www.cnbc.com/2017/11/20/amazon-launches-aws-secret-region.html)) and dumping lots of their internal imagery data in to buckets. But simply putting data on the cloud is not sufficient — it must be findable by other users. STAC offers a very simple and reliable way to make data more accessible.

### Tracking Provenance Across Catalogs

In a [previous post,](https://medium.com/planet-stories/cng-part-6-metadata-in-a-cloud-native-geospatial-world-2fa83cc00c95) I emphasize the importance of [tracking provenance](https://medium.com/planet-stories/cng-part-6-metadata-in-a-cloud-native-geospatial-world-2fa83cc00c95#823f) in Cloud Native Geospatial architectures. Creating a true ecosystem will require not just provenance tracking within one cloud platform, but across platforms. An algorithm might apply surface reflectance, run an NDVI to assess plant health, or create a land cover classification. If the resulting outputs get tracked in their own SpatioTemporal Asset Catalogs then the data can easily be crawled and search. And a single ‘source’ link that refers to the parent STAC Items that went into the derived data gets us most of the way to full provenance tracking across platforms.

So one can imagine a future where every derived data product along a chain of processing is represented as STAC Items in sets of interconnected catalogs. The Amazon Public Data team put up a Landsat HTML proto-SpatioTemporal Asset Catalog with [landsatonaws.com](http://landsatonaws.com).

![](/assets/img/posts/the-potential-of-spatiotemporal-asset-catalogs/1_jolsxykKXXAvwSA-ET-AqA.png)

*Current Landsat Analysis Ready Data samples — imagine a web page like the one below for each ARD scene, that links back to its source.*

You could see an ‘[analysis ready data](https://landsat.usgs.gov/ard)’ (ARD) catalog that processes surface reflectance, additional co-registration of ground control and application of machine-learning based cloud masks. And then a ‘Contra Costa County’ catalog that clips data from several ARD catalogs (Landsat, Sentinel, etc) and only includes valid, non-cloudy data, and does additional cross provider co-registration for the relevant geographic area. A set of yearly global mosaics could also be represented in its own STAC Catalog, with links back to all the source analysis ready items each year slice used. An agriculture platform would clip the ARD to their farms and could represent that as its own catalog. And then derived data products, like NDVI and soil moisture rasters, could each sit in their own catalogs. One could even see internal catalogs at data providers, where they refer to their raw directly off sensor data and the processes applied to get it customer ready.

Though this may seem like a lot of catalogs, each can be quite lightweight, utilizing [static catalogs](https://github.com/radiantearth/stac-spec/tree/dev/static-catalog) instead of making a full API for each. Cloud-based processing software (and even desktop software) would simply need to write out STAC Items when they apply algorithms and create new data. STAC metadata could even be instantiated on the fly, as many newer systems like [Raster Foundry](http://rasterfoundry.com) and [Google Earth Engine](https://earthengine.google.com/) are applying algorithms without creating output ‘files’ — the tile server applying the algorithm could just refer to the tile server as the ‘resource’, as long as it linked back to a source file so the end user could do their own manipulations of the data.

### Part of the World Wide Web

The HTML STAC Items mentioned above may seem minor, but are potentially a big step forward for the geospatial world. Though there has been an embracing of [REST principles](https://en.wikipedia.org/wiki/Representational_state_transfer) in geospatial web services and experiments with l[inked data](http://linkeddata.org/), geospatial information still does not feel fully integrated in the wider web. I can’t just search for ‘San Francisco Aerial Image’ and get back a georeferenced image. Whenever someone asks me for map data I generally have to explain searching for shapefiles on open data sites, and then what to actually do with a shapefile. Instead I’d like to just give them the link to a webpage that lets them use the data right there.

The [Spatial Data on the Web Best Practices](https://www.w3.org/TR/sdw-bp/) does a great job of articulating what is needed to get closer to geospatial information truly being part of the web. My hope is that STAC can be an example for how to do that with imagery.

![](https://miro.medium.com/v2/resize:fit:1400/1*76Ucc2POzUWf5kTsMsl3Cw.gif)

*Prototype example of a Landsat STAC HTML Item*

We can take advantage of Cloud Optimized GeoTIFF’s with on-the-fly tile servers like [Rio Tiler](https://blog.mapbox.com/combining-the-power-of-aws-lambda-and-rasterio-8ffd3648c348) and [Marblecutter](https://hi.stamen.com/stamen-aws-lambda-tiler-blog-post-76fc1138a145#.j644z9qvw) to display zoomable maps on any page. Users can then zoom in and look at any portion of the image at full resolution online, instead of making them download data and figure out GIS or Remote Sensing software to just see what is in the full file. The HTML page can supply lots of links to tools that can directly use the data, and to XYZ web tile servers, so that developers can pull it in to their applications without having to figure out geospatial at all. This enables every single image to have its own online location that users can reference, bookmark and send to one another, just like everything else on the web.

![](/assets/img/posts/the-potential-of-spatiotemporal-asset-catalogs/1_fvREI-ZhOXj43wY-SAjlwA.png)

*Landing page for a nice static catalog, check it out at [landsatonaws.com](http://landsatonaws.com)*

The really cool thing about rolling out STAC is that it potentially becomes much easier to make nice web pages, especially once a set of more [metadata rich extensions](https://github.com/radiantearth/stac-spec/blob/dev/roadmap.md#domain-and-vendor-profiles) evolve from vendors and communities of interest. With the structured JSON data one can easily auto-generate nice HTML pages with some simple tooling. The [landsatonaws.com](http://landsatonaws.com) pages are a prototype demonstration of this (though they currently pull directly from the specific Landsat MTL metadata files instead of standardized STAC JSON). You can see [the code](https://github.com/awslabs/landsat-on-aws), which uses handlebar templates with node.js run serverless on Lambda. The HTML version would add links and likely repeat lots of information on each page (like the contact information and other collection / catalog level data).

### Flipping the Geospatial Search Paradigm

While everyone is used to going to Google and being able to search across every web page in the world, that is still not possible with imagery, let alone all geospatial data. The vision of using STAC for global search is not to send out search requests to every STAC server, but instead to just make every item ‘crawlable’ by an indexer that can aggregate all the data. The traditional geospatial metadata searches have looked more like sending out search requests to the relevant providers. Users are expected to go to a particular ‘portal’ provided by a government, vendor, or community of interest.

SpatioTemporal Asset Catalogs don’t aim to ‘solve search’. But a clear foundation for geospatial search innovation is provided by standardizing metadata for imagery, prioritizing Cloud Optimized GeoTIFF’s, and encouraging HTML pages with lots of links for every single geospatial image. Indeed simply working with search engines like Google and Microsoft to ensure that entering a unique image ID returns a useful page will be a surprisingly large step forward. Right now one has to go to a specialized provider’s search or browse to re-find an image by ID.

The links between catalogs described in the ‘provenance’ section above also can greatly assist in search, as algorithms like Google’s page rank depend on lots of connections to figure out what results to return first. Having stable, useful html pages will lead to more links to those pages, which will push them higher in overall search results. And indeed using link text will also help — images that contain fires will often be linked to with the word ‘fire’. One could see a particularly relevant Landsat html page getting lots of links for the Santa Rosa Fire, for example, and then showing up in more general search results.

It is also likely that once there is a baseline of lots of fully accessible imagery (available online, as Cloud Optimized Geotiffs, and in referenceable HTML pages) that there will be more innovation in geospatial search. Right now the availability of imagery is very closely linked to the search of it — a search provider needs to also work on the availability problem. STAC aims solely at the availability problem, and posits that an major increase in availability will lead to increased innovation and power in searching of geospatial data.

### More STAC Potential

There’s one more STAC topic I want to delve in to, namely the potential of ‘static catalogs’, but I think it deserves its own post. So I’m going to draw this to a close, and will write on that topic soon. I’ll also report back on the variety of implementations that have been built soon, as there’s been good momentum on STAC. Most activity is happening on our [gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby), so feel free to come by and say hi.

![](/assets/img/posts/the-potential-of-spatiotemporal-asset-catalogs/1_iV5EIPi0R3bqEC3TPqESYw.png)
