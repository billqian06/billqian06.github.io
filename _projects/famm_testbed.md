---
layout: page
title: famm testbed
description: a testbed for studying human-robot collaboration during disaster response
img: assets/img/robot.jpg
importance: 1
category: Research
---

The Unhelkar Lab has developed the Factorial Agent Markov Model (FAMM) that uses an array of latent states of a human agent (such as workload and intent) to model the agent's behavior. The idea is that when a human-robot team performs a task, if the robot has a more accurate mental model of the human's behavior, then the robot can better collaborate with the human.

FAMM was initially tested on a few small-scale synthetic domains where ground truths were handcrafted and used to generate data samples. Those experiments demonstrated that FAMM outperformed other behavior modeling algorithms that either do not take an agent's latent variables into consideration or only use a single latent variable (as opposed to an array, hence the name factorial) when predicting human behavior.

To more conclusively verify the effectiveness of FAMM, however, ideally, we need to have a more complex and realistic environment where FAMM can be used to predict real, non-synthetic human behavior. Nevertheless, training robots and humans in the real world is highly resource-intensive. What makes the matter worse is that it is often difficult to measure the “ground truth” of human-robot teamwork in real world settings.

In response to our demand for a realistic domain that is not exorbitantly resource-intensive, I have developed a computer-based simulation testbed in Unity. In this photo-realistic domain, a human agent and a robot agent need to collectively perform a task (distributing first-aid kits at various locations in the city) under a time constraint. Participants of our experiments would be able to control the human agent (i.e. go straight or turn to the right) and send commands to the robot to execute. Internally, within Unity, the "city" in the Unity domain is discretized with a grid representation so that the data collected from the domain can be easily modeled with a markov decision process. Additionally, secondary tasks based on tasks in OpenMATB, an open source multi-attribute task battery, have also been added to the simulation to replicate first responders' need to multi-task during disaster response.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/minimap1.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-15">
        {% include figure.html path="assets/img/minimap2.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This is a disaster response domain created with Unity. The locations of the human (H), robot (R), distribution locations of first-aid kits (red dots), and dangerous regions (radioactive signs) are marked on the mini-map of the domain.
</div>

While we can collect data on the state of the environment and the action taken by the human in the Unity domain, we also need to have data on the agent's latent variables, such as trust and workload, to be able to test the performance of FAMM. To this end, we would use physiological sensors, BioHarness and Tobii eye tracker, to collect the participants' heart rate, heart rate variability, blink frequency, pupil dilation, and etc, as previous research has shown that one's latent states such as workload is correlated with many of the physiological measures above. In other words, we could potentially infer some of one's latent variables from physiological measurements. Finally, I used the Lab Streaming Layer (LSL) to synchronize time stamps across Unity data as well as multiple streams of physiological sensor data and to enable the viewing of the collected data in real-time.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/bioharness.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-15">
        {% include figure.html path="assets/img/tobii.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left, a dummy wearing the BioHarness sensor. Right, a Tobii eye tracker attached to the computer.
</div>
