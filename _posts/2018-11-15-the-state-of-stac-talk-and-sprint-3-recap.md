---
layout: post
title: "The State of STAC talk and Sprint #3 recap"
date: 2018-11-15
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/the-state-of-stac-talk-and-sprint-3-recap-cd8eda3b8bdb
image: /assets/img/posts/the-state-of-stac-talk-and-sprint-3-recap/1_kpXVRZyPDlok59ii9bM33g.png
---

![](/assets/img/posts/the-state-of-stac-talk-and-sprint-3-recap/1_kpXVRZyPDlok59ii9bM33g.png)

## *The State of STAC* talk and Sprint #3 recap

Following up on the [STAC 0.6.0 release](https://medium.com/radiant-earth-insights/a-leap-forward-for-stac-spatiotemporal-asset-catalog-0-6-0-specification-released-660e9fe33c1d), I just wanted to share a talk that I gave three months ago. And I figured I’d also include the recap on STAC Sprint #3 that I meant to write up months ago.

The talk was given as a keynote to the full [Satellite Data Interoperability Workshop](https://medium.com/radiant-earth-insights/the-first-satellite-data-interoperability-workshop-is-happening-next-week-fae9539f81f9), so the majority of the audience was actually Analysis Ready Data people who weren’t deep in the weeds with STAC. This meant I focused on a higher level overview of the spec and the community, recounting how we’ve evolved and where we are at. Or at least where we were at 3 months ago, as there has been a ton of progress since then. The video should be embedded below:

<https://www.youtube.com/watch?v=byO0ABXFI4I>

You can also see my [slides directly on google docs](https://docs.google.com/presentation/d/1O6W0lMeXyUtPLl-k30WPJIyH1ecqrcWk29Np3bi6rl0/edit?usp=sharing), and feel free to reuse and share — the talk is [CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/) licensed.

## STAC Sprint #3 Recap

With the third STAC Sprint we really hit our groove with advancing the specification. The [first sprint](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) was amazing, but was mostly laying the groundwork of what we were even doing together. The [second one](https://medium.com/radiant-earth-insights/progress-on-spatiotemporal-asset-catalogs-in-ft-collins-6298f195bfb2) brought significant advances, but only one day was fully dedicated to STAC, and we still were figuring out how to work together.

Unfortunately for this sprint we have less notes to point to than in the previous sprints. Part of that is that I didn’t have the time to write up the recap when it was fresh in my mind. But the larger reason is actually a positive one, which is that for the first time the majority of the work happened inside the [github repository](https://github.com/radiantearth/stac-spec) — making issues, editing documents, writing code and merging pull requests. This makes it easier for anyone to follow the evolution of the specification in one place, instead of having to track down different repositories with notes.

We had about 22 participants in the sprint, and it was a great mix of those who had taken part in one or both of the previous sprints, along with a number of new faces. We had representatives from SpaceNet, Azavea/Raster Foundry, CBERS, DigitalGlobe, Harris, Planet, Development Seed, Element84, Hexagon, Radiant Earth Foundation, PCI Geomatics, UC Davis, Boundless, OpenAerialMap, Astraea, OpenEO, Descartes Labs, GeoScience Australia and Vulcan. So it was a really broad group bringing a number of diverse experiences.

![](/assets/img/posts/the-state-of-stac-talk-and-sprint-3-recap/0_TTCU-2cGW7n9-bi_.png)

As in the past, we tried to move out in parallel, breaking into a few different groups, coming together periodically to work through bigger pieces together. Overall the format worked pretty well, and I believe we accomplished more by splitting up than we could have in one big sessions. You can see [the full agenda and groups](https://github.com/radiantearth/community-sprints/tree/master/08132018-menlo-park-ca) in the community sprint repo.

The **Static STAC** group** **worked through a number of issues together to tighten up many different aspects of the specification, including how to approaches STAC Items that are derived from others. Interestingly the **STAC API** group came up with the `/stac/` catalog endpoint, which collapses the dichotomy between ‘static’ and ‘api’ versions of the specification. So we likely will not divide along those lines in future sprints. They also improved the process of editing the OpenAPI docs and introduced CircleCI for continuous integration.

The **Client & Testing** **Tools** group worked on a few different things, but the most notable was a validation engine. [SparkGeo](http://sparkgeo.com/) has continued to evolve that work after the sprint, and it now runs as part of the CircleCI setup. They also just went even further and [released STACLint](https://www.sparkgeo.com/blog/staclint/) for online validation. The **Collection Level Searching** group drafted the new [STAC Collection Spec](https://github.com/radiantearth/stac-spec/tree/master/collection-spec), a new part of our mini-suite of specs, to describe a set of related STAC Items. It is also used independently, to simply describe collections of geospatial data, even if they are not represented by STAC Items. And I was part of the **Website & Outreach** group, and I was quite happy with the progress we made towards a nice website to explain STAC to newcomers. We also had people sprinting on their individual implementations of STAC, giving us feedback as they hit problems.

Overall we made great progress, and it was awesome to connect in person. It was also really nice being co-located with the [Analysis Ready Data](https://www.planet.com/pulse/satellite-interoperability-workshop/) workshop, as we had nice intermingling between people at the breaks and in the evening events. I’m not sure when we will have the next in-person Sprint. I am really excited that we are making progress on the spec by just working online and in calls, so we might experiment with a ‘virtual sprint’. But nothing can beat the connections that can be made in real life, so I’m sure we’ll organize another one before too long.
