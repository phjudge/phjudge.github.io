---
title: EleventyOne
subtitle: A project scaffold for getting building with Eleventy quickly.
layout: layouts/base.njk
---

## This site is a starting point

From this point we should already have:

- [Eleventy](https://11ty.io) with a skeleton site
- A date format filter for Nunjucks
- A tiny inline Sass pipeline
- A tiny inline JS pipeline. (<a href="#" class="btn-log">Test a console.log message</a>)
- JS [search index](/search.json) generator
- Serverless (FaaS) development pipeline with Netlify Functions for Lambda

<!-- ## Post pages

The pages found in in the posts

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul> -->

## Projects

These projects were source from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

<ul class="listing">
{%- for item in googleSheet.data -%}
  {%- if 'project' in item.tags -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>

## Websites

These projects were source from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

<ul class="listing">
{%- for item in googleSheet.data -%}
  {%- if 'website' in item.tags -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>

## Graphics

These projects were source from [this Google Sheet](https://docs.google.com/spreadsheets/d/10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc/edit#gid=0) at build time.

<ul class="listing">
{%- for item in googleSheet.data -%}
  {%- if 'graphic' in item.tags -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>

The data can be stashed locally by running:

```
yarn run seed
```

It will then be available locally for building with:

```
yarn start
```
