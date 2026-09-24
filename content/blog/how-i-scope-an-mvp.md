---
title: How I scope an MVP
description: A short way to cut a product idea down to the version that can actually launch.
date: 2026-09-09
draft: true
---

An MVP is the smallest version that lets a real user finish the job you are betting on. Everything else is a later release, even if it feels essential in the first conversation.

I start from the job, not the feature list. Who is the user, what do they do today, and what has to be true on day one for this to replace that? If the answer needs five roles, three integrations, and a reporting suite, we are not scoping an MVP yet.

The cut usually looks like this:

- One primary user and one core workflow.
- Authentication only as far as that workflow requires.
- The data you must not lose, and nothing speculative.
- Admin screens only where you would otherwise be editing the database by hand.
- A production deploy, because a demo on a laptop is not a launch.

I would rather ship that slice in weeks and learn from it than spend a quarter building the product you think you will need after the first ten customers.
