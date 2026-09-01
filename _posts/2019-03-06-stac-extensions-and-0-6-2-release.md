---
layout: post
title: "STAC Extensions and 0.6.2 Release"
date: 2019-03-06
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-extensions-and-0-6-2-release-b0cf34272ed7
image: /assets/img/posts/stac-extensions-and-0-6-2-release/1_uSgaZjVk21VYMxaKOUoTQQ.png
---

In my [last post](https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-stac-community-advances-and-0-6-1-release-bddcd967d86f) on SpatioTemporal Asset Catalogs (STAC), I alluded to a next post to discuss ‘extensions’ — describing our community’s philosophy on them and highlighting the awesome work that has been happening. But yet again, I can’t quite keep up with all the community activity, as I also need to announce the latest STAC release. Happily, the two topics dovetail beautifully as many of the highlights of 0.6.2 are work done on extensions.

## STAC 0.6.2 Release

First up is the 0.6.2 release. Similar to the 0.6.1 release, it is mostly some small ‘fixes’: updated examples, spec language that wasn’t quite right, and updating the [implementation page](https://github.com/radiantearth/stac-spec/blob/v0.6.2/implementations.md) to link to more catalogs. Plus, we improved our JSON Schemas — for stricter checking of version numbers and compatibility with the last JSON Schema specs. But, we did decide that ‘minor’ releases like this one could include additional STAC extensions, as those right now are more of a community where ideas evolve. Thus, in this release, we are adding in 4 new extensions, which are all in ‘proposal’ status of our [Extension Maturity](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions#extension-maturity) classification. This means that they are solid ideas seeking more input from real-world implementations. As extensions get more implementations and testing, it will move up the maturity classification to become stable extensions that everyone can rely upon.

![](/assets/img/posts/stac-extensions-and-0-6-2-release/1_vs1fJZIqztqjXeMFNtNK5A.png)

*Sentinel 1 SAR Data visualized in Google Earth Engine*

The first is for [***Synthetic Aperture Radar](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/sar)*** (SAR) data, which had lots of great discussion in its [initial pull request](https://github.com/radiantearth/stac-spec/pull/347). The main driver of the extension is the [OpenEO project](http://openeo.org/about/), which has an incredible community with a wide range of expertise. They rallied their SAR experts to shape the first draft of the extension, who gave all kinds of great feedback. It’s now published in the STAC repo to get more people looking at it and commenting, and trying to use it in their implementations. OpenEO is mostly focused on ‘[collection](https://github.com/radiantearth/stac-spec/blob/v0.6.2/collection-spec/collection-spec.md)’ level data, so it would also be awesome to get a large SAR dataset as a full STAC Item catalog. [Sentinel 1 on AWS](https://registry.opendata.aws/sentinel-1/) is a great candidate, so if anyone reading this is interested in some STAC work that would help the world, please do get in touch — we can likely find the AWS credits to run the process at scale.

The [***Data Cube](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/datacube)** *extension has also been driven by the OpenEO community, as it is a datatype that is quite common in their community. It also is the first step of [collaboration](https://github.com/radiantearth/stac-spec/issues/366) between the n-Dimensional data community that uses NetCDF and related protocols and STAC. There was a great discussion between the groups a month or so ago, and we are working on figuring out where more interaction makes sense. But the STAC Data Cube extension can be used to describe a data cube, to help make the data more searchable and interoperable with other data formats in STAC. There was a [good discussion in the initial PR](https://github.com/radiantearth/stac-spec/pull/361), with many diverse experts participating. We hope to drive towards some STAC implementations of weather data to drive the Data Cube and possibly other n-Dimensional data types. And to also explore if some traditional NetCDF community tools like OPeNDAP and THREDDS might implement [STAC API](https://github.com/radiantearth/stac-spec/tree/v0.6.2/api-spec) for interoperability.

![](/assets/img/posts/stac-extensions-and-0-6-2-release/1_uSgaZjVk21VYMxaKOUoTQQ.png)

*View of San Francisco from open USGS 3DEP LiDAR AWS Public Dataset*

[Hobu](https://hobu.co/) and others from the PDAL / point cloud community have been [working](https://github.com/radiantearth/stac-spec/pull/369) on the STAC extension for [***Point Clouds](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/pointcloud)***, including [a script](https://github.com/radiantearth/stac-spec/blob/v0.6.2/extensions/pointcloud/pdal-to-stac.py) to turn PDAL output into STAC. The project driving this is the recently released [USGS 3DEP LiDAR Point Clouds AWS Public Dataset](https://registry.opendata.aws/usgs-lidar/). They are putting up all USGS LiDAR data, served as [entwine](https://entwine.io/) resources, making them fully [viewable and streamable online](https://usgs.entwine.io/). The aim is to get a good metadata story for that project, and STAC seemed like a great fit. They are driving some improvements in the core STAC spec on how we handle relative and absolute links, but the next version of the spec should meet their needs. Additional feedback from others using STAC for point clouds is quite welcome at this stage.

There was also a [***Checksum](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/checksum)*** extension to enable MD5, SHA1, SHA2, and SHA3 file checksums to verify the integrity of assets and links in STAC catalogs.

## STAC Extensions in Depth

It’s been awesome to see more extensions come in, but most everyone building them has had some questions about how they fit in and how to scope a new extension. So this section will explore in more depth the history of STAC extensions and our philosophy as to why they are so important.

### STAC Extension History

The idea of a very small core spec and a rich ecosystem of extensions goes back to the very first [STAC Sprint](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595). While most attendees were deep in the satellite imagery world, we realized that making a specification that was only focused on the search fields we needed would limit the long term interoperability. Users don’t want to search in one place or one format for imagery, and then find all the other data in some other way. So we took our initial list of fields and pared them back to the core of space (by using GeoJSON), time (with the required DateTime field), plus links (to describe relationships) and assets (to link to the actual data described). The hope was that this core could be used by any type of data that had a place on earth and a time or time range, to enable the lowest common denominator for the discovery of data. In the second sprint we nailed down the first extension — the EO extension, to represent the satellite imagery that most participants were working with — so that the core group could [dogfood](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) the idea and make sure it worked.

### STAC Extensions Philosophy

In STAC there are two ‘types’ of extension — one that adds functionality (like [transactions](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/transaction) or the [commons](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/commons) extension), and one that adds specific content fields to the ‘properties’ section of the core Item GeoJSON. We originally differentiated them, but for now, they are both just called ‘extensions.’ For this post, I’m going to focus on the ‘content extensions,’ as that’s where the most interesting activity is happening.

The core philosophy of content extensions in STAC is to enable ‘bottom-up’ interoperability. Anyone can publish a new extension and start using it, and if others like the metadata used, they can adopt the same terms. If a few different catalogs are all describing similar things, they can work together to get to a set of common terms.

The first goal is to make it easy for a data set provider to use STAC and adapt it in whatever way they want. Adopting STAC should enable a data provider to do minimal work to map their asset time, geometry and asset links to STAC, while just using their existing fields. Then they can slowly evolve to use ‘common’ STAC extensions, or work to promote ‘their’ fields as a standard.

The key to this is the nature of JSON Schema, which enables a ‘soft validation’ — failing only if the bits it is looking for aren’t there. This contrasts to XML’s hard validation, where everything has to be specified up front. This enables a provider to use the STAC core alongside their vendor-specific parameters, and then to even start to mix in a domain-specific extension, like EO.

This lets standards evolve through real-world usage, and to evolve iteratively. It doesn’t require every stakeholder to get in a room and agree on the exact right fields and options — instead, it says the priority is to *publish* your data, so it is actually out there, and then together the publishers can evolve their fields together.

### STAC Extensions Folder

STAC aims to encourage that evolution with the [extensions folder](https://github.com/radiantearth/stac-spec/tree/master/extensions) in the spec’s Github repository. It is a place where any implementor can propose fields that are potentially more widely applicable than just their data. Each extension is labeled with a ‘maturity classification’ that lets others know how likely the extension is to change in the future.

![](/assets/img/posts/stac-extensions-and-0-6-2-release/1_usTDbtL668kI2nvXe9fW4Q.png)

The goal is to enable specific communities to work together to find a ‘good enough’ set of common metadata. The [Electro-Optical (EO) extension](https://github.com/radiantearth/stac-spec/tree/v0.6.2/extensions/eo) is a good example of this working together: we [surveyed](https://github.com/radiantearth/catalog-implementor-survey/tree/master/json-metadata) a number of the imagery providers to see what the most commonly used fields were and then made a call. So for cloud coverage, the options were to make it from 0 to 1 or 0 to 100 and to call it cloud_coverage, cloudCover, cloud_cover. The group of implementors decided to call it ‘cloud_cover’ and use 0 to 100. But any implementor could continue to use their definition as well (ideally using a vendor ‘prefix’, particularly if they want to use the same name but define it differently) in case they had legacy users who wanted that field.

### Future of STAC & Extensions

Even though STAC is still relatively young, activity is already shifting to the extensions. This pattern should continue as STAC matures more, as it will mean we’ve had success in defining a small, flexible core. Indeed a milestone to measure STAC’s progress will be how many domains can successfully use not just the STAC core, but also to publish an extension. The core of STAC should be driven by the needs of the extensions, ensuring that the core is flexible enough to handle all the different types of data users want.

The main next goal with the current extensions is to get several implementations that use them, so we can get good feedback and help them mature. There is also a set of fairly obvious extensions we hope to tackle, that community members are already talking about, including full motion video, mosaics and drone/aerial imagery. But we are most interested in data that is represented in space and time that stretches STAC core. NetCDF type data is one type we’ve started to grapple with, and need to figure out how we might fit into an existing ecosystem that is already well established. Other types of sensor readings like air quality or water gauges are also interesting to consider. If you’ve got some data that you’re considering putting into STAC, please get in touch, as we’d love to hear from you.
