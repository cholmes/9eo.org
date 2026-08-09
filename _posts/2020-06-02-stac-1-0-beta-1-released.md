---
layout: post
title: "STAC 1.0-beta.1 Released!"
date: 2020-06-02
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-1-0-beta-1-released-c7abed779d5d
image: /assets/img/posts/stac-1-0-beta-1-released/1_FnxPc85PiouOGnDofM0Rig.png
---

The SpatioTemporal Asset Catalog community is incredibly proud to announce the release of STAC 1.0! If you want to get technical it’s 1.0-beta.1, which means that everything is not yet *completely* locked in. And it’s just the core specs, as we’ve split off the STAC API into its own repository, and its 1.0-beta.1 release will follow. But this is a huge milestone, as it symbolizes that the community has worked through every *known* issue and desired improvement. It is the beginning of the final stabilization steps, to ensure STAC will be a stable core that people can build on for years and even decades to come.

The reason we are calling it a ‘beta’ release is so that the specification is not so set that we can’t take additional feedback as we push to get it much more widely adopted. The goal between beta.1 and 1.0.0 is to update every piece of software that has implemented STAC, as well as upgrade all the existing STAC Catalogs to the latest, so we are sure our changes work for everyone. And then we will also be doing a big push to diverse data providers to get them to try out the latest and make sure it works for them. If something is unaccounted for or off then we can still make some final tweaks, which we *really* do not want to do after 1.0.0.

Which is to say, if you’ve been following STAC but have not actually implemented it yet then now is the time! You can expect that things won’t be changing much at all, but if *you* discover something that doesn’t work or a tweak that is needed then we still have the ability to change it.

![](/assets/img/posts/stac-1-0-beta-1-released/1_FnxPc85PiouOGnDofM0Rig.png)

*STAC Browser working with a new 1.0.0-beta.1 Sentinel 2 Catalog*

