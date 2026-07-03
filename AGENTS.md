# AGENTS.md

Jekyll site (résumé/CV + blog). Content lives duplicated across 4 files — any
content or stat change must be applied to **all four**, kept in sync:

- `_config.yml` — English site content (homepage sections, injected as HTML in YAML)
- `_data/fr_site.yml` — French site content (same structure as above)
- `cv.md` — English standalone CV (Markdown)
- `fr/cv.md` — French standalone CV (Markdown)

English pair: `_config.yml` + `cv.md`. French pair: `_data/fr_site.yml` + `fr/cv.md`.
Same fact (e.g. plugin count, contribution count, job stat, personality type)
appears in all 4 — update every occurrence, not just the one you found first.

## Local dev

```bash
export PATH="$HOME/.local/share/gem/ruby/3.3.0/bin:$PATH"
bundle exec jekyll build          # writes _site/
bundle exec jekyll serve --no-watch   # --watch crashes on Ruby 3.3 (pathutil bug)
```

Ruby 3.3 needs a small compat shim for old `liquid`/`jekyll` gems (removed
`tainted?`/`untaint`/`webrick`). Preload via `RUBYOPT=-r<path-to-shim.rb>`.

## Logos

Company logos are inline `<svg>` (not `<img>`) so `fill="currentColor"` on the
wordmark can adapt to light/dark theme — `<img src="*.svg">` can't do this,
`currentColor` doesn't cross that boundary. Brand icons/marks keep their fixed
color; only alphabetic wordmarks get `currentColor`. Source `.svg` files live
in `images/` for reference even though the actual markup is inlined in the yml/md.
