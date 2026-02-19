---
permalink: /
title: null
layout: single
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,320px);gap:1.5rem;align-items:start;">
  <div>
    <p style="font-size:1.05rem;margin-bottom:0.75rem;">
      <em>Knowing how to calculate something is not the same as understanding it.</em> — <span style="font-style:normal;">Frank Wilczek</span>
    </p>

    ## About

    I work on the mechanics of interface and defect evolution, with a focus on nonlocal theories and multiphysics coupling. My research integrates peridynamics, generalized nonlocal operators, phase-field methods, configurational forces with an emphasis on their variational structure and theoretical connections and also their engineering applications.

    ---

    ## Research Map

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
          <li>Phase Field fracture</li>
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
  </div>

  <aside style="position:sticky;top:1rem;border:1px solid #e5e5e5;border-radius:8px;padding:1rem;background:#fafafa;">
    <h2 style="margin-top:0;">Recent Updates</h2>
    <p style="font-size:0.9rem;margin-top:-0.2rem;color:#666;">Timeline (newest first)</p>
    <ol style="list-style:none;margin:0;padding:0;border-left:2px solid #d7d7d7;">
      <li style="position:relative;padding:0 0 1rem 1rem;">
        <span style="position:absolute;left:-0.43rem;top:0.3rem;width:0.7rem;height:0.7rem;border-radius:50%;background:#2563eb;"></span>
        <div style="font-size:0.85rem;color:#666;">2026-02-19</div>
        <div><strong>Yong 发布了一个 note：Nonlocal strain measure</strong></div>
        <div style="font-size:0.95rem;">这是一条示范性动态。通常动态会比较短，用来发布近期学习、写作或研究进展。</div>
        <details style="margin-top:0.4rem;">
          <summary style="cursor:pointer;color:#2563eb;">Show more</summary>
          <p style="margin:0.4rem 0 0;">当一条动态比较长时，可以先折叠部分内容，点击 show more 展开查看完整文字。后续你可以直接在这里发布个人活动信息，不需要链接到博客列表。</p>
        </details>
        <div style="margin-top:0.4rem;"><a href="{{ '/notes/nonlocal-strain-measure/' | relative_url }}">前往对应 note</a></div>
      </li>
      <li style="position:relative;padding:0 0 1rem 1rem;">
        <span style="position:absolute;left:-0.43rem;top:0.3rem;width:0.7rem;height:0.7rem;border-radius:50%;background:#9ca3af;"></span>
        <div style="font-size:0.85rem;color:#666;">2024-09-24</div>
        <div>主页结构升级，后续动态将统一发布在右侧时间线。</div>
      </li>
      <li style="position:relative;padding:0 0 0.2rem 1rem;">
        <span style="position:absolute;left:-0.43rem;top:0.3rem;width:0.7rem;height:0.7rem;border-radius:50%;background:#9ca3af;"></span>
        <div style="font-size:0.85rem;color:#666;">2024-01-01</div>
        <div>更早的动态会自动显示在时间线下方。</div>
      </li>
    </ol>
  </aside>
</div>

<style>
@media (max-width: 900px) {
  .page__content > div[style*="grid-template-columns:minmax(0,1fr) minmax(260px,320px)"] {
    grid-template-columns: 1fr !important;
  }
}
</style>
