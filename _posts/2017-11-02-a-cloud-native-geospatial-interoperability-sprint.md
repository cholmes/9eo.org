---
layout: post
title: "A Cloud Native Geospatial Interoperability Sprint"
date: 2017-11-02
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595
image: /assets/img/posts/a-cloud-native-geospatial-interoperability-sprint/1_jg-l-N9wTbIV5ZCHFwTjJw.png
---

![](/assets/img/posts/a-cloud-native-geospatial-interoperability-sprint/1_jg-l-N9wTbIV5ZCHFwTjJw.png)

*Boulder, CO captured by a Planet RapidEye satellite on the last day of the sprint, Images ©2017 Planet Labs, Inc.*

Last week, in Boulder, Colorado, 25 people representing 14 different organizations gathered together to work towards common approaches to better enable the sharing and searching of imagery. Many providers of data and software in the earth observation field have been building API’s to expose their data holdings to modern developers. Lacking a clear standard for massive amounts of imagery using modern tech (JSON-based, RESTful), everyone was building their own *slightly* different systems. A small group of developers from different organizations started [gathering examples](https://github.com/radiantearth/catalog-implementor-survey) of their [API design](https://github.com/radiantearth/catalog-implementor-survey/tree/master/catalog-apis) (in [OpenAPI](https://www.openapis.org/) 2.0 where possible) and [JSON metadata responses](https://github.com/radiantearth/catalog-implementor-survey/tree/master/json-metadata), in order to see what is different and if a collaborative specification was possible.

Radiant ([radiant.earth](http://radiant.earth)) is a new organization aiming to bring the power of earth imagery to the NGO space, encouraging open geospatial data for positive global impact and improved decision-making. They saw the potential for increased interoperability to help not just NGO’s but all consumers of geospatial information, and stepped up to sponsor an in-person gathering of interested parties. Meeting in person enabled high-bandwidth exchanges to actually resolve differences and build a core specification, instead of just talking about what could be.

The enthusiastic response from so many different organizations was a testament to the fact that the timing is right for better interoperability with more modern technical approaches. A catalog making it easy to crawl and search [cloud optimized geotiffs](http://cogeo.org) is one of the most fundamental pieces of a Cloud Native Geospatial architecture. Data providers like Planet and DigitalGlobe showed up with several people, and the two main traditional remote sensing software providers, Harris’s ENVI and Hexagon Geospatial with Erdas, sent senior engineering leaders. Modern scale-out platforms like RasterFoundry/GeoTrellis and Google Earth Engine both sent lead developers, and a number of others sent their key people — see the full (and awesome) [organization list](https://github.com/radiantearth/boulder-sprint/blob/master/sprint-background.md#organizations). The goal was to prioritize attendance of the developers who will be tasked with implementing the standard, in order to reach something much more practical and useful than what a bunch of [architecture astronauts](https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/) like me would come up.

![](/assets/img/posts/a-cloud-native-geospatial-interoperability-sprint/1_R159T8mybJLn0XzEnV8Ikw.jpeg)

*The author, flying through space. Er, welcoming everyone*

The agenda was quite ambitious, with a goal of walking out with not only draft specifications but also some first implementations that exercised it. To make this work there was a lot of prep work done by everyone to ensure we could hit the ground running. The prep work, as well as extensive in depth notes from most of the sessions, can be found in Radiant’s [boulder sprint repo](https://github.com/radiantearth/boulder-sprint) on GitHub. After the welcome session the group went through a great set of [lightning talks](https://github.com/radiantearth/boulder-sprint/tree/master/lightning-talks) to help everyone get on the same page. And then it was small, productive discussions and heads down work on specifications and code.

The gathering was a big success, with substantial progress on each of the [workstreams](https://github.com/radiantearth/boulder-sprint/tree/master/workstreams). We divided up in to four groups so that parallel progress could be made, with check-ins every two hours. In the words of one participant, ‘I went back to my team at the office doing two week sprints and told them about the two *hour* sprints we did in Boulder’.

Follow up posts will go in to more detail about what all was accomplished, and for those who like to dig in to everything there is an [extensive overview](https://github.com/radiantearth/boulder-sprint/blob/master/sprint-overview.md) in GitHub. The group reached consensus on a core ‘static catalog’ that can be implemented just by putting up files on a web server, as well as a draft OpenAPI specification of a catalog API. And though our naming sessions in person fell short, the online chat surprisingly reached consensus, calling the core spec the SpatioTemporal Asset Catalog. The core metadata profile is called SpatioTemporal Asset Metadata, with the goal that it will be reusable in other contexts.

The group decided the core should be applicable more than just imagery, it is designed to handle any geospatial asset that is referenced in space and time. So that includes not just imagery but also potentially SAR, derived rasters like NDVI, DEM’s, LiDAR, Hyperspectral, etc. Community profiles will be needed to make those searches more relevant, but a user should be able to search a geography and a time range and get back all the relevant information, filtering for the data types they care about.

![](/assets/img/posts/a-cloud-native-geospatial-interoperability-sprint/1_Q7wKdw_z9FJNOymo0uGpyg.jpeg)

*Nate Smith from Humanitarian OpenStreetMap Team (HOT) going deep on metadata*

We are not quite ready to encourage everyone to start using and contributing to the specifications yet, as there are a few decisions reached at the end of day 3 that need to finalized and incorporated. But in the spirit of openness and transparency there is a [STAC spec repository](https://github.com/radiantearth/stac-spec) where work is being done, and if anyone is really excited to help out they can join us on [our gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) and jump in.

When the repository is all ready to go I’ll write another post here, and go deeper into some of the design decisions behind the specs and next steps. The next few weeks will see everyone working to build real world implementations and refining the spec with input from the practical problems that arise in moving from spec to code. Our hope is to get many more data providers and software tools to implement the specification, to greatly increase the interoperability of this data.

Many of the organizations involved have already pledged their support to implement the specification. Our goal is to convene again in person in three to four months to truly compare all the implementations, and walk out as close as possible to a finalized specification — with reference implementations, testing engines, client libraries and documentation. Radiant has already pledged that they will support an in person gathering once there is sufficient number of implementations to warrant a gathering. And the end goal is to turn it into an international standard. The group was excited by the potential to make STAC compatible with [WFS 3.0](https://github.com/opengeospatial/WFS_FES) from the [Open Geospatial Consortium](http://opengeospatial.org), so the OGC may make a natural home after it is solidified.

Thanks again to Radiant for convening the event and sponsoring the first day, as well as [Planet](http://planet.com) for sponsoring the second day, and [DigitalGlobe](http://digitalglobe.com) for the third day as well as a great dinner. And a special thanks to every single organization that sent developers and gave them time to collaborate and work on implementations.
