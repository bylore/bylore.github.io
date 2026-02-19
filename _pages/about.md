---
permalink: /
title: null
layout: single
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(220px,260px);gap:1rem;align-items:start;">
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

  <aside style="position:sticky;top:1rem;border:1px solid #e5e5e5;border-radius:8px;padding:0.85rem;background:#fafafa;font-size:0.92rem;">
    <h3 style="margin-top:0;margin-bottom:0.25rem;">Recent Updates</h3>
    <p style="font-size:0.82rem;margin-top:0;color:#666;">Timeline (newest first)</p>
    <ol style="list-style:none;margin:0;padding:0;border-left:2px solid #d7d7d7;">
      <li style="position:relative;padding:0 0 0.8rem 0.85rem;">
        <span style="position:absolute;left:-0.36rem;top:0.3rem;width:0.62rem;height:0.62rem;border-radius:50%;background:#2563eb;"></span>
        <div style="font-size:0.78rem;color:#666;">2026-02-19</div>
        <div><strong>New note published: Nonlocal strain measure</strong></div>
        <div style="font-size:0.86rem;">A short update example for recent progress in learning, writing, or research.</div>
        <details style="margin-top:0.35rem;">
          <summary style="cursor:pointer;color:#2563eb;">Show more</summary>
          <p style="margin:0.35rem 0 0;">Longer updates can be collapsed by default. Click to expand and read the full content directly from this timeline.</p>
        </details>
        <div style="margin-top:0.35rem;"><a href="{{ '/notes/nonlocal-strain-measure/' | relative_url }}">Open note</a></div>
      </li>
      <li style="position:relative;padding:0 0 0.8rem 0.85rem;">
        <span style="position:absolute;left:-0.36rem;top:0.3rem;width:0.62rem;height:0.62rem;border-radius:50%;background:#9ca3af;"></span>
        <div style="font-size:0.78rem;color:#666;">2024-09-24</div>
        <div>Homepage layout improved, and future updates will appear in this timeline.</div>
      </li>
      <li style="position:relative;padding:0 0 0.15rem 0.85rem;">
        <span style="position:absolute;left:-0.36rem;top:0.3rem;width:0.62rem;height:0.62rem;border-radius:50%;background:#9ca3af;"></span>
        <div style="font-size:0.78rem;color:#666;">2024-01-01</div>
        <div>Older updates will continue to be listed below.</div>
      </li>
    </ol>
  </aside>
</div>

<style>
@media (max-width: 900px) {
  .page__content > div[style*="grid-template-columns:minmax(0,1fr) minmax(220px,260px)"] {
    grid-template-columns: 1fr !important;
  }
}
</style>
