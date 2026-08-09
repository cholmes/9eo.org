---
layout: post
title: "Dreams do come true: STAC Sprint #4 Recap"
date: 2019-06-24
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/dreams-do-come-true-stac-sprint-4-recap-752de2c4dbe7
image: /assets/img/posts/dreams-do-come-true-stac-sprint-4-recap/1_FTrmhcV4pktXUnWnD72GcA.png
---

A couple of weeks ago, the core SpatioTemporal Asset Catalog (STAC) community gathered in San Francisco (and virtually) to advance the ecosystem and specification, in our fourth in-person sprint. We decided to focus more on the tools and data this time, dedicating the first day to building catalogs and software. Since the start of STAC, there have been two milestones that I’ve been dreaming of — a QGIS plugin and an interactive Javascript image browser; and amazingly, we had huge progress on both, which are now available for everyone. On top of that core dream coming true for me, there were a ton of other great work that took place, from amazing progress on a labeled data extension to new STAC API implementations and rich discussions about where to take our API to core specification decisions that would have taken months virtually.

Before I dive into all the great work done I do want to thank our sponsors.

![](/assets/img/posts/dreams-do-come-true-stac-sprint-4-recap/1_yj1RUwzFv_2Xi6NX8ed5wg.png)

[Planet](http://planet.com) hosted the event and provided lead sponsorship — the event would not have happened without them. [Radiant Earth Foundation](http://radiant.earth) convened the event and brought logistical support, and [The Climate Corporation](http://climate.com) hosted a great happy hour (more on that later). [Azavea](http://azavea.com), [CosmiQ Works](http://www.cosmiqworks.org/), [Astraea](https://astraea.earth/), and [Element84](http://element84.com/) all pitched in to support the event, which made a big difference.

## Ecosystem Work

As I mentioned above, the first day we focused everyone on the STAC ecosystem, encouraging people to build real-world implementations. They could take notes on things to improve in the spec, but we all tried to hold off on talking major specification changes and ideas, which proved challenging for some. But everyone managed to push things forward.

### QGIS STAC Browser

[Kevin Booth](https://kb.gg) was a first-time STAC Sprinter, but showed up with a huge contribution — the [STAC Browser QGIS plugin](https://plugins.qgis.org/plugins/stac_browser/)! He had started it a bit before the sprint, managed to advance it substantially during the three days, and then has followed up after with a number of incredible advances, like streaming Cloud Optimized GeoTIFF’s:

![](https://miro.medium.com/v2/resize:fit:1400/1*KaV973Eilu5rafisqH4POQ.gif)

Building the QGIS plugin meant he exercised the diverse STAC API’s in the ecosystem, helping all of them get better. The plugin should soon be available to install directly from QGIS, but in the meantime, you can get it from [plugins.qgis.org/plugins/stac_browser/](https://plugins.qgis.org/plugins/stac_browser/). Contributions are welcome, you can find the code at the [qgis-stac-browser repo](https://github.com/kbgg/qgis-stac-browser).

### sat-api-browser

The other awesome news is that [Development Seed](https://developmentseed.org/) open sourced their [sat-api-browser](https://github.com/sat-utils/sat-api-browser) and added it to the awesome collection of [sat-utils](https://github.com/sat-utils) that they lead. It was built as a front-end for [sat-api](https://github.com/sat-utils/sat-api), but since sat-api is implementing STAC the browser can work with any STAC compliant API. It provides search and filtering capabilities in a nice GUI.

![](https://miro.medium.com/v2/resize:fit:1400/1*MPXPLPdF_VIlkaysurHAtg.gif)

[Daniel da Silva](http://www.danielfdsilva.com/) from DevSeed even joined us to code on it for parts of the STAC sprint, as he was in town for another conference. There are lots of directions to take it, so please jump into [the GitHub repo](https://github.com/sat-utils/sat-api-browser/issues) and grab some issues, or add your own ideas of where it should go, as it is meant to be a community project. You can try it out yourself [online on AWS](http://sat-api-browser.s3-website-us-east-1.amazonaws.com/), and we’ll likely see more versions soon on [stac.cloud](http://stac.cloud) and elsewhere.

### STAC API’s

The sprint also saw lots of work on servers that implement the [API portion](https://github.com/radiantearth/stac-spec/blob/master/api-spec/api-spec.md) of the STAC specification. Sat-api and [Staccato](https://github.com/boundlessgeo/staccato) were both represented and the clients hitting them helped it evolve to fully meet the specification, while also driving some spec improvements where things were ambiguous. Post-sprint discussions and work saw both servers working on transforming the STAC results into rendered mosaics. Josh is building a GeoServer plugin that drives its mosaic capabilities directly from STAC. It takes STAC id’s and then renders a mosaic on the fly as WMS/WCS/WMTS with all of GeoServer’s capabilities. DevSeed is using STAC to power on [the fly mosaicking](https://medium.com/devseed/cog-talk-part-2-mosaics-bbbf474e66df) that they do with cloud-optimized geotiffs, and they’re planning to add an endpoint to sat-api that creates a [mosaicjson](https://github.com/developmentseed/mosaicjson-spec) on the server, enabling clients to more easily cache tiles.

The sprint also saw two new API implementations.

[Jeff Albrecht](https://geospatial-jeff.com/) was another first-time STAC sprinter who had already been working with STAC a lot. His [cognition-datasources](https://github.com/geospatial-jeff/cognition-datasources) is a really innovative project that provides a bridge between legacy geospatial imagery providers and the interoperable STAC future. He has a pluggable framework that can be adapted to any legacy provider of data, including scraping of web pages and then proxies it with a STAC API interface on top. There are 11 different datasources, and during the sprint, he added the [Planet Data API](https://developers.planet.com/docs/api/) to the list, which was awesome to see (of course I’m a bit biased…).

Phil and Matt from [Astraea](https://astraea.earth/) also brought their STAC API, and extensive experience working with STAC, as they’ve been using the standard internally to help organize their data. They’ve been doing some really cool aggregation of data, and after the sprint, they shared the [Astraea STAC API Prototype](https://stac.astraea.earth/api/v2/stac), along with its aggregation functionality. Internal cataloging of data seems to be the use of STAC that is growing the fastest, which is great to see.

It was also validating to see major companies with huge data holdings embracing STAC. There were also representatives from Climate Corp and Digital Globe / [Maxar](http://maxar.), who both are transforming their major data holdings and API’s to follow the STAC standard. And [Farmer’s Edge](https://www.farmersedge.ca/) joined the sprint and shared that their STAC API implementation holds over 1.2 billion records and runs their production system with many diverse users. We also learned about [Earth Search](https://www.element84.com/earth-search/), a sat-api instance hosted by [Element84](http://element84.com/), which provides STAC API search on all the STAC Compliant datasets on [Earth on AWS](https://aws.amazon.com/earth/). Their new [CubeSatData.com](http://cubesatdata.com/) also makes use of STAC to help search the data from cubesats they are processing and archiving.

### New STAC Catalogs

There was also substantial work done on converting existing datasets into STAC. Many of those are not quite released yet, but we should see a new Sentinel 1 catalog soon, as well as updates to Sentinel 2 and Landsat 8 Catalogs, all on [Earth on AWS](https://aws.amazon.com/earth/). There were also some good experiments with Point Cloud data in STAC, as well as investigations into the [newly opened Radarsat data](http://www.spaceq.ca/radarsat-1-data-set-of-36500-images-released-to-the-public/). The [Allen Coral Atlas](https://allencoralatlas.org/) was also represented, moving their assets into STAC during the week.

The most visible catalog additions were all around the [new Label extension](https://github.com/radiantearth/stac-spec/pull/362) for STAC. On the first day, a great group with diverse machine learning backgrounds formed, including Aaron Su from [Azavea](https://www.azavea.com/), Nick Weir from [CosmiQ Works](http://www.cosmiqworks.org/) ([Spacenet](https://spacenetchallenge.github.io/)), Dave Luo of [Anthropocene Labs](https://www.anthropo.co/) and [World Bank (OpenDRI)](http://opendri.org) , and Phil Varner from [Astraea](http://astraea.earth). They sprinted on transforming a few diverse labeled training data sets into STAC, including advancing Spacenet’s [STAC data](http://spacenet.stac.cloud/) from just the imagery to the new STAC extension to include the labels.

![](https://miro.medium.com/v2/resize:fit:1400/1*R6-PxmADqNx3cI0p3hEOAg.gif)

*Label data in STAC Browser — explore it yourself at [geoml-samples.netlify.com](https://geoml-samples.netlify.com/)*

## Outreach

As the STAC spec has matured, we’ve started to think more about how we can get the word out to the world. [Mike Jeffe](https://twitter.com/MrJefe72) from Climate and a couple of people from [NGA Outpost Valley](https://www.c4isrnet.com/intel-geoint/2016/05/17/nga-launching-silicon-valley-outpost-for-intel-community/) spurred us to bring together an event. We had a happy hour with several great talks from the community.

![](/assets/img/posts/dreams-do-come-true-stac-sprint-4-recap/1_HctrdByNfnVQZgWg_EIVCQ.jpeg)

Thanks to Mike and [Climate](http://climate.com) for hosting us in their amazing space and doing all the organizing. We had around 50 people and heard about a number of great projects pushing STAC forward.

The other awesome outreach contributions came from [Phil Brodrick](https://www.philbrodrick.com/about), who tackled a number of the open issues on [stacspec.org](http://stacspec.org), making the website better for everyone. I had hoped to help out there, but all the other threads of work overtook me. There were also some good ideas on outreach, like posting more of the videos and slide presentations on the website, that hopefully, we’ll be able to do in the next couple months.

One additional first for this sprint was taking remote participation seriously. We had 10 people join in on various sessions, from a number of diverse organizations. And several of the sessions were recorded, so we’ll try to make those available.

## Specification Enhancements

I’m going to go ahead and save the in-depth specification enhancements for its own blog post. I hope we’ll get to the 0.8.0-beta release soon, and share the actual changes we’ve made to the spec. But there was a ton of great discussion and decisions on the future of the spec.

A highlight for me was certainly the Label extension, as mentioned above, since I’ve seen lots of people doing custom infrastructure for machine learning, and I think STAC is the right level to help a bit more interoperability. We made some core decisions on how to summarize properties and enable more definition around assets, and I think there are few major decisions to make on the core spec before 1.0.

The STAC API emerged on the last day as a major point of discussion and activity, especially Query as well as more advanced extensions like aggregations and transactions. The STAC group is still committed to aligning with [OGC API — Features ](https://github.com/opengeospatial/WFS_FES)(previously known as WFS 3.0), but we are running quite a bit ahead as we’ve got multiple implementors who are all stretching past what the core Features spec offers. So the next few months we’ll aim to explore more of those ideas and bring them back as extensions to the appropriate OGC specifications.

Thanks to everyone who participated in the sprint, in person and remotely! It’s awesome to see this community grow. If you’re interested in the next sprint just hop on our [gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) and say hi, and I’ll be sure to get you included.

![](/assets/img/posts/dreams-do-come-true-stac-sprint-4-recap/1_FTrmhcV4pktXUnWnD72GcA.png)

*Still image of STAC Browser of Label extension (so I can publish it as the default image).*
