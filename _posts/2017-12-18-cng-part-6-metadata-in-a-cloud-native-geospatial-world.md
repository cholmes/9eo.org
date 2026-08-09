---
layout: post
title: "CNG Part 6: Metadata in a Cloud Native Geospatial World"
date: 2017-12-18
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cng-part-6-metadata-in-a-cloud-native-geospatial-world-2fa83cc00c95
image: /assets/img/posts/cng-part-6-metadata-in-a-cloud-native-geospatial-world/1_vu3GFj5FrM40NSRF3yzLPg.jpeg
---

![](/assets/img/posts/cng-part-6-metadata-in-a-cloud-native-geospatial-world/1_SJshNgtYiFQpiL0Fb4C9Iw.png)

*Deforestation in Indonesia —[ view in Planet Explorer,](https://www.planet.com/explorer/#/mosaic/global_monthly_2017_11_mosaic/center/113.452,3.306/zoom/13.29) compare 6 months & 1 year back. Image ©2017 Planet Labs, Inc.*

As geospatial workflows move fully to the cloud there is large potential to improve on some of the main annoyances in the workflows. One of those is **metadata — **filling out metadata fields is the bane of many GIS and Remote Sensing practitioners, but having reliable metadata about where information comes from is hugely important. To trust an analysis or accurately read a map, one must understand where the contributing data came from and how accurate it is. Good metadata also makes searching and finding geospatial information not only easier but possible. The current geospatial search paradigms unfortunately often rely on the dataset creators taking additional time to fill out forms with many fields, and often that step doesn’t happen. But modern search technology points to a better way — track and link *everything* and then use automatically created information as metadata.

![](/assets/img/posts/cng-part-6-metadata-in-a-cloud-native-geospatial-world/1_yVJqd_7UwESdsmeNPlmNbA.png)

Google uses the [PageRank](https://en.wikipedia.org/wiki/PageRank) algorithm-leveraged links between pages as metadata to rank content. It worked far better than relying on the html [meta tags](https://www.w3schools.com/tags/tag_meta.asp) that relied on web page owners filling out metadata. Similarly, Github does not require projects to fill out lots of metadata about the code in them, but all kinds of information about various projects is easily findable. That is because all activity that is done on the code is fully tracked, automatically. And user metrics on following and forking repositories is also used to rank search results.

## Automating Metadata

As the move to cloud-first workflows unfolds in the geospatial world, we have a big opportunity to automatically track more information that should alleviate the requirements of user created metadata. And tracking more information will also open up new possibilities for gaining more insight from geospatial data. The key piece missing from many traditional geospatial workflows is tracking ‘provenance’ — what is the source data that imagery or vector data is derived from, and what processes were applied to it? Some geospatial software tracks this for its own ecosystem, but the core formats leave this as an optional piece that is in practice rarely used.

In addition to the process applied, a cloud native geospatial system can also track exactly which user did what analysis, linking to their online profile to extract even more of the traditional geospatial metadata. Other types of traditional metadata can also be inferred from additional pieces of information that are automatically stored in the system, like the geography and the time. Deriving this type of information does not require a cloud native architecture, but having all the data and derived data in one location certainly makes it much easier.

![](/assets/img/posts/cng-part-6-metadata-in-a-cloud-native-geospatial-world/1_CZ6sLTVC6C1PYQJFqUvDgQ.jpeg)

*It’s so fun to fill out lots of metadata!*

## Standardizing Provenance Tracking

Many of the emerging cloud-based geospatial systems are actively building such tracking and metadata into their systems, since it is easier with all data in one location and users are interested. The real value will be to standardize the provenance tracking and metadata across different cloud-based geospatial systems. This does not need to occur immediately, and indeed it would likely slow down innovation to try to coordinate all the various systems into standard metadata. But all systems should hopefully track the provenance and processing of everything done in their environment and the common patterns can be standardized in the future.

The final piece that will help make all of this tracking even more valuable is to also catalogue usage, leveraging that as a key piece to enable ‘search’ of geospatial information. Currently, users still spend a majority of their time *finding* geospatial information, instead of using it. Automatically creating metadata will ensure that all data *can* be found, which is not the case today. Layering both the provenance and usage data on top will enable much more intelligent search, by enabling ranking by popularity. Provenance ensures that users understand that the source data is very popular, even if it’s several derived-data products that are used more than the source.

## Interconnected Cloud Native Geospatial

Cloud-centric architectures are not guaranteed to be any less siloed than the desktop and server computing architectures that came before. The three main principles of Cloud Native Geospatial articulated [in the previous post](https://medium.com/planet-stories/cng-part-5-cloud-native-geospatial-architecture-defined-193d5ffdd681) nudge us toward a more interoperable direction, with a baseline of being able to view data as web tiles from different sources. But the ‘provenance’ piece described here will be the most important to move from silos to an interconnected ecosystem. Good analysis today is done from multiple data sources, with higher and higher levels of processing and information extraction. Data will be accessed from multiple systems, with analysis done on multiple platforms. A baseline of interoperable provenance tracking will help ensure that we don’t end up with monolithic platforms that don’t work together.

Beyond merely preventing silos, properly tracking provenance and usage in open ways and leveraging standards will enable geospatial information to be far more accessible to the wider world. The geospatial ecosystem today is relatively closed, depending on knowing who has the right data, with trust based on individual relationships. Tracking all the core artifacts will enable the geospatial equivalent of the Google PageRank algorithm, and even more interesting search and discovery operations.

While there have been a couple small efforts on tracking provenance of geospatial information, I believe we need more innovation and real-world implementations. And these should be done from a cloud-first perspective, which makes some aspects easier, and certainly changes some variables. Planet is just starting to work on exposing our internal compute engines for customer use, so this will be something we’re looking at seriously, and are excited to collaborate with others on open standards to at least track the processing histories of imagery and its derived data products.

![](/assets/img/posts/cng-part-6-metadata-in-a-cloud-native-geospatial-world/1_vu3GFj5FrM40NSRF3yzLPg.jpeg)

*San Francisco, California. Image ©2017 Planet Labs, Inc.*
