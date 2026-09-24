# Viachaslau Bohdan

Personal site for Viachaslau Bohdan, senior engineer for founders and CTOs. Slavaro Software remains the company site.

## Develop

```bash
pnpm install
pnpm dev
```

## Publish a blog post

Add a markdown file in `content/blog/`:

```md
---
title: Post title
description: One sentence for the index and social preview.
date: 2026-09-24
---

The post, written in markdown.
```

The filename becomes the URL: `content/blog/my-note.md` is `/blog/my-note`.

Set `draft: true` to keep a file out of the blog, the sitemap, and static generation. Remove that line when it is ready to publish.
