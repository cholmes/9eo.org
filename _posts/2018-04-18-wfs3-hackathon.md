---
layout: post
title: "WFS 3.0 Hackathon Results"
date: 2018-04-18
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/wfs3-hackathon-76039fcea024
image: /assets/img/posts/wfs3-hackathon/1_hj-WRmkb59rV6zo8YCWvDw.png
---

I meant to do my write-up of the [WFS 3.0 hackathon](https://github.com/opengeospatial/wfs3hackathon) much sooner, but it’s been a busy few weeks. And indeed during that time the WFS specification just reached a significant milestone, with its [Draft 1 release](https://github.com/opengeospatial/WFS_FES/releases/tag/3.0.0-draft.1)! So I thought I’d share some thoughts on the hackathon.

Scott Simmons, who organized the sprint on the OGC side, wrote up [a great post summarizing](http://www.opengeospatial.org/blog/2764) all that happened. And there’s quite a few detailed notes in the [wfs3hackathon github repo](https://github.com/opengeospatial/wfs3hackathon) (perhaps [too much](https://github.com/opengeospatial/wfs3hackathon/pull/3) detail on [what we ate](https://github.com/opengeospatial/wfs3hackathon/blob/master/tacos.adoc)), along with a [video recording](https://www.youtube.com/watch?v=FbH6TOwst7o) of the final session.

From my perspective the event exceeded expectations. We had a suspicion that the [fully open approach](https://medium.com/@cholmes/wfs-3-0-get-excited-yes-8e904fdbcc0#7bab) and [RESTful + JSON](https://medium.com/@cholmes/wfs-3-0-get-excited-yes-8e904fdbcc0#156c) approach of WFS 3 could attract more energy and enthusiasm from the developers who actually implement geospatial software. Though some had come across the [WFS repository](https://github.com/opengeospatial/wfs_fes) and found it intriguing many had not been able to really dig in and work with the spec. The hackathon created the space and time for a number of developers to try out the specification and give active feedback. Over 30 people showed up, with another 10 people participating remotely, with a number of new servers and clients. I wanted to highlight some of my favorites:

![](/assets/img/posts/wfs3-hackathon/1_MLAg4WanwMI7rMtQx7efFA.gif)

### pygeoapi

The [geopython](http://geopython.github.io/) crew showed up in force, with both local and remote participation, creating [pygeoapi](https://github.com/geopython/pygeoapi) to implement the WFS 3 specification. It is is configured with a WFS 3 OpenAPI specification, and can already talk to a number of different backends. Tom Kralidis has stood up [a sample server](http://geo.kralidis.ca/pygeoapi/?f=html) that you can play with to get an idea of the service and spec, and they’ve continued to work on it after the hackathon. I was able to easily download the source code and get it up and running.

### GeoServer

I’m sure my positivity about GeoServer implementing WFS 3.0 is the pride of a parent seeing their child fully grown and doing cool stuff in the world. GeoServer as the first project I ever coded on, but I’m not involved in the project except to cheer them on. But I was excited that GeoSolutions participated remotely, helping to spearhead European participation. They put up a [nice blog post](https://www.geo-solutions.it/blog/wfs3-geoserver/) on the experience, and drew attention to the next key steps with WFS 3.0, which are to really flesh out the extensions needed to meet established WFS workflows.

### **Go and WFS**

![](/assets/img/posts/wfs3-hackathon/1_b6Z3FcKsssD7N5WDJqzwYg.png)

I was also excited to see no less than three Go projects at the sprint. I’ve been seeing a lot of nascent geospatial Go energy lately, and it was cool to see people working on it. [go-wfs](https://github.com/go-spatial/go-wfs), part of the Go Spatial github, has been implementing WFS 3 and giving great feedback to help refine the specification. Boundless Geospatial also worked on a [WFS server](https://github.com/boundlessgeo/wfs3) aiming for scalable deployment on AWS. And Ian from Planet built a [client for WFS](https://github.com/ischneider/go-wfs3-client) in Go.

### GDAL/OGR Driver

On the client side [Even](http://www.spatialys.com/en/about/) built an [OGR driver for WFS 3](http://www.gdal.org/drv_wfs3.html) and got it working against three of the servers. Since a majority of geospatial software leverages GDAL/OGR to read formats this means that WFS 3 can enjoy wide support relatively early. There is still work needed to get it working with the latest changes from the spec, but it was great validation that in a couple days we could get servers and clients talking to one another.

![](/assets/img/posts/wfs3-hackathon/1_faVk-dVCRDBAOSl5dBsWrg.png)

### OpenLayers with WFS3 Extension

[Philippe Duchesne](http://highlatitud.es/#/contact) expanded his linked data portal to read various WFS 3 implementations and display them with OpenLayers. It was super cool to see online visualization of the services being stood up:

![](https://miro.medium.com/v2/resize:fit:1400/1*P9hwJGMwWT_kzL-EvqBxeQ.gif)

*GeoServer WFS 3.0 displayed with Openlayers, [try it yourself](http://demo.highlatitud.es/#/preview?url=http:~2F~2Fcloudsdi.geo-solutions.it~2Fgeoserver~2Fwfs3~2Fapi&ann=moz:f06b0eac-f5ca-44a9-8a88-b45912258c29&format=application~2Fvnd.ogc.wfs3)*

### Further Thoughts

I think the best part to me of the hackathon was that we got participation from mostly people who don’t routinely attend OGC meetings and telecons. Some work for organizations who are quite involved in OGC, but as developers they had never really had a great way to interact. Some had ‘given up’ on OGC but were excited to see the change of direction towards more JSON and RESTful approaches, and heartened by the fact that they could influence the direction of the specifications. And it was really cool to see how both major and minor feedback got incorporated in to the specification, with over 25 new issues and pull requests. And Clemens and Peter, the standard editors, did a great job of quickly improving the specification in response.

The [core WFS specification](https://github.com/opengeospatial/wfs_fes) is feeling quite solid now, so I’m hoping more organizations will start to implement and even more importantly start to build extensions and give feedback. I’ve got some further thoughts on the direction of the WFS 3.0 specification and indeed how the approach of the WFS working group is starting to influence the OGC as a whole, but I think I’ll save those for another post.

![](/assets/img/posts/wfs3-hackathon/1_hj-WRmkb59rV6zo8YCWvDw.png)
