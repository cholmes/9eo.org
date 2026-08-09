---
layout: post
title: "STAC 0.7.0 Release and New Website"
date: 2019-05-06
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-0-7-0-release-and-new-website-e7cf2c4c1f23
image: /assets/img/posts/stac-0-7-0-release-and-new-website/1_snrcPeLhlvYnTsJZjdv9Cg.png
---

I’m pleased to share two pieces of news about the SpatioTemporal Asset Catalogs Spec. The first is that we now have a [website](http://stacspec.org)!

![](/assets/img/posts/stac-0-7-0-release-and-new-website/1_snrcPeLhlvYnTsJZjdv9Cg.png)

The goal of the website is to be a much more approachable set of explanations than the [specification itself](https://github.com/radiantearth/stac-spec/). Having the specification live on GitHub was done on purpose to make it more accessible to developers, but it can be intimidating to non-developers. Putting up the website is indeed a milestone, signaling that STAC is maturing enough to welcome a wider audience.

A big thanks goes to David Gavin of [Digital Earth Australia](http://www.ga.gov.au/about/projects/geographic/digital-earth-australia) for doing all the initial website copy and styling at the [3rd STAC Sprint](https://medium.com/radiant-earth-insights/the-state-of-stac-talk-and-sprint-3-recap-cd8eda3b8bdb), with his ‘outreach’ group. We are hoping to have another outreach group do comparable tasks at the [4th Sprint](https://medium.com/radiant-earth-insights/join-stac-sprint-4-4e7fcd5e755), though the group at the last sprint set a very high bar.

The website is still not *quite* finished off; the last few [tasks](https://github.com/radiantearth/stac-site/issues) have been lingering, so we decided just to release it and to not let great be the enemy of good. Contributors are more than welcome on the site, as it is hosted on ‘GitHub pages’, just make pull requests to the [stac-site repository](https://github.com/radiantearth/stac-site/).

## 0.7.0 Release

The second milestone to share is the latest major release of the STAC specification. There were [over 50 issues and pull requests](https://github.com/radiantearth/stac-spec/milestone/9?closed=1) closed, and we’ve surpassed [1000 commits](https://github.com/radiantearth/stac-spec/commits/master) on the specification, and [30 different people](https://github.com/radiantearth/stac-spec/graphs/contributors) have contributed. One of the bigger changes was relaxing the requirement for`self` links to be absolute, to enable what we call ‘[self-contained catalogs](https://github.com/radiantearth/stac-spec/blob/v0.7.0/catalog-spec/catalog-best-practices.md#self-contained-catalogs)’, that are much more portable. A number of implementors identified that the required self-link was too onerous for their use cases. The link to self-contained catalogs above also shows the new [Catalog Best Practices](https://github.com/radiantearth/stac-spec/blob/v0.7.0/catalog-spec/catalog-best-practices.md) document, which is also new for 0.7.0. Implementors have discovered many good practices as they’ve created catalogs, and so we wanted to capture those. Some practices may eventually evolve to be a part of the specification, but for now, we want to keep the core as flexible as possible.

The other major set of improvements were around the [STAC API](https://github.com/radiantearth/stac-spec/tree/v0.7.0/api-spec). [Matthew Hanson](https://twitter.com/GeoSkeptic) leads the charge on that work, undertaking a complete overhaul of that sub-specification to clean it up and align its style with the others. He also made improvements to make it easier to edit the OpenAPI documents and then added in new functionality like the `page` field and search by `ID`.

There were also numerous other improvements throughout the specification and extensions, particularly in the [SAR extension](https://github.com/radiantearth/stac-spec/tree/v0.7.0/extensions/sar). Claudio Navacchi of TU Vienna, Gillian Walter of Maxar and Matthias Mohr of University of Muenster collaborated on the SAR improvements, adding fields for `sar:incidence_angle`, `sar:relative_orbit`, `sar:observation_direction`. You can read the full [0.7.0 release notes on github](https://github.com/radiantearth/stac-spec/releases/tag/v0.7.0). Thanks to everyone who worked on this version of the specification! It’s definitely a nice step forward.

## Sprint with us in 1 month!

I just wanted to close with one final reminder that you can join the core STAC community members in one month, for [STAC Sprint #4](https://medium.com/radiant-earth-insights/join-stac-sprint-4-4e7fcd5e755)! It’s hosted at [Planet’s ](http://planet.com)San Francisco office and runs June 4–6. There are only a few more in-person slots, so do [sign up](https://forms.gle/q3fCnjiyhAa8E77D9) soon. We will also run a ‘virtual’ session for people who can’t make it in person, but please sign up on the form as well, so you’re in the loop. We’re looking forward to furthering the STAC ecosystem with more implementations, while also making progress on the core spec — hopefully we’ll have a 0.8.0 soon after.
