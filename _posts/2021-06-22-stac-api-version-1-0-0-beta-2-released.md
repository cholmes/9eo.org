---
layout: post
title: "STAC API Version 1.0.0-beta.2 released!"
date: 2021-06-22
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-api-version-1-0-0-beta-2-released-ea7d321db84d
image: /assets/img/posts/stac-api-version-1-0-0-beta-2-released/1_zyEA_PJ8qwKniqBaQMJLuQ.png
---

The SpatioTemporal Asset Catalog (STAC) Community is pleased to announce the release of version 1.0.0-beta.2 of the STAC API specification! A big thanks to Phil Varner for leading this release, and to everyone else who pitched in.

## What is STAC API?

As we are welcoming many new people to the STAC community with the [core STAC 1.0.0 release](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077) it’s probably worth explaining what this ‘API’ release is all about. STAC [originally started](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) from a desire to make a common API to help interoperability between satellite data providers, but soon evolved to focusing on the core JSON language to enable more general geospatial interoperability. The STAC repository initially contained both the API specification along with the [three ‘core’ specs](https://github.com/radiantearth/stac-spec/tree/v1.0.0) (Item, Catalog & Collection). But it was clear that the API really depends on the core, and expands it with additional functionality, so after version 0.9.0 we [decided to split STAC](https://medium.com/radiant-earth-insights/stac-path-to-1-0-and-0-9-0-release-candidate-6f9ecfffecbe#a328) into two repositories.

![](/assets/img/posts/stac-api-version-1-0-0-beta-2-released/1_zyEA_PJ8qwKniqBaQMJLuQ.png)

*Web Rendering of the STAC OpenAPI document*

The API specification is what enables ‘search’ of a STAC Catalog, and indeed is the functionality most people expect when they interact with one — selecting a geographic area and various criteria of the imagery or other assets that they’d like. So the core STAC Specifications just provide the core JSON objects to describe the data. The cool realization with ‘[cloud native geospatial](https://medium.com/planet-stories/cloud-native-geospatial-part-1-basic-assumptions-and-workflows-aa67b6156b53)’ is that putting that JSON directly in a cloud storage location actually enables a ton of use cases. And in turn, many STAC API’s can easily ‘ingest’ cloud-backed STAC implementations, providing the search API on top. But the organization sharing the data does not need to be the same one providing the API and index of the data, lowering the barrier to entry to providing data into the ecosystem.

The STAC API [extends and aligns with ](https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalogs-and-the-open-geospatial-consortium-659538dce5c7)the [OGC API — Features](https://ogcapi.ogc.org/features/) standard, so any client library that works with that standard will work with STAC. STAC API represents each collection of data as an OGC API Collection, but then additionally adds an ‘item-search’ endpoint to enable cross-collection search.

## What’s in STAC API version 1.0.0-beta.2?

The STAC community made a conscious choice to prioritize the core specifications, to give a stable base for the whole ecosystem. STAC API 1.0.0-beta.1 was released a few months ago, to give a foundation for API’s that could be versioned separately from the main specifications. The release of STAC API 1.0.0-beta.2 aims to ramp up the push for STAC API 1.0.0.

The biggest change in the release is the [new ‘Filter’ extension](https://github.com/radiantearth/stac-api-spec/tree/v1.0.0-beta.2/fragments/filter), which is designed to replace STAC’s [‘Query’ extension](https://github.com/radiantearth/stac-api-spec/tree/v1.0.0-beta.2/fragments/query) with a more standardized language for specifying which STAC Items to return based on the specified matching criteria. The Filter extension is based on [OGC API — Features Part 3: Filtering and the Common Query Language](https://www.ogc.org/standards/requests/229), aligning STAC more closely with OGC API — Features. STAC’s Query language was custom-designed for STAC, and had a plugin structure to add more advanced queries, but it stayed as a pretty simple, core language for STAC. So the community felt it’d be better to align with a full-fledged standard that would handle more advanced queries and evolve on its own. CQL did not drop in quite as seamlessly as we hoped, as the STAC Query is much easier to implement, but the two communities are[ in active dialog](https://github.com/opengeospatial/ogcapi-features/issues/579) to sort out the right subset of CQL to include in STAC. The exact path to include CQL in STAC and when the now deprecated Query extension will be fully removed is still up for discussion, but for the next STAC release, we will have a solid plan in place.

The other changes were more minimal, like recommending CORS be enabled and updating the STAC core specs to be 1.0.0. The full [changelog](https://github.com/radiantearth/stac-api-spec/blob/master/CHANGELOG.md) is available for those who want to dig in.

## What’s next for STAC API?

The main goal of the next STAC API release will be to get a [validator](https://github.com/stac-utils/stac-api-validator) in place so that we can ensure that the various implementations of STAC are all following the standard in the same way. This will help us find ambiguities in the specification. With that in place, the goal will be to get to STAC API 1.0.0 as soon as possible, so that we can have a stable specification to be able to submit to as an OGC Community standard. More features like collection-level search and further alignment with OGC API will come after that, and may well involve a STAC API 2.0, as we are following [Semantic Versioning](https://semver.org/), so any breaking change requires a new major version.
