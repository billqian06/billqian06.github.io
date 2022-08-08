---
layout: page
title: bacterial infection tracing
description: tracing a bacterial outbreak with graph theory
img: assets/img/bacteria.jpg
importance: 2
category: Coursework
---
<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/bacteria.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This is a project for Rice University's COMP 182 course, Algorithmic Thinking.

In 2011, a bacteria infected 18 patients at a hospital, even though the hospital staff followed strict isolation and control procedures when the first patient arrived at the hospital. To better understand how the bacteria was transmitted between, researchers obtained genetic data (the sequenced genomes of bacterial isolates of the patients) and epidemiological data (locations of the patients and a timeline of first positive cultures of their bacterial strains). The researchers then computed the pairwise genetic distance and epidemiological distance between patients.

With these data, I constructed a complete directed graph where the nodes represent the patients and the edges are the sums of the genetic distance and epidemiological distance between two patients. Then, I developed an algorithm based on lemmas in graph theorem that finds the minimum spanning tree of this rooted and directed graph to produce a highly probable transmission map of the infection outbreak.
