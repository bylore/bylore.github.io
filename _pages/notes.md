---
permalink: /notes/
title: "Notes"
layout: single
author_profile: true
---

This page organizes notes by **topic** (not by time).  
You can add, remove, or rename topics and entries by editing `_data/notes_topics.yml`.

{% for section in site.data.notes_topics %}
## {{ section.topic }}

{% if section.items and section.items.size > 0 %}
{% for item in section.items %}
- {{ item }}
{% endfor %}
{% else %}
- *(No entries yet)*
{% endif %}

{% endfor %}
