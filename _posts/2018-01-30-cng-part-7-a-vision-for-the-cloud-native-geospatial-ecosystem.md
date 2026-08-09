---
layout: post
title: "CNG Part 7: A Vision for the Cloud Native Geospatial Ecosystem"
date: 2018-01-30
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cng-part-7-a-vision-for-the-cloud-native-geospatial-ecosystem-7a55ae782690
image: /assets/img/posts/cng-part-7-a-vision-for-the-cloud-native-geospatial-ecosyste/1_HluGfoNib-zcYm33Xl-1dA.png
---

![](/assets/img/posts/cng-part-7-a-vision-for-the-cloud-native-geospatial-ecosyste/1_HluGfoNib-zcYm33Xl-1dA.png)

*December Mosaic of the Bahamas, Image ©2017 Planet Labs, Inc.*

So, I’ve decided to bring the ‘Cloud Native Geospatial’ [blog series](https://medium.com/tag/cloud-native-geospatial/latest) to a close with this post. I’ve got a lot more to write on the topic, but it makes sense to wrap up the core articulation of the concept. We’ll end looking forward, describing a potential vision of what the world could look like if we truly build geospatial architectures in a cloud native manner. Future posts will delve deeper into many of the concepts mentioned here, and I’ll continue to tag everything with ‘Cloud Native Geospatial.’

I welcome anyone else writing on similar topics to use the same tag, and encourage others building next-generation platforms to describe their architectures in detail. Having an open dialogue about how everyone is building their solutions can enable a more interoperable future, and one that multiplies the impact of geospatial from a relatively small niche toward a fundamental way for everyone to understand their world.

## Data Accessibility

In an ideal Cloud Native Geospatial future, the first major difference to how people work today is that searching for relevant geospatial information should become much easier. Most all ‘search’ capabilities today are provided by the owners of the data, which stands in stark contrast with the web. This is because there was sufficient data fully online that companies like Google could create value by making it accessible for users. And Google could access all that data in a standard way.

Although numerous ‘catalogs’ have arisen in the geospatial world, they most often did not have direct links to the actual data for exploitation. And they were built on a paradigm of each provider standing up their own catalog server and website to provide search. Once there is sufficient valuable data that is online and *accessible*, both programmatically and by users, then other organizations will start to index it and enable searches on the data.

This can be easily seen with Landsat data. For many years the USGS has had the data online, but it was not very accessible. Google Earth Engine then mirrored the data, and it was slightly more accessible, since it could be downloaded in bulk, without having to navigate through the USGS user interface. But it was stored as 800 megabyte files, which still would take a long time, especially if you only needed a small subset of the data.

Amazon Web Services took the key step with their [Landsat Public Data Set](http://landsatonaws.com) release, making the data truly *accessible* for the first time, by doing an early version of [Cloud Optimized GeoTIFF’s](http://cogeo.org). Within a year GUI tools from Planet, AstroDigital, ESRI and EOS all add Landsat search capabilities. The major difference was that they could do far more than just show ‘search results,’ they could create web tiles and make the data available for download to users, which added a major value to their platform.

As more valuable imagery is available online with crawlable metadata and available as streaming Cloud Optimized GeoTIFFs, we can expect more search services to add more data. And as workflows are done fully online it will become possible to ‘rank’ results by their actual usage, bringing relevant results to geospatial in the way that Google innovated with PageRank, to discover what is relevant by mining the structure of the web to determine what is popular.

## Collaboration

The next difference in a truly cloud native geospatial ecosystem is that collaboration will be at the core of everything. The geospatial world has one amazing example of collaboration, which is [OpenStreetMap](http://openstreetmap.org) (OSM). All OSM data is online and accessible, which is the building block that makes collaboration possible. But many of the traditional geospatial workflows still are centered on people’s desktop environments. And even when data is available on the web it is in a ‘publish’ paradigm — you can read it like a web page, but you can’t start collaborating on it like Wikipedia or a Google Doc.

Having all data available in canonical online locations opens up more possibilities for collaboration. The first is in creation of maps and annotations. The main workflow today is still to create a map and then embed it in Powerpoint. It is a static thing, an artifact of whatever the original analyst thought of the situation. Instead that should be an online editable object, that others can add to, make their own, or collaboratively edit.

When someone tweets it can spark a whole conversation, tracking the history of every comment. Imagery marked up with notes and added vector information should similarly kick off a conversation, but one that is done directly on the map, tracking what different users change or add. The tooling to do this should be as easy as creating a Powerpoint — anyone should be able to tweak someone else’s map, or to just create their own map-based commentary on some imagery or basemap.

Another collaboration potential is with the processing of geospatial information — applying different algorithms to create derived data and gain greater insight. In a cloud native geospatial environment, tools that do this processing of data would not be locked in individual desktops but would be available online. You can see the start of this in [RasterFoundry](http://rasterfoundry.com)’s Lab Templates:

![](/assets/img/posts/cng-part-7-a-vision-for-the-cloud-native-geospatial-ecosyste/0_sSNw63dahPNRYHs9..png)

There is a public catalog of tools to process imagery, and any user can publish their algorithm to the public catalog. In time there will also be sharing of the templates within an organization, but not with the public. Each ‘tool’ can also be optimized to work with a single dataset. This opens up workflows where one user can take another’s template and adapt it to their dataset, or tweak parameters to their liking. And then usage of tools can be tracked, so people can see the most popular tools or search by tools for their dataset.

Drawing insights and doing processing of data can become a collaborative process, because the data and algorithms are all online where they can be instantly shared and tracked. In time the ecosystem should develop open standards to even share algorithms across different platforms. The key in the cloud ecosystem is to send the algorithms to the data, since that will most always be faster.

## Towards real time

The other major shift will be toward maps and insights that constantly update with new information, instead of static maps. Most maps today are limited because the data is locked in at the time the map was created. When maps are built directly off of cloud native data they can also be constantly updated as new information comes in. Planet offers [basemaps](https://www.planet.com/products/basemap/) of monthly imagery as tiled services. Building a map with that as a backdrop can be automatically updated every month with the latest imagery, so the map is always up-to-date.

![](/assets/img/posts/cng-part-7-a-vision-for-the-cloud-native-geospatial-ecosyste/1_JQ8c5DP4sMTB7TVULeIpMQ.png)

*[CrimeDC:](http://crimedc.com/) An automatically updating & alerting crime map, powered by Carto.*

Tapping into vector data from [Carto](http://carto.com) as web tiles would make the overlays automatically update as new information comes in, say crime data or new construction. And the update process can be run automatically when new data comes in, since all processing is on the cloud. The dominant form of interaction in a cloud native geospatial environment may well come to be the ‘alert’ — a real-time notification that was a result of processing disparate information as it comes in to the cloud. It will embed geospatial into our lives, into existing apps and tools, instead of making users jump into their GIS environment.

## An interoperable ecosystem

Realizing a vision of a real-time, collaborative, accessible world of geospatial information is not possible for any single organization to achieve alone. The goal of GIS and Remote Sensing is to provide actionable information about the world to drive better decisions. No single data source is sufficient to make great decisions: it must be combined with other sources and validated to turn in to real insight.

To realize the potential of the vision described above means that the different software systems and data providers must interoperate with one another, using open standards that enable anyone to easily become part of the ecosystem. The cloud opens up the potential to make geospatial data more accessible, collaborative and up-to-date. But realizing that potential depends on diverse organizations adopting common ways to describe their data along with interoperable API components.

Once that baseline is in place I believe we’ll see a huge leap in innovation, leading to the ability to gain real insight about our earth and what people are doing with it. And that insight will drive decisions, to make a better planet for all of us. I believe that Cloud Native Geospatial is the first step, and together we can establish an interoperable and accessible base of raw information that can be built upon.

## What’s next

I hope this series of articles has been informative. In my future posts I’m going to continue to dive deeper into building a real interoperable, standards-based foundation for the next generation of geospatial processing and insight ([starting with WFS](https://medium.com/@cholmes/beyond-web-feature-services-part-1-b9ea9a86caa8)). I believe we need new standards — small pieces loosely coupled that can be remixed and combined in different ways — on top of the [core elements](https://medium.com/planet-stories/cng-part-5-cloud-native-geospatial-architecture-defined-193d5ffdd681) of Cloud Native Geospatial architectures (COG’s, catalogs + web tiles).

The other major topic to explore more deeply is the implications of computer vision and deep learning for the geospatial field. The potential to extract meaningful information and insight out of imagery is huge. But there is still a lot to do to out the systems, APIs and interfaces to bring those insights to the broader world. There’s been a lot of internal work at Planet, and I’m excited to share how we’re thinking about it and building the future.
