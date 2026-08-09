---
layout: post
title: "A Belated Introduction to stactools"
date: 2021-12-06
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/a-belated-introduction-to-stactools-712f20e43fbc
image: /assets/img/posts/a-belated-introduction-to-stactools/1_inbIB94XIGgISPK8IWCQqw.png
---

As [stactools](https://github.com/stac-utils/stactools) approaches its one-year birthday we (Chris Holmes and Rob Emanuele, your co-authors for this blog post) figured it’s time to give it a proper introduction. It’s grown to be a key part of the SpatioTemporal Asset Catalog (STAC) ecosystem, but somehow there’s never been a blog post announcing it or explaining what it does. So we figured it’s time to share a bit about what it is, how it got started, and where it’s going.

## What is stactools?

In many ways, stactools started as the catch-all for python utilities for STAC that weren’t appropriate for [PySTAC](https://pystac.readthedocs.io/en/1.0/). It’s grown from a single project to its own little ecosystem of interrelated tools. There are three main things at the core:

- A set of libraries for generating STAC metadata for a variety of datasets

- A command-line interface for working with STAC

- A python library that encapsulates common STAC utilities outside the scope of PySTAC

### The STAC data translation layer

Most data today is not created natively for STAC. Though we hope that starts to change in the future, the main way data gets into STAC is by converting some existing data and its metadata into STAC. Many people were using PySTAC to write out their catalogs, but would build custom Python code to read into PySTAC. We decided it’d be helpful to everyone to have a place to gather that custom Python code so that once anyone wrote a converter for a given type of data then everyone else could benefit from it. This has the additional advantage of providing a layer of standardization in that translation from the original metadata into STAC, so that everyone producing Landsat or Sentinel 2 STAC has the exact same STAC fields.

Each data translation tool can be installed independently, as most users will only use one or a handful for a given task. Many of these include heavyweight dependencies like rasterio/GDAL, since it is rare that the existing metadata files will include every needed STAC field without inspecting the data itself. They all tend to work with the native data and metadata of a given Item, and often will translate less cloud-friendly formats into Cloud Optimized GeoTIFF’s.

![](/assets/img/posts/a-belated-introduction-to-stactools/1_inbIB94XIGgISPK8IWCQqw.png)

*Microsoft Planetary Computer data selection, powered by stactools*

It’s already an impressive list of data converters, including [sentinel1](https://github.com/stactools-packages/sentinel1), [sentinel1-grd](https://github.com/stactools-packages/sentinel1-grd), [sentinel2](https://github.com/stactools-packages/sentinel2), [sentinel3](https://github.com/stactools-packages/sentinel3), [naip](https://github.com/stactools-packages/naip), [modis](https://github.com/stactools-packages/modis), [planet](https://github.com/stactools-packages/planet), [landsat](https://github.com/stactools-packages/landsat), [nrcan-landcover](https://github.com/stactools-packages/nrcan-landcover), [corine](https://github.com/stactools-packages/corine), [aster](https://github.com/stactools-packages/aster), [noaa-c-cap](https://github.com/stactools-packages/noaa-c-cap), [nrcan-radarsat1](https://github.com/stactools-packages/nrcan-radarsat1), [noaa goes](https://github.com/stactools-packages/goes), [copernicus global landcover](https://github.com/stactools-packages/cgls_lc100), [jrc global surface water](https://github.com/stactools-packages/jrc-gsw) and 10 more. The Microsoft Planetary Computer is already using stactools for deriving STAC metadata for most of their datasets, which provides a layer of transparency about how the metadata is derived and the opportunity for community input. We hope that other organizations see contributing to stactools packages as an opportunity to take advantage of these benefits and provide a common place to collaborate on making sure the STAC that’s produced for open datasets is accurate, complete, and interoperable between platforms.

### A capable command-line tool for STAC

![](/assets/img/posts/a-belated-introduction-to-stactools/0_jqI5F08PEetJwsup.img)

Another major capability included is a command-line interface (CLI) for working with STAC data. With this, you can get information about a catalog, describe it, make a local copy of the data, manipulate the data, and make a new copy for publishing. And it’s easy to install any of the data conversion packages and then access the conversion utilities from the command line. There is still more functionality to flesh it out so it is just as capable as working with python directly. But it’s already a big step in the right direction, and an essential tool for those who are tech-savvy but aren’t capable python developers, like me (Chris ([clearly](https://github.com/lossyrob))).

Most of the command-line functionality is in the core package, but perhaps the coolest one requires installing an extra package. The ‘[browse](https://github.com/stactools-packages/browse)’ package gives you a complete [STAC Browser](https://github.com/radiantearth/stac-browser) instance for any catalog you want. Behind the scenes, it installs all the needed software in a docker container, including a local [titiler](https://developmentseed.org/titiler/intro/) instance, so that you can serve local catalogs with ease.

### The STAC utility library

stactools is also used to house common and useful functionality for use as a Python library. PySTAC is a foundational library of STAC types and creation methods, but it’s focused on keeping very little dependencies and being as scoped as possible on the core functionality needed to work with STAC. Some useful utilities, such as deriving STAC from raster data, need additional common dependencies such as [rasterio](https://rasterio.readthedocs.io/en/latest/), [shapely](https://shapely.readthedocs.io/en/stable/manual.html) and [pyproj](https://pyproj4.github.io/pyproj/stable/) to work. stactools is the place where developers in the STAC Python community can contribute these broadly useful utilities, without having to expand the scope of or add additional dependencies to PySTAC. It also contains utilities like moving STAC assets from one location to another or merging STAC catalogs through Python function calls, which are then exposed through the CLI so that command-line users can also take advantage of these features.

## History of stactools

The initial stactools was initially built by Rob Emanuele, the original author of PySTAC. [Planet](https://planet.com) provided the funding, with the primary goal of creating a python library and CLI tool so that any Planet [‘order’ output](https://developers.planet.com/docs/orders/delivery/) could be easily transformed into STAC. But the idea was to not just make a custom Planet library but to try to start a general library that could translate other data formats into STAC. Rob also added the ‘browse’ functionality, to make it super easy for anyone to create a catalog and then view it in the browser. A key early decision was made to let people install just the packages they need since it was unlikely that anyone would need to convert from every different data format, each of which would have diverse dependencies.

Initially, the stactools repo contained every bit of code, dividing the separate installation functionality into folders. The idea quickly took off, since there were already many people in the STAC community writing python code to convert specific data types. With stactools that code could all live in a central place and be shared with others. This helped the community since if one person wrote a landsat data converter then everyone else could just make use of it. And more importantly, each converter served to standardize the selection and translation of fields, since often implementors would make slightly different decisions about how to do the translation, resulting in less interoperability than STAC aspired for.

![](/assets/img/posts/a-belated-introduction-to-stactools/1_4B7MZ8MSVQreVTDuOs3v7A.png)

The library really took off when Microsoft Planetary Computer started contributing all of its converters, as mentioned above. The repository also evolved from a single repo with a ton of different folders to a github ‘organization’ that groups together a number of individual repositories. These are now summarized at[stactools-packages.github.io/](https://stactools-packages.github.io/), and there’s a nice [‘template’ repository](https://github.com/stactools-packages/template) that makes it easy for anyone to create a new stactools package. Pete Gadomski has led all the recent work on splitting up the repo and refactoring the code to be more modular, while also adding a lot of cool new features.

## What’s next for stactools?

The roadmap ahead for stactools includes adding more functionality to the core library and CLI for generating STAC metadata fields for common extensions. For example, you will be able to easily derive attributes for the file, raster, and projection extensions for assets based on data read from their files. There are also plans to make it easy for users to create cloud optimized data (like COGs) and STAC for xarray data, so that users performing analytic workflows can more easily encode their results in STACs. This functionality would either live inside of stactools, or be part of other libraries that leverage stactools. We’ll also be working on making it easier for the community to contribute their own stactools packages, improve the ones that exist, and will keep adding new dataset packages for open datasets.

Please give the library a try if you haven’t already, and all contributions are welcome!
