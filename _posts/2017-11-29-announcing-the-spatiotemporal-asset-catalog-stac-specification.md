---
layout: post
title: "Announcing the SpatioTemporal Asset Catalog (STAC) specification"
date: 2017-11-29
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/announcing-the-spatiotemporal-asset-catalog-stac-specification-1db58820b9cf
image: /assets/img/posts/announcing-the-spatiotemporal-asset-catalog-stac-specificati/1_1B1eAshfTiZPktXyYCCemA.png
---

Today I am pleased to announce that the [SpatioTemporal Asset Catalog (STAC) repository](https://github.com/radiantearth/stac-spec) is ‘open for business’. This was the result of a lot of work by many amazing people at the [Boulder sprint](https://medium.com/@cholmes/a-cloud-native-geospatial-interoperability-sprint-483d9c299595), bringing together a huge variety of perspectives to increase interoperability in searching for satellite imagery and other spatiotemporal assets. There is still lots of work to do to turn STAC into a really solid specification, but we invite any interested developer to check out the latest version, implement in their software, and participate in the open collaboration to iteratively improve it.

![](/assets/img/posts/announcing-the-spatiotemporal-asset-catalog-stac-specificati/1_1B1eAshfTiZPktXyYCCemA.png)

## What is a SpatioTemporal Asset Catalog?

The [SpatioTemporal Asset Catalog](https://github.com/radiantearth/stac-spec), also known as STAC, is an open specification that came about from 14 different organizations [coming together](https://medium.com/@cholmes/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) to increase the interoperability of searching for satellite imagery. When a user wants to search for all the imagery in their area and time of interest they can’t make just one search — they have to use different tools and connect to API’s that are similar but all slightly different. The STAC spec aims to make that much easier, by providing common metadata and API mechanics to search and access geospatial data.

While the scope was initially focused on imagery, it became clear that the most valuable thing to do was to define a small, flexible, solid core that could handle a wider variety of information — derived data, point clouds, hyperspectral data, etc. Several attendees had built catalogs that originally just handled imagery, but they soon got pulled towards other types of geospatial assets. So the end definition of an *Item* in a SpatioTemporal Asset Catalog is a GeoJSON Feature that includes links to its ‘assets’ that can be downloaded or streamed.

The end goal of this work is to enable a global index of all imagery (satellite, aerial, drone, etc), derived data products and alternative geospatial captures (LiDAR, SAR, Full Motion Video, Hyperspectral, etc). The STAC specification focuses on the fundamental first step towards that goal — an easily implementable standard for organizations to expose their data in a persistent and reliable way. This enables their geospatial holdings to be crawled and queried. So the STAC specification by itself has no aim to provide one single index. Instead the aim is to encourage the basic unit of information from which a variety of indexes can be built.

For STAC that basic unit is the actual geospatial asset (such as a geotiff, ideally a [cloud-optimized](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed) one) and a JSON description of the core fields. This mirrors the design of the web as a whole — html pages are the basic unit of information, and companies like Google build the global search index. Creating a great geospatial search index is left to others to innovate on, but the STAC spec aims to encourage software implementations and data providers to expose their holdings in a way that everyone can understand.

So STAC itself has no aim to provide one single index, but to encourage the basic unit of information from which a variety of indexes can be built. For STAC that basic unit is the actual geospatial asset and a JSON description of the core fields. This mirrors the design of the web as a whole: html pages are the basic unit of information, and companies like Google build the global search index. Creating a great geospatial search index is left to others to innovate on, but the STAC spec aims to encourage software implementations and data providers to expose their holdings in a way that everyone can understand.

*Update: For more information on the power of STAC, see posts on the [potential of STAC](https://medium.com/radiant-earth-insights/the-potential-of-spatiotemporal-asset-catalogs-a9323927dc8a) and [static catalogs in depth](https://medium.com/radiant-earth-insights/static-spatiotemporal-asset-catalogs-in-depth-710530934a84).*

## Specification Overview

### The SpatioTemporal Asset Item

A STAC ***Item*** is the core of any implementing Catalog, and is defined by a [json specification](https://github.com/radiantearth/stac-spec/blob/master/json-spec/json-spec.md). The [repo directory](https://github.com/radiantearth/stac-spec/tree/dev/json-spec) the spec lives in includes a number of samples, additional documentation, and JSON Schemas for validation. The *Item* is a [GeoJSON](http://geojson.org) feature, so can be easily read in most any GIS, and includes additional fields for the time the asset represents, a thumbnail, and links to other relationships and the core assets. It is currently a very flexible specification, as it can easily combine with other JSON structures of data. Most any additional fields can be added to the core structure, and it is anticipated that data and software providers will use it in lots of different ways. In time there should emerge shared fields in various domains, and once consensus solidifies these will be available as extensions to the core specification.

![](/assets/img/posts/announcing-the-spatiotemporal-asset-catalog-stac-specificati/1_Quh3jDv-12G8J0KWXogxgg.png)

*A Landsat scene formatted as a STAC Item on [geojson.io](http://geojson.io)*

### Static Catalogs & Catalog API

At the sprint there were two complementary STAC work streams — [one](https://github.com/radiantearth/boulder-sprint/tree/master/workstreams/core-api-mechanics) focused on an API defined in [OpenAPI](https://www.openapis.org/), and [one](https://github.com/radiantearth/boulder-sprint/tree/master/workstreams/static-catalog) that could be implemented by just arranging files and links on [S3](https://aws.amazon.com/s3/), [GCS](https://cloud.google.com/storage/) or really any static web server. The latter came to be called ‘Static Catalogs’, and as people shared their experiences the advantages of the approach became clear. Amazon’s S3 offers 99.999999999% durability and 99.99% reliability, so a catalog that is just S3 with no more moving parts will be able to offer the same guarantees.

It also became clear during the sprint that a Static Catalog can be direct subset of a Catalog API. Files on a web server are still an API, albeit a very simple one, but files properly linked on the web are in fact a complete *catalog*, it’s just not one that responds to dynamic queries. So the dynamic Catalog API can return the exact same cataloging and link structure as the Static Catalog, and then offer additional capabilities like querying. Having the Catalog API mirror the structure of the Static Catalog means that a naive client could easily crawl and search both of them.

The result is that the main entity of both the dynamic API and the static instantiation is the *Item*, and each can validate against the same JSON Schema. The STAC repo also includes additional specification on how each type of catalog works. The dynamic one is specified in the [API Spec OpenAPI document](https://github.com/radiantearth/stac-spec/api-spec/spec.yaml), which can be imported into any OpenAPI/Swagger editor or used in any of the code generation tools. It is currently specified in OpenAPI 2.0 (aka swagger), but will move to OpenAPI 3.0 when the automated code generation tooling is more mature. And the [static catalog](https://github.com/radiantearth/stac-spec/static-catalog/) folder contains the instructions for creating the version made by simply laying out files.

### Philosophy

The STAC specification reflects a few philosophies that are worth highlighting. Reading the repository in depth should make these clear, and the ‘[principles](https://github.com/radiantearth/stac-spec/blob/dev/principles.md)’ document there has additional information about the general approach taken of developing standards. But a few things are especially important with STAC:

- **Small, flexible core** — The STAC spec is designed to be very easy to implement, and to be adaptable to existing implementations. The core philosophy is to enable maximum flexibility. The validation just checks for the presence of the key fields, and most any other field can be included in the objects.

- **Evolve best practices and extensions through real world use** — While the core is quite minimal at the moment there is likely more to be fleshed out to increase interoperability. The plan is to keep the core as small as possible, but create extensions for other best practices. These should arise from real implementations that publish documentation on what they did, and then slowly evolve towards standard extensions as others implement similarly.

- **Heavy use of Links** — Links between various items are strongly encouraged, and should enable modeling of much more complex relationships. This should evolve to linking items between catalogs to represent things like where a derived NDVI product comes from, or all the source imagery going into a mosaic of thousands of images.

- **HTML representations** — It is a core philosophy to have human readable representations of STAC Items, in both static catalogs and catalog API’s. This will be done to follow as many of the tenants articulated in the [Spatial Data for the Web Best Practices](https://www.w3.org/TR/sdw-bp/). Close readers of the spec will notice that the HTML representations are not yet specified, but it is [a roadmap priority](https://github.com/radiantearth/stac-spec/blob/dev/roadmap.md#html).

## The Future of STAC

There is a whole lot more to write about the potential future implications of STAC. In particular more details on why a pretty simple core is actually quite exciting if things evolve in the right way. And how it is a fundamental building block for [Cloud Native Geospatial](https://medium.com/tag/cloud-native-geospatial). But in the interest of avoiding making this my longest post on medium so far I’ll break that into its own post.

Though the STAC specification is nowhere near ‘completion’, the repository is finally in good enough shape that someone who was not at the sprint should hopefully be able to understand the core ideas and to at least attempt an implementation. One of the main [principles](https://github.com/radiantearth/stac-spec/blob/dev/principles.md) was to aim for a spec that would be easy to implement, so if we did our job it should not be that hard to get create an implementation. The specification will evolve based on feedback from developers creating real world implementations, and will not be pronounced ‘1.0’ until there is a significant number of both software support and real data cataloged.

So everyone interested in implementing is encouraged to check out the repo, and join us on our [gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) or [google group](https://groups.google.com/forum/#!forum/stac-spec). The core will likely evolve a bit as more implementations come online and give real feedback. Please check out [the roadmap](https://github.com/radiantearth/stac-spec/blob/dev/roadmap.md) for an idea of what will likely evolve next and where to prioritize feedback.
