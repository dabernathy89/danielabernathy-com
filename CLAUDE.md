# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server:**
```bash
npm run dev
# Runs on localhost:4321
```

**Build and validate:**
```bash
npm run build
# Runs: astro check && astro build && pagefind --site dist && cp -r dist/pagefind public/
```

**Type checking:**
```bash
npm run check
# or: astro check
```

**Code formatting:**
```bash
npm run format
# Runs prettier --write . --cache
```

**Linting:**
```bash
npm run lint
# Runs eslint with Astro-specific rules
```

## Architecture Overview

This is an **AstroPaper** blog theme built on Astro 5.x with TypeScript and TailwindCSS 4.x. The architecture follows a content-first approach with static generation.

### Key Configuration Files

- `src/config.ts` - Site configuration, feature flags, and settings
- `src/content.config.ts` - Content collection schema with Zod validation
- `astro.config.ts` - Astro configuration with integrations and build settings

### Content Management

**Blog posts location:** `src/data/blog/` (not in pages directory)

**Content filtering patterns:**
- Files starting with `_` are excluded from collections (drafts/releases)
- Draft posts are hidden in production via `postFilter.ts`
- Scheduled posts use timezone support (America/Chicago) with 15-minute margin

**Post frontmatter schema:**
```yaml
title: string
author: string (optional, defaults to config)
pubDatetime: Date
modDatetime: Date (optional)
featured: boolean (optional)
draft: boolean (optional)
tags: string[]
description: string
canonicalURL: string (optional)
ogImage: string (optional)
```

### Layout Architecture

- `Layout.astro` - Base HTML document with SEO meta tags
- `Main.astro` - Content wrapper for pages
- `PostDetails.astro` - Individual blog post layout
- `PageLayout.astro` - Standard page layout

### Build Process

1. **Type checking** with `astro check`
2. **Static generation** with `astro build`
3. **Search indexing** with Pagefind
4. **Asset copying** for search functionality

### Key Features

**Search:** Uses Pagefind for client-side fuzzy search. Index is generated post-build and copied to public directory.

**OG Images:** Dynamic generation using Satori for individual posts via `src/pages/posts/[...slug]/index.png.ts`

**Navigation:** Dynamic breadcrumbs with active state detection. Archives page is conditional based on config.

**SEO:** Comprehensive meta tags, OpenGraph, Twitter Cards, JSON-LD, and RSS with auto-discovery.

### Content Processing Pipeline

1. Content loaded via glob patterns in `content.config.ts`
2. Filtered through `postFilter.ts` for drafts and scheduling
3. Sorted by `getSortedPosts.ts` using modified/published dates
4. Paginated with configurable posts per page (default: 4)

### Development Patterns

- **Component organization:** Atomic design in `/src/components/`
- **Utilities:** Helper functions in `/src/utils/`
- **Styling:** TailwindCSS with custom configuration and typography plugin
- **Icons:** SVG components from Tabler icons in `/src/assets/icons/`

### Important Notes

- The build process includes search index generation - don't skip the full build command
- Content collections require server restart when adding new files
- Feature flags in `src/config.ts` control major functionality (search, archives, edit links)
- Timezone handling is configured for America/Chicago with scheduled post support