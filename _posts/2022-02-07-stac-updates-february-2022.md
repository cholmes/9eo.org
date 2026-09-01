---
layout: post
title: "STAC Updates, February 2022"
date: 2022-02-07
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-updates-february-2022-e02a194861e
image: /assets/img/posts/stac-updates-february-2022/1_xMFDCanWXRDte6JyQ5B4Uw.png
---

I seem to be falling into more of a quarterly cadence of STAC community updates, where I go long enough that there are several things to talk about. So read on for all the latest happenings!

## STAC Funding Initiatives

In the [last update post](https://medium.com/radiant-earth-insights/stac-updates-fall-2021-ac97e66edb48), I shared that we had a great set of sponsors come in to further the greater STAC ecosystem.

![](/assets/img/posts/stac-updates-february-2022/1_8yRwmnNjQIqMhybzqspd8Q.png)

I’m pleased to share that we had a first successful ‘funders call’ to determine the priorities for the money we raised. This probably slowed the process a bit, but it was super valuable for the STAC Project Steering Committee to hear from key sponsors what they see as most needed in the STAC ecosystem. It was a great conversation, and I look forward to future calls.

### Funding Priorities

After taking input from funders and discussion with the Project Steering Committee we got to an initial allocation of funds. The exact funding amounts will likely shift, but I wanted to share the priorities, as well as which projects were designated as priority projects from Platinum and Gold sponsors.

- **PySTAC Maintenance** — This was actually the project that kicked off this round of funding, as we wanted to ensure that the [PySTAC project](https://pystac.readthedocs.io/en/stable/) continued to evolve. This one was set as a priority from ***Microsoft***, and Radiant Earth is already under contract working on it. They just did a nice [new release of 1.3.0](https://twitter.com/STACspec/status/1483802304726056960), which included lots of nice documentation improvements.

- **STAC API 1.0.0** — There was good agreement from everyone that a top priority is to get [STAC API](https://github.com/radiantearth/stac-api-spec) to a 1.0.0 final release, so this will likely see the biggest chunk of funding. The plan is to fund a robust test engine as well as clients and servers, to ensure that there is real-world implementation before we lock in the specification. This was set as a priority from ***Planet***, but is being funded more broadly by every sponsor.

- **STAC Spec Community Management** — The other area that had broad agreement on being very important was doing a better job of maintaining the core STAC specification and its extensions. So we’ll be funding more community management to help with that. ***Toitū Te Whenua Land Information New Zealand*** designated this as their top priority, complementing the great work they’ve done in improving STAC extensions.

- **STACTools** — One of [my favorite STAC ecosystem](https://medium.com/radiant-earth-insights/a-belated-introduction-to-stactools-712f20e43fbc) projects also could use some more love, helping to get releases for all the plugins, improving documentation, and tackling bugs. ***Digital Earth Africa and GeoScience Australia*** teamed up for their gold sponsorship and designated STACTools as a priority.

- **R-STAC** — The other priority from ***Microsoft*** is to help evolve [rstac](https://cran.r-project.org/web/packages/rstac/index.html), an awesome project out of Brazil to make STAC accessible to the [R Project for Statistical Computing](https://www.r-project.org/). This will help them upgrade to support STAC API 1.0.0 when it is released, giving us key feedback about it.

- **STAC Website Refresh** — The other priority, which continues from the previous funding round, is to fully upgrade the [https://stacspec.org](https://stacspec.org) website to be more maintainable, accessible, internationalized, and reactive. ***Element84*** designated it as their priority (and they are also the team that is doing the improvements).

- **STAC Browser** — The final project is [STAC Browser](https://github.com/radiantearth/stac-browser), which is approaching version 3.0 with a lot of great improvements. The big goal here is to expand the community, so it’s more than a single-person project. Matthias has done an incredible job with it, but we want to be sure there’s a real community around it. The prioritization of it came from ***Planet**.*

### Calls for Proposals

We are still figuring out how to best balance the desire to do open calls for proposals with the amount of work required by the PSC to actually post, evaluate, award, and follow up on the details of the work itself. This time we will do a mix of open proposal calls and direct contracts with key community members. The one thing we are going to try this time is to give set budgets of how much funding is available but be flexible on the requirements of what is delivered. So look for a call for proposals soon, likely for STAC Browser, STAC Tools, and STAC API Test Engine.

### Tutorials

I’m also pleased to share that the remaining funds from the previous funding round will all be allocated to new tutorials for the STAC Ecosystem. This will be led by Radiant Earth, who will create new content and also will run an open call for proposals to fund additional tutorials. These will be added to the coming STAC website refresh. These will also include better documentation for stac-fastapi, which was a priority discussed for the latest funding, but since it was documentation focused it seemed better to apply the previous round’s funding towards it.

## Ecosystem Updates

There’s been lots of interesting work going on in the broader STAC community. I’m sure I’ll miss some, so feel free to send me information and I’ll update this post or get it on the next one.

### STAC API Beta.5 release

The top of the list is that [1.0.0-beta.5 of STAC API](https://github.com/radiantearth/stac-api-spec/releases/tag/v1.0.0-beta.5) is out the door! A big thanks to Phil Varner for shepherding this one through, it was a lot of work. It looks like it’s going to be our final ‘beta’ release, as there are a few CQL changes we need to pick up from OGC API — Features and then we’ll be ready to cut the first 1.0.0 release candidate.

The big improvement for this release is two new conformance classes — ‘[Browsable](https://github.com/radiantearth/stac-api-spec/tree/master/browseable)’ and ‘[Children](https://github.com/radiantearth/stac-api-spec/tree/master/children)’. Phil did a really incredible job taking all the diverse needs of the community and distilling them down into clear specs, and I highly recommend reading both (just follow the links) to see what they’re all about. My quick attempt to explain is that Browsable gives guidance for a STAC API to expose every Item in the same way that the core STAC Spec does, as links down various catalogs to get to the leafts, enabling it to be explorable through tools like STAC Browser. And Children makes it easier to query a server for all child links, just like the ‘items/’ endpoint gets all the item links. This is helpful for servers with lots of collections, especially when they ‘group’ them with child links down.

There has also been a lot of great dialog with the group making [CQL](https://github.com/opengeospatial/ogcapi-features/tree/master/cql2) in OGC, resulting in a number of improvements there, which are being incorporated back into the STAC API spec. As mentioned above this work will conclude in STAC 1.0.0-RC.1, but the bulk of the work was done for beta.5.

### STAC QGIS Plug-in 1.0.0 release

One of the most exciting pieces of news is the release of a [STAC Plug-in for QGIS](https://kartoza.com/en/blog/new-qgis-stac-api-plugin/)! It was built by [Kartoza](https://kartoza.com/en/), whose developers are some of the biggest contributors to QGIS and have been recently exploring STAC. It’s awesome to welcome them into the community. And a big thanks to Microsoft & their [Planetary Computer](https://planetarycomputer.microsoft.com/) team for providing the funding.

![](/assets/img/posts/stac-updates-february-2022/1_xMFDCanWXRDte6JyQ5B4Uw.png)

*Planetary Computer STAC results selected and streaming as COG’s into QGIS.*

Bringing STAC data to desktop tools has been one of the biggest missing pieces of the ecosystem. I was on an [episode of the Africa GeoConvo podcast](https://africageoconvo.com/shows/8) and it really became clear that the way STAC would make a difference to general GIS users is when you could access vast amounts of imagery directly through your desktop GIS. I was hoping ArcGIS Pro might be the first, but perhaps they will offer it soon.

It’s an awesome milestone for the Kartoza team get this release out, and I’m excited that they are committed to iterating on the user experience and functionality. So do try it out and give feedback on what you’d like to see improve [through github](https://github.com/stac-utils/qgis-stac-plugin/issues).

![](https://miro.medium.com/v2/resize:fit:1400/1*kojzp2KDg70xIXaCv7WKkg.gif)

*STAC searching from QGIS with the new plug-in.*

### Quick Hits

And I wanted to quickly highlight a few other cool things that have bubbled up in the community.

Mykola Kozyr released a [***STAC Discovery App](https://share.streamlit.io/mykolakozyr/stacdiscovery/main/app.py)*** using [Streamlit](https://streamlit.io/), that uses [kepler.gl](http://kepler.gl) to do really nice time visualizations. Check out his [tweet](https://twitter.com/MykolaKozyr/status/1482024678176837636) for some cool visualizations.

Matthias Mohr posted a [really nice update](https://medium.com/radiant-earth-insights/the-exciting-future-of-the-stac-browser-2351143aa24b) on the future of [***STAC Browser](https://github.com/radiantearth/stac-browser)***, which he’s rewritten from the ground up for version 3.0, which has had 6 alpha versions. It’s got a refreshed user interface:

![](/assets/img/posts/stac-updates-february-2022/1_uY9EQu14rTXzjzzEfKnKIg.jpeg)

And it has lots of new additions like pagination support for APIs, visualization of asset metadata, a new sidebar to quickly browse through the Catalogs, Collections, and Items, and Client-side support for cloud-optimized GeoTiffs (COGs). And my favorite improvement is that its URL’s are now far more human-readable. To me one of the key features of STAC is to be able to give someone a link that makes it easy for them to see metadata, download the data and even visualize it right there. But in previous STAC versions that link would be something like [*https://example.com/item/91zP74yZWQw9uxj6H5KZHsiuyTUWpiT5CMDiPAoxMDMKGhJSZp5VDozYejfbqWUyQLBgsAacMz/zRJ4YVRUHsR5hDaJymynTG7HHTJGLU3yr4vKcZ434boTDXWZkurF6Tkakj4MiTvGSnuMaZE96xi8VsNzrSbXotfrWsMD9H*)](https://example.com/item/91zP74yZWQw9uxj6H5KZHsiuyTUWpiT5CMDiPAoxMDMKGhJSZp5VDozYejfbqWUyQLBgsAacMz/zRJ4YVRUHsR5hDaJymynTG7HHTJGLU3yr4vKcZ434boTDXWZkurF6Tkakj4MiTvGSnuMaZE96xi8VsNzrSbXotfrWsMD9H)). There were lots of good reasons for this, and it was a surprising amount of work to get to URL’s like [https://example.com/collections/ch.swisstopo.pixelkarte-farbe-pk25.noscale/items/swiss-map-raster25_1984_1056](https://example.com/collections/ch.swisstopo.pixelkarte-farbe-pk25.noscale/items/swiss-map-raster25_1984_1056).

Qiusheng Wu added COG & STAC support to the awesome [***leafmap](https://leafmap.org/)** *project. See [his tweet](https://twitter.com/giswqs/status/1480901843253354502) for cool visualizations, and the leafmap [documentation on COG & STAC](https://leafmap.org/notebooks/03_cog_stac/?h=stac) for how to use it.

![](https://miro.medium.com/v2/resize:fit:1400/1*fQXeImFfhTprlZRngmn29Q.png)

I wrote a blog post on [***Planet’s STAC support](https://medium.com/planet-stories/planet-and-spatiotemporal-asset-catalogs-186aa99ce8b7)***, including a [new catalog of open data](https://stacindex.org/catalogs/planet-labs-stac-catalog) as well as support for [STAC in the orders API](https://developers.planet.com/docs/orders/delivery/#stac-metadata).

Jon Duckworth released [***PySTAC 1.3.0](https://github.com/stac-utils/pystac/releases)***, which brings a number of fixes and a refresh of the documentation.

I also recently learned that Maxar has a lot of cool Analysis Ready Data samples available as [https://ard.maxar.com/samples/](https://ard.maxar.com/samples/).

The final thing to highlight is that our bi-weekly STAC calls continue to be a great little community gathering. Last week we had 15 people join, including a number of new community members. You can check [my call notes](https://docs.google.com/document/u/3/d/1j9zVn0NiA81VOqFvo-FFv_awiJjhY9jxvGEDEJnJCDw/edit) for what happened (though I apologize that I tend to fall off a lot when we get to the topics as it’s hard to participate and take notes. If you’re interested in stopping by to say hi then just ask to be added to the calendar on [our gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) (which has also been active recently and is another great place to get help).
