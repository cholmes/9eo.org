---
layout: post
title: "A leap forward for STAC: SpatioTemporal Asset Catalog 0.6.0 Specification Released!"
date: 2018-11-07
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/a-leap-forward-for-stac-spatiotemporal-asset-catalog-0-6-0-specification-released-660e9fe33c1d
image: /assets/img/posts/a-leap-forward-for-stac-spatiotemporal-asset-catalog-0-6-0-s/1_3PdE30jzt7bj8giW9nSjmA.png
---

Apologies for the long radio silence, it’s been a very busy time for me. But the vast majority of that time has not been on specs, or imagery, or code. It’s been taking care of a small human, as I just had my first kid!

![](/assets/img/posts/a-leap-forward-for-stac-spatiotemporal-asset-catalog-0-6-0-s/1_k1NB6ssy3t7wOsNH3tuKbg.jpeg)

*This is what I’ve been ‘sprinting’ on the last couple of months…*

And [Planet](http://planet.com) has a very generous paternity leave policy, which has been incredible. So I’ve been mostly focused on figuring out parenthood for the last couple of months. Our daughter Lumi came two weeks early, which threw a wrench in my best-laid plans to put out the 0.6.0 specification. I didn’t even get a chance to write my recap of STAC Sprint #3 as part of the [Satellite Data Interoperability workshop](https://medium.com/radiant-earth-insights/the-first-satellite-data-interoperability-workshop-is-happening-next-week-fae9539f81f9) (though do check out Ignacio’s [post focused on the Analysis Ready Data track](https://www.planet.com/pulse/satellite-interoperability-workshop/) — or [watch the video recording](https://www.youtube.com/watch?v=oPVf11mKb-I&list=PL3QzFgBMGnbQAmtMALSobb5dLCwWt4xNy) of the ARD Workshop).

Fortunately, my time off did not mean that work on the specification stopped. The nascent community around the spec really came together and stepped up, driving forward far more changes than I was even aspiring towards for the 0.6.0 release. The result is truly a leap forward on a number of fronts, resulting in a much more mature version of the core ideas we are fleshing out together. To explore the latest release you can read it directly at [github.com/radiantearth/stac-spec/tree/v0.6.0](https://github.com/radiantearth/stac-spec/tree/v0.6.0), and it is currently the stable version on the [master branch](https://github.com/radiantearth/stac-spec) as well. The GitHub [0.6.0 ‘release’](https://github.com/radiantearth/stac-spec/releases/tag/v0.6.0) also has the release notes and changelog.

### Release Highlights

![](/assets/img/posts/a-leap-forward-for-stac-spatiotemporal-asset-catalog-0-6-0-s/1_GnvH8HrvEabwIAtAUk157w.png)

*STAC Spec Commits in the last few months*

The amount of work done on this release is quite incredible. There were over [350 commits](https://github.com/radiantearth/stac-spec/graphs/commit-activity), with 14 different [contributors](https://github.com/radiantearth/stac-spec/graphs/contributors), closing over 60 issues. You can dig into the full details in the [release milestone](https://github.com/radiantearth/stac-spec/milestone/7?closed=1) on the GitHub issue tracker. I did want to draw attention to a few of the highlights, and I’ll try to go deeper into them in future blog posts.

- **Browse compatibility on dynamic servers: **In previous versions of the specification, the dynamic API and static catalog only shared the core ‘Item’ construct. But they weren’t actually that compatible, as the structure of their main responses was different, so clients would need two paths to understand them. At the STAC Sprint #3 the API group came up with the `/stac/` endpoint that returns the exact same catalog as the static version. This shifts the nature of the spec, as the majority of it can be implemented either statically or with dynamic services. And then the API’s can add on the `/stac/search` endpoint if they choose.

- **Collection spec to describe sets of data: **One aspect of STAC that sparked early interest from others was the loosely coupled simple approach, particularly in describing data. At the last STAC sprint representatives from the OpenEO project, Google Earth Engine and Descartes joined us and fleshed out what has become the [Collection Specification](https://github.com/radiantearth/stac-spec/blob/v0.6.0/collection-spec/collection-spec.md). It provides more fields to describe a collection of data, and lots of work was done to make it compatible with the STAC Catalogs as well as WFS 3 Collections. The new things it enables deserves a blog post of its own, especially the promising new [Commons Extension](https://github.com/radiantearth/stac-spec/tree/v0.6.0/extensions/commons) to help implementors avoid massive duplication in each STAC Item.

- **Extensions Advances**: One of the main ideas of STAC is to provide a very small and flexible core and spur collaborative, implementation-driven innovation at the edges. The `[/extensions/`](https://github.com/radiantearth/stac-spec/tree/v0.6.0/extensions) folder is emerging as a primary point of that collaboration. For this release, we introduced the [Extension Maturity classification](https://github.com/radiantearth/stac-spec/tree/v0.6.0/extensions#extension-maturity) to help users ascertain how widely a given extension is used and evolved. The folder has a clearer structure and added extension proposals for DateTime ranges, Scientific Metadata, and the aforementioned Commons extension. There is also increasing interest in extensions for more data types, like point clouds, SAR, drones, etc.

There were countless other improvements, including a really nice [restructuring of the repository](https://github.com/radiantearth/stac-spec/issues/205) for more consistency and [adjustments to our links structure](https://github.com/radiantearth/stac-spec/issues/197). We also fleshed out [more asset and link attributes](https://github.com/radiantearth/stac-spec/issues/139) (for the title, type, etc), brought in a `derived_from` field to [lightly track provenance](https://github.com/radiantearth/stac-spec/issues/179), and [added a simple query language](https://github.com/radiantearth/stac-spec/pull/167) for the API. Overall the spec feels a lot more solid and is also better structured as small pieces, loosely coupled.

## A Maturing Community

While all these improvements have been awesome, the biggest highlight of the release for me is the big upswell in the community. This is not only the people but also all the processes and tools we’ve added to help enable anyone to join and contribute. While STAC has always been driven by a wide array of contributors, most of them put the time in during the sprints but weren’t able to work on the specification in between. For this release cycle, a number of people have been able to put in the time to advance the spec, far more than any single individual could on their own. While I was away they started doing regular phone calls in addition to [online gitter chat](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) collaboration, to drive things forward. I’d like to call some attention to the people involved, and then we’ll dig into how the community process and tools have evolved.

### STAC Contributors

**Matthias Mohr **is easily the MVP of the release, joining us from the [OpenEO](http://openeo.org/) project. His driving goal was to have a standard way to describe datasets in OpenEO, but he thankfully aligned those efforts with STAC to push both projects forward. He also took up a lead role of better organizing the specification and driving major changes throughout. **Matt Hanson** of [Development Seed](https://developmentseed.org/) has focused on driving the EO and Commons Extensions, has been a core contributor throughout the spec, and stepped up to do all the actual releases of the 0.6.0 series. From [Harris](https://www.harrisgeospatial.com/) **Michael Smith **and **Tim Ruthersby **have focused on the STAC API, and have pushed us to think about the bigger picture. **James Banting **from [SparkGeo](https://www.sparkgeo.com/) also helped the spec ecosystem, continuing the validation group’s work from the STAC Sprint #3 and evolving it to be [STAC Validator](https://github.com/sparkgeo/stac-validator), an open source project anyone can use to validate their STAC compliant catalog. And [Radiant Earth Foundation](https://www.radiant.earth/) Technical Fellow, **Seth Fitzsimmons,** helped with the final push on the spec while advancing [STAC Browser](https://medium.com/@mojodna/a-stac-browser-348a60674061).

I’ll highlight the implementations that helped give critical feedback to the spec in a future post, including the ones from the people above. But I wanted to give a shout out to **Josh Fix** of [Boundless](https://boundlessgeo.com/), **Frederico Liporace** working on [CBERS](https://registry.opendata.aws/cbers/), **Simon Ilyushchenko** of [Google Earth Engine](https://earthengine.google.com/) and **David Lindenbaum** of [SpaceNet](https://spacenetchallenge.github.io/) for their pre-release implementations and feedback.

### Community Process and Tooling Improvements

![](/assets/img/posts/a-leap-forward-for-stac-spatiotemporal-asset-catalog-0-6-0-s/1_3PdE30jzt7bj8giW9nSjmA.png)

*Required reviews and Continuous Integration in action!*

Past the individuals, it’s worth describing the concrete things the community has done to enable easier collaboration. These are mostly inspired by the best practices of running open source projects (see [producingoss.com](https://producingoss.com/) for a great in-depth explanation of this), and they ensure that anyone implementing the specification is able to participate in a feedback loop to continually advance things.

- [**Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) (CI) **is now enabled with CircleCI, to more easily maintain consistency in the spec. The first step was to have the CI build the API documents so that editors don’t have to update multiple locations for new changes. And the next step was to have all examples in the repository validate against their schemas, so no one would need to check each example before the release. These all happen automatically, with every new commit, ensuring the repository is always in a good state. More automated checks will likely be added in the future, to do things like consistent formatting.

- **Branch Protection** in GitHub now requires every new addition to the spec to be reviewed by two different people. This has been in place for most of the 0.6.0 release cycle and has improved the quality by making sure that there is peer review whenever a new change is proposed.

- **Release Candidates** were done to help prevent the ‘oops’ releases that I ended up doing with 0.5.1 and 0.5.2. Both had minor errors that *should* have been in the specification, but they were discovered after the release. For this release, we took the approach of putting out a ‘candidate release’, called [0.6.0-RC1](https://github.com/radiantearth/stac-spec/releases/tag/v0.6.0-rc1), and then looked to the community of implementors to actually try it out and give feedback. This did lead to some good fixes, and a week later we put out [0.6.0-RC2](https://github.com/radiantearth/stac-spec/releases/tag/v0.6.0-rc2). This became the 0.6.0 final release, with some very minor non-spec fixes.

- [**A Changelog](https://github.com/radiantearth/stac-spec/blob/master/CHANGELOG.md)** now provides a running update of the improvements made, where each major improvement gets recorded while it happens. This makes it easier for the release master to cut the release, as they don’t have to sort through all the changes to figure out what to talk about.

These changes and other details on how the community actually runs are now detailed in the [process document](https://github.com/radiantearth/stac-spec/blob/master/process.md) in the repository. These will evolve as the community advances, and indeed the main governance should start to shift to a formal Project Steering Committee that has shared responsibility for the spec.

## What’s Next

Hopefully, this blog post provided a good overview of the release. I will endeavor to write up more details on some of the changes, as well as share the growing number of implementations. As always, we will continue to evolve the specification based on working code, and there is definitely more that the community is excited about. The focus for 0.7.0 will likely be on better definitions of Assets, to enable clients to more easily know what to expect in a Catalog or a given Item. There is also interest in making a more general metadata model, as well as exploring ‘manifest’ files that give a summary. Community members are also working with increasingly large datasets, with tens and even hundreds of millions of records, so new best practices and specification tweaks will likely result. It’s really exciting to see the momentum for STAC build, and I think we’ll quickly move from the current ‘early adopter’ phase into having a real impact on finding satellite imagery and other geospatial assets.
