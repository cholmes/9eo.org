---
layout: post
title: "Deep Learning and the Explosion of Geospatial Data"
date: 2018-09-04
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/the-explosion-of-geospatial-data-and-the-rise-of-deep-learning-b22aa8fef519
image: https://miro.medium.com/v2/resize:fit:1400/1*Thwlclext0eCSMbWVpn-4g.gif
---

The past few years have seen an exponential increase in the amount of data produced in the world. At Planet, we have had a front row seat to watch that explosion of data, including satellite imagery. Indeed, we are doing our part, producing over a million images of multispectral data *every single day.*

![](/assets/img/posts/the-explosion-of-geospatial-data-and-the-rise-of-deep-learni/1_QJlnhP43oY2CrRRNI3oQpQ.png)

*Today, the amount of imagery produced by satellites today is overwhelming the traditional remote sensing process.*

The remote sensing field has all the expertise to turn raw photon readings into meaningful measurements that enable better decision-making, but traditional remote sensing workflows are built on a foundation of information scarcity. In the past, it was difficult for analysts to get a reliable image of an area of interest, particularly one free of clouds. Where imagery was available, they relied on expensive desktop software that’s only equipped to process a discrete sample of imagery.

Today, the amount of imagery produced by satellites today is overwhelming that traditional process. In addition to all the new sensors coming online, satellite imagery is now increasingly accessible. While previously users would only have access to pixels they downloaded to their desktops, today more and more pixels are available on [cloud native geospatial infrastructure](https://www.planet.com/pulse/cloud-native-geospatial/) — effectively facilitating that data explosion.

Even just five years ago, dealing with this explosion of geospatial data would be a very different challenge to solve. I’ll explain in a slightly roundabout way, beginning with one of my favorite XKCD comics of all time.

The comic (seen below) illustrates how hard it can be to explain the difference between the easy and the virtually impossible in computer science. It also encompasses what I do for a living: figuring out the “easy” things the business side perceives as hard, and of course, steering the business side away from things they perceive as easy, but are actually really hard.

![](/assets/img/posts/the-explosion-of-geospatial-data-and-the-rise-of-deep-learni/1_wUZiI2Mg2cncuMWWXIiBgQ.png)

*Source: [XKCD](https://imgs.xkcd.com/comics/tasks.png)*

The incredible thing is, in the four years since this XKCD comic was published, automatically identifying a bird in a photo has switched from a ‘five years and a team of researchers’ challenge to a ‘gimme a few hours’ challenge.

Below is Google’s Cloud Vision API, which uses deep learning to do image recognition. It not only determines with certainty that the picture is a bird, but also that it’s an owl. Any developer can use the API with their images to get back a series of tags identifying what is in the image with Google’s confidence.

![](/assets/img/posts/the-explosion-of-geospatial-data-and-the-rise-of-deep-learni/1_SbsG5Uc6whCmRCfaA1zVmw.gif)

*Google Cloud Vision API leverages deep learning to do image recognition down to the level of bird species.*

When the XKCD comic was published, we were in the midst of a drastic change in the ability of machines to successfully identify objects in imagery. A dataset and accompanying annual contest called [ImageNet](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) was an important catalyst and shows the speed of such advances. Up until 2011, the computer vision field struggled to achieve anything better than a 25 percent error rater. Five years later, the winners achieved error rates under 5 percent, which is better than what humans achieve at the same image recognition tasks.

![](/assets/img/posts/the-explosion-of-geospatial-data-and-the-rise-of-deep-learni/1_Xk88v6MYrUoGnxFShdUAaw.png)

*The diminishing error rate in the annual ImageNet competition from 2011 to 2017. Source: [Electronic Frontier Foundation](https://www.eff.org/ai/metrics)*

The key to this massive improvement is ‘deep learning,’ an analytic approach that uses different layers that are specialized for learning different aspects of the image, be it colors, lines, circles, faces, etc. When these layers are shown hundreds of thousands of images, they become trained to identify what are in new images based on what they have previously seen. The result of deep learning is not an algorithm, but what is called a ‘model’ — a resulting neural network that has been trained on many images and their labels.

![](/assets/img/posts/the-explosion-of-geospatial-data-and-the-rise-of-deep-learni/1_iOnaO1Hi4o4YqQn0YCuGVQ.png)

*The vast majority of the intellectual energy and computational power has been put toward identifying pets in photos and people in selfie photos.*

Recent advances in deep learning are awesome, but one thing that has disappointed me a bit is that the vast majority of the intellectual energy and computational power has been put toward identifying pets in photos and people in selfies. Consumer internet companies have been the biggest investors in deep learning, and reward high salaries to researchers who make breakthroughs that are easily applicable to consumer photo identification. We are starting to see the uses cases diversify, and my hope is that we can encourage even more use of computer vision and deep learning to help make the world a better place.

The cool thing is that most of the best deep learning frameworks have been [open sourced](https://www.wired.com/2015/11/google-open-sources-its-artificial-intelligence-engine/). At events like [CVPR](http://cvpr2018.thecvf.com/), leading computer vision experts are not only openly sharing their papers, but also their code and even trained models. These models can often be repurposed with ease: you can borrow the training done on the lower layers — identifying colors, lines, shapes, etc. — and retrain the higher layers by giving them labeled photos of ships or airplanes instead of cats and dogs.

The transition from promising demos to computer vision and deep learning at scale and in production is already underway. In December, there was a great blog post called [Google Maps’s Moat](https://www.justinobeirne.com/google-maps-moat) that compared the advantages of Google Maps to its competitors, particularly Apple Maps. It shows countless examples and cites a press release from 2012 that describes how building footprints and height are “algorithmically created by taking aerial imagery and using computer vision techniques to render the building shapes.” Google is considered to be five to seven years ahead of everyone on deep learning, so it makes sense that the rest of the world is starting to catch up with automated extraction from imagery.

While Google is focused on consumer mapping, Planet’s aim is to take the power of computer vision and deep learning to most any object or land class on Earth. We believe this offers the potential to ‘leapfrog’ traditional remote sensing techniques in cases like object detection, making the process of extracting meaningful and actionable information from imagery much more accessible.

## Indexing the Firehose

Planet’s users have always loved our imagery, but they’ve also consistently asked for help in finding the imagery that is relevant to their problem. Our next phase, beginning with the launch of [Planet Analytics](https://www.planet.com/products/analytics/), is moving beyond the imagery production chain to give imagery users tools to better deal with the data explosion.

For the past year, Planet has been exploring the potential of deep learning extensively to identify information about the world in our images and enable people to use it without having to sort through the millions of images we pull down from space every day. We’ve had success doing object detection on things like ships, airplanes, oil well pads, and even swimming pools. Image segmentation has been used to map buildings, roads, and even monitor deforestation. We’re able to see fairly incredible results with only a handful of trained images.

![](https://miro.medium.com/v2/resize:fit:1400/1*Thwlclext0eCSMbWVpn-4g.gif)

*Animation of Planet’s deforestation detections in Para, Brazil, from August 6 through September. Red shows new forest loss detections week by week.*

The big potential is to mine the petabytes of imagery data that we’ve acquired, and train and validate models to have incredible accuracy. In the coming weeks, we’re going to share more of the results that we’ve seen, and we’re starting to work with several key customers to really tune our models to what our customers need from imagery.

## Augmenting the Remote Sensing Process

Though we are quite compelled by the future potential of deep learning techniques, Planet is very focused on how it can be used today, to help customers get greater understanding of their world. In the near-term, our goal is not to replace traditional remote sensing, but augment it with more powerful tools. Indeed the ‘special sauce’ behind most all of the coolest deep learning examples is the huge amounts of ‘labeled training data’ that is created by humans, as the machines have to learn from accurate data sources.

Planet’s goal with the technology will be making a virtuous circle, where the technology helps people, and the people in turn help the technology. The core concepts and trainings of traditional remote sensing will never go away — our aim is to help its practitioners focus on higher and higher level problems. Indeed, some of the most promising results that we are seeing come from the collaboration of more traditional remote sensing expertise combined with deep learning techniques, to take advantage that all both worlds offer.
