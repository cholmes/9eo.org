---
layout: post
title: "STAC Path to 1.0 and 0.9.0 Release Candidate"
date: 2020-01-08
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-path-to-1-0-and-0-9-0-release-candidate-6f9ecfffecbe
image: /assets/img/posts/stac-path-to-1-0-and-0-9-0-release-candidate/1_W8GViOYbwlwU_0uMXhJ2Gw.png
---

First off — the SpatioTemporal Asset Catalog (STAC) community is pleased to announce the release of [0.9.0-RC1](https://github.com/radiantearth/stac-spec/releases/tag/v0.9.0-rc1). You can read the release notes at that link, and I’ll describe all the improvements and changes made in a blog post when we release 0.9.0. The main idea behind a release candidate is to give various STAC implementations the time to try out the new spec and give feedback, so we can correct any errors before we put the final version out. So if you have a catalog or maintain STAC software then please test out and let us know how it goes!

![](/assets/img/posts/stac-path-to-1-0-and-0-9-0-release-candidate/1_W8GViOYbwlwU_0uMXhJ2Gw.png)

## The Path to 1.0

One of the larger topics we discussed at [the last sprint](https://medium.com/radiant-earth-insights/ogc-api-features-stac-sprint-recap-6c876b44c9d2) was stabilizing the STAC spec and getting to a 1.0 version that people can rely upon for years. As larger organizations like USGS, NASA, DigitalGlobe, and Climate Corp start adopting STAC we need to be sure that they don’t need to continually update their catalogs to stay compliant. While the STAC community has always been upfront about the importance of being able to change the specification based on real-world feedback, at some point we need to lock things in so that tool makers and data providers can really rely on it.

Thankfully the timing of larger organizations relying on it has aligned with the core specification team feeling that there is less to change in the core. We tried to talk through all the big topics that had been previously raised and worked hard to update 0.9.0 to reflect those discussions. So the next release after 0.9.0 will be 1.0-beta! Though perhaps the bigger news is that our plan is to split the specification into two parts — core and API.

### Splitting the spec

There are a variety of reasons that we felt it makes sense to split the specification, but the biggest was that the API portion feels in much more active development than the core Item, Catalog and Collection specifications. So we wanted to be able to release the already solidifying core that can be used both standalone and as part of a STAC API, so that a wider group of organizations, including more conservative ones, can more easily adopt. STAC API has made great strides to align with OGC API — Features, but we depend on more than just the core. We want to be sure that the additional functionality needed in STAC uses all standard OGC API extensions, which will just take a bit more time.

The two parts of the specification also serve slightly different audiences, so making them separate documents should help clarify the message of what STAC is. We also hope to continue to align the STAC API so that it is a fully integrated part of the fuller OGC API ecosystem, to the point where it could become more of a ‘best practice’ of using a variety of the API components. But there’s a lot more work to get to that point, and the STAC community is excited to help it along. Our goal is to bring the proper API components of STAC more fully into the OGC API ecosystem.

### Release Roadmap

Once we get to a solid 0.9.0 release candidate, based on feedback from implementors, we will finalize it, and then fork the dev branch into two repos. The first priority will be getting the core of Item, Catalog, and Collection to 1.0.0-beta release. Our hope is to get that done by late winter / early spring. This release will be our current best take on what 1.0.0 will look like, but we call it beta so that we still have the flexibility to change things, in case we get some major feedback from unexpected directions. It locks in the rough ‘scope’ (work that we hope to do is captured in the [1.0.0 milestone](https://github.com/radiantearth/stac-spec/milestone/18)) for the release, as we don’t plan to add anything major afterward. The focus will shift from changing the specification to the ecosystem — rallying diverse organizations to adopt the spec, create STAC-compliant catalogs, and to build software that understands it. We hope to expand the domains that STAC helps, learning from experts what fields they need. It’s important to do this step while still in beta, so that we can truly take feedback if there are unanticipated needs from diverse communities.

We hope for the API to follow the core to 1.0.0-beta soon after. Having the API version will enable more organizations to adopt STAC, and we don’t anticipate major changes from 0.9.0 API to 1.0.0-beta. But it will just take more time to make sure the underlying OGC API’s are ones we can rely upon, as we don’t want to keep changing version numbers whenever there is a change there.

Our plan for the path of both to be a true 1.0.0 is to not define it based on a date or time, but on some concrete metrics on real-world implementation. We haven’t set those yet, but it is likely some combination of the total number of items indexed in STAC, the number of different catalogs, and how many software implementations there are: client, server and libraries. And then also making sure that we have the full suite of tools and education material to get people started easily, like fully automated validation tools and diverse tutorials on getting started for different use cases.

So our goal is for 2020 to be the year that STAC really breaks out, to get to 1.0.0 on both the core and API specifications, and to have a huge number of implementations of both. We hope you join us!
