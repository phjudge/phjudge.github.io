---
title: I'm Patrick Judge.
subtitle: I'm currently doing digital things for the [Better Government Association](https://www.bettergov.org/), in Chicago, Illinois. <br><br> View [my resume](/assets/pjudge-resume.pdf) or [email me](mailto:pjudge95@gmail.com).
layout: layouts/base.njk
---

{%- macro projectList(tag) -%}

<ul class="listing">
{%- for item in googleSheet.data -%}
  {%- if tag in item.tags -%}
  <li>
  <figure>
    <a class="img" href="{{ item.link }}"><img src='{{ item.image | d("https://via.placeholder.com/300x200", true) }}'></a>
    <figcaption>
    <a href="{{ item.link }}"><strong>{{ item.title }}</strong></a><br>
    {{ item.description | md | safe }}<br></figcaption>
  </figure>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>
{%- endmacro -%}

{%- macro portfolioSection(tag) -%}

<div class="portfolio-section section-{{tag}}">

<div class="col-text">
{%- for section in googleSheet.sections -%}
  {%- if tag == section.tag -%}
  <h2>{{ section.title }}</h2>
  <p>{{ section.description }}</p>
  {%- endif -%}
{%- endfor -%}

<hr>

</div>

<div class="col-gallery">
  {{ projectList(tag) }}
  <hr>
</div>

</div>
{%- endmacro -%}

As the lone coder on staff for the [Better Government Association](https://www.bettergov.org/), a small and mighty nonprofit [nearly a century old](https://www.bettergov.org/history), I wear a lot of different hats: designer/developer, CMS engineer, and graphic journalist.

{{ portfolioSection('production') }}

{{ portfolioSection('website') }}

{{ portfolioSection('graphic') }}

In college, I was web editor for my student newspaper, the [Loyola Phoenix](http://www.loyolaphoenix.com/). I worked with editorial and business staff to redesign our WordPress site and kept digital operations afloat.
