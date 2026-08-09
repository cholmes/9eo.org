---
layout: post
title: "Analysis Ready Data Defined"
date: 2018-04-25
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/analysis-ready-data-defined-5694f6f48815
image: /assets/img/posts/analysis-ready-data-defined/0_Cn9KMxPwSwx_Mf6o..gif
---

*Cloud Native Geoprocessing Part 2*

The next topic in my Cloud Native Geoprocessing series is “Analysis Ready Data” (ARD) — a growing trend among satellite imagery providers to handle more of the data preparation work typically done by end users in their desktop environments. Much of the use of modern geoprocessing systems goes toward making data *ready* for analysis, instead of actual analysis. It is worth understanding data preparation operations in depth through the lens of ARD.

This post will examine the core of ARD today and present a vision of how the earth observation industry can advance cross-provider ARD to make our data even more user-friendly. Tomorrow’s post will expand on the ARD vision, looking at how cloud native geoprocessing systems can be utilized to create ‘On-Demand Analysis Ready Data’ that can deliver data that matches the unique needs of different users, while handling the processing pipeline more efficiently.

## What is Analysis Ready Data?

Analysis Ready Data are time-series stacks of overhead imagery that are prepared for a user to analyze without having to pre-process the imagery themselves. Those who don’t work with satellite imagery every day likely underestimate the amount of labor involved in preparing imagery for analysis.

The typical satellite imagery expert looking to do any sort of time-series analysis has a number of preparatory steps they must take before beginning. First they must **search and download** all the data that overlaps their area and time range(s) of interest. Since they want as much data on their area as possible, this usually means going to several different providers’ portals, as there is no central index of all imagery. Next they must **‘clip’ the data**, selecting only the area of analysis since most all the data they just obtained will include more pixels than needed. The resulting images never quite line up spatially pixel for pixel, and often come in different resolutions, so the next step is to **geospatially ‘co-register’ and resample the data**.

