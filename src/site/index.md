---
title: I'm Patrick Judge.
subtitle: Current doing digital things for [Better Government Association](https://www.bettergov.org/).
layout: layouts/base.njk
---

{%- macro projectList(tag) -%}

<ul class="listing">
{%- for item in googleSheet.data -%}
  {%- if tag in item.tags -%}
  <li>
  <figure>
    <img src="https://via.placeholder.com/300x200">
    <figcaption><a href="{{ item.link }}">{{ item.title }}</a></figcaption>
  </figure>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>
{%- endmacro -%}

## Projects

These projects were source from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

{{ projectList('project') }}

## Websites

These projects were source from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

{{ projectList('website') }}

## Graphics

These projects were source from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

{{ projectList('graphic') }}
