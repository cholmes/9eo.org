---
layout: post
title: "SpatioTemporal Asset Catalog 0.5.0 Released!"
date: 2018-07-02
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-0-5-0-released-96130a226ded
image: /assets/img/posts/spatiotemporal-asset-catalog-0-5-0-released/1_cJePKJg0IqBT-90-KmohVw.png
---

![](/assets/img/posts/spatiotemporal-asset-catalog-0-5-0-released/1_cJePKJg0IqBT-90-KmohVw.png)

We are pleased to announce the release of [version 0.5.0](https://github.com/radiantearth/stac-spec/releases/tag/v0.5.0) of the STAC specification! Though a ‘major’ release since there is a version bump due to a very core change, it is a relatively ‘minor’ release as major releases go.

Unlike the last two [major](https://medium.com/radiant-earth-insights/announcing-the-spatiotemporal-asset-catalog-stac-specification-1db58820b9cf) [releases](https://medium.com/radiant-earth-insights/first-official-release-of-spatiotemporal-asset-catalog-spec-5b4e5587ba4c), this one is not the result of a big bang of energy from an in-person sprint, like we had from [Boulder](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) and [Ft. Collins](https://medium.com/radiant-earth-insights/progress-on-spatiotemporal-asset-catalogs-in-ft-collins-6298f195bfb2). Instead it’s just the typical open source progress of people collaborating online when they’re able to find time. Most of the activity is in the [github repo](https://github.com/radiantearth/stac-spec/pulls?q=is%3Apr+is%3Aclosed), as well as lots of great discussion in our [gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby). We are excited for our [next sprint](https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-progress-and-sprint-3-in-august-b4f59a895c1c) in August, and it’s shaping up to be a great gathering — submit on [the form](https://goo.gl/forms/8JwGZzhJ66lefR4o2) if you’re interested in joining.

As for the 0.5.0 release, there were still a number of great steps forward. Highlights include from the release notes include:

- Links is now a dictionary — This is the most core change done. It aligns the structure with the ‘asset’ change in 0.5.0, making it easier for clients to look up the link that they want more easily. The schema is updated to this (and actually checks assets better now, thanks [@mojodna](https://github.com/mojodna) )

- Transactions Extension — There is now a transaction extension for the STAC API, thanks to [@hgs-msmith](https://github.com/hgs-msmith) and [@hgs-trutherford](https://github.com/hgs-trutherford)

- Collections iterations [@matthewhanson](https://github.com/matthewhanson) has evolved the collections extension, adding in some namespace type hints on it, and explaining it more clearly.

- `eo:crs` to `eo:epsg` In the EO profile [@matthewhanson](https://github.com/matthewhanson) brought in a change to use EPSG code, instead of full Well Known Text, to make it easy to reference.

You can also check out the f[ull list of issues and pull requests](https://github.com/radiantearth/stac-spec/milestone/5?closed=1) in the github repository.

I’m excited that iteration of the specification is getting in to a groove, and is truly being fleshed out by real usage. I updated the ‘[static catalog examples](https://github.com/radiantearth/stac-spec/blob/master/static-catalog/examples.md)’ in the repository, and it was really cool to see the list of real world implementations get longer. I’m most excited about [CBERS](https://registry.opendata.aws/cbers/) and [SpaceNet](https://spacenetchallenge.github.io/), as they are both exposing their full catalog as STAC, and it’s the primary structure to get at their real data. And they’ve been helping guide the specification. We’re also seeing the GUI tools iterate and start to inform how the spec should evolve, making it more a part of the web.

Things are still evolving, but it’s feeling like the major changes are slowing down. The next goal is to stand up more and more data as STAC, and continue to tweak and evolve as the data and tooling continues to expand.
