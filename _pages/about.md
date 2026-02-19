---
permalink: /
title: null
layout: single
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## About

I work on the mechanics of interface and defect evolution, with a focus on nonlocal theories and multiphysics coupling. My research integrates peridynamics, generalized nonlocal operators, and phase-field methods, with an emphasis on their variational structure and theoretical connections.

---

## Research Map

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;">
  <div class="notice--primary" style="margin:0;">
    <h3 style="margin-top:0;">Nonlocal Mechanics</h3>
    <ul>
      <li>Peridynamics (bond-based, state-based, correspondence models)</li>
      <li>Generalized nonlocal operators (PDDO, polynomial reconstruction)</li>
      <li>Integral-to-differential connections via asymptotic expansion</li>
    </ul>
  </div>
  <div class="notice--info" style="margin:0;">
    <h3 style="margin-top:0;">Phase Field Methods</h3>
    <ul>
      <li>Phase-field fracture</li>
      <li>Microstructure evolution</li>
    </ul>
  </div>
  <div class="notice--success" style="margin:0;">
    <h3 style="margin-top:0;">Configurational Forces</h3>
    <ul>
      <li>Variational structure of configurational forces</li>
      <li>Configurational forces in nonlocal systems</li>
    </ul>
  </div>
</div>

---

## Key Questions

* How can integral nonlocal models be systematically connected to differential operators?
* Can configurational forces be rigorously defined in peridynamics?
* What is the unified variational structure behind phase-field and nonlocal models?
* How do interface kinetics interact with nonlocal elasticity?

---

## Start Here

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:0.8rem;">
  <a class="btn btn--primary" href="{{ '/notes/' | relative_url }}">Notes</a>
  <a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">Publications</a>
  <a class="btn btn--primary" href="{{ '/cv/' | relative_url }}">CV</a>
</div>

---

## Notes

This section contains structured technical notes, including derivations, theoretical connections, and research ideas across mechanics, mathematics, and related fields.

---

## Recent Updates

{% for post in site.posts limit:5 %}
* [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
