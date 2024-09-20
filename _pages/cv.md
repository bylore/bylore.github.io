---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Solid Mechanics, Shanghai Jiaotong University, 2020
* B.S. in Mechanical Engineering, Beihang University, 2014

Work experience
======
* 2022.09-present: Assistant Professor
  * Tongji University

* 2020.07-2022.06: Postdoctoral Researcher
  * Zhejiang University
  <!--* Duties included: Merging pull requests-->
  * Supervisor: Professor Jie Wang
  
<!--Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3-->

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Reviewer for *Composites Science and Technology*，*Journal of Engineering Mechanics*，*Computer Modeling in Engineering & Sciences*，*Acta Mechanica* et. al.
