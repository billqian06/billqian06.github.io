---
layout: page
title: hri testbed
description: a testbed for studying human-robot collaboration during disaster response
img: assets/img/robot.jpg
importance: 1
category: Research
---

Substantial progress has been made in developing robots to support first responders performing safety-critical tasks. To ensure that the robots effectively support the humans, it is essential to train both entities to collaborate with each other. Because conducting such training in the real world is highly resource intensive, I have developed a computer-based simulation testbed in Unity in which human-robot (HR) teams are tasked with performing time-critical disaster response tasks. The performance of the HR team is monitored using both behavioral and physiological measures.

In this photo-realistic domain, a human agent and a robot agent need to collectively perform a task (distributing first-aid kits at various locations in the city) under a time constraint. Participants of our experiments would be able to control the human agent (i.e. go straight or turn to the right) and send commands to the robot to execute. Internally, within Unity, the "city" in the Unity domain is discretized with a grid representation so that the data collected from the domain can be easily modeled with a markov decision process. Additionally, secondary tasks based on tasks in OpenMATB, an open source multi-attribute task battery, have also been added to the simulation to replicate first responders' need to multi-task during disaster response. Further, to enable training and testing of HR teams in diverse settings, the testbed allows for easy reconfiguration of the environment, task, and the robot characteristics.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/minimap1.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-5">
        {% include figure.html path="assets/img/minimap2.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This is a disaster response domain created with Unity. The locations of the human (H), robot (R), distribution locations of first-aid kits (red dots), and dangerous regions (radioactive signs) are marked on the mini-map of the domain.
</div>

While we can collect data on the state of the environment and the action taken by the human through Unity, we also need to collect physiological data to infer the human's latent variables, such as trust and workload, when the human interacts with a robot agent. To this end, we would use physiological sensors, BioHarness and Tobii eye tracker, to collect the participants' heart rate, heart rate variability, blink frequency, pupil dilation, and etc, as previous research has shown that one's latent states such as workload is correlated with many of the physiological measures above. Finally, I used the Lab Streaming Layer (LSL) to synchronize time stamps across Unity data as well as multiple streams of physiological sensor data and to enable the viewing of the collected data in real-time.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/bioharness.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-5">
        {% include figure.html path="assets/img/tobii.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left, a dummy wearing the BioHarness sensor. Right, a Tobii eye tracker attached to the computer.
</div>

In our ongoing research, we are using this testbed to train robots to model and adapt to their human teammates. One specific use case of the testbed is to verify the effectiveness of the <a href="https://www.ifaamas.org/Proceedings/aamas2022/pdfs/p982.pdf">Factorial Agent Markov Model</a>, developed by Unhelkar Lab, that predicts a human's behavior when taking the human's latent states into account.

Here is a <a href="https://docs.google.com/presentation/d/1hNe8ff4mNobSx16uSd8tROtu57SKS0um/edit#slide=id.g1249ba86a8c_2_75">link</a> to my poster showcasing our HRI testbed at the Rice Undergraduate Research Symposium.
