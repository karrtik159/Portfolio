# Learning articles

`articles.json` is the single list that feeds the Writing section on `/learning/`.
`npm run build:learning` (also run by `npm start` and `npm run build`) regenerates the cards and the article pages.

## Entry types

| type       | needs                                | result                                   |
| ---------- | ------------------------------------ | ---------------------------------------- |
| `article`  | `content/learning/<slug>.html` body  | page at `/learning/<slug>/`    |
| `linkedin` | `url` starting with `https://www.linkedin.com/` | card that opens LinkedIn in a new tab |
| `site`     | `url` (relative or https)            | card linking to another page or mini-site |

Common fields: `slug` (lowercase, dashes), `title`, `summary` (one sentence), `date` (YYYY-MM-DD), optional `tags`.

## Add a LinkedIn article

```json
{
  "slug": "my-linkedin-post",
  "type": "linkedin",
  "title": "The title as it appears on LinkedIn",
  "summary": "One sentence on what it covers.",
  "date": "2026-11-10",
  "url": "https://www.linkedin.com/pulse/..."
}
```

## Write a local article

1. Add an `article` entry to `articles.json`.
2. Create `content/learning/<slug>.html` containing only the body: `<p>`, `<h2>`, `<ul>`, `<blockquote>`, `<pre><code>`, links.
3. Run `npm run build:learning`.

The page chrome (header, fonts, footer, LinkedIn button, meta tags) comes from `scripts/build-learning.mjs`, so every article inherits it.
Generated folders under `public/learning/<slug>/` are git-ignored.
