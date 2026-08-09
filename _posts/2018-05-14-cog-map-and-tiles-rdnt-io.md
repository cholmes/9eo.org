---
layout: post
title: "COG Map and tiles.rdnt.io"
date: 2018-05-14
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/cog-map-and-tiles-rdnt-io-ad0745388a14
image: https://miro.medium.com/v2/resize:fit:1400/1*ka5tDvPy8H_c-KkLsZnIAQ.gif
---

![](/assets/img/posts/cog-map-and-tiles-rdnt-io/1_EuAvWeIlSvm0QI1R4P2CGQ.png)

*False color rendering of Cloud Optimized GeoTIFF composite of Planet’s [Open California](https://www.planet.com/products/open-california/) data (CC-BY-SA), created on the fly with [tiles.rdnt.io](https://github.com/radiantearth/tiles.rdnt.io)*

The Cloud Optimized GeoTIFF (COG) revolution marches on! I wanted to share a couple cool projects that we’ve been working on to help demonstrate the power of COG’s.

### COG Map

The first is called [COG Map](http://www.cogeo.org/map), and it’s my first real coding project in over a decade, so I’m pretty proud of it. My [Technical Fellowship](https://medium.com/@cholmes/radiant-earth-fellow-3a8b959f473) at Radiant.Earth supports me to push forward standards and infrastructure for Cloud Optimized GeoTIFF’s and SpatioTemporal Asset Catalogs. After putting up [cogeo.org](http://cogeo.org) to explain COG’s and then the [online validator](http://cog-validate.radiant.earth/html), it became clear that we needed a simple site to demonstrate how you could easily make an interactive web map of any online geotiff file that is properly optimized.

![](https://miro.medium.com/v2/resize:fit:1400/1*5ows-T6hA_SStP1X_0N1Cw.gif)

*A COG from OpenAerialMap loaded up in to COG Map*

The application is pretty simple — you can take any COG online, enter it in the text box, and the map will zoom to the location and render tiles. It does include the COG location and current view in the URL hash, so you can copy and paste it and share with a friend, and they can see the exact view you’re looking at.

I had lots of help, with [Vincent](http://remotepixel.ca/) getting [rio-tiler](https://github.com/mapbox/rio-tiler) to work with arbitrary COG’s online and packaging it up as [lambda-tiler](https://github.com/radiantearth/lambda-tiler). And I got lots of help from my expert javascript mentors — [Tim](https://twitter.com/tschaub), [Jared](https://twitter.com/jaredeast) and [Orestis](https://twitter.com/orestishero). It was also really fun to do things fully open source, thanks [Drew](https://github.com/drewbo) from DevSeed (and [Ian](https://twitter.com/ianschuler) for connecting me), [Brad](https://github.com/bradh) and [David](https://github.com/dlindenbaum) for contributing and making it a real open source project. Collaboration will continue on it at [github.com/radiantearth/cog-map](https://github.com/radiantearth/cog-map).

### tiles.rdnt.io

Most of the power of the COG Map comes from a service stood up by [Radiant.Earth](http://radiant.earth), called tiles.rdnt.io. It is a hosted instance, running on AWS Lambda, of [marblecutter-virtual](https://github.com/mojodna/marblecutter-virtual), which my co-fellow at Radiant, [Seth](https://twitter.com/mojodna), created. It extends his core marblecutter tiler to handle cloud optimized geotiffs, and adds some additional tweaks to help things perform well.

![](https://miro.medium.com/v2/resize:fit:1400/1*ka5tDvPy8H_c-KkLsZnIAQ.gif)

*tiles.rdnt.io preview, rendering false color on the fly from a COG created by Google Earth Engine. Imagery credit: Planet [Open California](https://www.planet.com/products/open-california/) data (CC-BY-SA),*

The service is currently available for anyone who wants to use tiles from COG’s (though if it gets tons of use then Radiant.Earth will likely limit it to a subset of users in the future. So please use it, but don’t abuse it). It includes a number of useful endpoints:

- /tiles/{z}/{x}/{y} creates xyz tiles for any COG specified in the URL parameter, and hitting the tiles/ endpoint directly will return a [TileJSON](https://www.mapbox.com/help/define-tilejson/). It can handle retina tiles output and return png/jpeg depending on which works best, and also render user specified bands.

- /bounds/ returns the geographic extent of the COG, which is quite useful to automatically zoom the map.

- /preview/ gives a leaflet map of the COG that you can explore and share.

Full documentation is available in the [github repo](https://github.com/radiantearth/tiles.rdnt.io).

### Next Steps

Both COG Map and tiles.rdnt.io will continue to evolve, to further show off the power of cloud optimized geotiffs. We hope to add band selection to cog-map, and we’ll look to add basic band math to the tile service. And then we also will be using the tile service to power html views of SpatioTemporal Asset Catalogs, which should be a big step forward. Contributions are welcome, as all the work is open source. Thanks again to [Radiant.Earth](http://radiant.earth) for supporting this work!
