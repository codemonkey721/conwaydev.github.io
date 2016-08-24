---
layout: post
title:  "2 Awesome Uses for Screaming Frog"
date:   2016-08-23 15:50:24 -0600
categories: blog
---

Recently I've had to learn a _lot_ about SEO in a very short amount of time. I would say the biggest "gotcha" moment I've had is finding out about and using the [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/).

![Screaming Frog SEO Spider](/assets/img/screamingfrog.jpg)

> The Screaming Frog SEO Spider is a website crawler, that allows you to crawl websites’ URLs and fetch key onsite elements to analyse from an SEO perspective. Download for free, or purchase a licence for additional features.

<iframe width="917" height="516" src="https://www.youtube.com/embed/AOzOffh9HIE" frameborder="0" allowfullscreen></iframe>

I have been totally blown away by how you can just scan a whole site in a matter of seconds and see immediately all your broken links and image references. I spent a great portion of my web development career believing that SEO was snake oil sales, but I'm realizing its importance now more than ever <sup>1</sup>.

Screaming Frog rules for performing an SEO audit on your site, but I'd like to point out 2 interesting ways to use Screaming Frog.

### 1. Identifying Slow Loading Pages

Well of course you're an incredible web developer who is the Michael Jordan of web page performance and you never have any slow loading pages ever, right? Well if for some reason you _might_ have some slow pages Screaming Frog can identify those immediately.

![Response Time](/assets/img/response-time.jpg)

All you need to do is filter by "Response Time" in the main crawl. As you can see that highest one has an 8 second response time. I uh, gotta go fix something...

### 2. Finding All Lazy Loaded Images

By default Screaming Frog is really awesome with images. If it finds it in your markup it will automatically make a request for that image, which rules! Now how about if you're a radical web developer who lazy loads all their images so that their users don't have to unnecessarily download each one <sup>2</sup>? Well you're in luck because theres a special part of Screaming Frog called "Custom Extractions". All you need to do is add either an XPath or a regex for your images like so:

![Custom Extraction](/assets/img/extraction.jpg)

Then we can see that we got all the images on the page, even though those were already lazy loaded:

![Custom Extraction](/assets/img/extraction-success.jpg)

I didn't really understand XPath (I still don't), but I find its easiest to get the global images by simply placing `//img`. Its even easier to get the value through regex, but this will suffice for most cases.

---

Say what you will about Screaming Frog, it's Windows 98-esque UI, or the fact that it probably should be a web app that has a SaaS model, it is an incredibly powerful application that definitely has changed the way I view SEO. There is so much more that you can do with the application, but its an essential tool in performing a real SEO audit of your webite.


_Footnotes_:

1. Caveat, there's still totally snake oil salesmen in that industry.
2. Lol not me on this site.
3. [seerinteractive.com/blog/screaming-frog-guide/](http://www.seerinteractive.com/blog/screaming-frog-guide/) is the best link ever and explains 53 cooler things to do with the software.
4. [https://www.screamingfrog.co.uk/10-features/](https://www.screamingfrog.co.uk/10-features/) is also a great list of ways to use the software and actually from the company that develops and maintains it.