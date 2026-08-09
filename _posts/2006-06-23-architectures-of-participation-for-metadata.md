---
layout: post
title: "Architectures of Participation for metadata."
date: 2006-06-23
source: wordpress
source_name: "cholmes.wordpress.com"
source_url: https://cholmes.wordpress.com/2006/06/23/architectures-of-participation-for-metadata/
tags: ["architectures of participation", "geospatial", "geospatial web"]
description: "So if metadata is the problem, what’s the solution? I believe there are two parts. The first is to automate as much as possible, the second is to involve people as much as possible. Automation: The remote sensing community figured out awhile ago that the best way to ensure that there’s alway some de"
---

So if metadata is the [problem](https://cholmes.wordpress.com/2006/06/16/the-metadata-problem-or-the-problem-with-metadata/), what’s the solution?

I believe there are two parts. The first is to automate as much as possible, the second is to involve people as much as possible.

**Automation:**

The remote sensing community figured out awhile ago that the best way to ensure that there’s alway some decent metadata is to embed it in the data itself. In geotiff, jpeg2000, and others, the headers of the files always say the time the image was created and the area that it represents. In vector formats, there is nothing like this. What needs to happen is that the tools that process the data need to automatically annotate what the original sources and what was done to them and by whom. Someone is always logged in to a computer, even Office includes who the author of a file was. Those who gather and create data should not be saddled with the responsibility of also creating good metadata, instead as much as possible should be created automatically at creation time, with them just making sure that their settings are right.

**People:**

There is a saying in the open source software, that ESR dubbed ‘[Linus’ Law](http://en.wikipedia.org/wiki/Linus's_law)‘: ‘Given enough eyeballs, all bugs are shallow’. My law for geospatial metadata would be ‘Given enough eyeballs, good metadata will emerge’. Given a large enough user base, problems with metadata will be obvious and can be corrected and annotated to be better by *someone*. But the pre-requisite is that the control of the metadata must be in the hands of all, just like open source software is. Of course that may not mean everyone necessarily has write access to the metadata (though it might), but instead that there is an [architecture of participation](https://cholmes.wordpress.com/2006/01/24/architectures-of-participation-yktm/) around metadata that allows feedback loops that find errors in metadata to feed back in to the original.

How will this work? There are many models out there, and I’m not sure exactly what the architecture will look like, but I have a couple of ideas. The follow up to Linus’s law is that the person who *finds* the bug is usually not the person who fixes it. Similarly the person who creates the geospatial data should not usually be the one who creates the metadata. It’s the last task that they’re excited about doing, it’s similar to how coders don’t like to comment their code, but it’s even worse, since there are arcane standards that require ‘[training](http://www.fgdc.gov/training/index_html)‘. .

So what we need to do is open the door for others to edit the metadata. The most obvious solution is wiki-able metadata, editable by anyone. This is certainly a step in the right direction, but I think we could do better. The next solution could look something like amazon, with their listings of books. People can write comments about the books, adding additional information, and giving subjective opinions. Others can then ‘rate’ their comments, with the ‘was this review helpful to you?’ functionality, so that the best comments rise to the top. So to in geospatial metadata, those who have downloaded or browsed the dataset, studied it extensively, know the field, ect. are the most able to comment on the data. Others rate the comments that were helpful to them, and so one can easily see what others thought of it.

Beyond that I think it’d be interesting to add a social component to it. For example you could fill out a profile, and perhaps the domain you’re most interested in is ornithology. You would obviously care about the datasets that others in the same domain are interested in, and especially datasets that they rate highly. Ideally you could bring this back to the automation, and have not only the creation of metadata be automated, but also the addition of additional metadata. Your desktop GIS, or 3d browser would automatically tally what datasets you’ve looked at, and it would rate higher ones that you consistently come back to. Of course you could manually lower the rating, maybe you come back to one since you’re masochistic and like using really bad data – you as the user should be able to override the default value, but it’s really nice to have the automatically created defaults.

If the clients to browse and use data are a part of the architecture of participation, the creation of good metadata becomes much easier. The problem then shifts back to machines, to being able to process all this metadata that people are generating in to something useful. Right now the best we’ve probably got in the way of organizing this stuff is maybe the Google Earth Community board or a few of the sites that organize mash-ups. These are the Yahoo!’s of the geospatial arena, humans running around trying to organize what’s out there. I hope that we will see massive amounts of valuable data that will just beg for an innovative company to come along and help organize it all. The other way to bootstrap could be to just start a nuetral catalog where anyone can register, including registering other people’s services. And build a layer on top that allows additional comments and ratings.
