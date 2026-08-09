---
layout: post
title: "Next steps for mashups"
date: 2006-04-07
source: wordpress
source_name: "cholmes.wordpress.com"
source_url: https://cholmes.wordpress.com/2006/04/07/next-steps-for-mashups/
tags: ["architectures of participation", "geospatial"]
description: "Just read Schuyler's thoughts on Web Map API's over at Mapping Hacks and he ends with a query about the next stage of the game for web mapping. I'm pretty sure I know where he's going, which I'm planning on exploring fully here (been planning for awhile, but I'm still not giving up, I promise), […]"
---

Just read Schuyler's thoughts on [Web Map API's](http://mappinghacks.com/2006/04/07/web-map-api-roundup/) over at [Mapping Hacks](http://mappinghacks.com) and he ends with a query about the next stage of the game for web mapping. I'm pretty sure I know where he's going, which I'm planning on exploring fully here (been planning for awhile, but I'm still not giving up, I promise), but I had a few thoughts at this nice [LI Conference](http://locationintelligence.com/conference) hosted by [Directions](http://directionsmag.com).

The main thought is really quite simple, on how we take an intermediary step to the full on Geospatial Web dreams. It's this:

Yahoo!, Microsoft and Google need to build in [GeoRSS](http://georss.org) *out*put in to their mashup APIs.

At this LI conference, the vendor guys were actually getting quite good talking about GeoRSS, and how they can read it in. Which is sort of interesting to me. But what gets really interesting is when they can output GeoRSS by default. This turns any mashup in to [Drive By Data](http://paul.kedrosky.com/archives/001502.html) and the essence of Tim O'Rielly's [Architecture of Participation](http://www.oreillynet.com/pub/wlg/3017) ([mine's](https://cholmes.wordpress.com/2006/01/24/architectures-of-participation-yktm/) a bit more on top of that) – that users will create things of value simply by doing what they're doing already.

It makes it so I can build a mashup that is just a synthesis of three other mashups, from Yahoo! and Microsoft, since by using their API a hacker would have (perhaps) unknowingly made a GeoRSS feed of the points he was plotting. Right now that's impossible unless the mashuper explicitly make their data available. Many just put it up in a simple xml format already, but by building GeoRSS explicitly in to the mapping engine, it will always happen. Once this gets started, you can start to see what GeoSpatial Search would look like, and these search engine companies can apply what they know best to maps. Not just finding local information, but allowing us to search and sort layers of data that users from all the world are putting up on mashups. Yahoo! is making some traffic feeds and whatnot available as GeoRSS, but they're not yet making it so anyone who makes a mashup has a feed that someone else can attach to, in the way that flickr or del.icio.us does.

Once this happens, will see the start of real mashups, not just attaching data from one db to a silo of information, but allowing mashups to interact, to overlay housingmaps with a crime map with a pollution map with a starbucks location map, to see how housing prices are affected by such things. You start to enable citizens to discover interesting trends spatially, instead of just sitting back and letting a programmer/masher decide how things should be overlaid. The GeoSpatial Web becomes richer, lowering the bar so that it's not just javascript programmers who can display data how they want, but so that it's really anyone.

And once we make the first step with GeoRSS, then we can start to get WMS and WFS, to combine with the rest of the Geospatial Web, so that we're not in divergent walled gardens, but instead all speak the same language and start to build something much bigger. But even if they just start with GeoRSS then I can just make a datastore in [GeoServer](http://geoserver.org) that can translate from GeoRSS to the richer display options of WMS and deeper query language possible with WFS.
