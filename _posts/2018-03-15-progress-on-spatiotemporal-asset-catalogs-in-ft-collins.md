---
layout: post
title: "Progress on SpatioTemporal Asset Catalogs in Ft. Collins"
date: 2018-03-15
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/progress-on-spatiotemporal-asset-catalogs-in-ft-collins-6298f195bfb2
image: /assets/img/posts/progress-on-spatiotemporal-asset-catalogs-in-ft-collins/1_FrxIrfMPdziD7_9jtEGNcg.jpeg
---

Progress! After several months of implementation work on [SpatioTemporal Asset Catalogs (STAC)](https://medium.com/radiant-earth-insights/announcing-the-spatiotemporal-asset-catalog-stac-specification-1db58820b9cf) by participants of the [Boulder Sprint](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) we gathered again, this time in a facility in Ft. Collins Colorado, generously provided by the USGS. For the first two days we did cross collaboration sessions with the [WFS 3 Hackathon](https://github.com/opengeospatial/wfs3hackathon), and then continued with a dedicated ‘STAC Day’. A big thanks to [Radiant.Earth](http://radiant.earth) for sponsoring the day, and USGS for providing sponsoring the whole WFS 3 hackathon and providing facilities for both. And also to the [Open Geospatial Consortium](http://opengeospatial.org) for convening the event and providing all the logistical coordination.

![](/assets/img/posts/progress-on-spatiotemporal-asset-catalogs-in-ft-collins/1_FrxIrfMPdziD7_9jtEGNcg.jpeg)

*STAC Day presentations*

The goal for this meeting was to have a smaller group, convening just collaborators who had actually grappled with creating an implementation. This would enable us to have much more grounded conversations about where to take the specification next, basing changes on real world details instead of hypothetical theories. I was pleased that this was able to work, even as we brought in a number of new participants who were interested in the specification along with WFS 3. So we ended up with about 21 individuals representing 15 organizations.

The [github repository](https://github.com/radiantearth/community-sprints/tree/master/03072018-ft-collins-co) has an in-depth overview along with detailed notes on all that happened. There were three main highlights for me:

### Implementation Progress

The day started with a number of great presentations from most everyone who had built with the STAC specification. [Boundless](http://boundlessgeo.com) and [Harris](https://www.harris.com/) both showed off really impressive [STAC API](https://github.com/radiantearth/stac-spec/tree/master/api-spec) implementations, with each adding lots of interesting extensions. They even collaborated on doing simple transactions — both wanted to populate their data through a REST interface and were able to share OpenAPI snippets with one another to create the same end points. They will be bringing that as a STAC extension and WFS 3 extension. [Geocatalogo](https://github.com/go-spatial/geocatalogo) was not able to attend but has been working on an API implementation. And DevSeed presented their [sat-api](https://github.com/sat-utils/sat-api) and [sat-search](https://github.com/sat-utils/sat-search) work and Pixia talked about their catalog work, both of which will soon implement STAC.

On the [static catalog](https://github.com/radiantearth/stac-spec/tree/master/static-catalog) side Azavea showed off [pystac](https://github.com/raster-foundry/pystac), which was used to create the [static catalog of IServ data](https://s3-us-west-2.amazonaws.com/radiant-nasa-iserv/iserv.json) hosted by [Radiant.Earth](http://radiant.earth). David Hemphill showed off a [static catalog browser](https://s3-us-west-2.amazonaws.com/ai-gravitylab-stacbrowser/stacb.html) and talked about catalogs created for clients. And Planet showed off their [go-stac](http://github.com/planetlabs/go-stac) library as well as a [small static catalog](https://storage.googleapis.com/pdd-stac/disasters/catalog.json) of data from Hurricane Harvey.

### Concrete Spec Decisions

The other highlight was how much the group drove to a number of real decisions about how to improve and evolve the specification.

The biggest highlight was the alignment of STAC API with the new [WFS 3.0 standard](https://github.com/opengeospatial/WFS_FES/issues). One of my main goals in co-locating the STAC sprint with the WFS 3 Hackathon was to spur that conversation. It was a great interchange between the groups, with many STAC participants closely involved in the discussion that lead to the biggest WFS 3 change, [modifying the path structure](https://github.com/opengeospatial/WFS_FES/issues/64). With that cleared the group was able to establish in a [couple](https://github.com/radiantearth/community-sprints/blob/master/03072018-ft-collins-co/notes/wfs-stac.md) of [sessions](https://github.com/radiantearth/community-sprints/blob/master/03072018-ft-collins-co/notes/stac-api.md) that every STAC API should implement WFS 3.0. This will be a big win, as any library built to understand WFS 3 will also enable basic STAC searching.

A number of other decisions were made. Those who are really interested can check out [the notes](https://github.com/radiantearth/community-sprints/blob/master/03072018-ft-collins-co/notes/group-discussion.md), and they will be discussed in depth when we release the next version of the specification.

![](/assets/img/posts/progress-on-spatiotemporal-asset-catalogs-in-ft-collins/1_Ki8FYDoK9k-uGiwQkEiM9Q.jpeg)

*Breakout group working on an Earth Observation Profile for STAC*

## Next

The next major task is to turn all the notes and decisions into an upgraded version of the specification, with all the examples, schemas, docs and text updated to be consistent. And then to update the various implementations to support it. Spec contributors will be working through a set of [github issues](https://github.com/radiantearth/stac-spec/milestone/3), and anyone is welcome to help out. If you want to get involved feel free to join [the mailing list](https://groups.google.com/forum/#!forum/stac-spec), say hi [on gitter](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) or just start sounding in on [our repo](https://github.com/radiantearth/stac-spec). We’ll likely aim to have another gathering of implementers in a few months to push the specification forward again.
