---
layout: post
title: "OGC API — Features + STAC Sprint Recap"
date: 2019-12-10
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/ogc-api-features-stac-sprint-recap-6c876b44c9d2
image: /assets/img/posts/ogc-api-features-stac-sprint-recap/1_xvQnWh3xZA7FYtp_ZrJ1Wg.jpeg
---

## OGC API — Features + STAC Sprint Recap

On November 5–7 around 40 people gathered in Arlington, VA, with another 20 or so participating online, for [a joint sprint on](https://medium.com/radiant-earth-insights/join-stac-sprint-5-ogc-api-hackathon-november-5-7-48178137f778) the [SpatioTemporal Asset Catalog](http://stacspec.org) (STAC) and [OGC API — Features](https://github.com/opengeospatial/ogcapi-features) (OAFeat) specifications. It was our 5th STAC sprint, and the second one we’ve done with OAFeat (formerly WFS 3). I’m pleased to report it was a big success, and to me, it felt like the most productive one we’ve had yet. It was awesome to see everyone working away, on many diverse parts of the ecosystem. In this post, I’m going to attempt to do a brief overview of all that happened.

Though before I get into it, I do want to thank all our generous sponsors for their support — the event would not have been possible without them. [IQT CosmiQ Works](http://www.cosmiqworks.org/) hosted us at their awesome office, [Planet](https://www.planet.com/) came in as a convening sponsor, [OGC](https://www.opengeospatial.org/) sponsored and helped out with logistics, [Element 84](http://element84.com/) hosted the happy hour, [Azavea](https://www.azavea.com/) was a supporting sponsor, and [Radiant Earth Foundation](http://radiant.earth) helped with logistics.

![](/assets/img/posts/ogc-api-features-stac-sprint-recap/1_xvQnWh3xZA7FYtp_ZrJ1Wg.jpeg)

*Our fearless sprinters*

## Introductions and Kick-off

We kicked off the [first day](https://github.com/radiantearth/community-sprints/blob/master/11052019-arlignton-va/agenda.md#day-1---joint-stac-api--oafeat-extensions) with a round of introductions, rotating between everyone gathered in-person and remote. We had a number of people fly in from Europe and Canada, and remotes joined from as far away as the Philipines, joining at 10:00 pm. It was great to see so many people from different backgrounds coming together to work on common standards, and it’s nice to see the communities grow with each sprint, welcoming in new faces.

The focus for the day was to kick off the joint work between STAC and Features API, particularly a powerful [Filter](https://github.com/radiantearth/community-sprints/tree/master/11052019-arlignton-va/prep-work/filter-options) language that both could use, and tackling a number of other parts of a full-fledged[ Query](https://github.com/radiantearth/community-sprints/blob/master/11052019-arlignton-va/prep-work/specification-topics.md#query), like sorting, paging, requesting specific fields and more.

## Beginner Sessions

While sprints are a time for the specification experts to go deep on major topics together, they are also a prime opportunity to welcome new people into the community. Building on some ad-hoc sessions at the last STAC sprint, we decided to have 4 explicit ‘Beginner Sessions’, so those who are newer can get up to speed and ask all their newbie questions in a friendly environment. We kicked off with a walkthrough and Q&A of STAC, and then Rob Emanuele gave a great introduction to creating and working with STAC catalogs using [PySTAC](https://github.com/azavea/pystac), so participants didn’t just have the theory of STAC but also some practical hands-on experience. We streamed out all the sessions, but only managed to record the PySTAC one, which[ you can see on youtube](https://youtu.be/SjJTkxzse6A).

![](/assets/img/posts/ogc-api-features-stac-sprint-recap/1_mqWQcIkG0cxeZ4TZuG-1Lw.jpeg)

*PySTAC Tutorial delivered by Rob Emanuele*

On day two we repeated the structure of walkthrough and then hands-on, but this time Peter Vretanos gave the overview of OGC API — Features, and Tom Kralidis did a [great introduction](https://pygeoapi.io/presentations/default) to [pygeoapi](https://pygeoapi.io/), a leading OAFeat implementation (that actually implemented STAC during the sprint!). The sessions overall seemed to work quite well, and hopefully, at the next sprint, we’ll have even more sessions, diving deep into various tools that people can use.

## Happy Hour

Another new tradition that started at the last sprint and we continued this time was a [happy hour](https://medium.com/@cholmes/geospec-dc-happyhour-43be89c5db08), hosted by [Element84](http://element84.com) at their office in Alexandria. And in our effort to make these events more remote-friendly, this time we managed to record the lightning talks! The video mostly shows the presenter, so I’ve included a link to the slide decks where possible, so you can follow along.

- Aaron Su [talked about all the machine learning projects](https://www.youtube.com/watch?v=bLHBQajfVM4&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=4&t=0s) at [Azavea](http://azavea.com) and how they use STAC at the core ([slides](https://docs.google.com/presentation/d/1G9Ch6L1F6gEnYMQQOwQaLuAl-bNH-yKS7YkidTSZk1w/edit?usp=sharing)).

![](/assets/img/posts/ogc-api-features-stac-sprint-recap/1_VyBmy6aJgpeoVT0sGQeVjA.jpeg)

*Matt Hanson presenting at the Happy Hour at Element84*

- Matt Hanson [gave an overview of the core STAC ecosystem projects](https://www.youtube.com/watch?v=1IlanhkdLWk&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=2&t=0s) he and others work on at [Element84](http://element84.com).

- Tim Schaub [presented on the support of OGC API — Features at Planet](https://www.youtube.com/watch?v=Ud3A_v1w4T8&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=7&t=0s), particularly in [Analytic Feeds](https://www.planet.com/products/analytics/), and the funding of [GDAL](https://gdal.org/drivers/vector/oapif.html#vector-oapif) and [QGIS plugins](https://github.com/qgis/QGIS/pull/32262) ([slides](https://docs.google.com/presentation/d/e/2PACX-1vSeeTEmFJ4JOBqR_i00vjH7XhsPMo_5vzhRJVdiTPMPnqmEayQMJPceHFO5V_gjwd-lwK8_K8Blhfh1/pub?start=false&loop=false&delayms=3000))

- James Banting [talked about putting Radarsat data into STAC](https://www.youtube.com/watch?v=GVr2jXi-0JQ&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=8&t=0s) (available at [radarstac.com](https://www.radarstac.com/?t=catalogs)and other work STAC work [SparkGeo](https://sparkgeo.com/) is doing ([slides](https://docs.google.com/presentation/d/1Xo8vpEOuohKemYw3bLx0NmXS0vvkXJL5zLY_uFLP0oc/edit?usp=sharing)).

- Janne Heikkilä [shared the Java OGC API — Features implementation](https://www.youtube.com/watch?v=x1-mHBomeF8&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=6&t=0s) that the [National Land Survey of Finland](http://nls.fi) has built.

- Renee Pieschke [shared the latest on Landsat’s adoption](https://www.youtube.com/watch?v=UuTU3Z2nuD8&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=4) of STAC, how they are migrating to the cloud and will put the entire Landsat collection in STAC, including past missions as well as the newest products like surface reflectance and surface temperature.

- Tom Kralidis [presented on pygeoapi](https://www.youtube.com/watch?v=4wREpMU_geE&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=8) and its implementation of OGC API standards, plus its use at the [Meteorological Service of Canada](https://eccc-msc.github.io/open-data/msc-geomet/web-services_en/#ogc-api-features) ([slides](https://pygeoapi.io/presentations/default) — he gave the top-level ones for this talk).

- Alexandra Kirk [talked about using STAC for collaboration around agriculture use cases](https://www.youtube.com/watch?v=JgxbeTP9c1M&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=9) that [Climate Corporation](http://climate.com) has been tackling.

- Alexander Frank [gave an overview of use of STAC](https://www.youtube.com/watch?v=XImVslIMyTs&list=PLsG0rYzj97V5FNCVIq0H49-ur8N4rRSkl&index=11&t=0s) at [Maxar](http://maxar.com) to centralize their inventory of disparate catalogs.

It was amazing to see the diversity of perspectives coming together around standards, and how these two very young specifications are already tackling major real-world problems.

We also joined the [GeoDC Meetup](https://www.meetup.com/Geo-DC/) on the next night, sharing about STAC and OGC API. It was great to interact with the local geospatial community, and we hope to repeat that at future events.

## Results

It would take a lot of text to recap all that happened at the sprint, with so many great discussions throughout. I think the major results will speak for themselves, in terms of improvements to the STAC and Features API specifications, and an ever wider ecosystem of implementations. But I’ll quickly go through some of the highlights. There are [rough notes](https://github.com/radiantearth/community-sprints/blob/master/11052019-arlignton-va/group-work/progress.md) on everything we talked about at, with lots of links to the work that was done. And we also recorded the full session (though unfortunately missed the very beginning — an update from Peter Vretanos on work he did on his server and the OGC API — Features specification), you can [watch it on youtube](https://youtu.be/zJYCW031KxQ).

### Implementation Work

**pygeoapi — **As mentioned above, pygeoapi [implemented STAC support](https://github.com/geopython/pygeoapi/issues/221) during the sprint, which was awesome to see come together. Several other features were also worked on, including [cross-collection search](https://github.com/geopython/pygeoapi/issues/292), [many: many feature: collection](https://github.com/geopython/pygeoapi/issues/293) connections, [improvements to the postgresql provider](https://github.com/geopython/pygeoapi/pull/283), and several more. Tom also [implemented](https://github.com/geopython/pygeoapi/pull/297) one of the things I’ve wanted to see — automatically making an [OGC API — Catalog](https://github.com/opengeospatial/CAT4.0) from the collection's metadata.

[**code.usgs.gov/stac](https://code.usgs.gov/stac) **was started to enable USGS’s [Water Missions Area](https://water.usgs.gov/mission.html) and [Landsat/EROS teams](https://www.usgs.gov/centers/eros) to collaborate around STAC.

**Ordnance Survey **put together a Java springboot server implementing OGC API — Features that served up OS data. A prototype is up at [os-ogc-features-api.azurewebsites.net/](https://os-ogc-features-api.azurewebsites.net/) and Ordnance Survey seems quite committed to continuing in this direction. It was awesome to see that the spec is easy enough to make a complete server from scratch in less than three days.

![](/assets/img/posts/ogc-api-features-stac-sprint-recap/1_FBGSde8_GUwN4n8Vy7g_Hg.png)

**Franklin **from an awesome team at Azavea blew me away with the completeness and polish that emerged during the sprint. The team leveraged [GeoTrellis](https://geotrellis.io/) and [PostGIS](http://postgis.org/) to create a full dynamic server that can serve up static STAC catalogs as both STAC and OGC API — Features. Before the sprint, they put up a great [post on their STAC work](https://www.azavea.com/blog/2019/10/01/stac-creating-an-ecosystem-of-interoperable-spatiotemporal-assets/), and I look forward to the update detailing all they did at the latest sprint.

**STAC Validation** — James Banting and Alex Kirk made a number of great improvements to the STAC validation tools and hooked them up to the continuous integration in the specification.

**ESRI **added support for OGC API — Features to [Koop](https://koopjs.github.io/). There is a provider plugin to read features from a collection and an output plugin to expose data from providers with data APIs, plus a [demo app](https://github.com/haoliangyu/koop-ogcapi-features-demo-app).

[**QGIS Server](https://docs.qgis.org/3.4/en/docs/training_manual/qgis_server/index.html)** extended its OAFeat support to [include simple transactions](https://github.com/qgis/QGIS/pull/32694), along with a number of other improvements.

![](/assets/img/posts/ogc-api-features-stac-sprint-recap/1_cnFTv1b-UXQkF1t4wQVo5w.png)

[**sat-api-pg](https://medium.com/devseed/sat-api-pg-a-postgres-stac-api-af605cafd88d) **was a project that [Development Seed](https://developmentseed.org/) had been working on, and they used the sprint to get the code all ready to release as open source! It provides a full STAC implementation but backed by PostGIS instead of ElasticSearch like many of the first STAC servers. You[https://medium.com/devseed/sat-api-pg-a-postgres-stac-api-af605cafd88d](https://medium.com/devseed/sat-api-pg-a-postgres-stac-api-af605cafd88d)

[**GeoServer](http://geoserver.org)** — Andrea Aime of [GeoSolutions](https://www.geo-solutions.it/) made great strides on the GeoServer, implementing CQL filters and the Queryables idea. You [check out his presentation](https://drive.google.com/file/d/1bs0mGMtV4wVk8i8_J7u4IRn-kAfKZMon/view) on the work done.

[**Astraea](https://astraea.earth/) **stood up [MODIS data to Earth on AWS](https://registry.opendata.aws/modis-astraea/) as Cloud Optimized GeoTIFF’s as part of Earth on AWS MODIS, and indexed it into the Astraea [public STAC API](https://eod-catalog-svc-prod.astraea.earth/api/v2/search). Their API also contains Landsat-8, Sentinel-2 L1C and L2a, and drives [Earth OnDemand](https://earthondemand.astraea.earth/).

![](https://miro.medium.com/v2/resize:fit:1400/1*t9oWDdtkA8d2C_EVp7ZbOg.gif)

**Resto and Rocket — **The largest (awesome) surprise for me of the sprint was the amazing work by Jerome Gasperi of [SnapPlanet](https://snapplanet.io/). [Rocket](https://rocket.snapplanet.io/) is one of the coolest STAC clients I’ve seen, and almost every service in the sprint was tested with it — not just STAC but also pure Features API services. And [Resto](https://github.com/jjrom/resto) is a robust metadata server with a wide userbase that recently got STAC and OGC API — Features support.

**Spacebel **showed off their awesome work on aligning various specifications in their server, with a [great presentation](https://docs.google.com/presentation/d/1YJH274rWtkAw_IVtNctLfoXluh2wzNw7F_VaCGiejgU/edit#slide=id.p1) on future work for even better alignment. They got their server at [databio.spacebel.be/eo-features/](https://databio.spacebel.be/eo-features/) to implement OGC API — Features, [Open Search for EO](https://www.opengeospatial.org/standards/opensearch-eo), and they added STAC during the sprint and got it working with various clients.

**MLHub Catalogs** — Kevin Booth from [Radiant Earth Foundation](http://radiant.earth) stood up two static catalogs with their MLHub training data, one on [OSM Generated Training Data](http://demo-mlhub-earth.s3-website-us-west-2.amazonaws.com/) and the other [Landcover Classification / Building Footprints / African Crops](http://browser.radiant.earth/).

**GDAL — **[Even Rouault](http://www.spatialys.com/en/about/) advanced the [GDAL OGC API — Features](https://gdal.org/drivers/vector/oapif.html#vector-oapif) driver to support to the new specification ideas discussed and implemented during the sprint, including using XML Schema or JSON Schema to get the structure of the data, using a Queryables endpoint, and using CQL as a filter language to filter on the server side.

[**nls-fi Features server](https://beta-paikkatieto.maanmittauslaitos.fi/maastotiedot/features/v1/) **implemented support for the two filter language variants discussed: [json-filter-expr](https://github.com/tschaub/ogcapi-features/blob/json-array-expression/extensions/cql/jfe/readme.md) and cql-json-array. You can see a sample request: [tieviiva (roadlink) features in bbox 24.00,66.00,24.05,66.05 and kohdeluokka >= 121111 and kohdeluokka <= 12132](https://beta-paikkatieto.maanmittauslaitos.fi/maastotiedot/features/v1/collections/tieviiva/items?bbox=24.00,66.00,24.05,66.05&filter-lang=json-filter-expr&filter=%5B%22all%22,%5B%22%3E=%22,%5B%22get%22,%22kohdeluokka%22%5D,12111%5D,%5B%22%3C=%22,%5B%22get%22,%22kohdeluokka%22%5D,12132%5D%5D).

### Specification Work

Phew, that was a lot of amazing implementation work, and this post is getting quite long. I think we’ll hold off on the specification work, and will hopefully detail it in posts for the next releases of the standards. Working OAFeat and STAC specifications in conjunction were really great, and most all the core things we set out to do had huge progress. STAC had a *ton* of great discussion and [mapped a path to get to 1.0-beta](https://github.com/radiantearth/community-sprints/blob/master/11052019-arlignton-va/group-work/STAC-1.0-plan) early next year. And the next set of powerful extensions for OAFeat is really coming together. We even snuck in some productive conversations about [OGC API — Catalog](https://github.com/opengeospatial/CAT4.0), which is starting up in earnest. We’ll share more about all the specification improvements soon.
