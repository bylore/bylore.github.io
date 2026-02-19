---
permalink: /notes/
title: ""
layout: single
author_profile: true
---

This page organizes notes by **topic** (not by time).  
You can add, remove, or rename topics and entries by editing `_data/notes_topics.yml`.

{% for section in site.data.notes_topics %}
## {{ section.topic }}

{% if section.items and section.items.size > 0 %}
{% for item in section.items %}
{% if item.title %}
- {% if item.url %}[{{ item.title }}]({{ item.url }}){% else %}{{ item.title }}{% endif %}
{% else %}
- {{ item }}
{% endif %}
{% endfor %}
{% else %}
- *(No entries yet)*
{% endif %}

{% endfor %}
