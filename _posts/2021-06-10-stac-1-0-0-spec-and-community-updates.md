---
layout: post
title: "STAC 1.0.0: Spec and Community Updates"
date: 2021-06-10
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-1-0-0-spec-and-community-updates-164f7083f42
image: /assets/img/posts/stac-1-0-0-spec-and-community-updates/1_r-rOyrPgmpyX2i7Wy9-gRA.png
---

While we just [announced STAC 1.0.0](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077), the initial post did not contain any of the typical information we normally include in a STAC release announcement. So in this post, we’ll dive into the details of what changed in the specification, including extensions, as well as some of the community highlights. And this will just be one of several posts diving deeper into STAC topics, including the wider ecosystem of tools.

## Spec Changes

As always, the most definitive list of what has changed between versions of STAC is the [CHANGELOG](https://github.com/radiantearth/stac-spec/blob/v1.0.0/CHANGELOG.md), but it’s always good to draw attention to the highlights. So I’ll summarize here the major changes, building on the [changes summarized](https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-stac-1-0-0-rc-1-released-59e7946b3873#daf7) in the 1.0.0-rc.1 release, including rc.2, rc.3, and rc.4.

![](/assets/img/posts/stac-1-0-0-spec-and-community-updates/1_r-rOyrPgmpyX2i7Wy9-gRA.png)

The biggest change was moving all extensions out of the core specification, into the [stac-extensions](https://github.com/stac-extensions/) github organization. This change was detailed [in-depth in the 1.0.0-rc.1 announcement](https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-stac-1-0-0-rc-1-released-59e7946b3873), but we ended up liking how they worked so much that we transitioned the final 4 ‘core’ extensions to also live as their own repositories. The forcing function on this was a great new [‘raster’ extension](https://github.com/stac-extensions/raster), which we realized would likely impact the EO extension. If EO was in the core specification then we’d need to cut an entirely new STAC core release, while in its own repository it’d just be a ‘2.0.0’ release that users could choose to pick up or not. The change also eliminated the previous ‘shortcut’ notation, where users could just list a specified name like ‘eo’ instead of the full link to the schema. It ended up feeling much cleaner to provide exactly one way to specify an extension, even though the shortcut was often convenient to use.

Another change that brought a [lot of discussions](https://github.com/radiantearth/stac-spec/issues/1045) but ended up with only minor changes in the specification was to make our ‘summaries’ a bit more flexible. Users can now use JSON Schema to specify extra values in their summaries, which seemed like a nice way to meet all the desired use cases with only very minimal breakage.

The rest of the changes were all quite minor, mostly clean-ups and clarifications. Things like updating examples, clarifying that all timestamps should be in UTC, clarifying [our use of the term GSD](https://github.com/radiantearth/stac-spec/pull/1105) and requiring it to be above 0, and various other small updates. It’s easiest just to read the changelog for them, as it summarizes them and then links to the exact pull request or issue for the change.

### Extensions

There has been a lot of interesting work done on extensions to STAC. These no longer move at the same release schedule as the core, and we expect to see most of the new ideas in STAC taking place in extensions, while the core remains super stable. In addition to the [processing extension](https://github.com/stac-extensions/processing), the [file extension](https://github.com/stac-extensions/file), and the [card4l extension](https://github.com/stac-extensions/card4l) that were released with rc.1, there are a few new extensions.

![](/assets/img/posts/stac-1-0-0-spec-and-community-updates/1_lU0fKjaztTwbfRlhWPE_TA.png)

The [raster extension](https://github.com/stac-extensions/raster) can be used to describe any type of raster. It is inspired by the type of information you get from a `[gdalinfo`](https://gdal.org/programs/gdalinfo.html) call, giving information for each band about its data type, nodata values, spatial resolution, [scale & offset for radiometric calibration](https://github.com/stac-extensions/raster#use-scale-and-offset-as-radiometric-calibration-parameters), and even returning the pixel [statistics](https://github.com/stac-extensions/raster#statistics-object) and [histogram](https://github.com/stac-extensions/raster#histogram-object). This in turn caused an [evolution](https://github.com/stac-extensions/file/pull/3) in the file extension, as many of its fields only really applied to raster data, so those are now in the raster extension, and the file extension is just fields that could apply to any file.

And two new extensions have also advanced substantially. The [mgrs extension](https://github.com/stac-extensions/mgrs) has a few values for the Military Grid Reference System, which is used by Sentinel, but also other missions, so it made sense to make it a more general, reusable set of fields. It just had its 1.0.0 release. And the [storage extension](https://github.com/stac-extensions/storage) gives additional information about how data is stored, particularly on different clouds. It still has some [open issues](https://github.com/stac-extensions/storage/issues) to be resolved before its first release, so if you are interested in using it then please sound in.

## Community

![](/assets/img/posts/stac-1-0-0-spec-and-community-updates/1_gBGUT-QQh1T0wf6Wr879qQ.png)

One of the changes in STAC that I’m most proud of is that [I’ve abdicated my role as ‘Benevolent Dictator’](https://github.com/radiantearth/stac-spec/commit/c61d14007bdd8a4bc2923d1295880fdb510a4090#diff-3f55bd147d176dfa45880834e7db5c523b129842680e7a42dc2598615e615788L73-R117), in favor of a [Project Steering Committee](https://github.com/radiantearth/stac-spec/blob/v1.0.0/process.md#current-project-steering-committee). This is a key step in the maturity of any open project, and it can only happen when there are enough contributors to actually share responsibility for the project. We’ve started with just a 5 member Project Steering Committee, but aim to grow it in the next year, as there are many worthy contributors. Most all decisions about the spec itself will be made as they always have been, discussions in the issues and Pull Requests, reaching consensus with all committers to the specification. The PSC is just the decider of last resort if consensus can not be reached, replacing a single person. This was never actually used during any of STAC’s development, though the PSC has made some calls during the release candidate process about what level of ‘breaking change’ is acceptable.

![](/assets/img/posts/stac-1-0-0-spec-and-community-updates/1_cFTFDvTQtaiRxX8VXD27hA.png)

The main thing the PSC has been active in is dispersing the ‘STAC 1.0.0’ funds from our sponsors. I’ll dive deep into all that has been funded in my next post on the STAC ecosystem, as well as the plans for the remaining money. But we raised over $100,000, which has been used to fund a number of projects to do the final upgrades and testing of the specification, ensuring it’s truly stable at version 1.0.0. And we’ve got a bit of funding still available to fund further tool advances, get STAC API to 1.0.0, upgrade the website, and build out a lot more training and education materials.

In other community news, we now have a discussion forum!

![](/assets/img/posts/stac-1-0-0-spec-and-community-updates/1_QrdotKPKl9qA-lKohaOr1w.png)

We wanted a more friendly place to ask questions and get support. Our [gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) is great, but the answers aren’t persistent in any way. The new forum hopefully helps us build a knowledge base that grows over time. We decided to try out GitHub’s new discussion feature, on the main stac-spec repository. So please [join, introduce yourself](https://github.com/radiantearth/stac-spec/discussions), and feel free to ask any questions about STAC. We’re defining it quite broadly, so anything about the spec, extensions or any of the tools in the ecosystem is fair game.

## More STAC 1.0.0 Information

This post is just a small part of the overall blog series on STAC 1.0.0. Start with the [main announcement](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077), and follow the growing number of posts linked at the bottom to learn more.
