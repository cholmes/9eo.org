---
layout: post
title: "CNG Part 4: Open Aerial Map’s Cloud Native Geospatial Architecture"
date: 2017-11-27
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cng-part-4-open-aerial-maps-cloud-native-geospatial-architecture-a7f784cf7c2f
image: /assets/img/posts/cng-part-4-open-aerial-maps-cloud-native-geospatial-architec/0_D_do-ID1kWfqCDBf..png
---

![](/assets/img/posts/cng-part-4-open-aerial-maps-cloud-native-geospatial-architec/0_D_do-ID1kWfqCDBf..png)

*Imagery of Niamy, Niger gathered by Drone Africa Service, accessed from Open Aerial Map, CC-BY 4.0*

In the previous post, we looked at [Planet’s Cloud Native Geospatial](https://medium.com/planet-stories/cng-part-3-planets-cloud-native-geospatial-architecture-31fb4a20fa77) architecture. This post aims to help elucidate the essence of a Cloud Native Geospatial architecture by taking a close look at one of the cleanest and most advanced cloud native geospatial architectures — [OpenAerialMap](https://openaerialmap.org/) (OAM).

![](/assets/img/posts/cng-part-4-open-aerial-maps-cloud-native-geospatial-architec/0_bKF0YyPsV9yeoQPe..png)

The project was started by the [Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) to help get imagery online in the wake of disaster, so it could be quickly traced into OpenStreetMap (OSM) by non-imagery experts. Any openly available imagery data can be uploaded to the OAM platform, where it is hosted for free. Since all data on the platform must be openly available, the architecture is a lot more straightforward than [Planet’s](https://medium.com/planet-stories/cng-part-3-planets-cloud-native-geospatial-architecture-31fb4a20fa77). And the team behind it has done a really innovative job of rethinking how things should work when the entire workflow of sharing imagery is done on the cloud. In particular, they’ve nicely componentized the system so that each part can be used separately, and those parts can easily be used with other cloud native geospatial tools.

The team has published a lot of great documentation on that system, both the [Catalog Components](https://docs.openaerialmap.org/ecosystem/catalog-group/) to browse the data as well as the [Contributor Components](https://docs.openaerialmap.org/ecosystem/contributor-group/) that let anyone upload new imagery. So this post will not recount all the details of their great architecture, but will draw some attention to some of the really nice pieces.

**Cloud Optimized GeoTIFF at the center**

The core of OpenAerialMap is the Humanitarian OpenStreetMap Node of the [Open Imagery Network](https://openimagerynetwork.github.io/). This is in many ways a very simple component — an AWS S3 bucket of [Cloud Optimized GeoTIFF](http://cogeo.org)’s (COG’s), with JSON metadata that follows the [OIN Metadata Spec](https://github.com/openimagerynetwork/oin-metadata-spec). (as of this writing, the files aren’t fully compliant COG’s, but they are 99% implementing and plan to reformat to be 100% compliant). But since it follows the Cloud Native Geospatial principles it is incredibly powerful. All data inserted into the bucket by the [OAM Uploader](https://docs.openaerialmap.org/uploader/uploader-form/) is processed on upload, so that every piece of imagery on OpenAerialMap is a [Cloud Optimized GeoTIFF](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed). This enables every dataset to automatically show up in the OAM [Catalog API](https://github.com/hotosm/oam-catalog) as well as the OAM [Dynamic Tiler](https://github.com/hotosm/oam-dynamic-tiler). All data in these API’s means that the front end on [OpenAerialMap.org](https://map.openaerialmap.org/) instantly gets the data.

One does not need to figure out the complexities of hosting a full web tile server, instead an organization can just upload imagery to a cloud storage location. They can even leverage OAM’s uploading tools to help format it properly.

**Web Tiles of all imagery**

Perhaps the coolest piece of technology in the mix is the Dynamic Tiler. Stamen put up a [great post](https://hi.stamen.com/stamen-aws-lambda-tiler-blog-post-76fc1138a145) on the core work that started it, experimenting with using AWS Lambda to generate tiles.

![](/assets/img/posts/cng-part-4-open-aerial-maps-cloud-native-geospatial-architec/0_m_p1j-vOY4Vm43J4..png)

*Web tiles streamed from OpenAerialMap into the geojson.io tool for tracing*

The really cool thing about the OAM Dynamic Tiler is that it can read any Cloud Optimized GeoTIFF (COG). This was designed so that different Open Imagery Network buckets could be displayed on Open Aerial Map easily. But it means that even non-open imagery can be rendered with the exact same tooling. Thus, any COG that is online can be easily viewed as a web map, just by virtue of being stored in a cloud native manner. The dynamic tiler technology has evolved to be an independent project called [Marblecutter](https://github.com/mojodna/marblecutter) that is also used by Mapzen, who helped fund its evolution to also deal with terrain data. So anyone can use the same on-the-fly tiling, going from COG’s to web tiles in milliseconds.

**Crawlable Metadata for all imagery**

The other key of a Cloud Native Geospatial architecture is to make metadata for all imagery accessible.

![](/assets/img/posts/cng-part-4-open-aerial-maps-cloud-native-geospatial-architec/0_4fmU77v1GC18kIsL..png)

OpenAerialMap actually shows an emerging best practice, which is to have a *static catalog* that is simply indexable files on cloud storage, as well as a [Catalog API](https://docs.openaerialmap.org/catalog/), which enables search of the data through web front-ends, command line tools and integrated applications. The full details and implications of static catalogs and API’s will be in a future post going deep into the results of the [Boulder Catalog Sprint](https://medium.com/@opencholmes/a-cloud-native-geospatial-interoperability-sprint-483d9c299595), but the Open Imagery Network that powers OAM is really the pioneer of this approach. It focuses on exposing the data in an incredibly reliable way, since there are no servers to maintain. And then the Catalog API on top of it can also be queried and even crawled as well.

**A decoupled approach**

The best part of OpenAerialMap is that each piece is decoupled from the others. The uploader, static catalog (OIN), catalog api, dynamic tiler and front-end are all independent components that can easily point at other instances or interfaces providing the same functionality. Organizations can also adopt parts of the OAM architecture and software components that might work for them — one might reuse the OAM uploader but choose to use rio-tiler to actually serve up the COG data as tiles, for example. And every component is completely open source.

Even better, the Open Imagery Network is a network, so organizations don’t need to upload their data to OAM — they can expose their own data in the same COG + static catalog manner. All the plumbing is in place for Planet, DigitalGlobe and others to be able to expose their disaster data from their Cloud Native Geospatial architectures as COGs and have it stream straight into OpenAerialMap, as they are all embracing the same architectural principles. Hopefully, in the next few months we’ll be able to show that working end-to-end, continuing the momentum of collaborating in Boulder.

**The Cloud Native Geospatial Architecture**

While there are a handful of platforms that enable users to upload imagery and view it as webtiles, they are usually [walled gardens](https://en.wikipedia.org/wiki/Closed_platform) that are not fully open. The Open Aerial Map and Open Imagery Network architecture show how cloud geospatial can be done in a fully open manner, enabling any platform to tap into the data that is available. And since it doesn’t have to deal with authorization and authentication like commercial data providers, it is easier to understand as there isn’t complexity around what people can and cannot see. The well componentized design arguably makes it *the* reference implementation for a pure Cloud Native Geospatial architecture.

In the next post, we’ll extract out the core principles of a Cloud Native Geospatial architecture, but most of it should be fairly obvious by now.
