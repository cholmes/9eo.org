---
layout: post
title: "Exploring Field Boundary Data with LLMs"
date: 2025-01-29
source: medium
source_name: "Medium"
source_url: https://cholmes.medium.com/exploring-field-boundary-data-with-llms-7e8ad777cc85
image: https://miro.medium.com/v2/resize:fit:1400/1*zGQ3DcIfgFq-J59BKIpilA.gif
---

*(Originally posted at [tgengine.org/exploring-field-boundary-data-with-llms](https://tgengine.org/exploring-field-boundary-data-with-llms/) — including here to have a record of my writing)*

A couple of months ago a great group of people gathered in St. Louis and participated in the final workshop and showcase for the first [TGE Innovation Bridge](https://tgengine.org/innovation-bridge/), focused on [agricultural field boundaries](https://tgengine.org/taylor-geospatial-engines-first-innovation-bridge/). It was an awesome event, and a great wrap up to an amazing set of work that launched [fiboa](https://github.com/fiboa) and [Fields of The World](https://tgengine.org/introducing-fields-of-the-world). There will be more communication about the event, but the goal of this post is to share a bit of a deep dive on a demo that was pulled together to demonstrate the power of the schema-level interoperability that fiboa enables.

## Connecting LLM’s to fiboa

The core demo was a chat interface to 3 different [fiboa datasets](https://fiboa.org/map), one for each of the Baltic countries, powered by OpenAI’s o1-mini.

<https://www.loom.com/embed/4cb5a4de6e3c4f4b9ccddde5bea6920d?sid=a824a416-e7e1-4134-9274-e5f43f39d96d>

A second demo was created with three years of data in the Netherlands, to demonstrate asking questions over time:

![](https://miro.medium.com/v2/resize:fit:1400/1*zGQ3DcIfgFq-J59BKIpilA.gif)

The total amount of time spent to build the demo was no more than 20 or so hours, and it’s more to demonstrate the concept than to be a robust interface. But it’s still quite cool that you can just ask questions and get relevant answers, and really explore the data in a way that you previously had to be a SQL expert to do. With more time we could have combined the two demos into a single interface, and made it able to handle a wider variety of data, but with the time constraints the goal was just to show the potential.

The experience from building the demo shows that it should be feasible to evolve it to be robust enough to handle any fiboa dataset, and the latest advances in AI, like Anthorpic’s [Model Context Protocol](https://modelcontextprotocol.io/), will make the technical bits ever easier. A further post will explore the tech stack that powers this demo, and there will likely be lots of innovation in the tech that enables people to ‘talk to data’. But aligning on standards for what is ‘in’ the data, like fiboa does for field boundaires, will always be necessary.

Anyone is welcome to play with the two demos, and to see the code that we used to build them, you can find them on huggingface:

- [**Fiboa Baltics Demo](https://huggingface.co/spaces/cholmes/fiboa-demo)**

- [**Fiboa Netherlands Demo](https://huggingface.co/spaces/cholmes/fiboa-nl)**

As mentioned above, they are not very robust, and they are on weak machines, so be warned they may not work that well. But if you are excited by the potential it’d be great to hear what types of questions you’re interested in asking. The demos will continue to evolve — the things at the top of the list are a satellite imagery base layer, responses with more human language (ie not always just the SQL table), state and county aggregations, and the ability to upload any fiboa file.

## Enabling LLM’s with standard data schemas

Beyond just field boundaries and fiboa, this demo aims to show that aligning datasets at the schema level is a powerful way to enable LLM’s to interact with data.

It’s not all that difficult to train an LLM to understand a single dataset, but the LLM’s are not capable enough to understand every single potential choice that users might make for their attribute naming and how they represent their data.

A few months ago a Custom GPT to interface to a San Francisco building dataset was put together, and it seemed to work:

![](/assets/img/posts/exploring-field-boundary-data-with-llms/1_KOg4LM1nvEkxWHQeRFyRAg.png)

But on further inspection it was clear that it misunderstood the data, and used the wrong attribute to query on height. It wouldn’t be much work to teach it about the San Francisco dataset, but then asking questions across multiple datasets would require custom training for each dataset. It seems clear that the more variability you introduce the more likely the LLM is to make mistakes.

So instead of letting everyone just define all their own attributes and hoping the LLM’s can ‘figure it out’ and seamlessly translate queries across countless definitions, a much better model is to align on data standards — to build consensus that [building height should be in attribute called ‘height](https://docs.overturemaps.org/schema/reference/buildings/building/)’ and it should be in meters, like how how Overture is standardizing their data:

![](/assets/img/posts/exploring-field-boundary-data-with-llms/1_cixE6wyrbl2f1gr5ET-4KA.png)

You can then train the LLM on a single standard, and indeed invest effort in documenting that standard really well so every attribute is fully explained, and then build precise converters that get all potential data into a common schema. In time just documenting the core data schema well in human language plus a structured format (JSON, etc) will likely make it easy for LLM’s to generate those precise converters with ease. And indeed as the schema gets used and has more tutorials and tools and implementations then future LLM’s trained on newer public data will likely just start to know the schema and be able to understand how to query the data without additional training.

This can start to build a really virtuous cycle where a few powerful tools built with LLM’s can help spur people to invest in building and translating their data into common data schemas, and when more more data that gets in the common schemas it’ll spur more powerful tools (built by LLM’s & people) that will in turn motivate more data to be standardized. These sets of standardized can in turn be used as training data for using AI to more accurately generate more data, like the Fields of The World [Benchmark Dataset](https://source.coop/kerner-lab/fields-of-the-world).

So the goal is to continue to refine this demo to become a tool that can work with any fiboa dataset, and use it to continue that virtuous cycle for field boundary data, getting more data in the data schema, and spurring a wide array of tools that let data contributors get much more value out of their data.
