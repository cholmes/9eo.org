---
layout: post
title: "Planet & NAIP: The Value of Keeping NAIP Open"
date: 2018-01-16
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/planet-naip-the-value-of-keeping-naip-open-b3b5293f3426
image: https://miro.medium.com/v2/resize:fit:1400/0*oDqfkuuNEymulXJW..gif
---

Charlie Loyd at Mapbox published a [great post ](https://blog.mapbox.com/keeping-naip-free-open-cf9ad9d310be)on why it’s important to keep National Agriculture Imagery Program (NAIP) data free and open. At Planet we wanted to pick up his call to action share how NAIP helps our business, and express why we believe it is so important to keep NAIP free and open.

## Use of NAIP at Planet

We use NAIP every single day at Planet — it’s a key part of our image processing pipeline for all imagery we produce in the United States. In particular, it’s used as our ‘ground control’ for the process of rectification.

The process of rectification is one of the most important in the imagery pipeline, as it is impossible to do any comparisons or fusion with other data layers without the reference points of where on earth something is. In short, rectification ensures that every image corresponds exactly to the correct location on the ground.

![](https://miro.medium.com/v2/resize:fit:1400/0*oDqfkuuNEymulXJW..gif)

*Visualization of ground control points extracted from NAIP imagery*

The typical approach is to build up a database of ‘ground control points’, usually by going out into the field and using survey grade GPS equipment to mark particular points that can be identified in imagery. Planet’s approach is to automatically extract ground control points from imagery.

In Planet’s early days, our rectification accuracy was not that great. But in the last couple of years we have made major investments to change that. We guarantee 10 meters or less Root Mean Squar Error (RMSE) globally, and the recent statistics for PlanetScope show a global average of 3.5 meters. The benefit of NAIP becomes apparent when you look at Planet’s accuracy in the United States. It’s down to 2.5 meters RMSE. Since our pixels are 3 meters per pixel this enables instant pixel level comparison with no additional co-registration step for anywhere in the US.

NAIP’s investment in a high level of accuracy in their rectification process enables it to serve as a core reference layer for a wide variety of imagery. As the remote sensing world moves towards ‘Analysis Ready Data’ that comes in consistent stacks of imagery, having a great ground control layer becomes essential. This is particularly important when trying to combine data of different resolutions so that they line up properly, enabling analysts to focus on analysis, instead of aligning their images.

![](/assets/img/posts/planet-naip-the-value-of-keeping-naip-open/0_j3oQXKHVumQbTSc2..png)

*Planet & NAIP imagery alignment — the green arrow points at the seam between the two, where the color is a bit different but all the buildings line up perfectly*

## Keeping NAIP Open

In many ways, changing NAIP to a licensed data model would actually be a good thing for Planet. Our full [SkySat constellation](https://www.planet.com/products/hi-res-monitoring/) is now offering sub-meter resolution over broad areas, and less freely available data would create more demand for our commercial data. But while that might be good for Planet’s revenues it is not good for citizens of the United States, or for the geospatial industry as a whole. Indeed, at Planet our goal is to greatly expand the geospatial industry, not to fight over smaller slices of existing budgets. And the more high quality imagery there is in the world the better it is for innovation, transparency, and for making geospatial information accessible and relevant to everyone.

The proper way to think about foundational datasets like NAIP is that they are pieces of digital infrastructure. We should think about digital infrastructure the same way we think about physical infrastructure like highways: as an enabler of economic growth. The highway system has paid huge dividends for society, by enabling much easier transportation of goods and people. The costs of the highways are relatively minor compared to that of the whole transportation system — every car and truck that runs on it, every logistics and moving company. But it was the key piece to enable our modern transportation system.

Just as highways enabled the whole automotive and modern logistics industries, so too do open datasets like NAIP enable the whole geospatial industry. New companies can build valuable products and services by leveraging the value that is open to all. And they are doing so with NAIP today — for the year of 2017, one external source of data access saw nearly a half million programmatic requests for the data from roughly 15,000 unique IP addresses corresponding to access of 650TB of freely available NAIP data. Without a baseline of foundational open data in the United States we believe geospatial innovation and value creation would be unnecessarily throttled.

In the [slide deck](https://www.scribd.com/document/368485049/2019-NAIP) about the potential changes to NAIP, it’s written that “Moving NAIP to a licensed data model will likely impact other agencies.” I’d add an additional line, that moving NAIP ‘will likely impact all of society.’ This decision goes beyond government agencies, and is an infrastructure piece that has a far bigger impact on society. Turning all of the nation’s highways to toll roads would have widespread societal and economic impacts, eclipsing impacts to government agencies.

So, hopefully the decision makers will look at the impact of their decision on the geospatial industry and society as a whole, it would be very unfortunate if a foundational dataset like NAIP transitioned from a public good to a private loss.
