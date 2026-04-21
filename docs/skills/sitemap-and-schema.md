# Skill: Sitemap & Schema

Generate/update sitemap.xml, robots.txt, and structured data for SEO.

## When to trigger
- After adding new pages (sitemap needs updating)
- SEO audit flags missing technical SEO files
- First-time setup (currently missing — this is a critical gap)

## Steps

### 1. Sitemap.xml

Create/update `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/svg/sitemap/0.9">
  <url><loc>https://DOMAIN/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://DOMAIN/panchang</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://DOMAIN/rashi-calculator</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <!-- Add entry for every public page -->
</urlset>
```
Replace DOMAIN with the actual domain once configured. Use `changefreq: daily` for pages with daily content, `monthly` for static pages.

### 2. Robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://DOMAIN/sitemap.xml
```

### 3. Schema.org structured data

Add to `src/layouts/Layout.astro` `<head>`:

**WebSite schema** (all pages):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HoroTalk",
  "url": "https://DOMAIN",
  "description": "AI-powered Vedic astrology on WhatsApp"
}
</script>
```

**FAQPage schema** (pricing page):
Add FAQ structured data for the pricing FAQ section.

**Article schema** (blog posts, when created):
Add Article structured data with datePublished, author, headline.

### 4. OG meta tags

Add to `src/layouts/Layout.astro` `<head>`:
```html
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="/logo.png" />
<meta property="og:site_name" content="HoroTalk" />
<meta name="twitter:card" content="summary" />
```

### 5. Verify
- Build the site and check that sitemap.xml and robots.txt are in `dist/`
- Validate sitemap at a sitemap validator
- Test OG tags by pasting a page URL in WhatsApp/Twitter — preview should show title + image
