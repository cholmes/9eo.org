---
layout: post
title: "STAC 0.9.0 Release — our final major release before 1.0-beta"
date: 2020-02-27
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-0-9-0-release-our-final-major-release-before-1-0-beta-17467953e45e
image: /assets/img/posts/stac-0-9-0-release-our-final-major-release-before-1-0-beta/1_7wnJFSlbkjbMnJbDnSnJpg.png
---

## STAC 0.9.0 Release — our final major release before 1.0-beta

I am pleased to announce that the incredible STAC community has just released [version 0.9.0](https://github.com/radiantearth/stac-spec/releases)! This work on the release began in earnest during the [5th STAC Sprint](https://medium.com/radiant-earth-insights/ogc-api-features-stac-sprint-recap-6c876b44c9d2) that took place in early November. Having everyone in person enabled us to discuss all the major issues remaining, and we managed to get to decisions on all of them and got to at least draft pull requests of each. The last couple of months have been spent refining those and getting all the little details right, including two ‘release candidates’ — drafts that the community could give feedback on. You can see the full list of improvements in the [changelog](https://github.com/radiantearth/stac-spec/blob/v0.9.0/CHANGELOG.md), and I’ll detail the highlights below.

The diversity of contributors is quite impressive, it is easily the largest number of people who made a successful pull request that was incorporated in the release. Thanks to [Matthias Mohr](https://github.com/m-mohr) from [OpenEO](https://openeo.org/), [Matt Hanson](https://github.com/matthewhanson) of [Element84](https://www.element84.com/), [Alexandra Kirk](https://github.com/anayeaye) and [Alireza Jazayeri](https://github.com/scisco) from [Climate](https://climate.com/), [Josh Fix](https://github.com/joshfix) from [Planet](http://planet.com), [Phil Varner](https://github.com/philvarner) of [Astraea](https://astraea.earth/), [James Banting](https://github.com/jbants) of [SparkGeo](https://sparkgeo.com/), [Michael Smith](https://github.com/hgs-msmith) and [Tim Ruthersby](https://github.com/hgs-truthe01) from [L3Harris](https://www.harrisgeospatial.com/), [David Raleigh](https://github.com/davidraleigh) from [Near Space Labs](https://www.nearspacelabs.com/), [Rob Emanuele](https://github.com/lossyrob) and [James Santucci](https://github.com/jisantuc) of [Azavea](https://www.azavea.com/), [Volker Mische](https://github.com/vmx) of [Protocol Labs](https://protocol.ai/), and [Fabian Schindler](https://github.com/constantinius) from [EOX](https://eox.at/). And thanks to everyone who has been implementing STAC and giving feedback to the core specification.

![](/assets/img/posts/stac-0-9-0-release-our-final-major-release-before-1-0-beta/1_7wnJFSlbkjbMnJbDnSnJpg.png)

*Matt, Matthias, Michael, and Josh, working away on the STAC spec at the sprint.*

### Extension Reorganization and Promotion

The most visible change to the specification is an overhaul of a number of the most used extensions. This was done for two major reasons. The first is to better share common fields — for example, we had `sar:constellation` and `sar:platform` in the SAR extension, and `eo:constellation` and `eo:platform` in the EO extension. These mean the same thing but have different prefixes and thus less interoperability. The second reason is to help highlight the most used fields by putting them in the same folder as the item specification, as a new part of the specification called [Common Metadata](https://github.com/radiantearth/stac-spec/blob/v0.9.0/item-spec/common-metadata.md).

![](/assets/img/posts/stac-0-9-0-release-our-final-major-release-before-1-0-beta/1_o7K4h9LhuCbyaCYLilSWpA.png)

The [SAR](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/sar) and [EO](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/eo) extensions have slimmed down, using ‘instrument’ in common metadata, and then also sharing the [**View extension](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/view)** (various angles of sensors and other radiance angles that affect the view of resulting data) and often the [Satellite extension](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/sat). The view extension came about from a [great discussion](https://github.com/radiantearth/stac-spec/issues/722) about capture angles in aerial imagery, after the first release candidate. Catching this type of thing is the goal of a release candidate — to be able to address potential issues before we finalize the release.

This has reset the maturity of a number of the extensions to ‘proposal’, but it felt like a good move overall, and we hope to quickly get a number of implementations of each. We also decided at the sprint to get more serious about tracking the actual implementations of the extensions, so we can update their status and clearly communicate to users ones that are more mature.

### New Extensions

We’ve also added a few new extensions:

The [**Asset Definition Extension](https://github.com/radiantearth/stac-spec/blob/v0.9.0/extensions/asset/README.md)** provides meta-information at the collection level as to what can be found in the assets of items in the collection. Think of it as a rough schema, to enable clients to understand what assets they may get, without having to inspect individual items.

The [**Projection Extension](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/projection)** specifies various options to include projection information. The most common is an epsg code, which was previously in the EO extension, but clearly has much wider applicability. We also added a number of options for people who want to include more projection information in their STAC record or are working with data that does not have defined EPSG codes. These include a [WKT2](http://docs.opengeospatial.org/is/12-063r5/12-063r5.html) string, a [PROJ4](https://proj.org/usage/projections.html) or even the new [PROJJSON](https://proj.org/usage/projjson.html) object. The extension also adds the ability to include a bounding box or centroid in the native projection of the object, in addition to the WGS-84 definition that GeoJSON requires.

The [**Version Extension](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/version)** provides a consistent mechanism to version STAC records. The core specification is quite simple, with just two fields: ‘version’ and ‘deprecated’. It then uses [RFC 5829](https://tools.ietf.org/html/rfc5829) for ‘latest-version’, ‘predecessor-version’ and ‘successor-version’ relation types. The extension does not specify the versioning practices, so it can be used in almost any scheme, but there is a new section on [Versioning for Catalogs](https://github.com/radiantearth/stac-spec/blob/v0.9.0/best-practices.md#versioning-for-catalogs) in the best practices document. Also added for 0.9.0 is a complementary [**Items and Collections API Version Extension](https://github.com/radiantearth/stac-spec/tree/v0.9.0/api-spec/extensions/version)**, which provides the REST endpoints to request particular versions, or all versions, along with the link relations between them.

We also cleaned up the extensions folder, with a much nicer readme that clearly shows the maturity and prefix to use in a [table](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions#list-of-content-extensions). Though most extensions are marked as pretty immature the sprint brought a commitment to track use in the ‘implementation’ section that has been added to each extension and to update the maturity status based on those.

### API Improvements

The STAC API spec had the most improvements of the mini-suite of STAC specs. It was the first time we had a real critical mass of people who had built STAC API’s at a sprint, so there were a lot of good exchanges resulting in concrete progress. A lot of thinking went into all the mechanics of our Query, and since we were sprinting with the OGC Features API (OAFeat) community we worked to align with their standard.

**Alignment with OAFeat endpoints** — Previous versions of STAC had endpoints at `/stac` and `/stac/search`, and we [moved](https://github.com/radiantearth/stac-spec/pull/632) them to just share the same root `/` endpoint with Features API. Our hope is that Features API uses the same `/search` the endpoint we use for cross-collection search, and we’ll work [to align with them](https://github.com/opengeospatial/ogcapi-features/issues/154) on it.

**Paging Updates —** Pagination in STAC API is now using hypermedia links exclusively to align with OAFeat, [removing](https://github.com/radiantearth/stac-spec/pull/631) the `next` parameter from the API. And since OAFeat does not yet support POST for search, STAC 0.9.0 also provided a mechanism that enables paging with POST searches. See the [Paging section](https://github.com/radiantearth/stac-spec/blob/master/api-spec/api-spec.md#paging-extension) for more information.

**Search API Extension -> Context** — The ‘meta’ information returned with a search (number of items matched and returned, plus the limit) has evolved to be called ‘context’. It does not exactly align with OAFeat right now, as they put just numberReturned and numberMatched at the root level of the JSON object. We hope to propose changing those to align with the context object that can hopefully be reused as a common component with other OGC specifications.

![](/assets/img/posts/stac-0-9-0-release-our-final-major-release-before-1-0-beta/1_BipxLJea0yBjwHGkghiK1A.png)

**Sorting** — Another improvement was in the parameters to sort search results, in the [API Short Extension](https://github.com/radiantearth/stac-spec/blob/master/api-spec/extensions/sort/README.md). We [added](https://github.com/radiantearth/stac-spec/pull/513) a GET version of sort, and aligned the semantics with the ‘sortby’ term that has been commonly used in OGC standards. The new OGC API has not yet specified their sort protocol, but we talked extensively with the core contributors of Features and Records, and hope they can adopt our proposal.

## Next steps to 1.0

As discussed in my [previous post](https://medium.com/radiant-earth-insights/stac-path-to-1-0-and-0-9-0-release-candidate-6f9ecfffecbe), STAC has reached a point of maturity where it makes a lot of sense to push for a stable 1.0 that everyone can rely on for years. So the next release will be 1.0-beta, which means that we are pretty sure that what we have is ready to go 1.0, but we want to do one more round of feedback where we have the license to change things. Our goal after the beta release is to get as many organizations to adopt STAC as possible, getting to numerous software tools, lots of datasets and hopefully billions of STAC items. And hopefully from diverse domains as well, pushing our extensions in different directions to ensure that the core is flexible enough to adapt. We’ll be setting some clear, measurable targets for adoption and will go to 1.0.0 final after we reach them.

So we’ll soon be splitting the repository, with [stac-spec](https://github.com/radiantearth/stac-spec/) continuing to hold the item, catalog and collection specifications, and creating a new stac-api repo to hold the API specification. We’ll have to re-orient the specifications and indeed the website as well for this, but it should help provide more clarity. It will hopefully be a major community effort. And we still are welcome new collaborators all the time, stop by our [gitter chat](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) and say hi, and start using STAC to catalog all your assets! And a big thanks to everyone who got us this far, we could not have done it without the incredible community of contributors.
