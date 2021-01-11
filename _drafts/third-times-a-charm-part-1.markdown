---
title: Third Time’s a Charm (Part 1)
date: 2021-01-11 21:10:00 Z
description: 'After 2 failed attempts of '
---

Over the past year, I've made 2 separate attempts at creating a simple web app for my wife and me to share recipes we find online and track when we make them. It also started because I was interested in seeing if I could scrape NYT Cooking and AllRecipes to store in a centralized location, not that I would do that because that's highly against their terms of service 🤫. Application sounds simple enough right? Sure, but for some reason, I always abandon the project while I'm building because I'll get hung up on a particular feature or just generally lose interest. Sound familiar? We've continued writing down our week's dinners on our kitchen wallboard and it *works* but...

New year, **NEW me** right? I had some PTO taken while we potty train our daughter, and during naps and when she goes to bed it's off to the races for me. This time I'm taking a different approach, treating it like a legitimate project and mapping requirements, wire-framing (and even designing) before touching code. We'll see if it works!

## The Requirements

I could very well create this application in Airtable or a Notion doc, but wheres the fun in that? The application's actual responsibilities are very simple:

* Allow for multiple users to add and edit recipes
* Allow for tracking when a particular recipe is made on a particular "account"

As I type that out I'm already overwhelmed by the unforeseen complexity. Especially given the "Nice To Have" requirements like

* Ability to copy multiple recipes' ingredients lists to a "Notes" file for simplified grocery shopping
* Ability to "schedule" dinners
* Ability to look back in a calendar and see all dinners made

## The Process

On Friday evening after my daughter went to bed I dusted off Sketch and downloaded their [Elements UI Kit](https://www.sketch.com/elements) to ease in my "designing". They sure did make it a breeze.

\[IMAGE OF SKETCH\]

I began working on the home feed and "Recipe" screen (also I've typed recipe so many times over the past few days its lost all meaning). Ideally the application when launched "recommends" a dinner recipe that you haven't made in the last week. See? There I go again just adding more complex functionality!

The Elements UI Kit made prototyping and interating on how I wanted to display information a breeze, and not committing to code I feel was really helpful for my process, again once I'm in my editor if I hit a block, I will likely just give it up, but this allowed me to make decisions, second guess myself and quickly create a new approach. The entire evening as I was designing in Sketch I was showing my wife who acted as a fantastic stakeholder (think "make the logo bigger" but for everything).

At the end of Friday evening I got the designs to a point where I felt I had enough to really start going after it, again repeating the very basic requirements:

* Allow for multiple users to add and edit recipes
* Allow for tracking when a particular recipe is made on a particular "account"

With those in mind I went to bed and though of the myriad of ways we could accomplish this technically using any sort of tech. In the next part of this series I'll talk through my technical decisions and how I began to scope the dev work! Stay tuned!

(_Spoiler alert_, its definitely React w/ a Firebase backend because I'm basic 😏)