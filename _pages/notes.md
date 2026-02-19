---
permalink: /notes/
title: "Notes"
layout: single
author_profile: true
---

{% for section in site.data.notes_topics %}
# {{ section.topic }}

{% if section.items and section.items.size > 0 %}
{% for item in section.items %}
{% if item.title and item.url %}
- [{{ item.title }}]({{ item.url }})
{% else %}
- {{ item }}
{% endif %}
{% endfor %}
{% else %}
- *(No entries yet)*
{% endif %}

{% endfor %}
