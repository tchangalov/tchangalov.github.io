---
title: "Snappy vs. Zstd"
description: "A user perspective of two popular file format compressions."
pubDate: "Jan 15, 2024"
heroImage: "/file-compression.png"
---

# Introduction

Everyone has data. If it’s high volumes of it, it’s likely compressed. The race to find the best compression is on-going in the open-source community. Two popular ones are 
<a href="https://github.com/google/snappy" target="_blank">Snappy</a> and <a href="https://github.com/facebook/zstd" target="_blank">Zstd</a>. Below are my observations as a user of the two.


# 🔎 Major Differences

## Less Data

Zstd compression produces less data than Snappy compression since it's a newer technology. 
Creating less data means that we can reduce the shuffle partitions slightly for a given workload, which allows us to process more efficiently. 
Tuning the value for ```spark.shuffle.partitions``` yields a slight performance boost.

However, storing data in Zstd requires more decompression time than Snappy.
In a few cases, we need to allocate larger executors to successfully decompress files. 
This means we need to set higher values for ```spark.executor.memory```.

## Incompatible Data

Zstd compression is a more recent technology – so, consumers using older versions of spark, hive, presto, etc. may have trouble reading the data. 
Snappy compression is more widely adopted and supported.
