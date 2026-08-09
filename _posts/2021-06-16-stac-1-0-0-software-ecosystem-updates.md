---
layout: post
title: "STAC 1.0.0: Software Ecosystem Updates"
date: 2021-06-16
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-1-0-0-software-ecosystem-updates-da4e800a4973
image: /assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_00B-p2-LKnOmfdDg2w_gVQ.png
---

## STAC 1.0.0: The State of the STAC Software Ecosystem

This post continues the [STAC 1.0.0 announcement](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077) and [updates on the community and spec](https://medium.com/radiant-earth-insights/stac-1-0-0-spec-and-community-updates-164f7083f42), with an in-depth dive into one part of what we call the ‘STAC Ecosystem’. This is the ever-growing set of libraries, clients, and servers that rely on the STAC specification to build towards our goal of interoperability. The advanced state of this ecosystem is one of the things I’m most proud of with STAC, as one of the earliest goals was to have as much real-world validation as possible. And the coolest thing is that it feels like the momentum is just starting to really hit an inflection point, with more and more tools supporting STAC.

So this post will give an overview of the current state of STAC-related software, and where our ‘STAC 1.0.0 Initiative’ sponsor money has enabled us to accelerate. And in the next post, I’ll share what else we’re planning to fund, towards a vision of ‘STAC Ecosystem 1.0.0’. That’s the point when there are complete tools, with all the appropriate tutorials and documentation, so that anyone can easily create or consume STAC. Our goal is that most people will be able to do so without having to ever read the specification. It will just be the foundation that enables a network of interoperable data.

I tend to divide the set of tools into three broad categories:

- Clients, which enable users to more easily access STAC data.

- Servers, that make it easier to publish STAC catalogs, usually enabling ‘search.

- Utilities, the tools, and libraries that make it easier to work with STAC.

In that [STAC 1.0.0 announcement](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077), I touched briefly on the tools that were already supporting the 1.0.0 version of the spec. But I wanted to dive deeper, and also highlight some tools that aren’t quite at 1.0.0 yet but will be soon.

## Utilities

These are tools and libraries that make it easier to work with STAC. Generally, that means being able to:

- Read STAC Catalogs, usually starting with the core but ideally including searching any STAC API as well.

- Create, copy and update static STAC catalogs.

- Validate STAC, including the various extensions, and ideally also giving warnings about best practices.

Our eventual goal is that there is a set of utilities in at least every major programing language, and hopefully many minor ones as well. Using STAC should not require a developer to read the spec: they should be able to just pick the right library.

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_00B-p2-LKnOmfdDg2w_gVQ.png)

