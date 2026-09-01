---
layout: post
title: "STAC 1.0.0: What’s next for the STAC Ecosystem?"
date: 2021-07-27
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/stac-1-0-0-whats-next-for-the-stac-ecosystem-6b4360aa88cc
image: /assets/img/posts/stac-1-0-0-whats-next-for-the-stac-ecosystem/1_88Gtj9FZdR8SZRXo47RKqw.png
---

Following up on our [SpatioTemporal Asset Catalog 1.0.0 announcement](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077), this post will finish our [mini](https://medium.com/radiant-earth-insights/stac-1-0-0-spec-and-community-updates-164f7083f42)-[series ](https://medium.com/radiant-earth-insights/stac-1-0-0-software-ecosystem-updates-da4e800a4973)diving into the STAC specification and the ecosystem around it. This one is really about the future, where we see STAC heading in the next six months and beyond. And after this I hope to start an in-depth series of STAC posts that dives deeper into individual projects, highlighting all the great software and data in the STAC ecosystem.

## The ‘STAC Ecosystem 1.0’ Vision

One of the core tenents of the STAC Community is that we focus on the process of building an interoperable ecosystem, with the specification serving as a record of the current state of collaboration. With the release of 1.0.0, it is our hope that the core of that collaboration now has an incredibly solid foundation. But there is much, much more to do in order to realize the vision of STAC: we won’t be ‘done’ until every single ‘geospatial asset’ has an associated STAC record.

Achieving this means shifting our focus from developing the specification to building a movement. This means enhancing every single way that people interact with STAC, and indeed to get to the point where STAC ‘just happens’ even if people don’t know it’s powering things behind the scenes.

We’re calling our next major milestone towards this ‘STAC Ecosystem 1.0’. We think about this on three main dimensions:

- Education: How easy is it for people with any background (from geospatial and tech novice to expert in either or both) to learn about STAC and find value from it?

- Software: Are there great, easy-to-use options for all of the major workflows of STAC? Is STAC integrated into the geospatial software people already use every day?

- Data: If I use STAC can I actually find lots of interesting data for my use case? What is the total amount of data available as STAC?

Our goal for STAC Ecosystem 1.0.0 is to work on all three so that STAC is one of the most accessible and usable specifications in the geospatial world. The primary dimension we’re oriented towards is education— getting to a great set of [tutorials, how-to guides, explanations, and references](https://documentation.divio.com/) that easily orient anyone coming to STAC. But in many cases that means investing in core software to ensure that it’s all solid and stable enough to build great education materials on top of.

And then data dimension in many ways follows from the first two since the appeal of making data available as STAC increases when lots of people know how to use it and there are lots of tools to make use of it. But there’s only so far the first two can go if there’s not actually compelling data in the ecosystem. Thankfully there have been a number of significant early adopters, and we are optimistic that momentum will continue to grow.

## Executing on STAC Ecosystem 1.0

![](/assets/img/posts/stac-1-0-0-whats-next-for-the-stac-ecosystem/1_h5oLOcM8vFYjIzeYn0pSWg.png)

The STAC community is naturally filling out many of the key areas needed to fulfill the STAC Ecosystem 1.0 vision, but we are also really lucky to have the ability to augment the community with resources from key sponsors of the STAC 1.0.0 funding effort.

The general plan for STAC Ecosystem 1.0.0 is the [‘tier 1’ items of the STAC Ecosystem repository](https://github.com/stac-utils/stac-ecosystem#tier-1), and the plan is to flesh out that document and potentially use GitHub issues to track things in detail. The STAC Project Steering Committee has already allocated some of the STAC 1.0.0 funding towards those items and still has $50,000 more in the budget to advance other key projects.

### Funded Efforts

In addition to the [STAC 1.0.0 implementations](https://medium.com/radiant-earth-insights/stac-1-0-0-software-ecosystem-updates-da4e800a4973#be26) funded, there are a number of key projects the STAC PSC has funded so far:

[**PySTAC 1.0.0](https://pystac.readthedocs.io/en/1.0/) —** As the leading foundational library for STAC, in the most commonly used programming language for geospatial, it’s important that PySTAC is fully stable and up to spec. So funding was provided for the key tasks for it to reach 1.0.0.

[**STAC API Beta.2](https://medium.com/p/ea7d321db84d/edit) and beta.3 releases** — While STAC core reached 1.0.0, the API has lagged a bit behind, so ensuring it is also quite stable is also a big priority. STAC 1.0.0 funding helped get beta.2 out the door as well as progress on beta.3. It also funded several implementations to try out [CQL support](https://www.ogc.org/standards/requests/229) so that the beta.2 changes would be based on real implementation feedback.

**Leaflet plugin for STAC —** And in progress is work one or two plugins for Leaflet that can work easily with STAC JSON objects. The primary aim is to use it in STAC Browser, but it’s being implemented in a way that those are reusable open-source plugins for anyone to use.

### Funding Plans

The STAC PSC has also set a number of priorities to fund with remaining funding, with a goal to fund the key strategic things that traditionally get less funding. This may shift, as new opportunities may arise, and also others may build or fund things on this list.

![](/assets/img/posts/stac-1-0-0-whats-next-for-the-stac-ecosystem/1_88Gtj9FZdR8SZRXo47RKqw.png)

*The current stacspec.org — we love you, but you can do better :)*

**Website Refresh** — The [stacspec.org](http://stacspec.org) website has served its purpose, but it was a total hack job built by a website created n00b (me). The first step will be to upgrade it to a more extensible framework that is easier for anyone to add content to, as it should be the central hub for learning about STAC. The PSC has just released the [Request for Proposal](https://docs.google.com/document/d/1N3HNLh0et1Z18nFHfQJfvgAsAkX-cKIQMYP7VcvmGzQ/edit#heading=h.ugacismpud1j) (more information to come soon). After more content is fleshed out we hope to be able to issue an RFP to fund a real information architecture and user journey.

**Documentation** — As stated above, we want STAC to be a great educational experience, and that starts with great tutorials, how-to’s, and guides. We’re inspired by this [documentation system](https://documentation.divio.com/), so will aim to fund along those lines. We also hope to use this to help grow the community, bringing in new contributors who can help us explain STAC to wider audiences.

**Enhanced Validation Tools** — There are a number of great options for validating STAC, but they only report ‘pass’ or ‘fail’. With STAC there are a number of best practices that we ideally guide people to by giving them ‘warning’ type feedback when they go to validate. We’re almost done with an RFP to fund this.

**STAC Browser** — A core upgrade of STAC Browser is being led by Matthias Mohr as part of his Radiant Earth Technical Fellowship, and it’s coming along quite nicely. The PSC hopes to fund additional feature enhancements, like the full search of STAC API collection `/items`endpoints, to bring more contributors into the project so that it builds a real community.

### Growing the Community

For the remaining funding, the STAC Project Steering Committee has an explicit goal to grow our community well beyond the current contributors. So we’ll be looking to spread this funding to those who may not yet be experienced in STAC. So if you have ideas on how to reach new potential contributors, particularly from groups that are less traditional represented in tech and geospatial, do let us know.

## Beyond STAC Ecosystem 1.0

We hope to achieve ‘STAC Ecosystem 1.0’ by early 2022, with a complete set of tools and associated education material that enables anyone to easily use or create STAC catalogs. At that point the main priority will be to promote and advocate the ecosystem, advocating for every single dataset online to be available as STAC. We’ll aim to create whitepapers, blogs, and videos to customize the message to every domain that could potentially benefit. Our goal for STAC 1.0.0 was to have 1 billion STAC Items online, and the goal is more like 10 billion for ‘STAC Ecosystem 1.0’, and then to 100 billion. And our hope is that STAC plays a role in bringing geospatial to everyone and every sensor, which would open up the potential for trillions of STAC Items if photos and video from mobile devices were in STAC and searchable geospatially.

![](/assets/img/posts/stac-1-0-0-whats-next-for-the-stac-ecosystem/1_YjDJ0Yzv3MT7MTonnfduLQ.png)

*NASA’s CMR singlehandedly got us most of the way to our initial goal, with 818 million STAC items exposed*

But we’re getting well ahead of ourselves… Though the focus after ‘STAC Ecosystem 1.0’ shifts to promotion there are still significant milestones to be achieved on the software side. We aim to have STAC libraries in every major programming language, so it is easy to add to any potential software project. And our hope is that every piece of geospatial software would have the ability to interact with STAC and that it is taught in university courses. And our big goal is to enable the rise of ‘geospatial search engines’ that are as useful and usable as web search. Ideally, there are tools that fully crawl the distributed network of STAC Catalogs, with updating statistics so we can truly measure how many STAC Items there are. The first step is to evolve tools like STAC Browser to be SEO optimized to show up well in search results. But the goal is for new startups to arise because there is so much great geospatial content that is easily accessible with STAC, and for traditional search engines to start to understand STAC and geospatial because there is such a rich trove of content available.

## More STAC 1.0.0 Information

This post is just a small part of the overall blog series on STAC 1.0.0. Start with the [main announcement](https://medium.com/radiant-earth-insights/stac-specification-1-0-0-released-c59e8c848077), and follow the growing number of posts linked at the bottom to learn more. With this post, we’ll wrap up that series but look for more posts that dive deep into data available as STAC as well as particular tools. Thanks for all your support!
