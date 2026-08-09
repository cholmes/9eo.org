---
layout: post
title: "Cloud Native Geoprocessing Part 1: The Basics"
date: 2018-03-27
source: medium
source_name: "Planet Stories (Medium)"
source_url: https://medium.com/planet-stories/cloud-native-geoprocessing-part-1-the-basics-9670280772c8
image: https://miro.medium.com/v2/resize:fit:1400/1*cvWyh6fTTfRMwfiH8q5j3A.png
---

![](https://miro.medium.com/v2/resize:fit:1400/1*cvWyh6fTTfRMwfiH8q5j3A.png)

I recently wrapped up [a series of posts](https://www.planet.com/pulse/cloud-native-geospatial/) on ‘Cloud Native Geospatial,’ which explore geospatial architectures that are built for the cloud, from the ground up. In this series, I’m delving deeper into one aspect of these architectures: the processing of geospatial data, also known as ‘geoprocessing.’

The ability to process massive amounts of data across many machines is arguably the biggest advantage of the cloud. Users can marshall unprecedented amounts of computational resources with the click of a button, scaling up to almost any workload that can be imagined. But doing such massive computation on geospatial data can be challenging for a number of reasons.

This series will explore the current state of geoprocessing on the cloud, including the best tools available now and coming soon. We will also explore the issues of trust on the cloud that come with running algorithms on someone else’s system. We’ll conclude with some thoughts on interoperability and what a fully collaborative processing ecosystem could look like.

### Cloud Geoprocessing Basics

Establishing a baseline for what constitutes ‘cloud native geoprocessing’ is actually more challenging than it seems. One of the biggest reasons is that most of the initial geospatial cloud software were released right when cloud computing hit the ‘Peak of Inflated Expectations’ in the technology hype cycle.

![](/assets/img/posts/cloud-native-geoprocessing-part-1-the-basics/0_di6BBNZxeCiLdxQW..png)

A number of geospatial software providers rushed to join the hype, talking about their ‘cloud capabilities.’ For most, it was relatively easy to claim a cloud product by taking their same code and running it on the cloud, even if that required a Microsoft Windows OS on a huge virtual machine.

But almost none of them were able to seamlessly scale up geoprocessing operations. One could run a huge compute job, but it took lots of hand-holding — sending custom commands to many different machines. So most ‘cloud editions’ of various geospatial software put all the onus of scaling up onto their users. In the early days of Planet, we saw several vendors who claimed to have a ‘cloud’ solution, but after asking if they were running it themselves, it became clear they were just pushing the hardest problems on to us.

Meanwhile, the broader IT ecosystem had been developing a number of ways to handle seamless scaling, with Hadoop, Spark, Kubernetes, Lambda, and others. It’s become clear, however, that truly ‘cloud native geospatial’ is best done using geospatial code that is optimized for scale — not simply repackaging old code.

As such, a true ‘Cloud Native Geoprocessing’ solution should make it not only possible, but also incredibly simple to run a workflow across 10 or 10,000 virtual machines. It should take no separate configuration to scale it out across any number of nodes.

## Cloud Native Geoprocessing Functionality

Cloud Native Geoprocessing aims to decrease operations work needed to process data, increase the ability to scale, and to do it cost effectively. In a survey of the current Cloud Native Geoprocessing landscape, there emerge different ‘groups’ of software that have similar approaches and functionality. The following sections aim to elucidate those, and in our next post we’ll do a deeper inventory of the landscape.

### Batch Geoprocessing on the Cloud

Batch Geoprocessing systems were the first to take advantage of cloud capabilities. The core advantage is to take massive datasets and break up the computation across a number of processors. For example, one could take a global elevation model and run a process that computes the slope or creates a terrain-shaded relief map. The user just needs to specify the operation and the number of nodes to use, and the system runs the whole process in a matter of hours (as compared to days or weeks).

The initial systems were based on Hadoop, an open source framework for doing parallel processing of huge amounts of data using the ‘[MapReduce](https://en.wikipedia.org/wiki/MapReduce)’ programming model. More modern systems usually use Docker and some orchestration service like Kubernetes. This lets batch systems run just about any arbitrary code as long as the operations are parallelizable on geospatial information.

### On-the-fly Geoprocessing

Another class of systems can do the same type of operations as batch processing systems, but aim to do all the operations quickly enough to return results to users as they interact online, often with sub-second responses. The first of these systems was Google Earth Engine, which tapped into a number of advanced internal Google systems.

The key is organizing the data in the right way and then using enough nodes to do the processes in memory. These systems will typically reprocess data being ingested (though they are starting to be able to use Cloud Optimized GeoTIFFs natively), and also tend to be a bit more limited in their operations. This is because operations need to be rewritten for the framework, so that they will perform quickly enough. They have a real advantage in algorithm development, as one can quickly see the results of applying an operation. The results can be very impressive when hooked up to large compute clusters, completing countrywide and global operations across massive datasets in seconds or less.

![](https://miro.medium.com/v2/resize:fit:1400/1*S6mhX5rC9hX8zqAiGaxGdA.png)

*Deep stacks of imagery from six months of Planet data rendered in to false color and NDVI in seconds on Earth Engine.*

### Geoprocessing Subscriptions

The third major category of geoprocessing is still emerging. While the previous two modes depend on a user running them on data already acquired, these run a geoprocessing operation without a user taking any explicit action. The processing runs whenever new data comes in, delivering the finished result to the user as soon as it is completed. The core of a geoprocessing subscription can be batch or on-the-fly based. The real-time responsiveness of on-the-fly services matters a bit less in this workflow, since the overall acquisition and provider processing time of most new data is far more than the time it takes to run an end user’s algorithm.

A subscription system is geared towards *streams* of data, when there are continually new results. These are usually fairly massive datasets, where it can be prohibitive to download and process all the data, even to another batch system. So subscription geoprocessing systems are usually offered by the data provider, and will match based on a filtering criteria (for eg, only process for a certain geographic area and cloud cover metric). They aim to deliver a higher level of information than just the raw data. Often the output will be a new raster or vector dataset, which is smaller than the full raw data, but is still used as input to even higher level processing systems.

### Wrap up

Beyond the three main types of geoprocessing above, there is one more worth mentioning: fully browser-based geoprocessing. Javascript is incredibly powerful and there is an emerging ecosystem of geospatial algorithms that can run fully client side. The key to making this work well is coordinating the data delivery between the client and server, through new formats like [Cloud Optimized Geotiffs](http://cogeo.org), which can deliver just the information needed for the current view. More work is needed for this to operate seamlessly, but advanced systems could even run the same javascript code in the browser and the server for maximum flexibility.

In the next post, we’ll dive deeper into the current state of the Cloud Native Geoprocessing world, looking at leading implementations of each type of system.
