---
title: "Migrating Orc to Parquet"
description: "An overview of migrating a file format at scale."
pubDate: "Oct 5, 2023"
heroImage: "/orc-to-parquet.png"
---

## Introduction

Everyone has data. If it's high volumes of it, it's likely organized into an efficient file format. The race to find the best file format is on-going in the open-source community. Two popular ones are Orc and Parquet. Let's imagine that your organization currently uses Orc, but wants to switch to Parquet.

## ❓ Why Migrate?

Why would we want to do that if you have already committed to Orc and have tons of data in this format? Well, Parquet with zstd compression produces 25-30% less data than Orc with snappy compression.


Less data means:
1. Less S3 cost.
2. Better compute performance regardless of engine.

Additionally, Parquet is the default in Spark and hence has more built-in support in that environment.

## ✔️ Approach & Test Strategy

A large scale migration like this should have a reliable test strategy designed to identify and catch risks.

### Checking Data Integrity

Check for ability to access/read/write all rows and all columns to find hidden nuances:
- Functional tests (unit/integration)
- Full Data Comparisons
  - See: https://github.com/G-Research/spark-extension/blob/master/DIFF.md
- [UAT] Request sign-off by all downstream consumers

### Verifying Back processing

All legacy data has to be migrated and verified. Below is the assurance strategy I would use: 
- Evaluate/monitor instance fleet and operational plan.
- Row counts must match for all partitions.
- Full data comparison must match in 1 of every 30 partitions.

### Performance

1. Observe runtime and cost stats.
2. Observe table stats: total # of files, average file sizes, outliers file sizes.
3. Run a performance benchmarking suite, which consists of a set of curated queries.

## 🔎 Major Findings

I will discuss my lessons learned for each of the behaviors identified below during the migration.

### Less Data

Creating less data means that we can reduce the shuffle partitions **slightly** for a given workload to process more efficiently. Tuning the value for  ```spark.shuffle.partitions``` yields a slight performance boost.

However, storing data in zstd requires more decompression time. In a few cases, downstream consumers need to allocate larger executors to successfully decompress files (higher values for ```spark.executor.memory```).

### Incompatible Data

Zstd compression is a more recent technology – so, downstream consumers using **older** versions of spark, hive, presto, etc. may have trouble reading the data.

### Corrupted Data

If your tables contain long strings (>500,000 characters in a single field), the data can get corrupted for that column. Writing the data succeeds, but reading it fails. The best solution for our use case was to modify the page size row checks at write time. See: https://github.com/apache/parquet-mr/pull/297

### Query Benchmark

Based on my experience, queries run slightly faster on Parquet than they do on Orc. There are isolated cases which have worse performance, but the impact is minor.
