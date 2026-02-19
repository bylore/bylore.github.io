---
permalink: /
title: null
layout: single
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="home-layout" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(170px,210px);gap:0.9rem;align-items:start;">
  <div>
    <p style="font-size:1.05rem;margin-bottom:0.75rem;">
      <em>Knowing how to calculate something is not the same as understanding it.</em> — <span style="font-style:normal;">Frank Wilczek</span>
    </p>

    <h2>About</h2>
    <p>
      I work on the mechanics of interface and defect evolution, with a focus on nonlocal theories and multiphysics coupling.
      My research integrates peridynamics, generalized nonlocal operators, phase-field methods, and configurational forces,
      with emphasis on their variational structure, theoretical connections, and engineering applications.
    </p>

    <hr />

    <h2>Research Map</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;">
      <div class="notice--primary" style="margin:0;">
        <h3 style="margin-top:0;">Nonlocal Mechanics</h3>
        <ul>
          <li>Peridynamics</li>
          <li>Nonlocal strain measure</li>
          <li>Generalized nonlocal operators</li>
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

    <hr />

    <h2>Key Questions</h2>
    <ul>
      <li>How can integral nonlocal models be systematically connected to differential operators?</li>
      <li>Can configurational forces be rigorously defined in peridynamics?</li>
      <li>What is the unified variational structure behind phase-field and nonlocal models?</li>
      <li>How do interface kinetics interact with nonlocal elasticity?</li>
    </ul>

    <hr />

    <h2>Start Here</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:0.8rem;">
      <a class="btn btn--primary" href="{{ '/notes/' | relative_url }}">Notes</a>
      <a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">Publications</a>
      <a class="btn btn--primary" href="{{ '/cv/' | relative_url }}">CV</a>
    </div>
  </div>

  <aside class="recent-updates">
    <h3>Recent Updates</h3>
    <ol>
      <li>
        <span class="recent-updates__dot recent-updates__dot--new"></span>
        <div class="recent-updates__date">2026-02-19</div>
        <div class="recent-updates__title">New <a href="{{ '/notes/nonlocal-strain-measure/' | relative_url }}">note</a> published: Nonlocal strain measure</div>
      </li>
    </ol>
  </aside>
</div>

<style>
.home-layout .recent-updates {
  position: sticky;
  top: 1rem;
  padding: 0.25rem 0 0;
  font-size: 0.9rem;
}

.home-layout .recent-updates h3 {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
}

.home-layout .recent-updates__subhead {
  margin: 0.15rem 0 0.5rem;
  font-size: 0.74rem;
  letter-spacing: 0.01em;
  color: #7a7a7a;
}

.home-layout .recent-updates ol {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid #e2e2e2;
}

.home-layout .recent-updates li {
  position: relative;
  padding: 0 0 0.58rem 0.72rem;
}

.home-layout .recent-updates li:last-child {
  padding-bottom: 0.12rem;
}

.home-layout .recent-updates__dot {
  position: absolute;
  left: -0.28rem;
  top: 0.26rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #b8b8b8;
}

.home-layout .recent-updates__dot--new {
  background: #2563eb;
}

.home-layout .recent-updates__date {
  margin-bottom: 0.05rem;
  font-size: 0.72rem;
  color: #868686;
}

.home-layout .recent-updates__title {
  font-size: 0.84rem;
  line-height: 1.35;
  color: #2d2d2d;
  font-weight: 500;
}

.home-layout .recent-updates__desc,
.home-layout .recent-updates p {
  margin: 0.18rem 0 0;
  font-size: 0.78rem;
  line-height: 1.35;
  color: #5d5d5d;
}

.home-layout .recent-updates details {
  margin-top: 0.2rem;
}

.home-layout .recent-updates summary {
  cursor: pointer;
  color: #2563eb;
  font-size: 0.77rem;
}

.home-layout .recent-updates__link {
  margin-top: 0.2rem;
  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .home-layout {
    grid-template-columns: 1fr !important;
  }
}
</style>
