---
layout: post
title: "REST feature service sketches"
date: 2007-04-24
source: wordpress
source_name: "cholmes.wordpress.com"
source_url: https://cholmes.wordpress.com/2007/04/24/rest-feature-service-sketches/
tags: ["geospatial web"]
description: "So after much studying at the feet of the geospatial REST master, I’ve finally figured out enough that the master himself asked me to post what I wrote to the wfs simple list about what a restful feature service might look like (any chance of making those archives public, Raj?). For anyone wanting t"
---

So after much studying at the feet of the [geospatial REST master](http://zcologia.com/news/), I’ve finally figured out enough that the master himself asked me to post what I wrote to the [wfs simple](http://www.ogcnetwork.net/wfssimple) list about what a restful feature service might look like (any chance of making those archives public, [Raj](http://www.rajsingh.org/blog/)?). For anyone wanting to catch up to where I am, read Sean’s ‘[web](http://zcologia.com/news/categories/web)‘ category, especially the [ones](http://zcologia.com/news/283/why-does-wfs-dislike-the-web/) [talking](http://zcologia.com/news/406/ws-and-rest-again/) [about](http://zcologia.com/news/408/geo-enterprise-to-geo-web/) [WFS](http://zcologia.com/news/420/restful-feature-apis/) [and](http://zcologia.com/news/430/feature-demo/) [REST](http://zcologia.com/news/441/wfs-simple/) (though I imagine the fact that the WFS spec is permanently tattooed on my brain probably helps a bit for figuring out how to apply the REST concepts to WFS).

I’m strongly considering offering a geospatial REST interface to data already available on GeoServer as WFS. The big motivation for me is to be crawled by [KML Search](http://googlemapsapi.blogspot.com/2007/02/search-for-kml-in-google-earth.html) (which I’m hoping they’ll rename geospatial search and include GeoRSS), as that’s what I want instead of [catalogs](https://cholmes.wordpress.com/2006/07/02/against-catalogs/). After that I’ll look in to the editing stuff [featureserver.org](http://featureserver.org/) is looking to provide, though we’ll likely back it with our new [versioning work](http://docs.codehaus.org/display/GEOS/Versioning+WFS) (first targeting expanded WFS-T interfaces, but the hard work done should be re-usable).

So what would a REST feature service look like? The main point is that all features should be resources at stable URLs, that can be cached and crawled.

So

> <http://sigma.openplans.org/geoserver/wfs?request=GetFeature&featureid=major_roads.5>

becomes

> <http://sigma.openplans.org/geoserver/major_roads/5>

The results of a query can then just return those urls, which the client may already be caching

<http://sigma.openplans.org/geoserver/major_roads?bbox=0,0,10,10>

returns something like

> <html>  
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/5′>5</a&gt>;
>
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/1′>1</a&gt>;
>
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/3′>3</a&gt>;
>
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/8′>8</a&gt>;  
> </html>

If the client is already caching them, then it can just use its local copy. If it’s caching some, it can resolve the ones that it doesn’t know. You also could have a ‘full’ return, that resolves the hrefs for clients that want that (ideally just ones who are hitting the service for the first time, and know they’ll need to resolve all).

The other thing I believe you need is paging. Just a ‘startFeature’ to get the next chunk.

> <html>  
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/5′>5</a&gt>;
>
> …
>
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/8′>8</a&gt>;
>
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/?bbox=0,0,10,10&startfeature=10′>more</a&gt>;  
> </html>

That way you can return lots of features without killing clients, as is so easy to do with wfs I routinely crash firefox by forgetting to put a maxFeatures). The default should be 100 features – or some number that won’t kill a web browser. If clients can handle more, they can do a larger maxFeatures (or even maxFeatures=-1 for unlimited).

We could also use default maxes at the featureType level resource:

> <http://sigma.openplans.org/geoserver/major_roads/>

would not need to be a list of links to your 5 million features, but to the first 100, with a link to more.

The key with all this is crawl-ability and cache-ability. Everything links to the other resources, so the whole dataset can be crawled. You go to

> <http://sigma.openplans.org/geoserver/>

and then there is an html page that will display in the browser, with links to the feature sets

> <html>
>
> <a href=’<http://sigma.openplans.org/geoserver/major_roads/’>TIGER> Major Roads</a>  
> <a href=’ <http://sigma.openplans.org/geoserver/roads/’>TIGER> Roads</a>  
> <a href=’ <http://sigma.openplans.org/geoserver/water_shorelines/’>GSHHS> Shorelines</a>
>
> </html>

(though I would have this page contain much more meta-information, like author, keywords, abstract, date, ect., so a user can read about the datasets.   A more machine readable format would be available by supplying different params, but the default should be something anyone can read in a web browser).

The links can then be followed to the lists of urls of individual features, which can then be crawled, indexed in a search engine, and cached in clients.

With WFS you have to know what to ask for, a naive programmatic bot would not be able to extract all the feature data just by poking around and following links, it’d have to be written special for WFS services (and thus able to handle millions of features or else somehow divide up the data).

(yes, I know, it’s been a long hiatus.  I hope to be writing more, but we’ll see how that works out, no promises since then I’ll just feel guilty)
