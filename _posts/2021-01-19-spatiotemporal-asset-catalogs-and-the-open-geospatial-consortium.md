---
layout: post
title: "SpatioTemporal Asset Catalogs and the Open Geospatial Consortium"
date: 2021-01-19
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/spatiotemporal-asset-catalogs-and-the-open-geospatial-consortium-659538dce5c7
image: /assets/img/posts/spatiotemporal-asset-catalogs-and-the-open-geospatial-consor/1_DyTaIZaVaz-k6FXUVbqk0g.png
---

![](/assets/img/posts/spatiotemporal-asset-catalogs-and-the-open-geospatial-consor/1_DyTaIZaVaz-k6FXUVbqk0g.png)

As [SpatioTemporal Asset Catalog (STAC)](https://stacspec.org/) specification matures one of the more frequent questions we get asked is the relationship between STAC and the [Open Geospatial Consortium (OGC)](http://ogc.org). I wanted to write this post to help clarify, at both a technical and an organizational level.

The tl;dr version is:

***‘STAC API implements and extends the OGC API — Features standard, and our shared goal is for STAC API to become a full OGC standard’***

The longer version has a lot more detail, but if you’re interested then read on!

## The Backstory

![](/assets/img/posts/spatiotemporal-asset-catalogs-and-the-open-geospatial-consor/1_bAeEHPaJXSAEXC0gEazoOA.png)

STAC started in October of 2017 when [Radiant Earth Foundation](http://radiant.earth) convened a group of diverse people to [come together](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595) to solve a common problem: every API to find satellite imagery was a JSON, RESTful service, but every single one was different. Most everyone had looked at the OGC specifications, but at the time there was nothing that fit well, as the W*S standards ([WMS](https://www.ogc.org/standards/wms), [WFS](https://www.ogc.org/standards/wfs), etc) were in XML and not quite RESTful, and never quite had a clear answer for searching satellite imagery (outside of [CSW ebRIM profile](https://portal.opengeospatial.org/files/?artifact_id=31137), which had been fading). At that point, I’d also been a [board member](https://www.ogc.org/ogc/organization/bod) of OGC for over 4 years, and it felt like I’d made very little progress on some of my core [pushes](https://github.com/radiantearth/stac-spec/blob/master/principles.md) that I believe would build better specifications — small pieces loosely coupled, fully open development, JSON/REST, focus on developers, build specs on GitHub. I helped bring [GeoPackage](https://www.geopackage.org/) to 1.0, and dragged it along to be the first [OGC specification on GitHub](https://github.com/opengeospatial/geopackage), but it was really just ‘published’ to GitHub — we weren’t using any of the tools ([Jeff Yutzler](https://twitter.com/slarjy) subsequently did lead GeoPackage to truly embrace GitHub, which has been great to see).

![](/assets/img/posts/spatiotemporal-asset-catalogs-and-the-open-geospatial-consor/1_ePAABxxwitzKdbDEeqT0xQ.png)

*GeoPackage now has a robust & collaborative GitHub repository*

So I decided that the best route available to me was to build outside of OGC, and then bring results and practices in when they were more mature. So that’s always been the plan, but things have actually unfolded in a much more aligned way. Right before we started STAC, I saw [Clemens Portele](https://twitter.com/portele?lang=en) at an [OGC Member Meeting](https://portal.ogc.org/meet/) at Ordnance Survey and realized that the shifts I had been hoping to trial outside of OGC were already happening inside. They were starting the new version of Web Feature Service according to all the principles I had been trying to promote at the board level, but it had emerged bottom up. The time was right to embrace GitHub, REST, JSON, and simpler, smaller specifications.

At the [inaugural STAC sprint](https://medium.com/radiant-earth-insights/a-cloud-native-geospatial-interoperability-sprint-483d9c299595), Radiant Earth provided a neutral meeting venue for diverse actors to meet in person and align. We used WFS 3 (which became OGC API — Features) as our starting point. It had only just started and was honestly a bit too early for us, so it served more as inspiration. But we’ve done [two](https://medium.com/radiant-earth-insights/progress-on-spatiotemporal-asset-catalogs-in-ft-collins-6298f195bfb2) of [our](https://medium.com/radiant-earth-insights/ogc-api-features-stac-sprint-recap-6c876b44c9d2) six sprints in collaboration with the [OGC API — Features](https://github.com/opengeospatial/ogcapi-features) group, seeking to always align ourselves.

## Alignment

Once the OGC Features API [stabilized to 1.0](https://ogcapi.ogc.org/features/) we worked to fully align [STAC 0.8.0](https://medium.com/radiant-earth-insights/stac-0-8-0-release-d006c0748151) with the [published standard](http://docs.ogc.org/is/17-069r3/17-069r3.html). This means every STAC API *is* an OGC Features API. Clients that work with OGC Features API will work with STAC API’s. STAC adds a bit of functionality that our users needed, mainly richer filtering, transactions, sorting, property names, versioning, and cross-collection search. While STAC has run ahead on several of these we are working to make it so each of those pieces of functionality can be a ‘building block’ that OGC Features API’s that don’t implement STAC can use. In STAC [API 1.0.0-beta.1](https://medium.com/radiant-earth-insights/stac-1-0-beta-1-released-c7abed779d5d) we adopted OGC’s ‘conformance classes’ functionality, which helped us make STAC into smaller building blocks, and helps to make it clear to clients exactly what functionality (OGC Features API & STAC) a service supports.

![](/assets/img/posts/spatiotemporal-asset-catalogs-and-the-open-geospatial-consor/1_ibj_sjyH4exYl72Lms5RZg.png)

*STAC’s 1.0.0-beta.1’s browsable OpenAPI of OGC API — Features returning STAC Items.*

In order to make the relationship more clear our next step is to bring STAC API directly into OGC. It will first be a [community standard](https://www.ogc.org/standards/community#:~:text=A%20Community%20standard%20is%20an,developed%20external%20to%20the%20OGC.&text=to%20bring%20new%2C%20but%20implemented,interoperability%20between%20other%20OGC%20standards.), and we need to achieve a certain level of stability and maturity before they’ll take us, and then we hope it will become part of the new OGC API baseline. Radiant Earth has been the steward of STAC, and they will continue to play that role, advancing the ecosystem with software and events, but everyone agrees that OGC is the most logical home to hold the IP of the core specification.

It’s been a really great collaboration with OGC, to have both communities innovating in different ways and then aligning on the key pieces, bringing in a wider set of experiences to both groups. We look forward to that continued collaboration and hope to soon reach what was always the goal — having STAC be a part of OGC.

### STAC and OGC API

![](/assets/img/posts/spatiotemporal-asset-catalogs-and-the-open-geospatial-consor/1_XPJ8TE6U0NPzRpsIpWuLwQ.png)

So that’s the organizational level. The more technical question we get asked is ‘how does STAC fit into the [OGC API](https://ogcapi.ogc.org/) Suite’? In particular, how does STAC API relate to the other standards? To be honest, the full answer is not yet super clear, as most of the other standards are still evolving, but there is enough progress on core constructs to have the start of an answer.

The center of STAC is ‘SpatioTemporal Assets’ — we extend OGC Features API, constraining its general [‘features’](http://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_items_) to require time as well as space, and to always link to an ‘asset’. STAC is used to search massive catalogs of imagery and other assets, representing each individual scene / granule / point cloud / etc as an [OGC Feature](https://www.w3.org/TR/sdw-bp/#spatial-things-features-and-geometry). Each of these is a [STAC Item](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.2/item-spec), which is a [GeoJSON](https://geojson.org/) representation. OGC Features API has the option to return GeoJSON and XML; with STAC we limit it to GeoJSON, as we don’t have an XML variant of a STAC Item.

Then STAC Collections extend the [OGC Collection](http://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_collection_), adding in a required ‘license’ field (since we believe it is important that users know what license the data they are accessing is under), and a [few optional fields](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.2/collection-spec/collection-spec.md#collection-fields). So every STAC Collection is an OGC Collection, and we hope to align with [OGC API — Records](https://github.com/opengeospatial/ogcapi-records) to make those collections searchable, and to establish the GeoJSON equivalent. There is no OGC equivalent of the STAC Catalog, and indeed no notion in OGC of a ‘[static service](https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.2/best-practices.md#static-and-dynamic-catalogs)’ that is just data sitting on the cloud, but we hope it’s an idea they will look into.

## What’s next

Radiant Earth has always been the main steward of the STAC specification and community. But the goal was always to incubate it, and it’s become clear that OGC is a logical home, especially for [STAC API](https://github.com/radiantearth/stac-api-spec/), so whenever the community is ready we will shift intellectual property ownership to OGC. Radiant Earth will still play an active role in the community but will focus on user adoption and community growth, helping to build out the ecosystem of tools and encouraging ever more data in STAC. They’ll also remain the intellectual property owner of the [STAC Core](https://github.com/radiantearth/stac-spec) specifications, though if OGC gets more into content, instead of just the API’s, then it could also make sense to eventually live in OGC.

The main next step is to get STAC API to 1.0.0 final. This depends on at least CQL and Transaction extensions getting out of ‘draft’. And ideally all of the STAC ‘extensions’ would also be OGC Features API extensions, so we will work to align those as well.

And we also hope to continue to figure out how our communities can work in collaboration more, and we hope that STAC can bring in more open and collaborative practices into OGC.