Before I dig into the changes, I’d also like to thank the full STAC Community for getting us to this point. And in particular, I want to thank [Mathias Mohr](https://twitter.com/matthmohr) of [OpenEO](http://openeo.org) and [Matt Hanson](https://twitter.com/geoskeptic) of [Element84](https://www.element84.com/) for their tireless work. The two of them have been the most consistent collaborators through the whole process, and the STAC spec would be almost nowhere without their heroic efforts.

## STAC 1.0-beta.1 changes

Though some decent changes were introduced in this release, the theme was really streamlining the specifications. We even removed some functionality, and then made a few things more flexible. There were over 30 pull requests and more than 200 commits. You can read the [full changelog](https://github.com/radiantearth/stac-spec/releases/tag/v1.0.0-beta.1), or read on for a detailed summary.

### STAC API Split

The biggest change is that we’ve pulled the STAC API portion of the specification into its [own repository](https://github.com/radiantearth/stac-spec), as was [previously planned](https://medium.com/radiant-earth-insights/stac-path-to-1-0-and-0-9-0-release-candidate-6f9ecfffecbe#a328). It always felt a bit different than the core STAC JSON specifications, as it takes the STAC content model and fits it into the OGC Features API, adding a few extensions of interest to the STAC community. So putting it in its own repository enables it to follow its own release schedule, tracking both STAC core and OGC Features API (and its extensions) as dependencies. We’re hoping that STAC API 1.0-beta.1 will follow in a month or two.

### Additional Flexibility

There were a few changes to enable more flexibility, mostly driven by communities working with multi-dimensional data. The first started with people in the [Open Data Cube](https://www.opendatacube.org/) community, who wanted to be able to use STAC to populate their catalog without having to open every single file. They [proposed a ‘grids extension’](https://github.com/radiantearth/stac-spec/pull/688), but it ended up evolving to a more general solution. One part of the solution was adding `proj:shape` and `proj:transform` to the [Projection Extension](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.1/extensions/projection). Combining these with the projection information enables the creation of ‘virtual rasters’ (like [GDAL VRT](https://gdal.org/drivers/raster/vrt.html)’s), enabling users to treat a set of STAC Items as a single asset.

The other part of the solution spurred a larger change, that made sense for a number of additional use cases. That was to [add](https://github.com/radiantearth/stac-spec/pull/788) the ability to incorporate [additional fields for assets](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#additional-fields-for-assets), using fields from the ‘properties’ section of an Item to its individual assets. This lets an asset provide more detailed info than is available at the collection level. For example the ‘gsd’ (resolution) of many satellites is actually different depending on the band, and the bands are available as individual assets, so you can now specify the gsd of each band, in addition to providing the ‘best’ gsd at the Item level. The big caveat with using this construction is that most clients searching STAC Catalogs won’t be able to use it, so the recommendation is still to use the Item properties as much as possible. We put into the best practices document some [examples](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.1/best-practices.md#common-use-cases-of-additional-fields-for-assets) of cases where it likely makes sense to use the asset fields.

The other set of changes came from interactions with the [PanGeo](https://pangeo.io/) group who work extensively with climate modeling data stored in the [zarr format](https://zarr.readthedocs.io/en/stable/). They have been inspired by STAC but felt it didn’t quite fit the shape of their data, so created the [ESM Collection spec](https://github.com/NCAR/esm-collection-spec) that was similar to STAC. We had some good discussions in [our repo](https://github.com/radiantearth/stac-spec/issues/713) and [theirs](https://github.com/NCAR/esm-collection-spec/issues/21), and even held a mini ‘sprint’ to push forward. The result is that ESM will be a STAC extension, and the STAC core has had a few tweaks. The main one is more flexibility on the time fields, so that multi-dimensional data cubes that span decades aren’t forced to pick a single datetime, they can set it a `null` and then must use the `start_datetime` and `end_datetime` fields in the [Common Metadata](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.1/item-spec/common-metadata.md) to define a time range (see the [datetime selection](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.1/best-practices.md#datetime-selection) best practice for more information).

![](/assets/img/posts/stac-1-0-beta-1-released/1_ZI083NaQOWLK_b4j1q1ePQ.png)

*See the [WGISS-49 site](http://ceos.org/meetings/wgiss-49/) for slides from a great STAC session.*

The final change to increase flexibility also came up in [feedback from ESA](http://ceos.org/document_management/Working_Groups/WGISS/Meetings/WGISS-49/1.%20Tuesday%20April%2021/20200421T1415_ESA_FedEO_STAC.PPTX) in the [WGISS-49 virtual conference](http://ceos.org/meetings/wgiss-49/), which is to [add](https://github.com/radiantearth/stac-spec/pull/800) [collection level assets](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.1/extensions/collection-assets). Their use case was to be able to make metadata assets available at the collection level, OpenEO is adding thumbnails of collections, and the zarr assets make much more sense at a collection level. This is starting as an extension, to gauge wider uptake, but is a good candidate to evolve into the core.

### Additional Extensions

A couple of new extensions were also added. The first is the [timestamps extension](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.1/extensions/timestamps), which adds `published`, `expires`, and `unpublished` to the core `created` and `updated` fields. And these now take advantage of the new ability to add [fields for assets](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#additional-fields-for-assets), by using the same fields, but having their meaning depend on if they are applied at the item (properties) level or at an asset level. So the whole item can be published at one time, but individual assets can have their own published timestamps.

The second is the [Tiled Assets](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.1/extensions/tiled-assets) extension, which targets use cases like global mosaics and large strips of satellite capture data. These can make sense as a single STAC ‘Item’, but can have thousands of individual files as the data is so large that it makes sense to split it up. A common approach to global mosaics is to split them into a regular grid of [COG](https://www.cogeo.org/)’s, and so the tiled asset extension makes it much easier to include those in STAC. The resulting catalogs can then be read directly by COG-aware clients like [COG Explorer](https://geotiffjs.github.io/cog-explorer/), or used to power compositing tile servers.

### Removals!

Though it may seem like taking things out is not something to celebrate, our belief is that the core of the specification should be a small, flexible core that is easy to understand and extend. So there have been a few things we removed. The biggest was the [Commons extension](https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/commons), which was a cool construction to enable items not to have to repeat a field that was the same in every single one. But as STAC evolved there was a need to [provide an overview of all fields](https://github.com/radiantearth/stac-spec/issues/413) in the collection, not just the common ones. So the ‘summary’ construct was added. This ended up handling many of the common use cases, and with a few tweaks to how the EO `bands` object is handled, we were able to remove it. We also removed a number of the warnings in the spec about how it is unstable since we are moving towards stability. The ‘how to help’ document was also removed since it was quite outdated, and we are working to find a good home for that type of information. And the ‘implementations’ list was migrated to [stacspec.org](https://stacspec.org/#tools), as it was a bit weird to have specification releases include a list of implementations that would always be out of date (since they need the spec released to implement).

### Supporting Documents

There was also work done on the documents that aren’t the spec itself, but support its use. An [overview](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.1/overview.md) was added to paint the full picture of what a SpatioTemporal Asset Catalog is and explain how the 3 sub-specifications fit together into a coherent whole. The [best practices](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.1/best-practices.md) document had a number of additions. It is shaping up to be a very nice aspect of the specification — we want the core to be flexible, but we also want to guide new users towards things the community has figured out. So the best practices is a great place to put informative learnings without having to bulk up the main spec documents. There was also lots of minor cleanups, consolidating some of the documents so that people don’t have to get their head around so much at once.

We also added a [code of conduct](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.1) — thanks to [Netlify](https://www.netlify.com/) for actually spurring us to do it. They require one in order to qualify for their free hosting for open projects. This was an easy decision, as our community norms were already completely in line with it, but it is important to make those norms explicit. Thanks also to GitHub for making it so easy to add.

![](/assets/img/posts/stac-1-0-beta-1-released/1_Uc81xDVPdxMHZfRNKIWa8A.png)

## What’s next

![](/assets/img/posts/stac-1-0-beta-1-released/1_NXz8Y3u_2VK97vV087QyBA.png)

So what’s next? The goal is to really focus on updating all the existing catalogs and software to 1.0-beta.1, encouraging as many new implementations as possible so that we are sure the specification is really solid. We will likely organize a virtual sprint as soon as we have some of the core tools ([STAC Browser](https://github.com/radiantearth/stac-browser), [PySTAC](https://github.com/azavea/pystac), etc) up to date. And thankfully Radiant Earth [just announced](https://twitter.com/OurRadiantEarth/status/1265650564341338113) Rob Emanuele as a new Technology Fellow to help further the STAC ecosystem, and he’s already been making progress.

So join us on [gitter](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) if you want to help out or have any questions, and keep an eye out for a sprint in the next couple of months. Thanks!
