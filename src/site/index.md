---
title: I'm Patrick Judge.
subtitle: I'm currently doing digital things for the [Better Government Association](https://www.bettergov.org/), in Chicago, Illinois. <br><br> View [my resume](#) or [email me](mailto:pjudge95@gmail.com).
layout: layouts/base.njk
---

{%- macro projectList(tag) -%}

<ul class="listing">
{%- for item in googleSheet.data -%}
  {%- if tag in item.tags -%}
  <li>
  <figure>
    <a class="img" href="{{ item.link }}"><img src="https://via.placeholder.com/300x200"></a>
    <figcaption><a href="{{ item.link }}">{{ item.title }}</a><br>{{ item.description | md | safe }}</figcaption>
  </figure>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>
{%- endmacro -%}

{%- macro portfolioSection(tag) -%}

<div class="portfolio-section">

<div class="col-text">
<h2>{{tag}}</h2>

These projects were sourced from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

<hr>

</div>

<div class="col-gallery">
  {{ projectList(tag) }}
  <hr>
</div>

</div>
{%- endmacro -%}

As the lone coder on staff for the [Better Government Association](https://www.bettergov.org/), a small but mighty nonprofit [nearly a century old](https://www.bettergov.org/history), I wear a lot of different hats: web app developer, CMS engineer, digital production designer, graphic journalist, and technical decision-maker.

{{ portfolioSection('production') }}

{{ portfolioSection('website') }}

{{ portfolioSection('graphic') }}

In college, I was web editor for my student newspaper, the [Loyola Phoenix](http://www.loyolaphoenix.com/). I worked with editorial and business staff to redesign our WordPress site and kept digital operations afloat.
