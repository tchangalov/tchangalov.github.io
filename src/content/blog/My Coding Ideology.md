---
title: "My Coding Ideology - Part 1"
description: "A collection of the practices which drive my software development career"
pubDate: "Sep 8, 2023"
heroImage: "/bulb.png"
---

## Hello World!

Hopefully this is the first of many posts in my blog, where I explore various topics of software & data engineering!

## Introduction

I try to follow these rules 80% of the time. This leave 20% of leeway. This 20% allows me to move faster and focus on what's truly important.

## Motivation

I always ask myself: Who are you coding it for? Is it customers, colleagues, or even for yourself? 

Solicit feedback as soon as humanly possible. It helps figure out what your next steps should be.

Write down your tasks on sticky notes and organize them by priority. 
- For work, I use Jira. 
- For personal stuff, I use [todoist](https://todoist.com/) (the free version)

## Test Everything!

Follow Test Driven Development carefully. Focus on creating good tests which explain the functionality you are trying to achieve.

If tests don't exist Create a test case for the code modification you are making. In the future, other developers can follow the same approach.

The beauty of testing is determining the quickest way of identifying problems. Can it be identified in unit tests? If yes, put it there! If not, can it be found in the integrated QA environment? If not, what about a load testing environment? If we have to wait until UAT to find an issue, then most likely we have an opportunity for improving our test framework and/or approach.

## Code Duplication
Avoid code duplication.

Create methods to remove duplication. 

Rename variables/methods to explain its purpose.

Example: 
```int i = 0``` would need to be renamed to something more informative. Instead try ```int timeIndex = 0```.

If code is more than 300 lines long, start separating the code into new classes/files.

## Dead Code
Actively seek out dead code to remove. Keeping the codebase as clean as possible is one of the best things that can be done for the longevity and success of the project.

- archive old repositories
- delete old Jenkins Pipelines
- remove unused configuration files