Then the user must perform **atmospheric correction**, first running specific conversions to translate the image into a physical measurement of light on the ground (for eg, converting from [Digital Numbers](http://www.gisarea.com/topic/4367-what-is-different-between-reflectance-and-radiance/) (DNs) to [At Aperture Radiance](https://landsat.usgs.gov/how-radiance-calculated); transforming radiance to [TOA reflectance](https://yceo.yale.edu/how-convert-landsat-dns-top-atmosphere-toa-reflectance) before using an atmospheric model to get to [BOA reflectance](https://www.sentinel-hub.com/develop/documentation/api/atmospheric-correction); and finally doing a [BRDF](https://en.wikipedia.org/wiki/Bidirectional_reflectance_distribution_function) correction). These conversion steps are essential for many analyses as they produce an accurate reading of the surface of the Earth and subtract out the effects of tens of miles of atmosphere. Next, the analyst usually **masks out clouds and image issues** to remove readings that may not actually be the ground. Finally, a user will **radiometrically ‘co-register’ the data **so that readings from different sensors can be treated as the same.

Once these steps are completed, you are ready to start analysis!

The idea behind Analysis Ready Data is that providers of satellite imagery are in a better position to undertake these routine steps than the average user. The concept of ARD has existed for quite awhile, but a few people in the Landsat community have really pushed it forward in the last couple years, making use of new computation capabilities. The core of the [Australian Geoscience Data Cube](http://nci.org.au/services/virtual-laboratories/australian-geoscience-data-cube/) initiative (which evolved to become [opendatacube.org](http://opendatacube.org)) was processing Landsat data into regular grids of surface reflectance data for time-series exploitation. USGS has recently released their [Landsat Analysis Ready Data (ARD)](https://landsat.usgs.gov/ard) product for the United States, also clipping the data into regular grids and making the surface reflectance data available. These groups have defined the core of modern ARD.

## Defining Analysis Ready Data

Building on the Landsat work, I’d like to put forward an accessible definition and explanation of Analysis Ready Data, starting with a minimum standard that many meet today. I’ll follow that with a vision for how cross-provider ARD could be a real step forward for the satellite industry by making data far more accessible and useful to a wider audience. As mentioned above, ARD is time-series stacks of overhead imagery that are prepared for a user to make use of without having to do their own pre-processing before analysis. But what exactly are the pre-processing steps that enable better analysis?

## ARD Core

There are a few data preparation operations that should be done at a minimum to be considered Analysis Ready Data.

**Image Clipping. **A majority of satellite imagery is distributed in a satellite-centric way — you get the full “picture” of wherever the satellite happened to be looking. This makes for nice large pictures, but the problem is most users only care about a particular area. The first step is to ‘clip’ the image to a regular grid. This lets a user know that they care about the grid around their area of interest and only need to download data in that grid. Planet’s imagery spec has a good illustration of this:

![](/assets/img/posts/analysis-ready-data-defined/0_iE3qiOLi0ioNXRPY..png)

Good Analysis Ready Data defines a fixed grid and clips all scenes to fit into those tiles, so users can treat data as a coherent stack instead of a bunch of randomly placed overlapping images. This is an example of Landsat’s Continental United States Tiles.

![](/assets/img/posts/analysis-ready-data-defined/0_X1pz0xh0nm8WHHwf..png)

*Image from [landsat.usgs.gov/ard](https://landsat.usgs.gov/ard)*

**Unusable Data Masks. **Although satellite imagery contains a lot of great information, the downloaded data usually contains at least some pixels that aren’t that useful. One of the hardest to deal with is clouds, which account for roughly 60 percent of the Earth’s surface at any given time. Clouds and the shadows that they cast, haze, and snow throw off the results of most analytic algorithms, so it is useful to have a map that tells which pixels are clouds, which are hazy, which are shadowed, and which contain snow.

![](/assets/img/posts/analysis-ready-data-defined/0_kgt0yaTuwoHReqwJ..gif)

*Sentinel Cloud Mask by Sinergise, from their [post on cloud detection with ML](https://medium.com/sentinel-hub/improving-cloud-detection-with-machine-learning-c09dc5d7cf13)*

More advanced ‘Unusable Data Masks’ (UDM) report other things that can throw off algorithms, like issues with the sensor. UDMs also make it easy to filter out pixels that were not captured, which often happens with regular grids (seen in the Planet image clipping example above). It’s pretty standard for most satellite imagery to come with at least a basic cloud and valid pixel mask, but good ARD should make sure the mask is really accurate, as often those that come by default don’t identify all clouds or get thrown off by snow and ice.

**Atmospheric Correction. **One of the most challenging aspects of working with satellite imagery is that the atmosphere is constantly changing. You can see this in the images below.

![](/assets/img/posts/analysis-ready-data-defined/0_Cn9KMxPwSwx_Mf6o..gif)

*View this Planet Story at [https://www.planet.com/stories/carbondale-kansas](https://www.planet.com/stories/carbondale-kansas-united-states-SHVDgKWmg)*

For many types of analysis, these differences can throw off the algorithm. Most satellites are calibrated to be able to translate what was captured to an actual ‘reflectance’ value — an approximation of the percentage of the incident light returned instead of just a ‘Digital Number’ of relative pixel values. But without atmospheric correction, the reflectance values are just what’s at the top of atmosphere.

Atmospheric correction takes into account what is in the atmosphere when the picture was taken — how much water vapor, ozone, aerosols, etc. — and compensates for the losses and apparent gains injected by the atmosphere, resulting in accurate reflectance values. Ideally, there are further corrections for terrain effects and target Bidirectional Reflectance Distribution Function (BRDF). The result is called the ‘surface reflectance,’ a reading of what the ground was actually reflecting. The leading satellite imagery providers now offer surface reflectance data, which is the result of all that processing. It’s what any analyst wants to work with, as it makes the day-to-day measurements as close to reality as possible. Analysis Ready Data should be processed all the way to surface reflectance, so people do not have to provide their own atmospheric correction.

![](/assets/img/posts/analysis-ready-data-defined/0_vM6cQ09uaUN2Itv3..gif)

*Image by [DigitalGlobe](https://medium.com/@pramukta/lidar-based-orthorectification-59b0ced31b18). See the end of Pramukta Kumar’s post for nice corrections from the raw data.*

**Pixel Alignment. **The way imagery works is that every image is referenced to its position on Earth, so that many disparate images can line up exactly with each other. Unfortunately, this is much harder to do in practice. The gif to the left shows an example of this. If the alignment is off more than a pixel, then it can disrupt the analysis, since the algorithm won’t be comparing the same spot on Earth. Usually providers optimize for ‘absolute positioning’ — making sure that every image is as close to its position in real life as possible. But if one wants to guarantee that pixels in a multi-temporal ARD stack of data are aligned to one another, then one can optimize for ‘relative positioning’ using a process called ‘co-registration.’ This picks a single base image and lines up every subsequent image against that. This choice privileges the relative position, even if the absolute is a bit off. Since Analysis Ready Data is built for time-series analysis, it is essential to perform a co-registration step.

**Sensor Alignment. **The final component of Analysis Ready Data is confidence that the relative spectral response of any given image band is aligned against other imagery in the stack, particularly in the case of diverse sensors. The most common bands are red, green, blue, and near infrared. Sensor alignment means that the red captured in one image represents the same captured values as red in another image. This is important for algorithmic comparison. Practically speaking, this is easy for most current Analysis Ready Data, as they tend to be acquired from a single sensor, or against a constellation that has invested lots of effort in making sure that each sensor aligns with one another. This gets more difficult when one wants to make ARD from multiple sensors, but those harder problems are not relevant to most existing providers.

### A Vision: Towards Cross-Provider Analysis Ready Data

Most Analysis Ready Data today meets the standard listed above. But I believe the real potential of ARD lies beyond what individual providers do to prepare data for analysis. Instead, the industry should work toward standardization of cross-sensor and cross-provider Analysis Ready Data. Users should not have to figure out a specific stack of tools to prepare data from each provider, and they should be abstracted from questions around if the width of the red band captured by DigitalGlobe’s WorldView 2 is different than Planet’s SkySat constellation. There is room to improve on baseline ARD in most every direction, especially when viewed in light of data from a variety of sensors.

In light of this, we can reevaluate the categories above with a view toward what evolution in each looks like.

**Image Clipping. **My view on image clipping and gridding is heavily influenced by my strong belief that computer vision and deep learning is going to fundamentally transform remote sensing. A computer vision expert who knows nothing about geospatial ought to be able to consume the right image chips and labeled training data without having to think about projections or GIS formats. Therefore, I believe the main improvement that can be made to ARD is to create image grids that are easily consumed by machine learning. The typical deep learning models for images utilize much smaller ‘chips’ of pictures than the geospatial industry typically uses. There are a number of nuances in how those algorithms work, and in the geospatial industry we can likely provide some guidance on how earth observation imagery can work better (for eg, image chips that include a ‘collar’ of additional pixels to provide context). There’s a need to get to hierarchical grids for imagery that decompose down elegantly to the shapes and sizes that work well with the leading computer vision algorithms.

**Unusable Data Masks. **At Planet we’ve been talking about the idea of moving to Usable Data Masks, which means not just communicating which pixels are bad. Some analysis applications are thrown off by cloud shadows, and some are happy to use slightly hazy data. A great ‘Usable Data Mask’ should include classes not only for clouds, but also for heavy and light haze, clouds, and shadows. Including snow and ice can also be good, as it is seasonal variation that can also throw off analysis, and often gets confused for clouds. A great UDM should be as accurate as possible, but more importantly it should also include a per-pixel assessment of its confidence.

![](/assets/img/posts/analysis-ready-data-defined/0_SXE7QQTyuoBv-MR4..gif)

**Atmospheric Correction.** Many atmospheric correction models are custom to certain datasets, as they may have particular bands that are useful to assess the state of the atmosphere. Many take into account third-party data, like from MODIS. As we move to cross-sensor Analysis Ready Data it is important that images use compatible atmospheric correction models. Great ARD should supply additional correction maps to enable an advanced user to correctly interpret the data, including sun elevation maps and BRDF maps. Having atmospheric correction done well would mean that a single-color curve could be applied to all imagery in a stack and not return different colors like above. The ‘visual’ product of an ARD dataset should look highly consistent as a result of successfully modeling out all the effects of the atmosphere, sun angles, observation geometry, and terrain.

**Pixel Alignment. **While co-registration can align pixels against one another, ideally the original ground-locking of images is done against high-quality ground control points (GCPs), and with a great Digital Elevation Model (DEM) to do orthorectification. Cross-sensor ARD should correct all images in the stack against the same DEM and GCPs, instead of just stretching the pixels to align. Open data sets that can form an open baseline would help with this, and those who have access to the higher quality GCP and DEM data could also process the complete stack against their own data.

**Sensor Alignment. **Perhaps the trickiest problem for cross-sensor and cross-provider ARD is to align the bands properly. Ideally, there is major investment in cross-sensor calibrations, with every pair of sensors comparing images taken of the same place at the same time. This would allow validated translation equations based on real-world observations. Short of that, it is important for every image first to do surface reflectance and then some sort of radiometric normalization that enables a user to treat two red bands as the same red band, for example.

…

We’ll draw to a close here, as I broke this into [two posts](https://medium.com/planet-stories/towards-on-demand-analysis-ready-data-f94d6eb226fc) to make sure I didn’t overwhelm people with text. I do want to thank Keith Beckett for his contributions to this post, helping me get all the details correct. Tomorrow we’ll pick up with exploring ARD generated on demand using cloud native geoprocessing systems and wrap up.

*Read Part Two: [On-Demand Analysis Ready Data](https://medium.com/planet-stories/towards-on-demand-analysis-ready-data-f94d6eb226fc)*.
