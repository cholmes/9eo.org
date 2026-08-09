---
layout: post
title: "Static SpatioTemporal Asset Catalogs in Depth"
date: 2018-01-18
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/static-spatiotemporal-asset-catalogs-in-depth-710530934a84
image: /assets/img/posts/static-spatiotemporal-asset-catalogs-in-depth/1_dPQrfFLILxjKGDSp-ff1iw.png
---

One of the most interesting things to emerge from the [gathering in Boulder](https://medium.com/@cholmes/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) was the importance of ‘[Static Catalogs](https://github.com/radiantearth/stac-spec/tree/dev/static-catalog)’ portion of the [SpatioTemporal Asset Catalog specification](https://github.com/radiantearth/stac-spec). I had suspected that the ability to create a catalog with linked files alone would be important, but I walked away convinced that they are the key to a truly cloud native geospatial ecosystem.

### What is a Static STAC?

A Static Catalog, or a Static SpatioTemporal Asset Catalog (aka Static STAC — the three terms are all interchangeable), is defined in the core specification as:

> the simplest possible catalog of [spatiotemporal items](https://github.com/radiantearth/stac-spec/blob/dev/json-spec/json-spec.md). It is designed to work as a set of flat files on an http web server or an object store like S3 or Google Cloud Storage. As such, the catalog cannot be queried — it is simply a set of interconnected links that can be crawled. A static catalog is designed to be as reliable as possible, and can serve as the canonical source for more dynamic Catalog API’s.

It’s a catalog stripped down to its essence — simply an interconnected list of items. Lately I’ve been thinking a lot about how to simplify things as much as possible, keeping the core concept but making it as easy as possible to implement, with every additional bit of functionality built as an extension. And I believe a Static STAC is that core building block we’ve been missing, letting anyone expose their imagery holdings online as simply and reliably as possible. But before we go deep in to all its implications we should touch on how it came to be.

## The Genesis of Static Catalogs

The roots of static catalogs reach back to an [ad hoc meeting](https://groups.google.com/a/hotosm.org/forum/#!topic/openaerialmap/U9NiSL6IoRg) about [OpenAerialMap](http://openaerialmap.org) at the [2015 FOSS4G-NA conference](http://2015.foss4g-na.org/) of 2015, where a small group of people came up with what became the [Open Imagery Network](https://openimagerynetwork.github.io/) (OIN). The idea was to standardize a layer below an active browse-able map, focusing solely on creating a commons of open imagery, with the simplest possible implementation and guaranteeing an open license that any organization could use.

![](/assets/img/posts/static-spatiotemporal-asset-catalogs-in-depth/1_dPQrfFLILxjKGDSp-ff1iw.png)

At the core was imagery on the web, with simple [JSON sidecar files](https://github.com/openimagerynetwork/oin-metadata-spec) detailing the basic metadata for all imagery, just like SpatioTemporal Asset Catalogs. The central data storage of OpenAerialMap is based on the Open Imagery Network metadata. Static STAC’s are an attempt to generalize that core from just open imagery to any imagery, and the [static catalog workstream](https://github.com/radiantearth/boulder-sprint/tree/master/workstreams/static-catalog) in Boulder was meant to align those original OIN ideas with making imagery in general more accessible.

But the power of static catalogs became even more clear at the sprint as people shared their experiences. Several of the participants at the sprint had firsthand experiences with massive catalogs, with holdings of tens of millions and hundreds of millions of records. Indeed I doubt there have been any gatherings with more people experienced in running such large imagery catalogs, especially ones aiming for sub-second responses. As I would have guessed, most used ElasticSearch, which seemed to provide a large improvement over other options. But what surprised me was how unhappy most of the participants were with it. They loved it when they were working with smaller clusters, but it becomes a large pain to maintain the cluster once the index size starts to require many nodes. Many hours of operational work become required just to keep everything working well.

Unfortunately there is not an amazing next solution that everyone is jumping to next, no silver bullet that can handle all geospatial data at scale. Instead those who had to maintain these large clusters were the ones most excited about the Static SpatioTemporal Asset Catalogs. Relying on a database or an ElasticSearch cluster has a major risk of potentially losing data. They can get corrupted, you have to load from backups, etc. If the core of one’s system is simply JSON on S3 or Google Cloud Storage then you have a really reliable canonical storage.

So those tasked with maintaining reliable indexes of large amounts of imagery data see a lot of potential in static catalogs. They don’t want some new solution that promises massive scale but just breaks when even more is thrown at it — they want something super simple and reliable that they can count on, even if it gives up more advanced features.

## Indexes on Demand

The main problem with maintaining a super large index of imagery as an active API is that its users expect it to perform equally well for all their queries. They want every single field indexed, returning the latest data along with big historical aggregation queries, in near real-time responses. Unfortunately things don’t work that way at scale, both scaling to large numbers of users and scaling to huge amounts of data. In the ‘Big Data’ world no one expects all their queries to perform equally well — systems will usually be optimized to do sub-second real-time reporting on some subset of the data and fields, while larger historical queries and aggregations are expected to take awhile.

The key with a static catalog is that the creation of indexes becomes orthogonal to the storing of the data. Multiple systems can use the same point of truth, maintaining their own indices that are constrained and optimized for their purposes. Instead of trying to be everything to everyone, the static catalogs enable everyone to get exactly what they want. Indeed a colleague at work would import Landsat metadata in to a local PostGIS database because he could do all kinds of interesting ad hoc queries with full indexing. But he would pull in just the fields he needed, for just the area needed.

![](/assets/img/posts/static-spatiotemporal-asset-catalogs-in-depth/1_xNsUHutIf3buUsO0xMEJPw.png)

*Voyager Search with Landsat data in California*

So I believe with static STAC’s we will see a variety of different tools arise to index and query. Global search engines will crawl it and enable basic search, specialized geospatial search like [Voyager Search](https://www.voyagersearch.com/) or [ESRI GeoPortal Server](http://www.esri.com/software/arcgis/geoportal) (I love that I’m linking to an open source ESRI project) may attempt global geospatial search indexing. But organizations or communities of interest would also be able to make their own specialized indexes. One could also see tools that do global statistics, optimized for aggregation and queries of global catalog holdings, without trying to index every single field. But to enable advanced querying innovation we need to start with the data being accessible in a common way.

## Exposing the long tail of imagery

My [last STAC post](https://medium.com/@cholmes/the-potential-of-spatiotemporal-asset-catalogs-a9323927dc8a) closed with the idea that most all geospatial search is trying to solve two problems at once — the availability of imagery and the actual search of it. STAC aims to focus on availability — making sure that all data can be indexed. To that end Static STAC is designed to be super easy to implement, so that everyone, not just big data providers, can easily expose their data so others can access it. Larger data providers most all have already built some sort of online portal, and API to power it. But small aerial imagery and drone providers often are too small to afford to build out a full search API and GUI. With Static STAC they can simply upload their data online and then run one of the emerging tool sets that can generate the necessary JSON files. Indeed the hope is that even more user friendly tools will come online soon, enabling anyone to easily store their data online with the right metadata files.

Though most of the use of Static Catalogs revolves around object stores like S3 or Google Cloud Storage, the specification can also be implemented by other services. For example a tool like the [New York Public Library Map Warper](http://maps.nypl.org/warper), with all its historical imagery, could implement STAC by simply adding an extra JSON view for each of their images, instead of having to implement a whole new standards API.

![](/assets/img/posts/static-spatiotemporal-asset-catalogs-in-depth/1_dkKl89uJM1R9PoW300p2VQ.png)

## The STAC API Bridge

Looking at the world through the lens of static catalogs makes for an interesting view of the STAC API specification — the more dynamic API version of SpatioTemporal Asset Catalogs that responds to queries. In the static catalog view the most important thing is to make the data accessible. But convincing large data providers like Planet and DigitalGlobe to just drop their dynamic API’s in favor of just exposing the data as JSON is a big ask, especially since their customers expect to be able to query their imagery holdings. Fortunately it is *much* easier to convince them to implement the STAC API, since it can just be a thin interface on top of the same core query capabilities they’ve already created.

Since the STAC API and Static STAC’s share the same core STAC Items and linking structure, the STAC API actually serves as a bridge. Naive clients can treat a STAC API just like a static catalog — crawling it and making their own index for the data. It doesn’t matter to the client if the catalog is static or dynamically served; it is just a set of links to be crawled. So the STAC API actually enables those who have already implemented some sort of catalog more easily expose their data to wider usages, without having to change their way of running their infrastructure.

The even cooler thing is that going down this route can make it even easier for organizations to change their ways. A STAC crawler could easily traverse a STAC API and then write out a static catalog version of that same data, to a reliable online location. Then that Static STAC would easily serve as a back-up to the dynamic API — if the core database got corrupted then there would be a full copy of the data to import and create the dynamic API from.

STAC API’s could in turn serve as a dynamic bridge to static catalogs with one key extension — the ability to know when something in the static catalog changed. This could be a standardized update field or just requiring the proper use of HTTP ETag and cache control headers. Or it could be a more active pub/sub notification mechanism. But if there is a way for a STAC API to know when a static catalog has changed, then it could easily cache a copy of the data in its more optimized and indexed internal datastore, updating it whenever the core data has changed. So figuring out exactly how to communicate updates, in both active (pub/sub) and passive (reporting last update) is a key thing to get right in future STAC iterations.

## Wrapping up

Apologies for the overly technical post, and I appreciate it if you’ve made it this far. I just wanted to get these thoughts down, as I’ve talked about them with many people, but this gives us all something to point at. I’m optimistic that in a few months we’ll have some great online examples to point at, so we can show instead of explain. Indeed my next post on STAC is going to be on the progress made thus far, which has been quite cool to see.
