---
title: Performance Testing Tools
date: 2017-04-26 21:50:00 Z
categories:
- blog
description: A dive into tooling around web page performance to allow developers to
  create better web experiences.
layout: post
---

Its hard to find web developers in 2017 who don't factor in performance into their day to day work. Stakeholders are realizing that web performance is essential to their business and conversions, and developers are realizing that not everyone in the world is accessing websites from a brand new MacBook Pro with blazing fast internet speeds. As a developer I may go a bit overboard, some may even call it an obsession, but web performance is something I'm incredibly passionate about. It all ties back in to the inclusion of the web, and providing the best possible experience for every person to access your site or product.

I'd like to take this time to showcase 3 different tools I like to use for testing out the performance of whatever I'm working on at any given time. There are tons of various tools and software applications, but I like to use a range of tools to get a common baseline. Creating real world performance metrics is difficult and often inconsistent, but by using different tools you can at least get an idea of what you're doing right, and what you may be doing wrong.

### WebPageTest.org

[WebPageTest.org](https://www.webpagetest.org/) is easily the best (free) performance tool I've used. The testing is so thorough and the biggest thing that I appreciate is that they have an API, so you can programmatically run performance tests, allowing for awesome tooling like [speedtracker.org](https://speedtracker.org/). There are also forums filled with really intelligent people who know way more than me about web performance. I personally like to use the visual comparison tool when I am creating a new feature in order to test performance against the current production environment, just in case I'm introducing any new performance regressions.

### GTMetrix.com

[GTMetrix](https://gtmetrix.com/) was actually my first introduction to web performance testing. There was a time when I worked for a small web agency and when pitching jobs to clients, things like performance or accessibility weren't part of the scope, often times it was "How can we get this in the hands to our client as fast and cheap as possible". I didn't know any better, but at that time I started getting the hunch that maybe putting 40 different JavaScript files on a page wasn't such a great idea. My coworker recommended me this tool that showed you "everything you were doing wrong with web development". It quickly becoming my bargaining chip. I was able to show stakeholders, and eventually clients an actual number indicating that performance was something we needed to consider up front, not after the fact. I still rely heavily on GTMetrix, I really appreciate their comparison report, and also their merging of both PageSpeed scores and YSlow. Its very validating when working on a larger scale application to score high on it.

### Google PageSpeed Insights

The last tool I'd like to share is Google's own [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). The irony of using this tool is running through various Google sites and services and seeing that not even they can get a perfect 100. I believe that their goal is raise awareness and just because you're a Google product doesn't mean that you can get away with bad performance. This one will always drive me nuts, but often a great tool to share with colleagues, particularly in SEO who may not be factoring in performance as to why their search results are what they are.

---

There are plenty of options, such as [speedcurve.com](https://speedcurve.com/) or the ones listed in the comment section of [this CSSTricks article](https://css-tricks.com/performance-tools/). The bottom line is that creating performant web pages and applications isn't going anywhere. Optimizing images, only loading what we need, and relying on smarter browser caching techniques is very important, and these tools are quick to call out when you're not. We as developers have a responsibility to ship users the best possible experiences in the most efficient ways, hopefully these tools can help you achieve that!

---

Update (01/03/20): This is a pretty outdated post, but at Sprout Social we have been utilizing [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) for our performance monitoring. It offers fantastic metrics as well as great developer tools to integrate with our tech set up.
