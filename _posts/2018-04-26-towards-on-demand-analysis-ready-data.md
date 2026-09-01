---
layout: post
title: "Towards On-Demand Analysis Ready Data"
date: 2018-04-26
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/towards-on-demand-analysis-ready-data-f94d6eb226fc
image: https://miro.medium.com/v2/resize:fit:1400/0*ZrZJtdMk_kWoMpIh..gif
---

![](/assets/img/posts/towards-on-demand-analysis-ready-data/1_OcYeVJaG9xXHijTPbzK9oA.png)

*Oil well pads (with new detection in pink) identified with Planet analytics. See more at this [Planet Insight](https://www.planet.com/insights/permian-basin-oil-boom/).*

### Cloud Native Geoprocessing Part 3

Yesterday we [explored](https://medium.com/planet-stories/analysis-ready-data-defined-5694f6f48815) the basics of “Analysis Ready Data,” (ARD) which consists of time-series stacks of earth observation imagery that enable a user to jump into the analysis without having to do their own pre-processing. Satellite imagery providers have started to produce ARD for particular sensors, and are figuring out how to work toward ARD consisting of data from any sensor.

## On-Demand Analysis Ready Data

The combination of Analysis Ready Data, a coherent, cross-calibrated time stack of data from any overhead source, with the capabilities of modern [Cloud Native Geoprocessing](https://medium.com/planet-stories/cloud-native-geoprocessing-part-1-the-basics-9670280772c8), leads to what I call “On-Demand Analysis Ready Data.” This is the final step to enable truly user-centric satellite imagery workflows. In this framework, a user can define the exact area they care about, and use cloud-scale geoprocessing engines to generate data optimized for their analysis.

In practice, this means that if the user cares about Contra Costa County in California or Yosemite National Park, they receive images clipped to desired boundaries — not a set of tiles that overlap it. It also means exposing a palette of operations they can choose from. While it is essential that there is a baseline ARD definition that creates actionable data across use cases, there are cases when a custom ARD definition makes more sense.

With On-Demand ARD through Cloud Native Geoprocessing APIs, an analyst could use the baseline definition and tweak the parameters to be exactly what they want. Indeed, one could see domain-specific ARDs: 3D building modeling and vegetation health have different requirements for “best possible” parameters and inputs for data preparation. With On-Demand ARD, these can be sets of operations performed when the user requests.

## On-Demand ARD in Detail

It’s worth another look at how the various aspects of ARD may look different with On-Demand ARDs.

**Image Clipping.** The biggest immediate impact to users is that the ARD they request on demand can be shaped exactly to their area of interest. They would supply a vector file (or map drawing) of the place they want to analyze. This would kick off a series of processes to produce the ARD, with *no wasted compute, storage, or network egress resources*. Right now we process and send a lot of pixels that users already know they don’t want. On-Demand ARD could eliminate most of that, saving storage costs for users and ensuring every pixel delivered to them is actually relevant. Regular grids would likely be used by many users, but they could choose to have clips to their area within the grid.

The grids would also be created on the fly, for example, making image chips that are optimized for computer vision. A user accessing an On-Demand ARD API could clip to the area they want, then choose to return full images, use a default grid, or specify their own grid. Or, they could potentially receive composite images for full-pixel coverage in each image (see the section below on compositing).

![](https://miro.medium.com/v2/resize:fit:1400/0*5vEqGcfz2eJJQmE0..gif)

*A user selection of a clipped area. With on-demand ARD, the clip could power the analysis pre-processing.*

**Usable Data Masks.** One annoyance many users have with statistics like ‘cloud cover’ is that they are made against a whole scene or grid cell, which rarely corresponds to the area they actually care about. Usable data is often discarded by users because cloud cover in an another area will increase the cloud estimate, even when the places they care about are actually totally clear. Generating the UDM on demand for the area requested means that the summary statistics are finally relevant to the analysis at hand. Users could discard the images without having to inspect and do their own analysis of whether their AOI has usable pixels.

Going further, users could specify which UDM classes they consider usable or not. One user may have an algorithm that works with low haze, while another may need completely clear images. They could be returned a simpler mask that tells them what pixels are or are not usable, derived from their preferences. The geoprocessing engine could even perform the mask operation, returning the stack of pixels they consider usable. Some people could even choose to perform an additional correction, for example, to turn a cloud shadow pixel into one they can use.

**Image Compositing**. A new category that becomes possible and indeed desirable if you have a geoprocessing engine is compositing images together for the user. Ideally, time series analyses are run on complete sets of pixels at regular intervals. Most ARD gives the user the capture, but they may have to combine and pick the best pixels from each one on their own.

Instead, On-Demand ARD could return a weekly or monthly image, selecting the pixels according to user criteria, leveraging the UDM and other quality analysis to return wall-to-wall pixels. There is even a trend towards ‘virtual composites,’ where one can use a lower resolution pixel (such as from MODIS) to model and estimate a prediction of what a higher resolution pixel would look like. The geoprocessing system could produce weekly Analytic Ready Composites at a given resolution, with metadata on whether they are new captures or if they were composited from lower-resolution assets.

![](https://miro.medium.com/v2/resize:fit:1400/0*ZrZJtdMk_kWoMpIh..gif)

*Planet weekly composites used for ML detection of oil well pads. Learn more at [https://www.planet.com/insights/permian-basin-oil-boom/](https://www.planet.com/insights/permian-basin-oil-boom/)*

**Atmospheric Correction.** While most people will be happy just having their data fully atmospherically corrected, there are always some who won’t be happy with the way the correction was done. There are lots of different steps, and not every analysis needs all of them. Some work is totally fine without the final steps, and some users may have their own atmospheric corrections that are optimized for their application. Even these advanced users, however, can benefit from On-Demand ARD if they can put their algorithms in a Cloud Native Geoprocessing engine of choice. A great API would bundle up a set of operations to output ‘surface reflectance data’ from the selected time and area of interest. It would also let users select and parameterize each component and specify the exact output they want.

**Pixel Alignment.** Creating ARD on-demand opens up new possibilities for better aligning pixels. For one, users could specify what they want to use for a base image to co-register all the additional images too. Maybe they have particular knowledge of why one image works better than others, and so an API could let them choose. Beyond that, a great geoprocessing system could do a sort of ‘bundle adjustment’ of the stack of images selected, to really optimize the whole stack alignment, instead of just having each attempt to match the base. The most flexible geoprocessing systems would let users specify their own datasets for rectification. They might have high-quality LiDAR data, or some super accurate ground control points that will perform better. Ideally, they could supply their own input data to use for the whole ARD stack.

**Sensor Alignment.** Similar to Pixel Alignment, users of ARD on demand should be able to align sensors to the base they prefer. If they’ve got an algorithm working well with Landsat data, then it should be possible to have an ARD with DigitalGlobe and Airbus and have it *act like* the Landsat data. It should be possible to go the other way as well: align a Landsat scene to act more like DigitalGlobe data. More advanced users should also have a number of parameters to tweak exactly how the sensor alignment is done.

## Cloud Native Geospatial and ARD

Astute readers will notice that I didn’t talk about data formats or metadata standards at all. It is important to emphasize that Analysis Ready Data is independent of data formats. It is a coherent set of data preparation. I’m sure many who read my work have made the leap to the potential of [Cloud Optimized GeoTIFFs](https://medium.com/planet-stories/cloud-native-geospatial-part-2-the-cloud-optimized-geotiff-6b3f15c696ed) (COG) and [SpatioTemporal Asset Catalogs](https://medium.com/tag/stac-spec/latest) (STAC) to help, but I’m going to keep most of that discussion in its own post. The main thing to remember is that ARD is format independent. And indeed the question of format also drops away some with On-Demand ARD, as the format is just an additional parameter the user sets when ordering their data.

However, it is important that we start to think about the cloud-based storage of ARD, so that it can be close to the computation and live natively on the cloud. With On-Demand ARD, it is actually less important to have big complete datasets of ARD, but it is very important that the information needed for a cloud native geoprocessing engine to create ARD on demand is in place. As the ecosystem matures, it is quite likely that ARD will be taken for granted, because of course users want well prepared data for any analysis task. On-demand systems can help fill that gap by generating the data as needed by users, instead of duplicating the core data that runs massive processing on every pixel to get it ready.

It is important to remember that no single sensor will ever have all the information and answers to aid a decision. As a result, it is essential that the overall ecosystem architecture accepts that all data will not always live in one location, or that it will always go through one geoprocessing engine. We must continue to push forward a baseline of STAC catalogs and accessible COG data that can be streamed between different locations and systems.

## A Call for Collaboration

I hope this post and the [previous one](https://medium.com/planet-stories/analysis-ready-data-defined-5694f6f48815) has been helpful to form a clearer picture of what Analysis Ready Data is today, and where it could evolve. Cloud Native Geoprocessing systems can play a huge role in making overhead imagery far more useful to a broader audience. While advanced users should be able to tweak the parameters to their liking, it is even more important that the industry provide guidelines that tap into our expertise so that others aren’t required to become experts.

If you work in the earth observation industry and are interested in cross-provider collaboration on these topics, please get in touch ([@opencholmes](https://twitter.com/opencholmes)). At Planet, we want to help move the industry forward towards truly cross-platform and on demand Analysis Ready Data, but we can’t do it alone.
