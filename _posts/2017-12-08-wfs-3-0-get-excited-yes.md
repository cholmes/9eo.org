---
layout: post
title: "WFS 3.0 — Get Excited? Yes!"
date: 2017-12-08
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/wfs-3-0-get-excited-yes-8e904fdbcc0
image: /assets/img/posts/wfs-3-0-get-excited-yes/1_oC5EpjcUm9thmOuHdiTIiA.png
---

## WFS 3.0 — Get Excited? Yes!

Well, get excited if you’re deep in to geospatial and open standards — I’m pretty sure a majority of the world would find this booooring.

But that’s ok. In this post I want to bring attention to the great work being done on [WFS 3.0](https://github.com/opengeospatial/WFS_FES) specification from the [Open Geospatial Consortium](http://opengeospatial.org) (OGC). The first awesome thing you’ll notice is that link goes to a GitHub repo, where the specification is being [actively worked on](https://github.com/opengeospatial/WFS_FES/issues), and anyone can join in and contribute. In general the core standard so far gets a whole lot right, and I believe has potential to bring much more interoperability to the geospatial world. Though I’ve been pretty vocally negative on WFS for a number of years I think the core team has made a really clean break and is embracing many of the right principles to build a really impactful specification.

So I’ve started this post a couple times, and each time I veered towards being more negative than I’d like, since I truly am quite excited by the potential of WFS 3.0. So I’m going to save more of the backstory of the evolution of WFS 3.0 and what I felt earlier versions got wrong, and stick with the things I’m excited about.

## A clean break

The biggest thing that the WFS working group decided to do for WFS 3.0 was to make a clean break with a majority of the ways that previous versions of the specification had done things — cutting all the cruft in one fell swoop. The core conceptual model stays the same, enabling access to geospatial data through a web service. But there is no longer XML baked in to every single operation, and there’s no longer two to four different ways to do everything (KVP, POST, REST + SOAP). In the repo there is a great [overview](https://github.com/opengeospatial/WFS_FES/blob/master/overview.md) of all the ways they are attempting to modernize, but I wanted to go through some of the highlights.

### REST + JSON in a simple core

Finally, a true REST interface defines the core, following the best practices that have evolved in the last ten years. The specification defines only the core that must be implemented, and there seems to be commitment to put advanced functionality in separate extensions instead of bloating the main standard. And JSON is prominently featured, along with HTML. I’m hoping that we can move XML out of the core and into an extension.

### Implementability

For a developer to understand previous versions of the WFS specification in order to get something working required reading through several hundred pages of text. The standards working group made a key decision to start with defining the spec in [OpenAPI](http://openapis.org), which makes it super easy to get a feel of what an implementation would look like. You can just go to [editor.swagger.io](http://editor.swagger.io/), select *File -> Import URL* and give it [this link](https://raw.githubusercontent.com/opengeospatial/WFS_FES/master/openapi.yaml) and get a quick overview of what it looks like.

![](/assets/img/posts/wfs-3-0-get-excited-yes/1_unq94zQzJXBh-J4xk0LGkA.png)

*The WFS 3.0 specification in an online OpenAPI 3.0 editor.*

OpenAPI also is able to power many code generation tools that give a developer the main interfaces of the specification in their language. OpenAPI 3.0 does not yet have wide code generation support, but there is a OpenAPI 2.0 / Swagger version of the specification (it just doesn’t support XML — a huge loss ;)

### Embracing the Web

One of the things I like most about WFS 3.0 is that it is truly embracing the core principles of the web. The core design of REST was fundamentally about aligning programmatic architectures with the way the web works. And what I like about WFS 3.0 is that it’s doing more than just following a REST cookbook, it’s helping rethink what spatial data access on the web.

The direct inspiration of the working group is a really great document called [Spatial Data on the Web Best Practices](https://www.w3.org/TR/sdw-bp/), which articulates 14 solid practices. WFS 3.0 is consciously trying to follow as many as possible, which I believe will be a huge step forward — particularly having canonical HTML versions of everything, being indexable by search engines, and using lots of links to represent relationships. It also properly aligns with good REST principles, like HTTP error codes and making everything cacheable (which should help with the scalability and reliability of implementations).

## A Collaborative Standard

The other major thing that I’m really excited for in WFS 3.0 is the fact that it is fully open for anyone to try and give feedback on from the beginning. Years of open source development and product management has convinced me there is no better way to make something that will truly work for everyone.

While GitHub has been in use by the OGC for several years, there are few working groups who have migrated their standards creation workflow to make maximum use of the tools, following the best practices that open source projects have pioneered. It was used to store artifacts, but not used to get real work done. I believe the WFS standards working group is starting to make full use of the power of GitHub. Specifying the standard in OpenAPI makes collaboration even likelier — conversations about changes should be in Pull Requests, where everyone can participate, instead of phone calls that few can attend.

![](/assets/img/posts/wfs-3-0-get-excited-yes/1_i2CfzJL8qRdugzw9vYnDvA.png)

*Always great to see an active issue tracker*

I’ve been heartened by the activity in the [issue tracker](https://github.com/opengeospatial/WFS_FES/issues), and I still personally need to report on some of the feedback that people had in trying to make the [SpatioTemporal Asset Catalog](https://medium.com/@cholmes/announcing-the-spatiotemporal-asset-catalog-stac-specification-1db58820b9cf) API be based on WFS 3.0. We ended up simplifying a couple things even more, to make implementation easier. I also am encouraged that the two main editors of the specification are still very much software developers and are making working implementations of everything they are putting in the spec.

## Making WFS and OGC Better Together

I hope that people who have written off OGC specifications in general and WFS in particular will take a look and give feedback. Though working groups there have a history of being quite closed, releasing finished specifications with only insiders giving feedback, I think the atmosphere there is really changing. I attended my first technical committee (TC) meeting in many years in September, and I was very pleasantly surprised by how open most everyone was to finally embrace a more open and more RESTful and web-oriented approach. I think they’re trying really hard to not just try to convince developers to implement the standards, but to actually change the process so specifications are built by developers and for developers.

Opening such a key, core specification to feedback on GitHub is a huge step forward. I hope that the wider community of developers more fluent in open source and web open standards can meet halfway. That they willtake the time to look at the specifications and give feedback, and to try to implement and really interoperate. I’m sure the process won’t be perfect, but I do believe the time is right to make our geospatial world much more accessible to the wider world, in a truly multi-vendor interoperable way.

I’ve got more to say on the evolution of this next generation of standards, as I believe WFS 3.0 is just the beginning. Indeed to me the real power will be not in a single WFS specification, but in breaking out a handful of core components (querying, filtering, linking, syncing, caching, etc) that any modern API can use to make their data more interoperable with a wider geospatial world. But I’ll save those thoughts for [another post](https://medium.com/@cholmes/beyond-web-feature-services-part-1-b9ea9a86caa8). In the meantime I encourage everyone to check out the [WFS GitHub repo](https://github.com/opengeospatial/WFS_FES/), give feedback, implement and contribute. The best way to make things better is to work together.

*Update: I’ve published additional thoughts thoughts on potential WFS directions towards [granular components](https://medium.com/@cholmes/beyond-web-feature-services-part-1-b9ea9a86caa8) and [static data](https://medium.com/@cholmes/beyond-web-feature-services-part-2-b77aa89a9fc0).*

![](/assets/img/posts/wfs-3-0-get-excited-yes/1_oC5EpjcUm9thmOuHdiTIiA.png)

*Map in Carto, my favorite cloud feature service — which does not implement WFS, but does use GeoJSON + REST. My hope is that WFS 3.0 will be something the Carto team will want to implement. ([interactive link](https://mamataakella.carto.com/builder/ade496e7-3ab5-4ef4-924c-504635b3c624/embed))*
