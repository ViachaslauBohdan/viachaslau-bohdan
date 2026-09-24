---
title: When a prototype is not a product
description: AI-built and half-finished prototypes fail in the same places. Here is how I decide what to keep and what to replace.
date: 2026-08-26
draft: true
---

A prototype proves that a flow can exist. A product proves that strangers can use it on a Tuesday without you in the room.

I see the same gap in AI-generated apps and in MVPs whose developer left. The screens look finished. Under them: no real auth, data that only works for the demo account, payments sketched in, and no one who can explain the data model.

Before writing more features, I look for four things:

1. Can a new user sign up and complete the one job the product is for?
2. Is the data model something you would still accept in six months?
3. What breaks if two people use it at once, or if a payment fails?
4. Can someone other than the original author deploy it?

Sometimes the right move is to keep the interface and replace the backend. Sometimes the prototype is a spec, and the software should be written again on purpose. The expensive mistake is treating generated code as a foundation because it already looks like the product.
