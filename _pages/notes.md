---
permalink: /notes/
title: "Notes"
layout: single
author_profile: true
---

This section contains structured technical notes, including derivations, theoretical connections, and research ideas across mechanics, mathematics, and related fields.

{% for section in site.data.notes_topics %}
<h2>{{ section.topic }}</h2>
<hr />

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
