---
title: Hello, world
date: 2026-11-11
description: A sample post that shows how writing is set up. Remove draft to publish.
draft: true
---

This is a sample post. Every post is one Markdown file in `content/posts`, and the filename becomes the URL.

## Frontmatter

Each file starts with a `title`, a `date` (YYYY-MM-DD) and a `description`. Add `draft: true` to keep a post out of the production build. Drafts still show up in `npm run dev`.

## Code

```ts
export function greet(name: string) {
  return `Hello, ${name}!`;
}
```

## Everything else

- Lists work.
- So do [links](https://leohong.dev), **bold** and *italic*.

| Feature | Supported |
| ------- | --------- |
| Tables  | Yes       |

> Quotes work too.
