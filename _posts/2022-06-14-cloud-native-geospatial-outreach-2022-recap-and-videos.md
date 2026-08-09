---
layout: post
title: "Cloud-Native Geospatial Outreach 2022 Recap (and videos!)"
date: 2022-06-14
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/cloud-native-geospatial-outreach-2022-recap-and-videos-2a0e80085db7
image: /assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_DnVZLvR1ZqfCjcium-ddrQ.png
---

In April over 70 speakers and 800 participants came together for the incredible [Cloud-Native Geospatial Outreach Event](https://medium.com/radiant-earth-insights/join-us-for-the-cloud-native-geospatial-outreach-event-a6eb5c37a91e). Our goal for the event was to highlight just how far the movement around [COG](https://cogeo.org/), [STAC](https://stacspec.org/), [Zarr](https://zarr.dev/) & [COPC](https://copc.io/) has come, and to accelerate its path towards becoming *the* way to make geospatial information accessible to the world. Almost everyone who attended was blown away by the breadth and depth of what was covered, and it was clear that cloud-native geospatial is already having a substantive impact on the world.

We aimed to make the event as accessible as possible, spread across different time zones, and also recorded every talk so that those who couldn’t attend in real-time could revisit and learn more about these awesome ecosystems. So with this post, I’d like to cover some of the highlights of the event, linking to the content so that even more people can experience the talks and learn more. The entire event is also on [this youtube playlist](https://www.youtube.com/playlist?list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk), so feel free to just explore on your own.

![](/assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_DnVZLvR1ZqfCjcium-ddrQ.png)

## Event Kickoff

To kickoff the event, Nadine Alameh from the Open Geospatial Consortium and I gave a welcome. We started by [thanking our sponsors](https://youtu.be/hprPIr9Vt4M?t=243):

![](/assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_UFnp3U9Pxca3R2XgvQFzXg.png)

They really are an incredible group of organizations who are early adopters of this growing movement. Nadine [then shared](https://youtu.be/hprPIr9Vt4M?t=579) how she feels this event is such a milestone for OGC and the wider geospatial world, speculating how in twenty years we will all look back on this moment and reflect on how it was a seminal event.

I finished off the welcome section with an overview of Cloud-Native Geospatial. [I started with what it is](https://youtu.be/hprPIr9Vt4M?t=972), and Howard Butler joined me [to explain the technical principles underpinning the philosophy](https://youtu.be/hprPIr9Vt4M?t=1363).

![](/assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_6y2Ey1RxpGVh83yZzSQuNg.png)

I then [followed with what Cloud-Native Geospatial enables](https://youtu.be/hprPIr9Vt4M?t=1695) and closed with the idea that we have an opportunity to make geospatial information far more accessible, which in turn can have a massive impact on the world.

## Talks

After the kickoff we jumped straight into a mix of ‘overview talks,’ explaining a single community and standard, lightning talks, and tutorials. For those using this post as a jumping off point to watch videos, I’d say to start with the ‘welcome’ session above, but from here it’s a bit of a ‘choose your own adventure,’ with no need to watch talks linearly. But I’ll write up some highlights and different entry points to start with:

### Overviews

If you want to get to the next level down on a particular standard then you should start with one of the ‘overviews’:

- [Cloud-Optimized GeoTIFF Overview](https://www.youtube.com/watch?v=wjHtJicaRsI&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) by Jed Sundwall.

- [SpatioTemporal Asset Catalog Overview](https://www.youtube.com/watch?v=Ugazf5bWsGE&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) by Matt Hanson

- [Zarr Overview](https://www.youtube.com/watch?v=KiiKvXzhyMs&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) by Sanket Verma & Ryan Abernathey

- [Cloud-Optimized Point Cloud Overview](https://www.youtube.com/watch?v=rWkKKZYN86A&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) by Howard Butler

### Organizational Perspectives

One of the main goals for this event was to really welcome organizations to talk about the how and why in their journey of adopting cloud-native geospatial. The importance of sharing this type of information cannot be overstated, as cracking a [Mainstream Market](https://thinkinsights.net/strategy/crossing-the-chasm/#Early-Majority) means that your users will be basing their decisions much more on who *else* is using a technology — they want to see ‘well-established references before investing substantially.’ Cloud-native geospatial tech has resonated hugely with ‘early adopters,’ who love its simplicity and are quite compelled by [the vision](https://www.ogc.org/blog/4607). But we need to start to highlight the successes those early adopters are seeing, sharing their lessons learned to give others more confidence to adopt the same path.

We had three full ‘organizational perspectives’ sessions with over 20 talks from an amazingly wide array of organizations. I was hoping they’d be exclusively real ‘case studies’ about their adoption of the tech, but many were quite excited to share about the cool things they built, which makes sense as many of the early adopters are building great things.

Some of the highlights for me included:

- Emmanuel Mathot from Terradue [shared some amazing demos](https://www.youtube.com/watch?v=MKiGrWffoHI&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) of the platform they built for the UN Disaster Charter, enabling the screening of diverse incoming datasets with STAC and a number of value added processing services provided on top of the core data.

![](https://miro.medium.com/v2/resize:fit:1400/1*uqnyR0LzcTWaqrLv2Rp8ig.gif)

*ESA Charter Mapper, [click here](https://www.youtube.com/watch?v=MKiGrWffoHI&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) for full video.*

- Valeriia Zakhlieniuk gave [a great presentation](https://www.youtube.com/watch?v=hYZZkgQzBns&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) on how UP42 adopted STAC, and uses it as an internal abstraction layer on top of diverse catalogs, simplifying their backend. And then they also use STAC to enable their customers to search across all the catalogs they support. She also shared the best STAC meme thus far:

![](/assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_PIHzB44SGqJj4f_ZDNaHaQ.png)

- Ian Schuler from Development Seed [gave a talk](https://www.youtube.com/watch?v=jB7-xuug8XM&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=14) on how 99% of decisions today aren’t using geospatial information, since if the answer is ‘spin up a GIS team to get the answer’ then it just won’t happen. He shared a lot about how USGS and NASA are transitioning to a cloud-native future, from his perspective of working closely with government orgs.

- Grega Milcinski [explained Sentinel Hub](https://www.youtube.com/watch?v=mn6hy0cXGY4&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) and how it has embraced Cloud-Native Geospatial, and dropping tons of hard-won knowledge about the best ways to work with COG and Zarr.

![](/assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_20QXJVY4V31Mmi_JQeHgcw.png)

- Robin Wilson from Anglo American [gave a great case study](https://www.youtube.com/watch?v=Dqcxso5iipw&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk) on how they looked at various options to build up imagery archiving and delivery services, and were able to get going very quickly with the open source technology around the cloud-native geospatial standards.

![](/assets/img/posts/cloud-native-geospatial-outreach-2022-recap-and-videos/1_8vmeVEnREwbwKfuJv7T5RQ.png)

And there were many more great organizations represented. We had governmental agencies like [Brazil’s National Institute for Space Research](https://www.youtube.com/watch?v=KhOrvAi8sFE&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=8), the [UK Centre for Environmental Data Analysis (CEDA)](https://www.youtube.com/watch?v=gvMc5XOjTuM&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk), [Canada’s Meteorological Service](https://www.youtube.com/watch?v=lcztm8QDxJk&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk), the [Philippines Space Agency](https://www.youtube.com/watch?v=ASAHW9sxKzA&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk), [Toitū Te Whenua Land Information of New Zealand](https://www.youtube.com/watch?v=_Bi0UhaIVrw&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk). We heard from [Microsoft on their Planetary Computer](https://www.youtube.com/watch?v=IDCE1I0nhDw&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=12), Google on Earth Engine, and [Amazon on their Earth on AWS public datasets](https://www.youtube.com/watch?v=r4zdMbKpD4g&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk), covering all three major cloud providers. There were also sessions from the three largest satellite imagery providers with [Maxar](https://www.youtube.com/watch?v=buRr6ED6wZI&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=13) & [Planet](https://www.youtube.com/watch?v=VPNjN-RcZZQ&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=9) sharing their organization perspective, while Airbus had two talks on [Cogger](https://www.youtube.com/watch?v=71t6_M4yqKM&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=4) and [GeoCube](https://www.youtube.com/watch?v=whWUy8XchKk&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=76).

### Tutorials

For those wanting to dive deeper, there were seven tutorials that each spent an hour diving deep into a topic.

Vincent Sarago [gave a true masterclass on Cloud-Optimized GeoTIFF’s](https://www.youtube.com/watch?v=XyT4oNxiqPs&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=7), delving into all the different options and giving a ton of great recommendations on what to do. I even learned how to fix some issues I’ve seen in some of the COG’s I’ve made. I highly recommend watching it if you want to become a COG expert.

The other tutorial that did not require programming knowledge was [Phil Varner’s overview of CQL in STAC](https://www.youtube.com/watch?v=wMop2GkTUhg&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=74). It does require some background on STAC and STAC API, but he goes deep on a number of topics.

I also had a great time with Tom Augspurger’s [tutorial on the Planetary Computer](https://www.youtube.com/watch?v=o3FvOKdfR_c&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=24). It’s mostly using python code in notebooks, but it was set up so well that I could easily follow along and run the code even though I don’t really know what I’m doing in python. And it gives an amazing tour of what Planetary Computer is capable of. He was also going to set up the environments so people could continue to try it out when following along with videos.

For those who are comfortable in python there are also tutorials for:

- A [deep dive on Zarr](https://www.youtube.com/watch?v=unGL07trSjA&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=52) with lots of interactivity.

- [Pangeo Forge](https://www.youtube.com/watch?v=oI2KLK9PHqc&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=58), a stack of tools built around Zarr for Ocean, Weather, and Climate Science.

- [How to work with stac-fastapi](https://www.youtube.com/watch?v=DOEiDThffCY&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=22) to make your own STAC API.

- A really nice one from Basile Gousssard that [pulls together a number of the cloud-native geo technologies to show some practical applications](https://www.youtube.com/watch?v=6eAWatQly9U&list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk&index=43).

### And so much more!

There were many, many more talks. I’ll try to write up additional posts that summarize some different areas of the conference, but I also encourage you to [explore the youtube playlist](https://www.youtube.com/playlist?list=PLQsQNjNIDU87yUFyKy1seaiRps389RPwk). And please share with others when you find a particularly awesome talk!
