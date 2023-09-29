---
title: "Migrating Orc to Parquet"
description: "An overview of migrating a file format at scale."
pubDate: "Oct 6, 2023"
heroImage: "/orc-to-parquet.png"
---

## Introduction

Everyone has data and lots of it. It's organized into efficient file formats. The race to find the best file format is on-going and the open-source community has developed a few of them. Two popular ones are Orc and Parquet.

## Rationale For Changing from Orc to Parquet

Parquet with zstd compression produces 25-30% less data than Orc with snappy compression.
Parquet is the default for data in Spark and hence has more built-in support.

## Major Findings

### Corrupted Data

If your tables contain long strings (>500,000 characters in a single field), the data is corrupted. Writing succeeds, but reading fails. The best solution for our use case was to modify the page size row checks. See: https://github.com/apache/parquet-mr/pull/297

### Less Data

Creating less data means that we can reduce the shuffle partitions for a given workload to process more efficiently. Tuning the value for  ```spark.shuffle.partitions``` yields a performance boost.

### Heavier Data

Storing data in zstd requires more decompression time. In a few cases, downstream consumers need to provision larger executors to successfully decompress files (higher values for spark.executor.memory).

### Incompatible Data

Zstd compression is a more recent technology – so, downstream consumers using older versions of spark, hive, presto, etc. may have trouble reading the data.

### Query Speed

Based on my experience, queries run slightly faster on Parquet than they do on Orc. There are isolated cases which perform worse, but the impact is minor.

## ✔️ Test Strategy 

A large scale migration like this should have a reliable test strategy designed to identify and catch risks.

### Check Data Integrity

Check for ability to access/read/write all rows and all columns to find hidden nuances:
Functional tests (unit/integration)
Full One to One Data Comparisons
See: https://github.com/G-Research/spark-extension/blob/master/DIFF.md

### Back processing

All legacy data has to be migrated and verified. Below is the assurance strategy I would use: 
Evaluate/monitor instance fleet and operational plan
Row counts must match for all partitions
One-to-one data comparison for 1 out of every 20 partitions

### Performance

Observe runtime and cost stats.
Observe table stats
Total # of files
Average # of file sizes
Outliers in file sizes
