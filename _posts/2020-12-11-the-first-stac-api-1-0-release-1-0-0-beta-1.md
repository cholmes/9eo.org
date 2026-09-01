---
layout: post
title: "The first STAC API 1.0 release: 1.0.0-beta.1"
date: 2020-12-11
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/the-first-stac-api-1-0-release-1-0-0-beta-1-1cde4f36ad5a
image: /assets/img/posts/the-first-stac-api-1-0-release-1-0-0-beta-1/1_cVmS9_cBUK1XcEJ2u-IuzQ.png
---

I’m pleased to share that we’ve just released STAC API 1.0.0-beta.1. This is our first release of the API since we [split the specification](https://medium.com/radiant-earth-insights/stac-path-to-1-0-and-0-9-0-release-candidate-6f9ecfffecbe#a328), with STAC now living in its [own repository](https://github.com/radiantearth/stac-spec). You can see the latest specification in the stac-api-spec repository, and we link to browsable API representations of the major portions below.

![](/assets/img/posts/the-first-stac-api-1-0-release-1-0-0-beta-1/1_cVmS9_cBUK1XcEJ2u-IuzQ.png)

*[STAC Core OpenAPI](http://api.stacspec.org/dev/core/#tag/Core)*

### In This Release

What started out as a pretty modest release ended up snowballing into a major amount of work, but I think we’re all pretty proud of the end state. Our main goal was to have a version of the API that was released standalone, independent of the STAC Core releases. In previous versions, it was just assumed that a version number applied to both the STAC content and the API. So we wanted to enable services could be more explicit about which version of each they supported — one could upgrade the service to 1.0.0-beta.1 API, but have it still serve STAC 0.9.0 Items.

We also wanted to align more fully with OGC API — Features. STAC is based on OGC API — Features — Part 1: Core, but there is a lot more functionality in extensions that ideally align as well. Figuring out how to communicate the version of an API [lead us to adopt](https://github.com/radiantearth/stac-api-spec/issues/27) the way that OGC does ‘conformance classes’ (see for example [Features conformance classes)](http://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_conformance). This forced us to be a lot more explicit about how to group functionality and form dependencies. And from there it made sense to reorganize the whole repository and restructure the OpenAPI documents to reflect that new structure. As I mentioned, this was far more work than anticipated, but the results feel a lot more solid. The structure we ended up with is as follows:

**STAC API Core**: For maximum flexibility, the STAC API Core (TODO: Link to tagged core) is as simple and easy to implement as possible. It returns a STAC [Catalog](https://github.com/radiantearth/stac-api-spec/blob/master/stac-spec/catalog-spec/catalog-spec.md), and a `conformsTo` JSON object that tells clients the capabilities of the API. So clients start here, and then inspect to figure out what else the API can do.

**STAC Item Search**: The `search` endpoint has always been the center of the STAC API. We named the conformance class Item Search (link to tagged item-search), as we anticipate there will also be `collection` search in the future. Implementors can choose to just implement core and Item Search.

**OGC API — Features**: The final set of functionality is to declare that a STAC API is fully compliant with OGC API — Features. We specify it in our ogcapi-features (link to tagged version) directory, referencing the OGC API conformance classes, while also adding a STAC conformance class to indicate that the OGC endpoints will return STAC Items.

For this release we really focused on getting the structure and core conformance classes right, to lay the groundwork for future improvements. The vast majority of the functionality stayed exactly the same, the big shift is just that services will need to declare their conformance. We also changed the way that the specification is built and served, with a new Continuous Integration system that publishes the resulting files (both dev changes and released versions) to github pages. This removes the need to constantly update the combined OpenAPI documents in the main repository. The other major change came from trying to make our OpenAPI fragments more reusable, so we ended up making a ‘fragments’ folder that contained OpenAPI yaml files that could be reused in other extensions.

### In Coming Releases

There are a number of things we plan to do for the next release:

**Build Additional Functionality**: We came close to adding a couple major pieces of functionality, but both needed more work. We have a pull request to [enable collection-only STAC API’s](https://github.com/radiantearth/stac-api-spec/pull/71), as it is a fairly common use case in the STAC community. But it wasn’t quite ready to ship, and we hope to align further with OGC API. Similarly, we also worked to bring in [CQL](http://docs.opengeospatial.org/DRAFTS/19-079.html), to replace STAC’s custom filtering language and align more fully with OGC. But CQL was shifting a bit too much, so we’re leaving it as an [open pull request](https://github.com/radiantearth/stac-api-spec/pull/51), and we’ll release when after CQL goes to public comment with a tagged release. Feedback on both open PR’s (collections and CQL) is appreciated. The other anticipated functionality, that has not yet been fleshed out in a pull request, is enabling the search of collections. This likely will align with [OGC API — Records](https://github.com/opengeospatial/ogcapi-records) work, and they’ve also been working to align many of their components with how STAC has done things.

**Become More Developer Friendly:** Working with OpenAPI can be a bit annoying, and we were never all that happy with our previous tooling. The current tooling lacks some things the old tools had, and we didn’t want to hold up the release to get that all perfect. The core restructuring should make it easier to actually work with the OpenAPI files, but we need to invest a bit more to create nice fully combined OpenAPI documents, tools to work with OpenAPI files locally, and tools to help developers easily create the right OpenAPI documents for their service.

**Refine Conformance Classes**: This is our first release of conformance classes, so they may evolve a bit as to how exactly we use them, and how we combine with OGC’s classes. Feedback on these is definitely appreciated.

### Feedback and the path to 1.0.0

The core team would very much appreciate feedback from everyone on whether this release all works properly. We didn’t change much functionality at all, so there shouldn’t be lots of new code required, but we want to be sure that the way we’ve divided things up and the new conformance classes make sense.

![](/assets/img/posts/the-first-stac-api-1-0-release-1-0-0-beta-1/1_dXkiIP3CcIlJVZjGNIEuLQ.png)

So please upgrade and let us know on [our gitter](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) of in the issue tracker if there’s any issues or improvements you’d like. If there are any issues we’ll do a quick beta.2 release, and if not we’ll be focusing on getting CQL and Collections in, and further aligning with OGC API. We don’t anticipate any major changes in the path to 1.0.0, except as may come out to align with OGC API, as many of its core pieces are still shifting.

A big thanks to everyone who helped make this release possible, especially Matt Hanson and Matthias Mohr (as always). And thanks to every STAC API implementor who builds on this and validates that it’s all working — we appreciate your taking a chance on a spec that is still in motion, and collaborating with us to make it great.
