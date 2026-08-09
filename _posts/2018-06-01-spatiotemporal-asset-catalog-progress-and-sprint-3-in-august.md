---
layout: post
title: "SpatioTemporal Asset Catalog Progress and Sprint #3 in August!"
date: 2018-06-01
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalog-progress-and-sprint-3-in-august-b4f59a895c1c
image: /assets/img/posts/spatiotemporal-asset-catalog-progress-and-sprint-3-in-august/1_UjdO5eIkqY8mWa61E8dPvQ.png
---

![](/assets/img/posts/spatiotemporal-asset-catalog-progress-and-sprint-3-in-august/1_UjdO5eIkqY8mWa61E8dPvQ.png)

There’s been some excellent progress on SpatioTemporal Asset Catalogs (STAC) in the past month, so we wanted to share what’s been going on. And we’re also running the third community event in August, so wanted to welcome potential participants.

## New STAC Logo

You may have noticed above, but we’ve got a new logo! Thanks to [Radiant.Earth](http://radiant.earth) for funding its creation and finding a great graphic designer to build it. You can download full resolution logos in the [stac-spec repo](https://github.com/radiantearth/stac-spec/tree/master/logos) on github.

## More STAC implementations

We’ve had a few cool STAC implementations in the past few weeks:

### STAC Browser

The first thing to mention, as a few of the implementations below make use of it, is the [STAC Browser](https://github.com/radiantearth/stac-browser); this was created by my Radiant.Earth co-fellow Seth Fitzsimmons, as an experiment in creating a browsable HTML version of a SpatioTemporal Asset Catalog directly from the STAC Item JSON files. I think the results are quite compelling, leveraging the power of Cloud Optimized GeoTIFF’s so that each item gets not only a display of the metadata, but also a shareable slippy map. Seth plans a deep dive on it so I won’t steal his thunder, but you’ll see links below that make use of it.

![](/assets/img/posts/spatiotemporal-asset-catalog-progress-and-sprint-3-in-august/1_l1Vtr27IM7ZB2Sw6rNtksA.png)

*An ISERV catalog item in the new STAC Browser*

### ISERV

Radiant.Earth helped open up this NASA dataset that was gathered from the International Space Station, while [Azavea](https://www.azavea.com/) helped to put the static catalog together (using their [pystac library](https://github.com/raster-foundry/pystac)). It’s a cool set of data, which is open to anyone to use. The data are currently in a ‘developer preview.’ We hope to make the html catalog even more accessible and then share it more widely. You can [explore in the stac browser](http://iserv-stac.netlify.com/) (though the location likely will change), or use the [raw catalog json](https://s3-us-west-2.amazonaws.com/radiant-nasa-iserv/iserv.json).

### CBERS

Arguably the first full dataset available as a static catalog, the CBERS archive is available as a full static catalog as part of Earth on AWS. Frederico Liporace implemented the EO profile, and Seth has been working to display it with the STAC Browser. You can try it out at [cbers-stac.netlify.com](http://cbers-stac.netlify.com/) (location may move). This dataset is also neat, fully open, and from a satellite collaboration between Brazil and China.

### sat-api

Development Seed’s new iteration of their [sat-api](https://github.com/sat-utils/sat-api), which provides a queryable API for open data, implements the STAC API specification, exposing the full Landsat 8 and Sentinel Archives. They’re working on being able to crawl static catalogs, so they could easily add CBERS, ISERV, and others.

### Yours?

If you’ve got a STAC implementation, either data that follows the spec or software that creates it, then let us know! We’d love to share your work with the world.

## Third STAC Sprint August 13–15

Building on the successes of our [community sprints](https://github.com/radiantearth/community-sprints) in both Ft. Collins and Boulder, we’re planning the next sprint in August. This time we’ve decided to try out a new state — Mountain View, California - with Planet generously donating space. Radiant.Earth is sponsoring the convening again, and we’re doing it in collaboration with the [Analysis Ready Data event](https://medium.com/@cholmes/join-us-in-august-for-an-analysis-ready-data-interoperability-workshop-ec0d0499003e). It should lead to some cool cross-collaborations, as exposing ARD as STAC makes a lot of natural sense. If you’d like to join us, please fill out the form below:

> [https://goo.gl/forms/8JwGZzhJ66lefR4o2](https://goo.gl/forms/8JwGZzhJ66lefR4o2).

Note that we’re aiming to keep attendance to only those who have built software that implements STAC or created datasets that follow the spec. If you are interested in attending, but have not developed anything yet, please get in touch, and we can likely figure out a project for you to take on beforehand. We want everyone there to have practical experience with the spec so that we can drive decisions forward.
