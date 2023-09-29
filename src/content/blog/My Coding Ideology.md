---
title: "My Coding Ideology - Part 1"
description: "A collection of the practices which drive my software development career."
pubDate: "Sep 15, 2023"
heroImage: "/bulb.png"
---

## Hello World!

This is the first of (hopefully) many posts in my blog, where I explore various topics of software & data engineering!

## Introduction

I try to follow the rules below 80% of the time. This allows me 20% leeway to move faster and focus on what's truly important.

## 1. Finding My Motivation

First, I always ask myself: Who are you coding it for? Is it customers, colleagues, or even for yourself? 

Then, I solicit feedback from them as soon as humanly possible. It helps me figure out what my next steps should be.

To get organized, I write down my tasks down and sort them by priority. 
- For work, I use Jira. 
- For personal stuff, I use [todoist](https://todoist.com/) (the free version).

## 2. Testing Everything!

I follow “Test Driven Development” carefully. I focus on creating good tests which explain the functionality I am trying to achieve.

If tests don't exist, I create a test case for the code update I am making so that in the future other developers can follow the same approach.

The beauty of testing is determining the quickest way of identifying problems. Can it be identified in unit tests? If yes, I put it there! If not, can it be found in the integrated QA environment? If not, what about a load testing environment? If we have to wait until UAT to find an issue, then most likely I have an opportunity for improving the test framework and/or approach.

I follow the F.I.R.S.T. approach for unit testing. See this [Medium](https://medium.com/pragmatic-programmers/unit-tests-are-first-fast-isolated-repeatable-self-verifying-and-timely-a83e8070698e) article. I would summarize the acronym in the following way:

- Fast: I don't design my unit test suites to run for more than 3-5 minutes.
- Isolated: I don’t use external database connections or external URLs.
- Repeatable: I make bootstrapping and teardown to be automatic. I make it run on all platforms (Windows, Mac OS, Linux). 
- Self-verifying: I don't allow non-deterministic or ambiguous behavior in my tests.
- Timely: I write tests early and often.

## 3. Polishing My Code

I create methods to remove duplication. I also rename variables/methods to explain their purpose.

Example: 
```int i = 0``` would need to be renamed to something more informative. Instead try ```int timeIndex = 0```.

If my code is more than 300 lines long, I start separating the code into new classes/files. This will naturally reduce code duplication and improve readability.

## 4. Deleting Dead Code

Keeping the codebase as clean as possible is one of the best things that can be done for the longevity and success of the project. Therefore, I do the following things to delete code:

- I remove unused classes, methods, and variables
- I remove unused configuration files
- I archive old repositories
- I delete old Jenkins pipelines

## Resources

**Note**, the resources below contain Amazon Affiliate links

- [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=tmm_pap_swatch_0?_encoding=UTF8&amp;qid=1694733643&amp;sr=8-4&_encoding=UTF8&tag=tchangalov-20&linkCode=ur2&linkId=bd2596f693f16bc2a89ec14b6d9bff64&camp=1789&creative=9325)

- [Code Your Way Up: Rise to the Challenge of Software Leadership](https://www.amazon.com/Code-Your-Way-Challenge-Leadership/dp/1777076501/ref=tmm_pap_swatch_0?_encoding=UTF8&amp;qid=1694734047&amp;sr=8-1&_encoding=UTF8&tag=tchangalov-20&linkCode=ur2&linkId=4d034eb09f36d64092ac73c7ead8cc03&camp=1789&creative=9325)
