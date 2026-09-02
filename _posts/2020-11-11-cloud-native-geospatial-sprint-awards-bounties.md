---
layout: post
title: "Cloud Native Geospatial Sprint Awards & Bounties"
date: 2020-11-11
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/cloud-native-geospatial-sprint-awards-bounties-4f929727aa9c
image: /assets/img/posts/cloud-native-geospatial-sprint-awards-bounties/1_p3p2AccPTzZ6cAxoErTYEw.png
---

It’s been two months since we wrapped up the [Cloud Native Geospatial Outreach Day and Sprint](https://medium.com/radiant-earth-insights/join-the-cloud-native-geospatial-outreach-day-and-sprint-286f6fd553c3). I meant to get this post out much sooner, but life happens and 2020 is a tough year. But I wanted to announce all the winners of our experiment with ‘[Community Awards](https://medium.com/radiant-earth-insights/welcoming-new-collaborators-to-the-cloud-native-geospatial-ecosystem-c688d5f5f05#c247)’, as a companion to the [Outreach Day Recap](https://medium.com/radiant-earth-insights/cloud-native-geospatial-outreach-day-recap-9b873ce3788e).

![](/assets/img/posts/cloud-native-geospatial-sprint-awards-bounties/1_p3p2AccPTzZ6cAxoErTYEw.png)

## About the Awards

I know I’m a broken record thanking our sponsors, but I think it’s appropriate to do so for this section, as it’s entirely possible due to their support of our communities.

![](/assets/img/posts/cloud-native-geospatial-sprint-awards-bounties/1_Yni3AS2XcWZLSeeqbw7zvQ.png)

The idea with the awards was to encourage and recognize key contributions to the Cloud Native Geospatial community, using the sponsorship money that would have normally gone to travel, venue, food, etc. We had a list of [potential awards](https://docs.google.com/document/d/13H90yDxeAyOEpBTsEUQ6iOFejvnMqNmgInqGvfmd-Bg/edit#heading=h.tja9az6km61v), but we didn’t have full participation in all our anticipated categories, so for a few of them, we’ve decided to turn them into ‘[Bounties](https://en.wikipedia.org/wiki/Open-source_bounty)’, where we will give out the awards at the next sprint, for contributions between now and then. So without further ado, the winners!

## Ecosystem Awards

**Community Prize:** [stacindex.org](http://stacindex.org), from Matthias Mohr, was selected by the community of contributors to win the $5000 ecosystem prize.

![](https://miro.medium.com/v2/resize:fit:1400/1*qQgXZypRSr90UWd8mQVsFQ.gif)

It’s a project that clearly demonstrates the future for STAC, pulling together all that has been done in the community into a much more accessible interface. It lets anyone with a SpatioTemporal Asset Catalog list theirs for everyone to see, and automatically creates a STAC Browser so the data is crawlable. And then it also lists all the tools that are available to work with STAC. I’ve already found it to be super useful, and I think it’s got a bright future ahead. It was the clear winner in the community voting, so I think it’s safe to say that everyone is as excited by it as I am.

**Convening Sponsor Prize**: The other $5000 prize is selected by the two Convening Sponsors — Microsoft & Planet. We decided to split this one up, with $2000 going to Vincent Sarago and Jeff Albrecht, for all they are doing with COG’s and STAC, and in particular, the promising work with [Titiler](https://github.com/developmentseed/titiler) and its support of [Numpy Tiles](https://github.com/planetlabs/numpytiles-spec), powering [cogeo.xyz](http://cogeo.xyz). The rest of the prize will be reserved to help STAC Browser, set aside as bounties to incentivize some key features, like upgrading its map to read numpy tiles and point clouds (likely using [deck.gl](http://deck.gl)).

## Newcomer Grants

The next set of prizes were made to be an alternative to our practice of sponsoring travel for new people to join our in-person sprints. These grants give winners $1000 to help them spend time in the community, and also reserve travel money for our next in-person sprint. We decided to give out two of these, and the other two will be awarded at the next sprint.

**Aimee Barciauskas** won one of the newcomer grants. She supported the NASA Space Apps COVID Challenge by putting up a number of great datasets as Cloud Optimized GeoTIFF’s on the [AWS Registry of Open Data](https://aws.amazon.com/opendata/), and gave a great [lightning talk](https://youtu.be/XTkNhGpfmB8?t=5890) on the work. She also gave a nice [intro session](https://youtu.be/aaKlxXJ0AcI) on a new public [Sea Surface Temperature](https://registry.opendata.aws/mur/) dataset that is stored in [Zarr](https://zarr.readthedocs.io/en/stable/), with lots of great detail on what Zarr is all about. SparkGeo and Planet sponsored this award.

**Kyle Barron** won the other newcomer award, for his work on [deck.gl-raster](https://kylebarron.dev/deck.gl-raster/) which brings raster data from Cloud Optimized GeoTIFF’s to the great [deck.gl](http://deck.gl) library. You can see it in action in [landsat8.earth](http://landsat8.earth), and I’m sure it’ll start to pop up in other places in the future.

![](https://miro.medium.com/v2/resize:fit:1400/1*tizjU0SZgVTMA-wDCp1PZg.gif)

The other two awards will be given out to the next newcomers to the community. [Arturo](https://arturo.ai/) is sponsoring one to recognize the most promising woman newcomer, and [Digital Earth Africa](https://www.digitalearthafrica.org/) is sponsoring one to recognize the best newcomer contributions from someone living in Africa.

## Community Recognition

The final set of awards are to recognize various contributions to the Cloud Native Geospatial community. Winners got $200, and some of them also received a [Planet-tasked 50cm SkySat image](https://docs.google.com/document/d/13H90yDxeAyOEpBTsEUQ6iOFejvnMqNmgInqGvfmd-Bg/edit#heading=h.9e2rnlev5bxw).

- **Best Teacher** **(intro):** Dave Luo, who gave a great introduction to [Machine Learning & Satellite Imagery](https://youtu.be/Z-ycc4aAnmY), which I’m sure will be a resource for many in the future. *Sponsored by [Element84](https://www.element84.com/) & Planet*

- **Best Teacher (advanced):** Rob Emanuele [introduced PySTAC](https://youtu.be/BV0s-KoZFgY), and the material lives on as [a notebook](https://github.com/stac-utils/pystac/blob/50c6ab40c33a39f8e235ea47187dad611bfaa9c8/docs/tutorials/creating-a-landsat-stac.ipynb) and [web page](https://pystac.readthedocs.io/en/latest/tutorials/creating-a-landsat-stac.html) that anyone can work through. *Sponsored by [Element84](https://www.element84.com/) & Planet*

- **Unsung Hero:** Louisa Nakanuku-Diggs has helped in the organizing of most every STAC Sprint, and she helps with all the social media promotion of the events and milestones of the community. *Sponsored by [AWS](https://aws.amazon.com/) & Planet*

- **Best contribution from someone located in a [low or lower-middle income country](https://datahelpdesk.worldbank.org/knowledgebase/articles/906519):** Ashiraf Nsibambi Kyabainze joined the sprint from Uganda, helping out with a number of tasks, and starting a new project to aid labeling locales and settlements from such satellite imagery / COGs. *Sponsored by [Microsoft](https://www.microsoft.com/en-us/ai/ai-for-earth)*

- **Best contribution to 3DEP Data on AWS:** Chris Helm made a STAC catalog for 3DEP data, as he shared in [his lightning talk](https://www.youtube.com/watch?v=XTkNhGpfmB8&list=PL3QzFgBMGnbQWbW-V09AzSfCbnf6Q87Rq&index=18&t=5343s), getting to a real implementation of the STAC Point Cloud Extension. *Sponsored by AWS*

- **Best Lightning Talk:** Robin Fergason gave a [really interesting talk](https://www.youtube.com/watch?v=cOMkgQssVPk&list=PL3QzFgBMGnbQWbW-V09AzSfCbnf6Q87Rq&index=4&t=4537s) on the use of STAC for data from other Planets, it’s definitely worth checking out. *Sponsored by Planet*

- **Community Builder:** Matt Hanson has been a consistent presence in STAC since the beginning, spreading the word and helping new people get started. *Sponsored by [Maxar](http://maxar.com)*

- **Community Builder (Runner-up):** We also wanted to recognize Chris Brown, for all his help in the [Data Labeling Contest](https://medium.com/radiant-earth-insights/announcing-the-winners-of-the-data-labeling-contest-9ea7e6887d06), and he’ll be receiving a STAC Hoodie in recognition of his efforts. *Sponsored by [Maxar](http://maxar.com)*

## Bounties

We’ve still not sorted out exactly how the bounties will work, but I’ll aim to write up the details and post the information when I get a chance. As mentioned above we have two more ‘newcomer grants’ to give out. And then there were a number of community awards we will look to give out in the future. These include best contribution by a Canadian (sponsored by SparkGeo), best contribution or use of **[Sentinel 2 Africa STAC/COG](https://explorer.digitalearth.africa/s2_l2a)** data, best data contributions on both AWS and Azure, and best contribution with [zarr](https://zarr.readthedocs.io/en/stable/).

## Additional Recognition

![](/assets/img/posts/cloud-native-geospatial-sprint-awards-bounties/1_Xv57In0P62Wi7tEve--SmA.png)

We are also recognizing two groups of people with a STAC Hoodies. The first is everyone who made [a contribution](https://github.com/radiantearth/community-sprints/blob/master/08182020-remote/software/progress.md) during the sprint. And the second is everyone who gave an ‘intro session’ at the [CNG outreach day](https://sites.google.com/radiant.earth/cng-agenda). And then everyone who gave a lightning talk will get a STAC T-shirt. I’ll be in touch soon to get people’s information to send them their hoodies.

Thanks again to everyone who participated and attended. Everyone I talked to really enjoyed it, and we’ll do our best to organize another one soon. And hopefully we’ll be at 1.0.0 for STAC, with an even richer ecosystem of Cloud Native Geospatial tools!
