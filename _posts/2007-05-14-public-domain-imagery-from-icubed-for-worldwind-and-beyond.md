---
layout: post
title: "Public domain imagery from iCubed for WorldWind and beyond?"
date: 2007-05-14
source: wordpress
source_name: "cholmes.wordpress.com"
source_url: https://cholmes.wordpress.com/2007/05/14/public-domain-imagery-from-icubed-for-worldwind-and-beyond/
tags: ["architectures of participation", "geospatial", "geospatial web"]
description: "So I’m watching this video about the new Java WorldWind. And there’s a couple quotes of interest from Patrick Hogan, NASA’s lead on the project: That’s access to different NASA datasets that you can leverage, public domain, so you can use and abuse that information as you like, do anything you want"
---

So I’m watching this [video](http://news.com.com/1606-2_3-6182308.html?part=rss&tag=2547-1_3-0-20&subj=news) about the new [Java WorldWind](http://worldwind.arc.nasa.gov/java/index.html).

And there’s a couple quotes of interest from Patrick Hogan, NASA’s lead on the project:

> That’s access to different NASA datasets that you can leverage, public domain, so you can use and abuse that information as you like, do anything you want with it, but mostly have fun have fun with innovating, kind of going places we haven’t even dreamed of yet.
>
> …
>
> I should point out that the iLandsat is from a company called iCubed and they have provided that kind of, that dataset for the earth that typically costs about a quarter of a million plus just for internal use, and they have donated it to WorldWind for use by the public.

Public domain imagery from [iCubed](http://i3.com/)? Sounds like a dream come true to me. Of course this just opens up lots more questions, like what resolution, what part of the world, what year is it from, ect. But if it’s truly public domain that’s really great news for any collaborative mapping projects that are unsure about deriving their information from commercial imagery.

I’m hoping that someone will be able to hack in and figure out if the imagery is really available. But the server referred to in the source code seems to get ‘Server is too busy’ errors, and when I use WorldWind here I’m not getting *any* tiles. When I get some time I’ll maybe try to dig in to the source a bit more and maybe get some links to the imagery.

Looking at the source code does seem to reveal some references to [GeoServer](http://geoserver.org), for their placename layer, which we always like to see 🙂 I will encourage them to change the namespace prefix from ‘topp’ (which is the default and refers to the [organization I work for](http://topp.openplans.org)), to something more appropriate like ‘nasa’ (though keeping it does make it easier for me to know it’s a GeoServer, which is nice…). And I’m curious about their ASPX cache – if you guys let me know what/how you’re caching I’d be happy to try to build it as a module for GeoServer.
