---
title: "My Coding Ideology - Part 1"
description: "A collection of the practices which drive my software development career"
pubDate: "Sep 8, 2023"
heroImage: "/bulb.png"
---

## Hello World!

Hopefully this is the first of many posts in my blog, where I explore various topics of software & data engineering!

## Introduction

I try to follow these rules 80% of the time. This leaves 20% of leeway. This 20% allows me to move faster and focus on what's truly important.

## Motivation

I always ask myself: Who are you coding it for? Is it customers, colleagues, or even for yourself? 

Solicit feedback as soon as humanly possible. It helps figure out what your next steps should be.

Write down your tasks on sticky notes and organize them by priority. 
- For work, I use Jira. 
- For personal stuff, I use [todoist](https://todoist.com/) (the free version).

## Test Everything!

Follow Test Driven Development carefully. Focus on creating good tests which explain the functionality you are trying to achieve.

If tests don't exist Create a test case for the code modification you are making. In the future, other developers can follow the same approach.

The beauty of testing is determining the quickest way of identifying problems. Can it be identified in unit tests? If yes, put it there! If not, can it be found in the integrated QA environment? If not, what about a load testing environment? If we have to wait until UAT to find an issue, then most likely we have an opportunity for improving our test framework and/or approach.

Follow the F.I.R.S.T. approach for unit testing. See this [Medium](https://medium.com/pragmatic-programmers/unit-tests-are-first-fast-isolated-repeatable-self-verifying-and-timely-a83e8070698e) article

I would summarize the acronym in the following way.

- Fast: Don't design your test suite to run for more than 3-5 minutes!
- Isolated: No external database connections; No external URLs.
- Repeatable: Bootstrapping and teardown should be automatic. It should run on all platforms (Windows, Mac OS, Linux). 
- Self-verifying: Don't allow non-deterministic or ambiguous behavior in your tests.
- Timely: Write tests early and write tests often

## Code Duplication
Avoid code duplication.

Create methods to remove duplication. 

Rename variables/methods to explain its purpose.

Example: 
```int i = 0``` would need to be renamed to something more informative. Instead try ```int timeIndex = 0```.

If code is more than 300 lines long, start separating the code into new classes/files. This will naturally reduce code duplication.

## Dead Code
Actively seek out dead code to remove. Keeping the codebase as clean as possible is one of the best things that can be done for the longevity and success of the project.

- Archive old repositories
- Delete old Jenkins Pipelines
- Remove unused configuration files
- Remove unused classes, methods, and variables

## Resources

**Note**, The links below contain Amazon Affiliate links

- [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=tmm_pap_swatch_0?_encoding=UTF8&amp;qid=1694733643&amp;sr=8-4&_encoding=UTF8&tag=tchangalov-20&linkCode=ur2&linkId=bd2596f693f16bc2a89ec14b6d9bff64&camp=1789&creative=9325)

- [Code Your Way Up: Rise to the Challenge of Software Leadership](https://www.amazon.com/Code-Your-Way-Challenge-Leadership/dp/1777076501/ref=tmm_pap_swatch_0?_encoding=UTF8&amp;qid=1694734047&amp;sr=8-1&_encoding=UTF8&tag=tchangalov-20&linkCode=ur2&linkId=4d034eb09f36d64092ac73c7ead8cc03&camp=1789&creative=9325)