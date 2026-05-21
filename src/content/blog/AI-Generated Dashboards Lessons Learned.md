---
title: "AI-Generated Dashboards: Lessons Learned"
description: "I used AI to build dashboards for job monitoring, infrastructure compliance, and cost. Here is what I learned about ROI, design, and where the workflow still falls short."
pubDate: "May 18, 2026"
heroImage: "/AI-Dashboard.PNG"
---

## Foreword
*I last wrote in my blog in early 2024. Since then, AI has taken over the software industry and revolutionized how we think about software engineering. This post shows an example of how my approach to building software with AI has evolved over the past months.*

## Key Takeaways
1. AI eliminates the value vs. effort matrix. You can just try things now.
2. AI enables you to explore complex relationships across datasets that were previously hidden or too costly to investigate.
3. Design and verification is more crucial than ever. AI is fast, but verification is still slow.
4. The workflow for dashboarding still has friction.

## Introduction
I recently worked on a project to build dashboards for monitoring jobs, identifying compliance issues, and minimizing costs.

## AI Allows Us To Dig Deeper
Before AI, I used to be much more selective about what to prioritize. I would prioritize based on a matrix of value vs. effort. I had to commit to something before I actually built it. I made the conscious decision NOT to build certain things because it was either too much effort or it had unclear ROI (Return on Investment). 
For those reasons, it used to be difficult to explore uncharted territory within data. There was friction and uncertainty in trying anything new.

With AI, I can join different datasets to find outliers, spot trends, and pinpoint failures. I can experiment with different types of charts to see which ones visualized the data best. These are examples of big commitments I used to make, but not anymore. The biggest thing AI unlocked for me is the ability to explore these complex relationships across datasets, to dig deeper into the data, and to identify intricacies that were previously undetected.

## Design And Verification Is More Crucial Than Ever
Small changes like tweaking filters, refining joins, or even changing the font within my dashboards are just a prompt away. With today’s capabilities, you can even pivot an entire dashboard to something entirely new. This is where a lot of the value from using AI comes from.

However, deciding what to do is the current engineering challenge. Being able to effortlessly implement new features comes with the risk of bloating the product very quickly. I’ve found that design is more crucial than ever. Thus, my focus has shifted towards verifying that I’m building the right product, which is not necessarily the one with the most features.

## The Workflow For Dashboarding Still Has Friction
I started building out these dashboards the “old fashioned” way. I was manually dragging, dropping, and configuring widgets. However, I quickly transitioned to coding at the XML/JSON level and rendering that code in the UI, since AI can parse it much more effectively.

My AI-first development workflow looks like this: 
1. Prompt AI.
2. Get updated code.
3. Review it.
4. Paste it into the UI to render.
5. Review rendered charts, graphs, and tables.
6. Repeat 1-5.

I wish I had auto-rendering capabilities in a dedicated test environment. Instead, I generate code, paste, and hope it works. In this specific use case, AI is fast to produce the code, but the verification process is still manual and slow. I see this as an area for future improvement. One solution is to construct “test” datasets so that we can build an automated test suite.

## Conclusion
I invented new workflows for myself based on the tools available to me. I used AI as a drawing board for putting my ideas into practice. I used design and verification approaches to tighten the final product. I ended up with better dashboards capable of extracting more insights.

The bottleneck is no longer building. It is knowing what is worth building.
