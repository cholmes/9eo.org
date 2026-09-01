---
layout: post
title: "Help make STAC Better: Open Requests for Proposals"
date: 2021-08-04
source: medium
source_name: "Radiant Earth Insights (Medium)"
source_url: https://medium.com/radiant-earth-insights/help-make-stac-better-open-requests-for-proposals-ff2338663217
image: /assets/img/posts/help-make-stac-better-open-requests-for-proposals/1_5odZvokwQxUy-bVQBGs5KA.png
---

In my last post on the [future of SpatioTemporal Asset Catalogs (STAC)](https://medium.com/radiant-earth-insights/stac-1-0-0-whats-next-for-the-stac-ecosystem-6b4360aa88cc?source=user_profile---------0----------------------------), I alluded to various funding efforts the STAC Project Steering Committee is planning. With this post, I want to draw some more attention to our first two open RFP’s: one to revamp STAC’s website, and the other to enhance STAC validation tooling. I’ll also explain how we’re trying to use our remaining funding to grow the STAC community.

One of the most important priorities for the overall success of STAC is to greatly increase the size of our community. And the key to that is to bring in people with different perspectives and backgrounds. This means people with less technical expertise, less geospatial expertise, and people from all over the globe. Much of the initial funding from the STAC 1.0.0 initiative went to those with the most experience with the spec and surrounding tools. This was key to getting all the right pieces done in a timely manner but also meant that it didn’t actually expand the community with new contributors.

So with the rest of our funding, we’re shifting to an open ‘Request for Proposal’ process, where anyone can apply for the funding. The Project Steering Committee is still deciding exactly what those funding opportunities will be. But we’re deliberately picking priorities that don’t require a deep background in STAC and software development so that new contributors can get funding to join the community. And we’re particularly interested in proposals from groups that aren’t as traditionally well represented in tech and geospatial. So please spread the word and encourage anyone you know to apply!

## The first RFP’s

There are now two published RFP’s, to kick off this process for us.

![](/assets/img/posts/help-make-stac-better-open-requests-for-proposals/1_5odZvokwQxUy-bVQBGs5KA.png)

*Full RFP is [available here](https://docs.google.com/document/d/1N3HNLh0et1Z18nFHfQJfvgAsAkX-cKIQMYP7VcvmGzQ/edit).*

### New STAC Website

The first is the [STAC Website RFP](https://docs.google.com/document/d/1N3HNLh0et1Z18nFHfQJfvgAsAkX-cKIQMYP7VcvmGzQ/edit), which aims to redo [stacspec.org](http://stacspec.org) to better serve as the foundational learning place for STAC. We’d like it to be mobile-friendly, accessible, internationalized, and much easier for anyone to contribute to. It should use a real web framework, and be designed so it’s much easier for anyone to contribute. It will serve as the foundation for lots of documentation work in the future, where we’re able to get anyone up to speed with all STAC offers. We decided to just focus on the more ‘structural’ pieces, giving us a clean, well-designed framework that makes it easy to add new content. We hope to do a future RFP for a deeper user journey and information architecture to really understand STAC users and explain it to them, but we figured we should get the framework in place and let the community develop a bit more.

- [**STAC Website RFP](https://docs.google.com/document/d/1N3HNLh0et1Z18nFHfQJfvgAsAkX-cKIQMYP7VcvmGzQ/edit)** — Responses due August 31st.

### STAC Validation Enhancements

The other [open RFP is for ‘STAC Linting](https://docs.google.com/document/d/1lI7uWzaR-qMTlrTKgHx0EbeZlPME7odPWdmGIHWH99c/edit#)’. The idea behind [linting](https://en.wikipedia.org/wiki/Lint_(software)) is a tool that doesn’t just check if a STAC Catalog is ‘valid’, but also gives the user feedback to make their catalog better. This will be in the form of warnings, that indicate places where a user isn’t following [STAC Best Practices](https://github.com/radiantearth/stac-spec/blob/v1.0.0/best-practices.md), or if they have broken links, etc. It helps users make a great catalog, instead of just informing them it is valid or not. The task will be to extract key assertions that can serve as warnings for a variety of libraries, and then to create a software library and command-line tool that users can use on their STAC catalogs.

![](/assets/img/posts/help-make-stac-better-open-requests-for-proposals/1_-owafsFx-j8uLz20e8K_cQ.png)

*Full RFP is a[vailable here](https://docs.google.com/document/d/1lI7uWzaR-qMTlrTKgHx0EbeZlPME7odPWdmGIHWH99c/edit).*

We aimed to design the first so anyone with web development experience could win it, without having to know STAC. But we do hope that people will see it as an opportunity to get more involved in STAC, instead of just delivering a random website. With the second one, there is more implied STAC and software development experience to be able to do the tasks, but we wanted to make it an open call so we’re not just assuming that we already know everyone who could potentially do it.

- [**STAC Linting RFP ](https://docs.google.com/document/d/1lI7uWzaR-qMTlrTKgHx0EbeZlPME7odPWdmGIHWH99c/edit#)**— Responses due August 31st.

### Coming RFP’s

After these two the next RFP’s will be focused on documentation — tutorials, how-tos, explanations, etc. We may even see if we can take some of the [STAC Best Practices](https://github.com/radiantearth/stac-spec/blob/v1.0.0/best-practices.md) out of the spec itself and turn them into clearer documentation outside the spec. Our hope with these is that they can be created by people who don’t already know STAC, but are keen to learn and have experience writing good technical documentation. And then there will likely be a few more RFP’s that further the STAC ecosystem.

So please spread the word of this work far and wide. We hope it can fund some new contributors to be able to spend more time with STAC and join our community.
