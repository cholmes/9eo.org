---
layout: post
title: "Recycling to help maintain performance and stability"
date: 2008-01-31
source: wordpress
source_name: "cholmes.wordpress.com"
source_url: https://cholmes.wordpress.com/2008/01/31/recycling-to-help-maintain-performance-and-stability/
tags: ["quotes"]
description: "So I’ve rarely looked at ESRI software, but a friend has administrator rights on the new version of ArcGIS Server, and he decided to show me how it works.  There are a lot of options, and they provide some interesting configuration of how the processes work: They have this great ‘feature’ called Rec"
---

So I’ve rarely looked at ESRI software, but a friend has administrator rights on the new version of ArcGIS Server, and he decided to show me how it works.  There are a lot of options, and they provide some interesting configuration of how the processes work:

[![ArcGIS Server](/assets/img/posts/recycling-to-help-maintain-performance-and-stability/arcgis-screen.png)](https://cholmes.wordpress.com/wp-content/uploads/2008/01/arcgis-screen.png "ArcGIS Server")

They have this great ‘feature’ called Recycling – ‘Recycling shuts down the process and restarts it at regular intervals to help maintain performance and stability’.

Words escape me.

Ok, not really (when have they ever?), since I want to explain this to people who don’t write software.  This ‘feature’, to me, is their development team admitting defeat.  They couldn’t iron out all the memory leaks and little code errors that might get in the way of a well performing, stable, robust server.  When you mess up your program in that way about the only thing that can fix it is to completely restart the whole thing.  So what this ‘feature’ does is make it so your server automatically restarts itself at the interval you set, the most blunt possible approach to the problem there is.

Now I’m not saying we’ve never had memory leaks in GeoServer, on the contrary.  Indeed we had to delay 1.6.0 and do another release candidate because we found one that only built up over a long time when users were requesting really large maps.  All I’m saying is that to add something like this is to admit defeat, to say that they don’t even necessarily plan to fix all the little bugs that are causing this.  And more than anything I just love that the double speak, playing it as a feature, to ‘help maintain performance and stability’.   Say what you will about their software, they remain absolutely brilliant marketers, and I have a ton to learn from them in that realm.
