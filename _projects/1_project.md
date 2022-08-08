---
layout: page
title: ChatApp
description: A general message sending and receiving application
img: assets/img/chat.jpg
importance: 1
category: Coursework
---
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/chat.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

ChatApp is project for Rice University's COMP 310 course, Advanced Object-Oriented Programming and Design. It is a general message sending and receiving application that not only supports the sending of text messages but also any custom message types defined by the sender. This message passing process is
implemented through the use of Java's Remote Method Invocation (RMI) and the visitor design pattern.

To ensure that different ChatApps programmed by students in the class could
effectively communicate with each other, my group designed the application programming interface (API) that specified the communication protocols between any implementation of ChatApps.

Here is a <a href="https://www.youtube.com/watch?v=x1PFeNmZKIs">video demo</a> of my ChatApp.