*The [stac-terminal](https://github.com/stac-utils/stac-terminal) calendar visualization*

Currently, Python is the closest to this vision. [**PySTAC](https://github.com/stac-utils/pystac/)** is the foundation, providing STAC reading and writing with its core Python model, and it is currently producing STAC 1.0.0 in its latest beta releases and should release its version 1.0.0 soon. There is also a typed ‘[pydantic](https://pydantic-docs.helpmanual.io/)’ model for STAC in the [**stac-pydantic](https://github.com/stac-utils/stac-pydantic)**. Validation is done with [**Python STAC Validator](https://github.com/sparkgeo/stac-validator) **which also powers [STACLint](https://staclint.com/), providing online validation, and the [**PySTAC client](https://github.com/stac-utils/pystac-client)** can search STAC API’s. It pairs well with the [**stac-terminal](https://github.com/stac-utils/stac-terminal)**, which can takes STAC Items as input and can output tables, calendars, plots, and histograms in a terminal.

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_r7KWP1ipNS5jLepRChM2Jw.png)

*The new stactools-packages github org*

Then [**stactools](https://github.com/stac-utils/stactools)** adds more utilities on top of PySTAC, including a [command-line interface](https://stactools.readthedocs.io/en/latest/cli.html#), as well a numerous data conversion utilities that read in the native data formats and metadata and transform them into proper STAC equivalents. The converters have just migrated to live in their own [stactools-packages](https://github.com/stactools-packages) github organization. There are already converters for a number of popular data sources, and we hope that most every data set will get a converter, serving as an official mapping to STAC. The stactools library is not yet producing STAC 1.0.0 in a release yet, but it’s available on a branch and is working towards a release. A related tool is [**pygeometa](https://github.com/geopython/pygeometa)**, which focuses more on ‘collection level’ metadata, translating between STAC and things like dcat, [dcat](https://www.w3.org/TR/vocab-dcat-2/) and [iso19139](http://www.iso.org/iso/catalogue_detail.htm?csnumber=32557).

In Python there’s also [**intake-stac](https://github.com/intake/intake-stac/)**, providing a connector from any STAC data into [Intake](https://github.com/intake/intake), which is a set of tools for loading and sharing data data science projects, requiring less geospatial expertise. And there’s two projects that both let you treat a whole STAC catalog as a single data structure, loading only what is necessary. [**StackSTAC](https://github.com/gjoseph92/stackstac)** loads into a 4D [xarray](http://xarray.pydata.org/en/stable/) DataArray (dims: `time, band, y, x`), including reprojection to a common grid. And **s[tac-vrt](https://stac-vrt.readthedocs.io/en/latest/)** quickly generates a [GDAL VRT](https://gdal.org/drivers/raster/vrt.html) from a collection of [STAC](https://stacspec.org/) items. Though they have slightly different targets they are quite similar in how they work, so may come together in some way.

And we’re also seeing STAC start to just be incorporated into tools that are finding it to be a useful addition. [**UKIS-pysat](https://github.com/dlr-eoc/ukis-pysat)** provides generic classes and functions to query, access, and process multi-spectral and SAR satellite images. [**EODAG](https://github.com/CS-SI/eodag)** (Earth Observation Data Access Gateway) is a command-line tool and a plugin-oriented Python framework for searching, aggregating results, and downloading remotely sensed images. And rasterio has a [STAC plugin](http://devseed.com/rio-stac/intro/), which is probably the fastest way to go from any raster data to STAC.

Two other languages with solid STAC support are Scala and .NET. The core STAC models for Scala are in [stac4s](https://github.com/azavea/stac4s), which powers the excellent [Franklin server](https://azavea.github.io/franklin/). And [**stac-repl](https://github.com/jisantuc/stac-repl)** also builds on stac4s, to provide an interactive console to interact with STAC API’s. [**DotNetStac](https://github.com/Terradue/DotNetStac)** is a great library for .NET, and it sits at the core of [**Stars — Spatio Temporal Asset Router Services](https://github.com/Terradue/Stars)**, which provides a command-line interface and a variety of utilities. There is also a nice STAC library in R, called [**rstac](https://github.com/brazil-data-cube/rstac)**, which supports STAC 0.9.0, and aims to upgrade to 1.0.0.

As python is the leading language in the geospatial world it makes sense that a lot of energy has gone in there. Javascript is also used extensively in both servers and clients and has a handful of utilities like [**stac-migrate](https://github.com/stac-utils/stac-migrate)** and [**stac-node-validator](https://www.npmjs.com/package/stac-node-validator)**. It does not yet have a general library, but we hope there would be one soon. There are also STAC tools written in Java and PHP, but not yet general utilities and libraries for them.

## Clients

[**STAC Browser](https://github.com/radiantearth/stac-browser)** was the first STAC client. It is in some ways more of an ‘interactive translator’, rendering an HTML version from the STAC JSON. So it doesn’t do any search of data, at least not yet, it just gives a nice visual representation of any STAC JSON. Its latest release supports STAC 1.0.0. but it is currently getting a complete rewrite to be a bit simpler and more pluggable. It can be installed locally, but it also is a core part of [STACIndex.org](https://stacindex.org/), where anyone can submit their catalog and get an automatic HTML version of their catalog, powered by STAC Browser.

The other major STAC visualization tool is [**Rocket](https://rocket.snapplanet.io/)** which enables searching and browsing of STAC catalogs. Any STAC API can be plugged into it, and users can narrow their search criteria and it will show footprints of the search results.

![](https://miro.medium.com/v2/resize:fit:1400/1*6yu80aGtGLFPcmqgf0SfuQ.gif)

*Rocket client, exploring the Resto Catalog*

And [**Unfolded Studio](https://www.unfolded.ai/)** is starting to use STAC internally and will likely start to support it more generically soon. There has also been work done on a QGIS plugin, but it needs to be upgraded to 1.0.0. In the next few months, there should hopefully be a revamped plugin that provides a great experience of working with STAC for any QGIS user.

Our next goal with clients is to get a baseline level of STAC support in the major mapping toolkits, like OpenLayers, Leaflet, Cesium, Deck.gl/Kepler and more. We’ve also heard rumors that ESRI may support it, which would obviously be a huge win. If you’re an ESRI user do tell them that you’d like to see the ability to search for STAC in ESRI tools. [Hexagon](https://www.hexagongeospatial.com/) does seem to be embracing STAC, so they may well be the first major commercial vendor with STAC support.

## Servers

Most of the STAC Servers focus on STAC API and its ‘[search](https://github.com/radiantearth/stac-api-spec)’ capabilities. STAC API is still in ‘beta’, but is rapidly maturing, with a recent [1.0.0-beta.2 release](https://github.com/radiantearth/stac-api-spec/releases/tag/v1.0.0-beta.2) that cleaned up a lot and brought in [OGC CQL](https://www.ogc.org/standards/requests/229), and work started on an API validator. So the ideal STAC servers emit STAC 1.0.0 content, and are on at least 1.0.0-beta.1 and updating with the latest releases.

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_4yk6EwB_s9DF_VBdB9mXTg.png)

[**STAC Server](https://github.com/stac-utils/stac-server)** was one of the first STAC implementations, starting life as a project called ‘sat-api’, which quickly adopted STAC. It’s written in javascript / node.js, and will soon be releasing with STAC 1.0.0, STAC 1.0.0-beta.1 and OGC CQL support. It powers the excellent[ Earth Search service](https://www.element84.com/earth-search/), which provides STAC API for any STAC compliant data on [Earth on AWS](https://aws.amazon.com/earth/).

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_PwS6eGnLyl9nwLODSD2lXA.png)

*Radiant MLHub, powered by STAC & Franklin*

[**Franklin](https://azavea.github.io/franklin/) **was an early STAC adopter, written in Scala, and it powers a STAC [instance of NASA Avris data](https://stacindex.org/catalogs/nasa-aviris-catalog#/), as well as the [Radiant Earth MLHub](https://www.radiant.earth/mlhub/), which provides lots of machine learning labeled training data as STAC. It supports STAC 1.0.0, and STAC API 1.0.0-beta.1, and is working on adding CQL support. It is also used internally at Azavea to power various projects, including their [GroundWork](https://groundwork.azavea.com/) image labeling tool, which outputs directly as STAC.

[**Resto](https://github.com/jjrom/resto)** is a PHP Server for searching Earth Observation data, which adopted STAC as its main interface, and powers a [Landsat 8 and Sentinel 2 catalog](https://stacindex.org/catalogs/sentinel-2-and-landsat-8-catalog#/). It is the default service behind [Rocket.snaplanet.io](https://stacindex.org/catalogs/sentinel-2-and-landsat-8-catalog#/), which is probably the most capable API client at the moment. It fully supports STAC 1.0.0 and STAC API 1.0.0-beta.1.

[**Staccato](https://github.com/planetlabs/staccato)** was started in the very first STAC sprint, and is the leading Java implementation. It has a demo service with Planet and Landsat data up at [staccato.space](http://staccato.space)

[**pygeoapi](https://pygeoapi.io/) **is a Python server implementation of the [OGC API suite of standards](https://ogcapi.ogc.org/), so its core is more centered on the Features and Records OGC API’s, but it added STAC a few versions ago and is working on upgrading to STAC 1.0.0 and STAC API 1.0.0-beta.2.It is an interface for the Meteorological Service of Canada’s MSC GeoMet [API platform](https://api.weather.gc.ca/)

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_9Vejg1LfuXVW3lDd1BAOoA.png)

*Microsoft Planetary Computer, with search powered by STAC-FastAPI*

[**STAC-FastAPI](https://github.com/stac-utils/stac-fastapi) **uses [FastAPI](https://fastapi.tiangolo.com/), a relatively new Python framework, to easily create STAC API implementations. It was originally developed by Arturo, powering their geospatial services, and more recently has been adopted as the core search for Microsoft’s [Planetary Computer](https://planetarycomputer.microsoft.com/).

One other piece of software worth mentioning is [Titiler](https://devseed.com/titiler/), which is primarily a dynamic tile server. It doesn’t provide a STAC API, like all the others listed, as that’s not its purpose. But it integrates with STAC extensively. It can use STAC as an input source, taking advantage of all its metadata to ease configuration, and enabling dynamic querying of the STAC values. And it integrates well with STAC-FastAPI, doing cool things like rendering dynamic STAC search results as a single tile service, leveraging the cool [MosaicJSON spec](https://github.com/developmentseed/mosaicjson-spec).

## Data Services

Beyond software that will run a STAC API with any data, there are a number of services that implement STAC but are focused on just one particular dataset. I’ll use a future post to highlight all the great data available in STAC, but I wanted to call out these as they’ve built innovative software that supports STAC, though in a more specialized way.

[**CMR-STAC](https://wiki.earthdata.nasa.gov/display/ED/SpatioTemporal+Asset+Catalog+%2528CMR-STAC%2529+Documentation)** is a STAC implementation by NASA, that works as a proxy to their core [CMR Search](https://cmr.earthdata.nasa.gov/search) that catalogs their vast data holdings. The source code is available on [github](https://github.com/nasa/cmr-stac), in case anyone wants inspiration for how to use STAC as a facade on existing service. [**CBERS](https://registry.opendata.aws/cbers/)** offers a STAC API, and has a [github repository](https://github.com/fredliporace/cbers-2-stac) that includes the code for creating the static data catalog, keeping the catalog in sync with AWS SNS/SQS, and implementing the STAC API. The [**CEOS FedEO](https://ergo.spacebel.be/readme.html)** (Federated Earth Observation missions access) provides a unique entry point to a growing number of scientific catalogues and services for, but not limited to, EO European and Canadian missions. It has a number of programmatic interfaces, including OpenSearch, but also implemented STAC 1.0.0-beta.2 with STAC API 0.9.0, and we hope they’ll upgrade soon as it’s a great set of data. And another really interesting project that has embraced STAC is [**OpenEO](https://openeo.org/)**, which provides an abstraction layer on top of big Earth observation cloud back-ends, and uses STAC to describe their data holdings. It has updated its core spec to STAC 1.0.0, and the various OpenEO implementations are in the process of upgrading.

![](https://miro.medium.com/v2/resize:fit:1400/1*rQ74LZBNJoJd7gzvsc93Ww.gif)

*Astraea’s Earth OnDemand, with all data available as a STAC API*

And then there’s a couple of commercial platform providers that make their core data services available as STAC. Astrea’s [**Earth OnDemand](https://earthondemand.astraea.earth/) **is a great platform with a number of interesting public datasets, and they have a completely [open STAC interface](https://stacindex.org/catalogs/astraea-earth-ondemand#/) to access the data. And Sinergise’s [**Sentinel Hub](https://www.sentinel-hub.com/) **is another great platform for satellite imagery, and their [Catalog API](https://docs.sentinel-hub.com/api/latest/api/catalog/) implements STAC. It requires an API key, but you can sign up for their platform for free. Neither has updated to STAC 1.0.0, but they both have recent implementations so should work with most tools, and we hope they’ll update soon.

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_nNlkuHw8LubujjMGs3uK4A.png)

## STACIndex.org

It’s also worth highlighting one of the best resources in the ecosystem, which is [stacindex.org/ecosystem](https://stacindex.org/ecosystem). This is a definitive, filterable list of all the tools in the STAC ecosystem. And unlike this post it will stay up to date. If you know of a tool that is not listed in this post then please add it there. And check back in to see what else gets added.

## STAC 1.0.0 Funding

I also wanted to call out some of the tools above for helping us get to STAC 1.0.0, and our sponsors who enabled us to give some ‘in kind’ funding to help the people behind them be able to prioritize the work.

![](/assets/img/posts/stac-1-0-0-software-ecosystem-updates/1_h5oLOcM8vFYjIzeYn0pSWg.png)

The STAC Project Steering Committee selected small contracts to upgrade CBERS, STAC Server, Franklin, Staccato, PySTAC, DotNetStac, and Resto/Rocket. They all were able to implement to at least one of the STAC 1.0.0 ‘release candidates’, giving key feedback on the specification so we could feel confident that nothing would need to change after the 1.0.0 release. Funding also went directly to work on the core STAC specification, as well as the STAC API specification.

In the next post, I’ll discuss where the STAC spec and greater ecosystem is headed, towards the vision of ‘STAC Ecosystem 1.0.0' and beyond, as well as the current plans for how the PSC will likely use the STAC 1.0.0 sponsorship money to accelerate that vision. I’ll also do a deep dive into all the data that is available as STAC in a future post after there’s been some time for key datasets and data services to update to version 1.0.0.

## More STAC 1.0.0 Information

This post is just a small part of the overall blog series on STAC 1.0.0. Start with the [main announcement](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077), and follow the growing number of posts linked at the bottom to learn more.
