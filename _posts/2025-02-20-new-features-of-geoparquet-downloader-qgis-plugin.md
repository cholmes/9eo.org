---
layout: post
title: "New Features of GeoParquet Downloader QGIS Plugin"
date: 2025-02-20
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/new-features-of-geoparquet-downloader-qgis-plugin-d03a8af0ec54
image: /assets/img/posts/new-features-of-geoparquet-downloader-qgis-plugin/1_NrOftux7JzbrSSXuX5jckg.png
---

It’s a true pleasure to share that in the time since my [last couple](https://medium.com/radiant-earth-insights/a-deep-dive-into-geoparquet-downloader-qgis-plug-in-017c0b1facb1) of [posts](https://cholmes.medium.com/coding-qgis-plug-ins-with-ai-coding-tools-b04601427ec0) about the [QGIS plugin to download GeoParquet data](https://github.com/cholmes/qgis_plugin_gpq_downloader/) there is now a real community of contributors making awesome advances to the plugin.

![](/assets/img/posts/new-features-of-geoparquet-downloader-qgis-plugin/1_NrOftux7JzbrSSXuX5jckg.png)

I got hooked on open source over 20 years ago when I wrote code and others showed up and made it better, and after a long hiatus from actual coding it’s been awesome to tap into that feeling again.

## Latest Plugin Enhancements

So this time I get to mostly highlight the recent contributions from others. I did a couple smaller things too, but all the recent advances have been from a couple awesome contributors. These are spread across a three releases (0.4, 0.5 and 0.6), and you can get all the features by just searching for ‘GeoParquet Downloader’ in the QGIS plugin manager, and you should get 0.6 (if you don’t just refresh it).

The first enhancement was to improve the installation process, reporting to the user when DuckDB is getting downloaded and installed.

![](/assets/img/posts/new-features-of-geoparquet-downloader-qgis-plugin/1_URZhFcSy3IPiMsLPYrth4Q.png)

This was from [Till Frankenbach](https://github.com/merydian), and I think the installation process should now hopefully work for most people. He’s then followed that up with a number of great improvements, including the most visible change in the recent releases. We’ve [reduced from 3 buttons down to one](https://github.com/cholmes/qgis_plugin_gpq_downloader/issues/19):

![](/assets/img/posts/new-features-of-geoparquet-downloader-qgis-plugin/1_UuUno32b4P_UNUqJZvSPoQ.png)

The default QGIS toolbar has a *lot* of buttons on it, and most people installing plugins have even more buttons to add, so that real estate becomes really precious. In the first iteration we had three buttons: one for Overture, one for Source Cooperative, and one for custom downloads. But they all went to the same dialog, though they started on different views. So we decided to just use one button. Till then followed up with a nice improvement [to save the state of the radio button](https://github.com/cholmes/qgis_plugin_gpq_downloader/pull/64), so that if you’re usually using one of the tabs then it’ll be there when you go back to use it again.

Soon after Till started contributing we also had [Sam Jackson](https://github.com/gisam) create a number of great improvements. The first was FlatGeobuf support — my second favorite vector format after GeoParquet, and one I use routinely.

![](/assets/img/posts/new-features-of-geoparquet-downloader-qgis-plugin/1_YwbGG4PZxTQwJ3AB9wk8kA.png)

*More formats to save as*

Then he added GeoJSON support, and even implemented my desire to properly warn people if they were going to download a ‘huge ass’ GeoJSON file, and ask them if they’d prefer a format that will handle things better.


I’ve had some bad experience with GeoJSON recently, when I’ve downloaded the entire Planet SkySat catalog, where once you get into gigabytes most tools will really struggle, QGIS included. But formats like GeoParquet and FlatGeobuf will be *much* smaller (like at least 20% the size, if not 10% or less), and they’ll also perform much better if they do get to tens of gigabytes.

He did also have the PR add shapefile, but after [some good discussion](https://github.com/cholmes/qgis_plugin_gpq_downloader/pull/62#issuecomment-2641324643) we decided that it’s ‘increasingly obsolete’ and we don’t want to support it. I’m still open to someone making the case that we *must* have it. But I think it’s pretty easy to use any of the other formats and then export to shapefile from QGIS. And then we don’t silently cut off the column names that are longer than 10 characters.

And Sam also added what I think is my favorite new feature — the ability to select multiple Overture layers and download them all at once:

![](https://miro.medium.com/v2/resize:fit:1400/1*mHkoj32uVsmTxn_Zk-yoQg.gif)

It makes it much easier to just get all the data you need for a given area, and it’s cool to just see all the data get added to the map as it comes in.

I also added a couple small improvements. I [upgraded](https://github.com/cholmes/qgis_plugin_gpq_downloader/pull/49) the Foursquare places data, and their [latest release](https://docs.foursquare.com/data-products/docs/fsq-os-places-release-notes#february-2025) included this snippet:

![](/assets/img/posts/new-features-of-geoparquet-downloader-qgis-plugin/1_43Cnd_vLJRmdi7v4e86mPQ.png)

These improvements are in-line with those I’ve [been writing up](https://github.com/opengeospatial/geoparquet/pull/254/files) to be best practices for large GeoParquet distributions (and I’ve been working on [making tools](https://medium.com/radiant-earth-insights/sharing-some-tools-for-working-with-geoparquet-fc5667b27373) to make it easier for people to test and implement). The performance of the Foursquare places on Hugging Face is *much* faster, down from over a minute to around ten seconds on my connection.

I also added a couple little fixes to make things more robust, which came from working with some interesting data. I was trying out some [fiboa field boundary data](https://github.com/fiboa/) and realized that columns like `admin:country_code` weren’t working right with geopackage data, so [I fixed that](https://github.com/cholmes/qgis_plugin_gpq_downloader/pull/51). And I’ve also been experimenting with NHD Data, trying out converting it to Parquet using best practices and [putting it on source.coop](https://source.coop/cholmes/nhd). And I realize that the code that uses the `bbox` column to accelerate querying only worked if the column was named bbox. But the spec allows any column name, you just have to specify the name in the metadata, and GDAL/OGR uses `geometry_bbox` if you column name is `geometry`. So I [fixed that too](https://github.com/cholmes/qgis_plugin_gpq_downloader/pull/55).

## What’s Next

So a huge thanks to Till and Sam, and I’m hoping they’ll continue to contribute great features. And hopefully someone will eventually surpass me in the commits leaderboard, as always happens in my most successful projects, as others most always prove better at making things robust and real than I do.

Till made a great contribution of refactoring the mess of code that comes from ‘my first qgis plugin’, which was the case for me with this one. I’m really excited about it, as it should enable us to make robust testing and hook it up to continuous integration, so that we can more confidently collaborate between multiple people. I just landed it on ‘main’, and we need to add back in a couple of Sam’s latest features before we release. And we’re also discussing if it makes sense to move it off my home repo, to an organization where it’d have a good home. Matt Travis, who was the very first outside contributor, also just recently [added a better workflow to create ‘releases’](https://github.com/cholmes/qgis_plugin_gpq_downloader/pull/73), and I hope to land that soon.

If you’re interested in diving in and contributing please do! There’s a good bit to help on the refactoring, like writing tests and making sure all the features work as they previously did. And I’ve still got a number of [‘good first issues’ tagged](https://github.com/cholmes/qgis_plugin_gpq_downloader/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22) in the issue tracker. Feel free to grab one, or add your own ideas to the issue tracker.
