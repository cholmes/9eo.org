---
layout: post
title: "First Official Release of SpatioTemporal Asset Catalog Spec!"
date: 2018-04-09
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/first-official-release-of-spatiotemporal-asset-catalog-spec-5b4e5587ba4c
image: /assets/img/posts/first-official-release-of-spatiotemporal-asset-catalog-spec/1_9l23rUajOXToV9qFmjCdsg.png
---

![](/assets/img/posts/first-official-release-of-spatiotemporal-asset-catalog-spec/1_9l23rUajOXToV9qFmjCdsg.png)

Just before the weekend we pushed out the [**0.4.0 Release of the STAC Specification](https://github.com/radiantearth/stac-spec/releases). **You can explore the [tagged version of the specification](https://github.com/radiantearth/stac-spec/tree/v0.4.0) on github. This is the first true ‘release’ that we’ve created, and so is an important milestone. From this point on users of the spec can count on the `master` branch (the default when visiting [github.com/radiantearth/stac-spec](http://github.com/radiantearth/stac-spec)) to have all samples and examples consistent with the spec document. For more information about the SpatioTemporal Asset Catalog (STAC) specification see previous posts on the [‘stac-spec’ tag](https://medium.com/tag/stac-spec/latest) in medium (start at the oldest).

We’re still quite early in the evolution of STAC, and indeed a major design goal is to always keep things flexible enough that implementations can take it in the direction they want to. I’m hoping to write a longer piece on that philosophy soon, particularly about how the ‘soft validation’ nature of JSON Schema enables it. But we are feeling like there is a solid core to STAC, so it is a great time to try it out and give feedback.

## Spec Changes

There were a number of nice improvements made to various aspects of specification; most all of them came from the latest in person [gathering in Ft. Collins, CO](https://medium.com/radiant-earth-insights/progress-on-spatiotemporal-asset-catalogs-in-ft-collins-6298f195bfb2). I’m also excited that we have our first ‘extensions’, which I think is where most all the innovation will move to, since the core aims to remain small and flexible.

![](/assets/img/posts/first-official-release-of-spatiotemporal-asset-catalog-spec/1_T1e3dckREcukH9EPR5HgiQ.png)

*35 issues / PR’s closed!*

### Core Changes

There were a handful of changes to the core `Item` JSON that defines the primary fields of STAC. Our hope is to get to rock stability of these before too long, but there were a number of improvements that came up as different groups started to build real world implementations. There will likely be one or two small tweaks, but it feels like we’re getting close.

- [**Shift to single `datetime` time field](https://github.com/radiantearth/stac-spec/issues/64).** The original spec had `start` and `end` as a pair of time fields, to better handle ranges of data. It felt like in most cases one of the fields was more meaningful, and having a single one would be less confusing to users. So we shifted to one called `datetime.` Specific profiles can add on more time fields and define time as they want.

- **Thumbnails [no longer required](https://github.com/radiantearth/stac-spec/issues/61) and [moved to assets](https://github.com/radiantearth/stac-spec/issues/62).** Thumbnails are still strongly recommended, but it can be a big burden to some providers to create thumbnails for all assets, so they aren’t required. And they were in the `links` section, but through use everyone felt they made more sense as an `asset.`

- [**The `asset` list changed to be a dictionary](https://github.com/radiantearth/stac-spec/issues/59) / map instead of an array**. This enables easier lookup of a particular asset in clients, instead of having to iterate through an unordered array. A number of implementations found this to be more useful, so it was a very welcome change.

### STAC Alignment with WFS

The [STAC Ft. Collins Sprint](https://github.com/radiantearth/community-sprints/tree/master/03072018-ft-collins-co) was done in conjunction with the [WFS 3.0 Hackathon](https://github.com/opengeospatial/wfs3hackathon/), and there was really great sharing of ideas between the two groups. The biggest decision made was to fully align the [STAC API](https://github.com/radiantearth/stac-spec/tree/master/api-spec) with the [WFS 3.0 specification](https://github.com/opengeospatial/WFS_FES). There was a lot of really great discussion in person, with both groups adjusting their specifications to better match the other. The STAC group evolved things a little bit afterwards, so that a STAC API could also serve as a standalone endpoint — not forcing implementors to fully understand WFS to get out the gate. So the core of STAC is a `/search/stac` endpoint that can be used standalone, or it can serve as a WFS Extension.

![](/assets/img/posts/first-official-release-of-spatiotemporal-asset-catalog-spec/1_yhwdj9EcnrBXEle9OmR2cA.png)

*The standalone STAC endpoint ([interactive version](https://app.swaggerhub.com/apis/cholmesgeo/STAC-standalone/0.4.0))*

The main benefit of adding the STAC endpoint to a WFS is that it gives users ‘cross collection’ search, for example to search Sentinel, Landsat and Planet data in a single query. WFS by itself is only oriented towards querying a single collection at the moment. The benefit to STAC users of using the WFS structure is to enable a more coherent division and description of the data that goes in to it, as each can be organized in its own collection. For a more in depth discussion of how this works see the [WFS+STAC integration document ](https://github.com/radiantearth/stac-spec/blob/master/api-spec/wfs-stac.md)in the STAC repository. The other major win is that common patterns will be shared between the specifications, so software libraries can be written for one spec but find lots of useful code for the other.

### Earth Observation Profile Work

The last major chunk of work were two new complementary extensions: the [Earth Observation Profile](https://github.com/radiantearth/stac-spec/blob/master/extensions/stac-eo-spec.md) and the [Collection Extension](https://github.com/radiantearth/stac-spec/blob/master/extensions/stac-collection-spec.md). The EO Profile is a set of fields that are relevant to searching for imagery and other types of observations of earth. Most of the initial STAC collaborators are focused on this, so it made sense to come together for some common metadata fields. The Collection extension came directly out of this work, as an elegant mechanism to enable providers to share data like the band information without having to repeat it in every single `Item` returned. A record can link to its collection and then smart clients can ‘merge’ the information in there to create a complete record.

This is the first release of the extension, so a good bit may shift as everyone starts doing real world implementations of it. We were also quite excited to see a contribution of examples of C[BERS](https://en.wikipedia.org/wiki/China%E2%80%93Brazil_Earth_Resources_Satellite_program) data, as they are starting to try out the spec as a way to give additional information about the data they are distributing.

### Up Next

There’s lots of exciting directions for STAC on the horizon, and indeed a handful of [issues](https://github.com/radiantearth/stac-spec/milestone/5) that I hoped we’d tackle for 0.4.0 but that slipped to the next release. I believe there’s going to be a few implementations of the EO profile, both STAC API’s and static catalogs, that will help flesh out not only that profile but also lead to some core improvements. The area I remain most excited about is the HTML version of the spec, and potentially playing with some javascript tools that can automatically create the HTML from any compliant STAC JSON. If you’re interested in working with the spec, please stop by and say hi on [our gitter](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby), or use the [github issue tracker](https://github.com/radiantearth/stac-spec/issues) to raise any concerns or questions.
