---
layout: post
title: "An Overview of Cloud-Native Vector"
date: 2022-02-24
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/an-overview-of-cloud-native-vector-c223845638e0
image: /assets/img/posts/an-overview-of-cloud-native-vector/1_X2xe-N4meRH4wGXkB-QU2w.png
---

## An Exploration of ‘Cloud-Native Vector’

In December I wrote a couple of blog posts to summarize my time as OGC’s first ‘visiting fellow’, writing up a [vision for Cloud-Native Geospatial and the role of OGC in it](https://www.ogc.org/blog/4609), along with a [post on the practical work to be done to get to a great cloud-native geo baseline of standards](https://www.ogc.org/blog/4609). In the latter post I named ‘cloud-native vector’ as a key area to explore more. This is making [vector data](https://docs.qgis.org/2.14/en/docs/gentle_gis_introduction/vector_data.html) (point, line, polygon) work like [Cloud-Optimized GeoTIFF’s](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed). I had a post half-drafted at the time, so was hoping I’d get it out soon after, but things got busy. So I’m finally circling back to it, to share the results of my investigations. The high-level finding is that vector is a lot more challenging to ‘cloud-optimize’, like [COG’s](https://cogeo.org) and more recently [COPC](https://copc.io/), but there is some interesting progress towards that goal and some interesting avenues to explore.

I’m keeping this post off of the OGC blog, since it’s going to be a bit of a rambling tour, with a number of things that I’m unsure of. I may well be missing things, and I can’t guarantee I’ve got everything right from my digging, so I may update this post as people correct me. But I wanted to share what I’ve found so far. Thanks especially to [Paul Ramsey](http://blog.cleverelephant.ca/) and [Eric Engle](https://www.linkedin.com/in/engleeric/) for taking the time to explain things in-depth to me.

## Diverse Requirements

I think part of the reason that an obvious cloud-native vector format has not emerged is that there are at least two main use cases that pull in different directions.

- Visualization — one of the key things to do with data resting on the cloud is to visualize it, especially in web browsers. Vector tiles are super optimized for this use case and can be stored natively on the cloud, so they provide a great answer, but they aren’t great for non-visualization uses.

- Analysis — the other thing you want to do is process the data to get insight. Analysis with cloud data warehouses is the most interesting to me, but it can also be done by streaming subsets to desktop (QGIS & ESRI) and browser-based (Unfolded, OpenLayers, etc) tools.

The central issue is that for visualization it is really important to ‘prune’ most of the non-spatial attributes unless they are essential to rendering, or else the size of each tile will become quite large and thus slow to display. But for analysis it is important to be able to access all the attributes. Not all may necessarily be used, but you don’t want a format that prunes any of them as you would then be limiting the types of analysis people can do with your data.

### Visualization Challenges

Enabling visualization is also much more challenging with vector data than raster. With both a key step is to create overviews that give a user a sensible view of the data at lower zoom levels. With raster data, there are a small number of well-known algorithms (nearest neighbor, average, bilinear) that can work consistently on any input and give pretty great results. With vector data, taking a naive mathematical approach, like just using 25% of the points at each overview level, will yield results that don’t ‘look’ right and aren’t useful for a person to figure out where to zoom in to. And what works for one type of data may well not work for other types of data: you may be able to get a nice algorithm that does great road overviews but plugging hydrographic data into it might well yield garbage. The [tippecanoe project](https://github.com/mapbox/tippecanoe) did a great job of providing tools to create great vector data overviews, but it needs a good bit of user configuration and its techniques have not yet been widely adopted.

The methods of creating overviews are actually completely orthogonal to a format that supports the overviews. But without a small number of generally known algorithms to make nice overviews, any new format will look pretty bad for visualization unless it works on solving that orthogonal problem. So the current state is that the only format that really specializes in visualization on the web — vector tiles — is the only one that is reasonable at it.

### Further requirements

Past the core visualization vs analysis issue, there are a few other potential desires that can complicate things further. One particular trade-off is the ability to handle lots of transactions versus optimizing for the speed of largescale analysis. Row-based formats are better suited for the former, but newer columnar data formats like [Parquet](https://parquet.apache.org/) and [ORC](https://orc.apache.org/) have become popular for read-heavy analytic workflows. A cloud-native geospatial format would ideally handle both transactions and analysis, but realistically particular formats will likely better serve one or the other workflow.

The other potential requirement that I’m particularly interested in is the ability to work with cloud data warehouses like Snowflake & BigQuery. These are adding more and more geospatial capabilities, and are powerful tools taking over the mainstream IT world. I’m working on another blog post to help explain the potential, but for now, I’d recommend watching Javier de la Torre’s [latest keynote from the Spatial Data Science Conference](https://www.youtube.com/watch?v=OrBAO9XpSHM&list=PLGi6hymK320hN_V9BTPLf7P29nfDVs-rW&index=1&t=1113s). They all have the ability to directly query common formats in cloud storage, like CSV, JSON, Avro & Parquet, see for example [these docs on BigQuery](https://cloud.google.com/bigquery/external-data-cloud-storage). But convincing one of them to directly support a format that is specially designed for spatial data will likely be a big uphill battle. So if a new cloud-native vector format can be built on one of the formats they already support, like Parquet or [Avro](https://avro.apache.org/), then it’ll have a much higher chance of being adopted and adding a really powerful cloud-native workflow.

And while I’m [asking for a pony](https://www.urbandictionary.com/define.php?term=I%20want%20a%20pony), it’d be great if this format was also backward compatible in the way COG and COPC are. Both of those can be read by existing tools, and being able to do that greatly accelerates adoption.

## Potential Formats

In my research, I came across a few different formats and ideas that have potential. If you’ve got another format to add or a correction on what I’ve said then please add it as a comment on medium and I’ll incorporate — my hope is that this document can represent the ‘state of play’ for vector formats for the next bit of time.

![](/assets/img/posts/an-overview-of-cloud-native-vector/1_X2xe-N4meRH4wGXkB-QU2w.png)

### Flatgeobuf

The newest format that lines up with many of the requirements for cloud-native vector data is called [Flatgeobuf](https://github.com/flatgeobuf/flatgeobuf). It aims to enable large volumes of static data, with streaming and random access, performing faster than legacy formats with no size limits. It does a ton of things right in my book:

- Based on a more modern serialization format. In this case, it’s from a format called [flatbuffers](https://google.github.io/flatbuffers/), which was created at Google and is now completely open-source.

- Focused on its use cases. It aims at serving large amounts of static data with streaming and random access. It isn’t trying to be everything to everyone but does end up being much better than alternatives.

- Good implementation support. They prioritized making sure that gdal, geotools, geoserver, postigs, qgis, openlayers & leaflet all support it, even though it’s a relatively young project.

It’s the only vector format that is built to enable http range requests, the key innovation behind Cloud-Optimized GeoTIFF’s, and does some very cool things to make it work with vector data. There was an [awesome post](https://worace.works/2022/02/23/kicking-the-tires-flatgeobuf/) published just yesterday that gives a great deep-dive into how Flatgeobuf works.

I think if cloud data warehouses would read it just like they do Avro or Parquet then this would absolutely be the one to rally around. And it’s worth rallying around it regardless to push forward on

The one place I think it’s lacking is on the ‘overviews’ for visualization. Granted every format except vector tiles is lacking this, but it’d be really interesting to explore some form of internal overviews, an equivalent to raster pyramids. It has a great spatial index built-in, to enable fast viewing of data once you are zoomed in. But trying to view an overview of a large flatgeobuf will take a long time (but it will have nice progressive loading as you are trying to view all the data).

![](https://miro.medium.com/v2/resize:fit:1400/1*duu7c9caORpMRhs5KeVp0w.gif)

But I think Flatgeobuf is probably the leading candidate to experiment with some built-in overviews, as the flatbuffer core has some nice constructs that can be tapped into. And if you are looking for a format today that you can stick on S3 or GCS and enable cloud-native workflows this is definitely the one.

### Cloud-optimized Shapefile

Paul Ramsey has been promoting this idea, and I love that it has the same backward-compatibility ethos of Cloud-Optimized GeoTIFF’s. Just like COG’s and COPC take a flexible format and put stricter requirements on how you order, so too would a cloud-optimized shapefile take the traditional shapefile parts and structure them better. There’s a couple twists though that would need to be resolved. First, the spatial index file is key here, but the ESRI shx isn’t an open format. Paul’s proposed candidate is the .qix file that MapServer uses. Unfortunately, the ecosystem of tools to generate that isn’t very fleshed out, so there would need to be some development of more utilities to easily generate it, but it could work quite well. So it would end up a bit ‘different’ from a typical shapefile, so the backwards compatibility aspect of it ends up a bit less than I was imagining. The biggest problem in my opinion is that it would inherit all the problems of shapefile, as well-articulated by [switchfromshapefile.org](http://switchfromshapefile.org/):

![](/assets/img/posts/an-overview-of-cloud-native-vector/1_riB8S9AaLBBR3MJrakoxqw.png)

So while the backward compatibility aspects are compelling I think it’s time for us to move to more modern formats. So I won’t be pursuing this one personally, but I would also be psyched if someone did do it, as it’s not all that much work and is an interesting experiment that could get legs.

### GeoParquet & GeoArrow

The format that I explored the most during my OGC Visiting Fellow time was the idea of adding standard geospatial support to Parquet. This was an extension of [an effort](https://github.com/opengeospatial/cdw-geo) I started with Javier from Carto to better align the Cloud Data Warehouse providers. The first goal of that is to ensure that the exports and imports of various formats to and from each of the cloud data warehouse vendors are interoperable. For the most part, this is just aligning on the exact forms of Well Known Binary and GeoJSON. That effort has stalled out a bit, but I’m hoping we’ll revive it soon.

Of particular interest to me was [Parquet](https://parquet.apache.org/), as each of the vendors supports it for general import/export and even streaming from cloud storage. But there is no geospatial format specified for it, and only Snowflake is attempting to use it with geospatial data. Those who are using it with geospatial data tend to just use [Well Known Binary](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry#Well-known_binary), but it’s not done in an interoperable way. Tom Augsberger from Microsoft was involved in the original effort, and he helped unite the community in the OGC repository with the [GeoPandas](https://geopandas.org/) community who had already started on a spec to add geospatial support to [Apache Arrow](https://arrow.apache.org/).

Arrow and Parquet have a very close relationship. Arrow is an in-memory format, to allow applications to pretty much share the same state, not having to write to disk. But it is designed to work in conjunction with a disk format, [from their docs](https://arrow.apache.org/docs/python/parquet.html#reading-and-writing-the-apache-parquet-format): it ‘is an ideal in-memory transport layer for data that is being read or written with Parquet files’. So specifying geospatial support for Arrow would ideally be completely compatible with a ‘GeoParquet’ format.

As of right now, there are two github repos where discussions are taking place. There is a [geo-arrow-spec repo](https://github.com/geopandas/geo-arrow-spec) with a [draft for metadata](https://github.com/geopandas/geo-arrow-spec/blob/main/metadata.md) that would be used in Arrow, Parquet and [Feather](https://arrow.apache.org/docs/python/feather.html), and then a [GeoParquet spec is in draft form in an OGC repo](https://github.com/opengeospatial/cdw-geo/blob/main/format-specs/geoparquet.md). We’ve attempted to align the two and resolve the differences, and at some point likely will unite them in a single repo. The plan, for now, is to release GeoParquet 0.1.0 first and then use the geo-arrow-spec repo for arrow-specific extensions. I hope to help push things forward in the next couple of months, and more contributors are certainly welcome. The baseline geometry approach will use Well Known Binary, as it is super established with lots of tools to read and write it. But there are also some [really interesting experiments in geometry formats](https://github.com/geopandas/geo-arrow-spec/pull/12) that are more compatible with columnar approaches, which I’m definitely following closely.

### GeoPackage

I’m a big fan of [geopackage](https://www.geopackage.org/), in part because it’s probably the OGC standard I’ve been most involved in, and it was the first OGC standard to really embrace working in the open on GitHub, thanks to Jeff Yutzler’s leadership. Interestingly it does have options to store data optimized for analysis (as core spatial tables) and for visualization (through several vector tile community extensions). It even defines a ‘[Vector Tiles Attribute Extension](https://gitlab.com/imagemattersllc/ogc-vtp2/-/blob/master/extensions/4-vtae.adoc)’ to associate vector tiles with the core spatial tables. I’m very curious if this has seen adoption, as it would seem to be an attempt to unite the visualization and analysis capabilities in one.

The major drawback for GeoPackage as a ‘cloud-native geo’ format is that it doesn’t seem to support streaming. From [switchfromshapefile.org](http://switchfromshapefile.org/):

> One downside to GeoPackage is that the underlying SQLite database is a complex binary format that is not suitable for streaming. It either must be written to the local file system or accessed through an intermediary service.

Being able to stream is a pretty central requirement so that tools can access data directly on the cloud without running a service. There is some work being done on a [‘conceptual model’ of GeoPackage](https://github.com/opengeospatial/geopackage/blob/master/spec/conceptual-model/clause_8_logical_model.adoc), which abstracts out the core concepts so one could make a GeoPackage that is not tied to SQLite. That could potentially open the door to a format that is better at streaming. I’ve not had the time to really dig into geopackage for cloud-native workflows, so welcome any additional feedback, and will add it here.

### GeoJSON?

I’m pretty sure GeoJSON is not the answer but wanted to include it for completeness' sake, as it’s the other recommended format in [switchfromshapefile.org](http://switchfromshapefile.org/). Though even there they make it clear that it’s just for ‘data interchange, particularly for web services’. It is worth mentioning some interesting projects that evolve the core concept of GeoJSON to make it a bit better in cloud-native use cases:

- [**Cloud-Optimized GeoJSON](https://github.com/planetfederal/cogj-spec) **was an experiment from Boundless (now part of Planet as Planet Federal), with an explicit goal to make a vector equivalent to Cloud-Optimized GeoTIFF. It mostly focused on providing a spatially-oriented ‘table of contents’ upfront, for better seek access.

- [**Newline-delimited GeoJSON](https://stevage.github.io/ndgeojson/) **is an upgrade to GeoJSON that enables more efficient streaming using [JSON Text sequences](https://datatracker.ietf.org/doc/html/rfc7464). From the overview site: ‘Each line can be read independently, parsed, and processed, without the entire file ever having to be parsed in memory, which is great for huge files.’ You can read more about it in this [great blog post](https://www.interline.io/blog/geojsonl-extracts/).

It could be possible to continue to evolve the core capabilities of GeoJSON with new extensions that help it meet cloud-native vector requirements. One appeal would be that most of the cloud data warehouses do support GeoJSON as a format already. But it feels like we’re really stretching what GeoJSON was defined for, and what JSON is good for. A good cloud-native vector format should enable efficient access to its data, ideally with indices for both spatial and non-spatial data. So basing it on a more modern data serialization format seems to make more sense. I don’t see a new format replacing GeoJSON in its core use cases. Indeed the human-readability of GeoJSON makes it a great choice to use to specify a standard of fields to use for a particular domain, as we do with [STAC](https://stacspec.org/) and [its extensions](https://github.com/stac-extensions). But I can see STAC metadata also being available as a cloud-native vector format for easier access to an entire catalog.

## What’s next?

I hope the above is a decent overview of the potential formats. If I’ve missed one let me know and I’d be happy to add it, and am also happy to tweak any of the above with more information.

I think it’s a promising time to pursue advances towards a cloud-native vector format. The two areas I’m most interested in are:

- **Formats for Cloud Data Warehouses. **As a baseline, I believe we should be helping ensure interoperability between the cloud data warehouse vendors. They have adopted some new formats like Parquet, Avro & ORC, and as a geo-community we should help them get ‘geo’ right. But the real potential is to get to a format that they can use in a ‘cloud-native’ way, as an alternative to their internal formats that works ‘well enough’. This would enable data providers to publish in one format and have users of BigQuery, Snowflake, Redshift and more be able to use it directly in their workflows.

- **‘Overviews included’**. I’m far from sure this will work, but it feels like it’s worth experimenting with including some amount of ‘overviews’ directly in formats, to help meet the visualization and analysis use cases in a single file. Doing this will necessarily involve some duplication, but ideally there’s innovation on smart ways to link data within a format. The core ‘challenge’ would be to have a 1+ gigabyte file that can be visualized quickly in OpenLayers/Leaflet at the full layer extent while also providing full attribute data and indices (spatial and even others) for use in analysis.

For the former, I’m putting most of my effort into GeoParquet, and we’re hoping to get to a 0.1.0 release soon to give a clear implementation target for wider feedback. This will be done in conjunction with geospatial support for Arrow, but we’ll focus first on Parquet and develop the two in tandem, as the first GeoParquet tools are out of the Arrow community. In time it’ll likely make sense to borrow the same approach for Avro and ORC, but from what I’ve seen Parquet seems to have the most momentum.

For the latter, I think Flatgeobuf is likely the most promising to experiment with, as it’s the best cloud-native vector format we have so far, providing a stable base that already does http range requests of static files. So experiments can build upon that base without having to worry the core may shift. MapBox Vector Tiles also clearly have some role to play, potentially directly using them in a format or at least being inspired by their approach. I hope we can separate the two core problems — one of providing the container for overviews, and the other of making really good, representative overviews of diverse vector data. The latter is a *really* hard one that is ripe for several PhD-level research projects. But the former seems like it should be possible. Perhaps we should create some datasets with nice overviews that different containers can try out.

But I also think there is space to try out totally new formats, both built on existing non-spatial formats as well as making totally new formats. At some point it might be interesting to get a group together to really define a set of requirements that a new cloud-native vector format would want to aim at.

Some may say that we already have too many formats, and adding more to the mix just makes things worse. I can see the point, but I also think we need to start with lots of small innovations and learn from one another before coming together to make a standard. With Cloud-Optimized GeoTIFF it felt like we were just naming and making clear what most people were already doing. But with vector it feels like there are a few more steps needed to get closer to a format that would be ready for cloud-native workflows. Or it may be a set of formats that vary depending on the use case if there isn’t one that can strike a good balance between different requirements. Indeed I could see a simple solution being just using [Dataset Collection](https://github.com/cportele/ogcapi-building-blocks/blob/main/unstable/json-dataset-collection.adoc) metadata with links to both a core file (like FlatGeobuf) and the vector tiles that go with it, like [this example](https://github.com/cholmes/static-ogc-examples/blob/vector-tiles/linz/buildings/nz-building-collection.json) (not sure if the mbtiles mimetype is right…):

![](/assets/img/posts/an-overview-of-cloud-native-vector/1_GDzwG-KU-ftyz2EuZ2by9g.png)

But I do think it’s safe to say that the cloud is where most geospatial data processing will happen, and we need formats that work well with the latest innovations there, while also providing an awesome experience for geospatial-specific uses.

### Have thoughts & ideas on this? Share them!

And I’ll close this post with a plug for an event I’m helping pull together with the OGC, on ‘Cloud-Native Geospatial’. We just put up[ the ‘save the date’ and call for speakers](https://cholmes.medium.com/save-the-date-cloud-native-geospatial-outreach-event-on-april-19-20-ef4e396e1053). I’d love to have a set of talks exploring different aspects of ‘cloud-native vector’ formats. It could just be an idea you have, or a little experiment you want to share (even if you haven’t even made the experiment yet). It’s going to be a series of 5-minute lightning talks, with a very friendly audience, so please submit any ideas at [https://forms.gle/fXJD7xtztffR3vJs9](https://forms.gle/fXJD7xtztffR3vJs9).

Thanks for reading through the full post if you made it this far. I hope we can continue the discussion on cloud-native vector and push forward as a community. And thanks to the OGC for giving me time to dig deep into these topics!
