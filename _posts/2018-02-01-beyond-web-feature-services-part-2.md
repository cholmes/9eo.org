---
layout: post
title: "Beyond Web Feature Services Part 2"
date: 2018-02-01
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/beyond-web-feature-services-part-2-b77aa89a9fc0
image: /assets/img/posts/beyond-web-feature-services-part-2/1_9F72wQpoIEK-0fCLMgjjBg.png
---

*Static Features on the Web — WFS without the Query*

In [my last post](https://medium.com/@cholmes/beyond-web-feature-services-part-1-b9ea9a86caa8) on this topic I put forth two major aspects of WFS (broadly defined) that I’m excited about. The first was how [WFS 3.0](https://medium.com/@cholmes/wfs-3-0-get-excited-yes-8e904fdbcc0) to me is less a new iteration of a ‘service’ and more about ushering granular geospatial API patterns that others can easily adopt. This post is about the other aspect, which is about better exposing geospatial content and better integrating it with the web. Those who have followed my [postings](https://medium.com/@cholmes/the-potential-of-spatiotemporal-asset-catalogs-a9323927dc8a) on [SpatioTemporal Asset Catalog](https://medium.com/@cholmes/announcing-the-spatiotemporal-asset-catalog-stac-specification-1db58820b9cf) will recognize many of the same themes from my [Static Catalogs](https://medium.com/@cholmes/static-spatiotemporal-asset-catalogs-in-depth-710530934a84) post. Indeed I hope the STAC API can be compatible with WFS 3.0, which naturally begs the question of what the WFS equivalent of Static Catalogs is?

## Web Features without the Service

One of the aspects of WFS 3.0 that I’m most excited about is the simplicity of it, that it aims to be super easy to implement. It has a simple core, cutting out most all the additions that one naturally wants to do with a web service for features. Each of those additions is reasonable, but together they make for a fairly big surface area that takes a lot of effort to understand. I actually want that push for simplicity to go even further, stripping WFS down to its essence. But what I’m imagining doesn’t really deserve the name Web Feature Service, since it’s not a ‘service’. Perhaps we just call it ‘Simple Features for the Web’ (though I’m not set on that name).

It would be roughly the same as a WFS 3.0, except it would lack the ability to respond to any query other than ‘list all your data’. But wait, you say, isn’t that the main thing a WFS really does? I’d argue that a WFS does two things — it makes the source geospatial data available *and* it offers an API to make specific queries of the data. But I believe a major ‘bug’ of much of the work the OGC has done is that those two things are tied together in a single interface. If you want to make feature data available in a standard way in the OGC world then you need to stand up a WFS. Standing up a reliable, scalable, secure service that properly indexes the data for search is actually quite a bit of work, and expensive.

![](/assets/img/posts/beyond-web-feature-services-part-2/1_5uEo2CShDVRMVzZarA2BJQ.png)

*Shapefile download on FTP or Web — still the main way to get TIGER/Line data*

That is why a lot of data is still only available as a Shapefile on a website, or often just not available at all. It’s just too much of a pain to stand up a ‘service’. But it is potentially much easier to expose data available as ‘Web Features’ — data online that follows the [Spatial Data for the Web best practices](https://www.w3.org/TR/sdw-bp/). It would have lots of links, exist in canonical referencable locations, always link back to its layer level metadata, and be indexable by search engines. And it would be possible to create these data collections by simply placing flat files that link to one another on S3, Google Cloud Storage or any static web server.

### Why is this WFS?

The reason I do lump it in with ‘WFS 3.0’ is that I believe the most important thing is that these static web features are 100% compatible with even an advanced WFS. A naive client (like a search engine crawler) should be able to follow the same links and pull the exact same data fields from both an advanced WFS 3.0 API and a naively implemented *Simple Features for the Web* layer. Both should do a great job of making geospatial data accessible, and more advanced WFS 3.0 API’s can offer additional search and transaction features on top of that. In some ways a more advanced WFS would actually be a bridge for more complex databases and archives in to the interoperable static core of *Simple Features for the Web*.

So what would this actually look like? The center would likely be a JSON file that is the same as one in a [WFS API capabilities](https://github.com/opengeospatial/WFS_FES/blob/master/openapi.yaml), in OpenAPI. But it would not support any query operation, except for ‘GET’ (everything) for various ‘features’ endpoints that contain feature collections. These would be HTML or json pages linked together, one for each feature. And there would be optional formats, that could also be static — a single geopackage or large GeoJSON file for those who want to download the whole dataset without having to crawl through the entire HTML. Ideally features would have lots of links to other features, so they are not just isolated bits on the web but part of deeper object linkings. And eventually it’d be great to align with the linked data initiatives and have good microservices and schema definitions for each feature. But I think it’s important we don’t require full validating schemas as table stakes to put one’s feature data on the web.

### Some (non-standard) real world examples

The cool thing is that there are quite a few examples of what this might look like in the real world. The main idea is that every single feature should have a web page that is actually useful to a human. A collaborator sent me a superb example from San Diego called [ScoutRED](https://scoutred.com/):

![](https://miro.medium.com/v2/resize:fit:1400/1*AYRgpdwEIT-RUc3ked-s3A.gif)

This probably looks fancier than people might imagine, but all of it can actually be implemented in an entirely ‘static’ manner, as just html pages and geojson written on a web service (though calling to remote tile servers for the base layers). From the parcel page I can view all the information about the property, look at a map of it, and jump to other properties from that map. I can even follow a link to view the full data set of RM-1-1 zones on a map, and then dive back in to other parcels from there.

The Open Data world centered around CKAN and DKAN has also been experimenting with similar ideas, like the [Interra Data Open Data Catalog Generator](https://github.com/interra/catalog-generate/):

![](/assets/img/posts/beyond-web-feature-services-part-2/1_iOZFuR5c3M_LcE4ms3QF0Q.png)

### Bridging Static and Dynamic with ‘Sync’

In my initial thinking I imagined that ‘query’, that core operation of WFS, would be the next recommended operation for people to implement. But thinking about it as part of a broader ecosystem leads to the fact that it will be quite easy to use another WFS to crawl any *Simple Features for the Web* layer, offering querying on a cached version of the data. Or one can see new technology like [Amazon’s Athena](https://aws.amazon.com/athena/) also offering nice query capabilities. In light of this, the most useful ‘next’ operation to implement is a syncing mechanism, to enable the more advanced API’s to stay in sync with their source data. And indeed to enable advanced dedicated search engines to easily tell if data has been updated.

There was work done on this in [WFS Synchronization](http://docs.opengeospatial.org/per/16-044.html) extensions, and perhaps some of that can be used. But I think it can be an even simpler core, that sends a notification if any file has changed. Indeed it should aim to be compatible with things like Amazon’s S3, that sends notifications to their Simple Notification Service when files have changed. Or perhaps even simpler — just a recommendation on proper use of [cache-control headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) and a response to get all data updated since last checked, use client side pulls instead of server side pushes. Any downstream service should be able to simply subscribe and then update their cache whenever is convenient, guaranteeing that their API always has the latest.

### Static STAC & Simple Features for the Web

As I mentioned above, those who have read my post on the [potential of Static STAC’s](https://medium.com/@cholmes/the-potential-of-spatiotemporal-asset-catalogs-a9323927dc8a) should not be surprised by this line of thinking. We are trying to align the [STAC API](https://github.com/radiantearth/stac-spec/tree/dev/api-spec) with the WFS specification. But I believe the most powerful part of STAC is the static catalogs — they share the same structure as the active API, but aren’t able to respond to any queries. The focus is on simply making the data accessible, in the most reliable way possible. I hope we can push forward with an even more stripped down version of WFS 3.0 that lets any data provider simply ‘publish’. And before too long an ecosystem of value added services will slurp up that data and make it easily searchable by all.

![](/assets/img/posts/beyond-web-feature-services-part-2/1_9F72wQpoIEK-0fCLMgjjBg.png)
