---
layout: post
title: "SpatioTemporal Asset Catalog (STAC) 1.0.0-rc.1 Released"
date: 2021-03-10
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-stac-1-0-0-rc-1-released-59e7946b3873
image: /assets/img/posts/spatiotemporal-asset-catalog-stac-1-0-0-rc-1-released/1_QzytNCBC9dIN9WAOM49ZDg.png
---

![](/assets/img/posts/spatiotemporal-asset-catalog-stac-1-0-0-rc-1-released/1_OlWUqpo1fcgpWKh3C8FuNQ.png)

Last week the STAC community came together and sprinted to release version [1.0.0-rc.1](https://github.com/radiantearth/stac-spec/releases/tag/v1.0.0-rc.1), the most critical step on our [path to STAC spec 1.0.0](https://medium.com/radiant-earth-insights/the-path-to-stac-1-0-0-6bedc0f644d). This is a ‘release candidate’, meaning we believe the specification is completely set for 1.0.0, but we want to put it in the hands of implementors and gather feedback and reviews before the final release.

So if you have implemented STAC in the past please take the time to upgrade your software or catalog to the latest specification (see the change summary below for what’s changed). Our aim is to sprint for the next few weeks to upgrade as many implementations as possible to validate for the final release. The nature of a ‘release candidate’ means that if any implementations find problems in the specification we will make another ‘release candidate’ and give it a couple of weeks for feedback, doing so until we iron out all the issues. The newly formed Project Steering Committee has aligned on targeting the end of April for 1.0.0 final release, aiming to do any needed additional release candidates before then.

![](/assets/img/posts/spatiotemporal-asset-catalog-stac-1-0-0-rc-1-released/1_QzytNCBC9dIN9WAOM49ZDg.png)

## 1.0.0 Sponsors

I am also pleased to announce that we’ve had great financial support from a number of sponsors, who are key to helping create STAC 1.0.0 and the robust ecosystem around it. [Microsoft](http://microsoft.com) has really demonstrated its commitment to the STAC ecosystem, coming in as a Sustaining Sponsor. And [Planet](http://planet.com) has continued to support it at a high level, as a Platinum sponsor. They’re joined by [SparkGeo](https://sparkgeo.com/), who has been one of the most consistent supporters of STAC, along with [Element 84](https://www.element84.com/) and [Arturo](https://arturo.ai/), who are all contributing with employee time as well. Our newest STAC sponsor is [Umbra](https://umbra.space/), an awesome new SAR start-up, and they’re joined by [Azavea](https://www.azavea.com/) as a supporter. A new STAC ‘Project Steering Committee’ has been formed to direct the project, and they will also prioritize who the funds are applied to best further STAC.

## 1.0.0-rc.1 Implementation Funding

The first application of the sponsorship funds will be to fund STAC implementations to upgrade to 1.0.0-rc.1, in order to test the release candidate as robustly as possible in a short amount of time, so that we can feel confident in releasing 1.0.0 final. ‘Implementation’ means both online, public STAC catalogs, as well as software that supports STAC (clients, servers and creation tools). If you are a maintainer of a STAC catalog or software implementation or are interested in creating a new one there may be funding available. Just get in touch by emailing the STAC Project Steering Committee at stac-psc [at] radiant.earth.

## Change Summary

We’ll do a full articulation of the changes for 1.0.0 when we announce the final release. You can view [the changelog](https://github.com/radiantearth/stac-spec/blob/v1.0.0-rc.1/CHANGELOG.md#v100-rc1---2021-03-03) for all the details, but I wanted to give a quick overview for implementors of what to watch out for in upgrading to 1.0.0-rc.1.

The most impactful change was [moving many extensions](https://github.com/radiantearth/stac-spec/issues/946) out of the core spec. The ‘extensions’ directory started as a place to propose extensions to the spec. While many matured to be super solid there were many more that remained immature. With the 1.0.0 release we wanted to ensure that any extension that is part of the core repository is super reliable and stable. So we crawled the existing ecosystem to analyze what was mature enough to stay in core. We ended up with just 4 extensions in core: [View](https://github.com/radiantearth/stac-spec/tree/v1.0.0-rc.1/extensions/view), [EO](https://github.com/radiantearth/stac-spec/tree/v1.0.0-rc.1/extensions/eo), [Scientific Citation](https://github.com/radiantearth/stac-spec/tree/v1.0.0-rc.1/extensions/scientific) and [Projection](https://github.com/radiantearth/stac-spec/tree/v1.0.0-rc.1/extensions/projection). But the rest are not gone, they’ve just moved over to a new GitHub Organization called ‘[stac-extensions](https://github.com/stac-extensions)’. Most of the extensions have the same content, but the main change for implementors will be the non-core ones no longer can be referred to by their ‘short names’ in the stac_extensions field. They must provide a link to the schema. Those schemas will naturally be versioned, as every extension repository is set up to publish schemas automatically on each new release of the plugin.

There are also a number of new extensions that have been created since the 1.0.0-beta.2 release. The [processing extension](https://github.com/stac-extensions/processing) provides additional lineage and processing level information for using STAC to track the state of products in an image processing chain. The old ‘checksum’ extension evolved to become the [file extension](https://github.com/stac-extensions/file), adding new fields like data type, no data value, byte order and size that are useful for clients to know more about the properties of the asset they may download or stream. And the [card4l extension](https://github.com/stac-extensions/card4l) translates the [CEOS Analysis Ready Data](https://ceos.org/ard/) standard into JSON and STAC, bringing together a number of other STAC extensions to fully describe [ARD](https://medium.com/planet-stories/analysis-ready-data-defined-5694f6f48815).

The other changes include adding a required ‘type’ field to Collections and Catalogs, so that clients can more easily distinguish them. And the ‘[collections asset](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.2/extensions/collection-assets)’ got upgraded to just be a part of the core specification: Collections can now add Asset objects without having to explicitly declare an extension. Past that were a number of more minor changes, see [the changelog](https://github.com/radiantearth/stac-spec/blob/v1.0.0-rc.1/CHANGELOG.md#v100-rc1---2021-03-03) for complete details.

Thanks everyone for supporting STAC to get to this point, especially everyone who has contributed to the specification and the ecosystem. It’s been a journey to get here, and things should get very exciting after 1.0.
