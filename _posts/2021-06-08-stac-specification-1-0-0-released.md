---
layout: post
title: "STAC Specification 1.0.0 Released!"
date: 2021-06-08
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077
image: /assets/img/posts/stac-specification-1-0-0-released/1_YBLizqoQb6VZmWMUJs1N0g.png
---

![](/assets/img/posts/stac-specification-1-0-0-released/1_YBLizqoQb6VZmWMUJs1N0g.png)

The SpatioTemporal Asset Catalog (STAC) community is pleased to announce the release of [version 1.0.0](https://github.com/radiantearth/stac-spec/releases/tag/v1.0.0). It’s safe to say we’re all quite proud of the release, as it’s been a large community effort for over three years. For those who haven’t heard of STAC, it provides a common language to describe a range of geospatial information, so it can more easily be indexed and discovered. You can learn more at the [stacspec.org](http://stacspec.org) website, which we aim to update in the coming months to be an even better learning resource.

## A Stable Foundation

I’m not going to go into all the details of the release for this post, but I’m aiming to do a series of blog posts to highlight all that has happened, share what’s next, and highlight all the amazing tools in the community. The one thing I do want to share is what a 1.0.0 release means for us. Our goal for the core STAC specification is to provide a foundational layer for the emerging ‘[Cloud Native Geospatial](https://medium.com/planet-stories/tagged/cloud-native-geospatial)’ ecosystem. We believe that the future of geospatial information is fully online and in the cloud, and STAC aims to help connect diverse data into a network of information about our planet (and even [other planets](https://www.youtube.com/watch?v=cOMkgQssVPk&list=PL3QzFgBMGnbQWbW-V09AzSfCbnf6Q87Rq&index=4)).

To be that foundational layer, it is important that the core doesn’t keep shifting — that someone building with STAC tomorrow won’t have to follow the spec releases and keep updating their implementation. Before 1.0.0, we had many changes and are super grateful to all the early implementors who kept up to date and gave us continual feedback. But this announcement means no more shifting— we are committed to this version being a stable base that anyone can build on. We are using [Semantic Versioning](https://semver.org/), which means any breaking changes will require a STAC ‘2.0.0’, and we hope to stick with STAC 1.x for many years.

It is a deliberately small specification. During its 3+ years of incubation, we spent most of the time making sure the core had the right extension points to handle different use cases. We also wanted to ensure that when we released 1.0.0 that we had lots of feedback from real-world implementations. I’m pleased to share that several tools already support STAC 1.0.0, which you can use today:

- **Clients: **[STAC Browser](https://github.com/radiantearth/stac-browser) will transform any STAC implementation into an interactive website, and [STACIndex.org](https://stacindex.org/) provides an easy way to get a STAC Browser for free by just submitting your catalog (it also provides [a definitive list](https://stacindex.org/ecosystem) of STAC Tools). Rounding out the clients, [Rocket](https://rocket.snapplanet.io/) is a great visualization tool, enabling searching and browsing of STAC catalogs.

- **Servers: **A number of servers help you share STAC, and most enable search of STAC with the [STAC API Spec](https://github.com/radiantearth/stac-api-spec) (which is in beta releases but maturing quickly). There are great options in many languages, with [Franklin](https://azavea.github.io/franklin/) (Scala), [Resto](https://github.com/jjrom/resto) (PHP), [Staccato](https://github.com/planetlabs/staccato) (Java) and [STAC Server](https://github.com/stac-utils/stac-server) (javascript/node), and [STAC-FastAPI](https://github.com/stac-utils/stac-fastapi) for python will support 1.0.0 soon.

- **Data:** [CBERS](https://stacindex.org/catalogs/cbers#/) ([learn more](https://registry.opendata.aws/cbers/)) has been an amazing early adopter of STAC and was the first to 1.0.0, plus [Sentinel 2, and Landsat 8](https://rocket.snapplanet.io/map?u=https:%2F%2Ftamn.snapplanet.io&c=0,0,1.87) (available through resto in that link, and other services as well, with USGS soon providing an official STAC 1.0.0 Landsat catalog), and [NASA Avris](https://stacindex.org/catalogs/nasa-aviris-catalog#/) data are available as STAC 1.0.0. The Google [Earth Engine Data Catalog](https://developers.google.com/earth-engine/datasets) is also [available as STAC](https://stacindex.org/catalogs/google-earth-engine#/). [Many more](https://stacindex.org/) should upgrade in short order, as they migrate using the recently released tools ([stac-migrate](https://github.com/stac-utils/stac-migrate), [PySTAC](https://github.com/stac-utils/pystac/), [stactools cli](https://stactools.readthedocs.io/en/latest/cli.html#stac-copy), [DotNetStac](https://github.com/Terradue/DotNetStac) and more).

- **Utilities:** Then, several tools help users create and work with STAC. There are validators in [node.js](https://github.com/stac-utils/stac-node-validator) and [python](https://pypi.org/project/stac-validator/), the latter of which powers [STACLint](https://staclint.com/), an online tool where you can paste in STAC JSON or point at a URL and get validation. And then [PySTAC](https://github.com/stac-utils/pystac/) is a python library to read, create and modify STAC, with [stactools](https://github.com/stac-utils/stactools) providing a command-line interface on top of it. Two libraries round out the ecosystem supporting 1.0.0 today: [stac4s](https://github.com/azavea/stac4s) is a scala library that provides the STAC primitives and [DotNetStac](https://github.com/Terradue/DotNetStac) does the same for .NET.

## Thank You Sponsors

![](/assets/img/posts/stac-specification-1-0-0-released/1_A3T6fSjRL_-NeCcSY0aXbA.png)

The first group to thank is all the organizations that have supported STAC. At the top of the list are those who sponsored our STAC 1.0.0 Ecosystem effort, which has provided the key resources to advance not only the spec, but also the tools, outreach, and education to make it a full solution.

![](/assets/img/posts/stac-specification-1-0-0-released/1_3cOk5bzKZHmsRAQWpPFWhg.png)

[**Microsoft](https://microsoft.com)** is one of the more recent supporters of STAC, but they’ve quickly become the largest single force in expanding and hardening the ecosystem of tools. Their amazing [Planetary Computer](https://planetarycomputer.microsoft.com/) puts STAC at the center, with their quickly growing [Data Catalog](https://planetarycomputer.microsoft.com/catalog) providing a [STAC API](https://stacindex.org/catalogs/microsoft-pc#/) as the primary data interface. And they are investing in a wide array of open-source tools in the STAC ecosystem, pushing forward a majority of the key projects.

[**Planet](http://planet.com) **has been a top sponsor of STAC sprints since the third one and has always supported a solid portion of my employee time to advance the specification. They also initiated the [stactools project](https://github.com/stac-utils/stactools/) and its Planet data converter and are putting their open data releases into STAC.

[**Radiant Earth](https://www.radiant.earth/) **has been the driving entity behind STAC since day one, initiating the [first sprint](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595), funding ‘[Technical Fellows](https://www.radiant.earth/team/#radiantearth_team_widget-4)’ (me, Matthias Mohr, Rob Emanuele, and Seth Fitzsimmons) to advance the spec, [STAC Browser](https://github.com/radiantearth/stac-browser), and numerous other contributions. They’ve also been behind the scenes on many logistical, social media, and contracting topics and we wouldn’t have a STAC 1.0.0 spec without them.

The top sponsors for STAC 1.0.0 release are rounded out by three really great companies. [Sparkgeo](https://sparkgeo.com/) created the first [validation](https://github.com/sparkgeo/stac-validator) [tools](https://staclint.com/) for STAC, has contributed to numerous tools, and helps many organizations implement STAC. [Arturo](https://arturo.ai/) is one of my favorite companies, using AI and imagery to help the insurance industry, and they lead [STAC FastAPI](https://github.com/stac-utils/stac-fastapi). And [Element84](https://www.element84.com/) was key in getting NASA (with their [STAC CMR](https://wiki.earthdata.nasa.gov/display/ED/SpatioTemporal+Asset+Catalog+%2528CMR-STAC%2529+Documentation)) on STAC, leads the [Earth Search](https://www.element84.com/earth-search/), [pystac-client](https://github.com/stac-utils/pystac-client), and [stac-server](https://github.com/stac-utils/stac-server) projects, and is helping numerous of their clients with STAC. And then two more organizations came in as ‘supporters — [Azavea](https://www.azavea.com/), who has been our most consistent funder and contributor, and [Umbra](https://umbra.space/), a new SAR satellite company who is really embracing STAC.

And then there’s a number of other organizations who didn’t sponsor the latest 1.0.0 initiative but have paid key roles in the formation of STAC.

- [Maxar](https://www.maxar.com/) was a top sponsor of many of the first sprints and is using STAC in their [ARD Product](https://blog.maxar.com/leading-the-industry/2021/five-features-required-to-turn-satellite-imagery-into-analysis-ready-data) and as their [Catalog API](https://doc.content.maxar.com/notebooks/Maxar%20Catalog.html).

- [USGS](https://www.usgs.gov/) hosted the 2nd and 3rd STAC Sprints, and their [Landsat Collection 2](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collection-2) was the first major government dataset officially using STAC.

- Amazon AWS provided some of the first STAC Catalogs as part of their [Earth on AWS](https://aws.amazon.com/earth/) initiative.

- Google has been a contributor to the specification and makes their [Earth Engine catalog](https://developers.google.com/earth-engine/datasets) available [as STAC](https://stacindex.org/catalogs/google-earth-engine#/) (soon to be 1.0.0).

- [DevSeed](https://github.com/developmentseed) has given developers time to participate in almost every sprint, started sat-api and other tools, and helped get USGS on STAC.

- [OGC](https://github.com/opengeospatial/) lead the second sprint and helped organize the fourth, and their OGC API — Features crew has been a great collaborator on STAC API.

## Thank You STAC Community

![](/assets/img/posts/stac-specification-1-0-0-released/1_zBPVSn1pLI6dBQBSCuhZIA.jpeg)

*Though only a portion of the community, this is a picture of our last in-person sprint.*

I also wanted to call out a number of individuals who have contributed to making STAC a success. It’s been a true pleasure working with everyone, and it’s cool to be a part of the process that makes something better than anyone could on their own. We try out ideas together, debate, implement, change course, try out new ideas, reverse course, add things, and on, and on. But we do it together, and the spec gets better in fits and starts. It’d be impossible to individually thank everyone, with [almost 50 committers](https://github.com/radiantearth/stac-spec/graphs/contributors) to the spec, and many more who have contributed to the overall ecosystem in some way. But I wanted to call out a few people who have gone above and beyond.

Matthias Mohr and Matt Hanson are the top two in terms of pretty much every metric that I can think of — core spec commits, lines of code contributed in the STAC ecosystem, minutes spent on STAC calls & sprints, presentations to new people about STAC, etc., etc. There were many long days of sprints where others would have to drop off for various things, and we’d joke how it was yet again just the three of us. I believe having three people at the center brought a really good balance to the spec, and I can’t imagine STAC without the two of them.

And I wanted to mention a few more contributions. Frederico Liporace and Josh Fix are two whose STAC contributions are much greater than it would seem if you just looked at their commits in the core spec. They created two of the earliest STAC implementations, Frederico with CBERS, Josh with Staccato, giving critical early feedback and validating that things work. Rob Emanuele and Seth Fitzsimmons were the core of my [favorite group](https://github.com/radiantearth/community-sprints/blob/master/10252017-boulder-co/workstreams/static-catalog/static-catalog-overview.md#overview) from the first sprint, building working code on the first day. Rob went on to start PySTAC and stactools, and leads Microsoft’s STAC efforts, and Seth started STAC Browser.

Phil Varner built out Astraea’s STAC API, giving great feedback as an implementor, and more recently has been leading the STAC API specification, which has an imminent 1.0.0-beta.2 release. James Banting started early work on the validation of STAC and has been making Canadian open data available as STAC. Alexandra Kirk and Alireza Jazayeri brought STAC to Climate Corp, and both contributed to the spec itself. Michael Smith has helped us stay connected to OGC and has maintained our UML diagrams.

![](/assets/img/posts/stac-specification-1-0-0-released/1_483Z9v6S0Ggy0fGl7cOXfA.png)

*The ebbs and flows of STAC Spec contributions*

There’s been a consistently great and ever-evolving crew from Azavea contributing throughout, starting with Rob, continuing with Alex Kaminsky, Chris Brown, Aaron Su, James Santucci, and more. Renee Pieschke did amazing work bringing STAC to USGS and continues to be a great STAC advocate at DevSeed. Jeff Albrecht showed how STAC could be used as a ‘proxy’ layer on existing services and then started what is now known as [STAC FastAPI](https://github.com/stac-utils/stac-fastapi), and Aimee Barciauskas has done great outreach for STAC and stretched its limits in projects. And then two of the best STAC implementors of late have been Jerome Gaspari with Resto & Rocket, and Emmanuel Mathot with DotNetStac, and he has also been a force recently with pushing forward [STAC extensions](https://stac-extensions.github.io/) in amazing ways.

I’d also like to give a shoutout to a number of key leaders who were too busy running their organizations to participate themselves, but approved funding and employee time for STAC: Pierre Izard, Robert Cheetham, Joe Flasher, Ryan Lewis, Will Cadell, Robbie Schingler, Dan Morris, Steven Ward, Alex Leith, Ian Schuler, Dan Pilone, John-Isaac Clark, Daniel Bailey, and Ben Tuttle.

And finally, the Radiant Earth crew has been critical throughout. Louisa Nakanuku-Diggs has lead STAC’s social media push, Hamed Alemohammad has always made STAC a priority in the organization, and Dan Lopez originally steered Radiant Earth to support what would become STAC, and dreamed up the ‘technical fellow’ program. More recently Jon Duckworth has been doing great leading the charge on PySTAC, and Kevin Booth pioneered STAC + QGIS integration.

If I didn’t mention you and you’ve done work around STAC know that you are very much appreciated, and I’m sorry to miss you on this one. The number of people who have contributed in various ways is truly inspiring but unfortunately makes it hard to remember and articulate every single one.

## More about the 1.0.0 release

I apologize that this post likely reads more like the ending credits to a movie than a typical release announcement, but I think it’s important to acknowledge all the people and organizations who made it possible. There’s much more to say, but in order to not make this my longest blog post ever I’m going to break further details into a few posts, and I’m linking to them from here as they are published.

- [STAC 1.0.0: Spec and Community Updates](https://medium.com/radiant-earth-insights/stac-1-0-0-spec-and-community-updates-164f7083f42)

- [STAC 1.0.0: The State of the STAC Software Ecosystem](https://medium.com/radiant-earth-insights/stac-1-0-0-software-ecosystem-updates-da4e800a4973)

Thanks for reading, and I hope you too join our growing community! There’s much, much more to come.
