---
layout: post
title: "STAC Updates: Fall 2021"
date: 2021-10-27
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-updates-fall-2021-ac97e66edb48
image: /assets/img/posts/stac-updates-fall-2021/1_Pyey7AfLPy7wTlPh7EAacA.png
---

It’s been almost 3 months since my last blog post on SpatioTemporal Asset Catalogs (STAC), which is one of the longest stretches I’ve gone in the past few years. There’s been lots of progress and growing momentum in the community, so it seemed like a good time to pull together all the happenings in one blog post.

## STAC Funding Initiatives

The first topic to share is the state of funding for the STAC ecosystem. In the previous post, I shared about our [open requests for proposals](https://medium.com/radiant-earth-insights/help-make-stac-better-open-requests-for-proposals-ff2338663217). I’m pleased to announce that we’ve selected Element84 to make the new STAC website and Jonathan Healy for the STAC validation enhancements. We’ve also decided that Radiant Earth will lead the open RFP’s for the tutorial work, which will take up most of the final funding from the [STAC 1.0.0 Funding](https://medium.com/radiant-earth-insights/stac-1-0-0-whats-next-for-the-stac-ecosystem-6b4360aa88cc) effort. Once we finish up all the contracts for that initiative I’ll do a final summary blog post.

And I’m really excited to announce that we’ve got our initial sponsors in for [our latest funding effort](https://twitter.com/STACspec/status/1443635613610119170)!

![](/assets/img/posts/stac-updates-fall-2021/1_Pyey7AfLPy7wTlPh7EAacA.png)

Microsoft & Planet come in again at the top tier, with a number of long-time sponsors like SparkGeo, Arturo, and Element84. Digital Earth Africa has sponsored previously, and this time they are joining up with Geoscience Australia. And I’m really excited about our new sponsors. Toitū Te Whenua Land Information New Zealand provides perhaps my favorite [open data portal](https://data.linz.govt.nz/), where I often go for good sample data, and it’s awesome to see them embracing STAC. Development Seed has been with STAC from the beginning, sponsoring with people’s time and leading a number of important ecosystem projects, and it’s great to welcome them as a funding sponsor. And Hydrosat is doing really interesting stuff with Thermal Infrared from space. We are still welcoming sponsors, so if your organization is interested in adding your logo to the illustrious list above then check out the [sponsorship prospectus](https://docs.google.com/document/d/19y_bktO3dit4G8AxFC_0-oAPPNPm6g-_ChkoLSkcBjQ/edit#heading=h.9qbgdt9kddjk).

As the prospectus explains, this funding will be used to ‘*enable enhancements and maintenance of key open source tools in the STAC ecosystem. These funds will allow for dedicated time in the coming months for key STAC individuals and organizations to do the important work of adding features, fixing bugs, and ensuring that the momentum building behind STAC only increases.*’ In short, it’s funding the foundational tools that really mature the ecosystem, ensuring that each is a robust open-source ecosystem of contributors.

We aren’t yet sure exactly which projects will be funded, and this time we’re aiming to have the sponsors have more influence on exactly where the funding goes. Platinum and Gold sponsors both can designate particular projects they want to be sure their funding goes to. And I’m excited to organize the first full ‘sponsors call’ where we’ll invite the sponsors to all talk through together what they’d like to see. The STAC Project Steering Committee will have the final say on the funds but will take their cues from what the sponsors want.

## The State of STAC

![](/assets/img/posts/stac-updates-fall-2021/1_0oyCnKZDGSiaThUKKGPDwQ.png)

Starting at the [ARD18 conference](https://www.ard.zone/ard18) (the first of the awesome [ARD conferences](https://www.ard.zone/), the latest of which is happening this week!) we started doing ‘The State of STAC’ talks (you can see the [first one on youtube](https://www.youtube.com/watch?v=byO0ABXFI4I)). In the beginning, these were always me, but this year Matt Hanson lead the talk, which to me is another great sign of how STAC has matured to a fully collaborative community (he put my name on it and let me do a section, but my contribution was truly minimal). The video is not yet up, but you can see [his slides](https://docs.google.com/presentation/d/1H35EAUSeZzHwQxTkiuBVRU6MPpF05pUPmYj52e2Y_6k/edit#slide=id.p), and I’ll try to update the link when it’s published. It’s a really great overview of STAC and how it’s been evolving.

My favorite slide by far is a smattering of Twitter responses to [Matt’s query](https://twitter.com/GeoSkeptic/status/1442916622759436290) on private companies using STAC:

![](/assets/img/posts/stac-updates-fall-2021/1_b_tyJx_wuySvnqVlhcOlog.png)

It was awesome to see, particularly since after we put out 1.0.0 it had felt like the overall STAC activity and enthusiasm were actually less than when we were sprinting to 1.0.0. I was starting to wonder if maybe we weren’t going to see the adoption that we were sure would happen after we put out the stable specification. So it was awesome to see this response, and then the next week I heard reports from [GEOINT](https://usgif.org/event/geoint-2021-symposium/) that everyone was either already using STAC or had heard of it and were excited to use it at the first chance they got. So it turns out that it is getting adopted, and is evolving to be one of those foundations that are practically taken for granted.

## Ecosystem Updates

![](/assets/img/posts/stac-updates-fall-2021/1_sdByxl4MQQSWUZDgvdD9-Q.png)

Finally, I wanted to share a smattering of news in the broader STAC ecosystem. If you want an up-to-date feed of this type of news, I recommend following [@STACSpec](https://twitter.com/STACspec) on Twitter, as we’ve been trying to at least retweet all the interesting happenings. But there’s been a lot of cool stuff, even in the few weeks since Matt’s talk on the State of STAC, and it seems worthwhile to summarize here for those who aren’t plugged in to all the details.

**STAC API —** The top of the list is the [1.0.0-beta.4 release](https://twitter.com/PhilVarnerGeo/status/1445920804177276931) of STAC API. It’s getting ever closer to 1.0.0, with just a few final changes to make before it goes into ‘release candidate’ status. It’s been doing great alignment with OGC API — Features and its related specifications, with a beneficial dialog between the two groups. Phil Varner has been doing a great job leading the effort, funded by a Radiant Earth technical fellowship.

**STAC Extensions —** While the core STAC spec has remained stable at 1.0.0 there continues to be good energy in the extensions. A few areas in the active discussion include [ml-model](https://github.com/stac-extensions/ml-model) — for machine learning, [classification](https://github.com/stac-extensions/classification) — for describing the values of pixels, which is particularly useful for land use/land classification, and [perspective imagery](https://github.com/Septima/STAC-perspective-imagery). There’s also been a good discussion at the ARD conference this week on a specific Analysis Ready Data STAC extension, so keep an eye out for that as well.

**STAC Layer —** Next up is a leaflet plugin from Daniel Dufour, called [stac-layer](https://github.com/stac-utils/stac-layer). This was one of funded STAC 1.0.0 efforts, enabling any leaflet application to easily parse and access all the STAC data types. It’s a great foundational piece and I suspect will become widely used in other projects.

![](https://miro.medium.com/v2/resize:fit:1400/1*QdUup_bL-5VHfZw3DGjAuw.gif)

**STAC Browser v3** — One project already using stac-layer is [STAC Browser](https://twitter.com/matthmohr/status/1432106220261974020), which was the main reason the STAC PSC initiated the funding. Matthias Mohr has done a really great job cleaning up the STAC Browser codebase and improving the user interface of the project. It’s still in the ‘alpha’ stage, but people are welcome to try it out and give feedback. Matthias continues to advance it with his Radiant Earth technical fellowship, and I think it’s quite likely we’ll see additional funding for it from the latest fundraising effort.

**STAC in Notebooks**— Another brand new project called [stac-nb](https://github.com/darrenwiens/stac-nb) is focused on making it easy to work with STAC in Jupyter notebooks. It leverages some nice STAC components from [OpenEO](https://openeo.org/), see an [example gif in this tweet](https://twitter.com/dkwiens/status/1446313496518402049). Thanks to Darren Wiens for this one.

**RasterFrames with STAC** — The awesome [RasterFrames](https://rasterframes.io/) project also added support for STAC, making it much easier for Spark users to make use of STAC API’s. See [this tweet](https://twitter.com/daunnc/status/1449554358551580674) from Grigory Pomadchin for more information on how to access it.

**SatExtractor** — One of my favorite projects to emerge recently is [SatExtractor](https://github.com/FrontierDevelopmentLab/sat-extractor), which is a real cloud-native approach to grabbing diverse public imagery and making it more accessible. The cool thing to me is that this project is much more about solving a problem: it is ‘difficult to create datasets to train models quickly and reliably.’ STAC is a key enabling technology, but it’s not another tool to use or serve STAC, it’s a tool to ‘ perform worldwide datasets extractions using serverless providers such as Google Cloud Platform or AWS’. I suspect we’re going to soon see more projects that show real innovation on top of the foundation STAC provides.

**OpenDataCube & STAC** — The new [odc-stac project](https://odc-stac.readthedocs.io/en/latest/) was [just announced](https://twitter.com/GeoSkeptic/status/1453396550391042053), which I think is a huge win. OpenDataCube pre-dates STAC, but has long shared very similar goals. Once I finally talked in-depth to ODC developers, it became clear to both of us that the two projects are actually quite compatible, and the big win would be for ODC to be able to directly use STAC as an alternative backend. This project brings that vision to reality and unites the two communities.

[**STACindex.org/learn](https://stacindex.org/learn)** — Matthias also was busy adding a brand new section to STACindex.org, on [learning resources](https://stacindex.org/learn). If you’ve got any tutorials or notebooks that are related to STAC please add them!

**stactools packages —** One corner of the STAC ecosystem that has seen a ton of energy lately is stactools, particularly the growing set of [stactools packages](https://stactools-packages.github.io/). I’ve got a draft post in progress to fully ‘introduce’ stactools, which I’ll hopefully get out soon, but it’s worth highlighting here that there are now over 25 dataset-specific converters that will translate from existing metadata and data into STAC.

As you can see there’s been a lot of exciting activity in the ecosystem. If you’re using STAC or building STAC tools then do share it, and I can include it in the next ecosystem update. The best way is probably to tweet and include [@STACSpec](https://twitter.com/stacspec), and we’ll retweet it and then include it in the next update. And thanks again to all the sponsors of the latest funding initiative, and indeed to everyone who is using or building with STAC in any way.
