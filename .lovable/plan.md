
# Complete SEO Infrastructure for FEIGRO Dakwerken

## Overview
This plan covers a comprehensive SEO implementation including an enhanced SEOHead component, structured data generators, dynamic sitemaps, breadcrumbs, performance optimizations, and more. The implementation will be organized in phases to ensure a modular, maintainable architecture.

---

## Phase 1: Enhanced SEOHead Component

### 1.1 Create New Type Definitions
**File:** `src/types/seo.ts`

Create comprehensive TypeScript interfaces for:
- `SEOHeadProps` - Full props interface with all supported options
- `ArticleMeta` - Article-specific metadata (published_time, modified_time, author, section, tags)
- `OpenGraphMeta` - Extended OG metadata
- `TwitterCardMeta` - Twitter card options
- `StructuredDataType` - Union type for all schema types
- `BreadcrumbItem` - For breadcrumb navigation
- `Author` - Person schema for articles
- `Review` and `AggregateRating` - For testimonials

### 1.2 Create SEOHead Component
**File:** `src/components/seo/SEOHead.tsx`

Replace the existing basic `SEO.tsx` with a comprehensive component:
- Accept all props with sensible defaults:
  - `title` (auto-suffix with " | FEIGRO Dakwerken")
  - `description` (max 160 chars validation, fallback default)
  - `keywords` (array of strings)
  - `canonicalUrl` (auto-generate from current path using `useLocation`)
  - `ogImage` (fallback to `/og/default.png`)
  - `ogType` (default: "website", support "article")
  - `noindex` (boolean, default false)
  - `structuredData` (JSON-LD array for multiple schemas)
- Include all meta tags:
  - Basic: title, description, keywords, robots, viewport, charset
  - Open Graph: full set including locale (nl_NL)
  - Twitter Cards: large image format
  - Canonical URL with proper normalization
- Article-specific support:
  - `article:published_time`, `article:modified_time`
  - `article:author`, `article:section`, `article:tag`
- Reading time estimation function based on word count
- Support for multiple authors

### 1.3 Canonical URL Utility
**File:** `src/lib/seo-utils.ts`

Create utility functions:
- `getCanonicalUrl(path, params)` - Constructs full canonical URL
  - Strips tracking params (?utm_*, ?ref=)
  - Normalizes to lowercase
  - Removes trailing slashes
  - Forces https and non-www
- `truncateDescription(text, maxLength)` - Safely truncate to 160 chars
- `estimateReadingTime(content)` - Calculate reading time from word count

---

## Phase 2: JSON-LD Structured Data Library

### 2.1 Create Schema Generators
**File:** `src/lib/structured-data.ts`

Create TypeScript functions that return properly typed JSON-LD objects:

1. **generateOrganizationSchema()** - For homepage/about
   - name, url, logo, sameAs (social profiles)
   - contactPoint with telephone numbers
   - address (Noord-Holland service area)

2. **generateWebsiteSchema()** - For homepage
   - name, url, potentialAction (SearchAction if site has search)

3. **generateWebPageSchema(page)** - For all pages
   - name, description, url, isPartOf (WebSite reference)

4. **generateBreadcrumbSchema(items)** - For non-homepage
   - Auto-generate from URL path or custom hierarchy
   - Proper position numbering

5. **generateArticleSchema(article)** - For blog posts
   - headline, description, image
   - datePublished, dateModified
   - author (Person schema)
   - publisher (Organization schema with logo)
   - mainEntityOfPage, articleSection, keywords

6. **generateFAQSchema(faqs)** - For FAQ sections
   - Array of Question/Answer pairs
   - Auto-generate from FAQItem[] type already in codebase

7. **generateLocalBusinessSchema()** - For FEIGRO
   - name, address, telephone, openingHours
   - areaServed (Noord-Holland, Flevoland, Utrecht)
   - priceRange

8. **generateAggregateRatingSchema(rating)** - For reviews
   - ratingValue, bestRating, worstRating
   - ratingCount, reviewCount

9. **generateReviewSchema(reviews)** - Individual reviews
   - author, datePublished, reviewBody, reviewRating

10. **injectMultipleSchemas(schemas[])** - Helper to combine multiple schemas

---

## Phase 3: Breadcrumb Component

### 3.1 Create Breadcrumb Component
**File:** `src/components/seo/Breadcrumb.tsx`

Features:
- Generates breadcrumbs from URL path or custom hierarchy prop
- Includes JSON-LD BreadcrumbList schema automatically
- Uses semantic `<nav>` element with `aria-label="Breadcrumb"`
- Links all items except current page (last item)
- Proper separator styling matching FEIGRO design
- Mobile-responsive (collapsible on small screens)

---

## Phase 4: Dynamic Sitemap System

### 4.1 Update Static Sitemap Index
**File:** `public/sitemap.xml`

Convert to sitemap index format:
```xml
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://feigro.nl/sitemap-static.xml</loc>
    <lastmod>2026-02-03</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://kcujsjibycqnngjhdzbp.supabase.co/functions/v1/sitemap-dynamic?type=projects</loc>
    <lastmod>2026-02-03</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://kcujsjibycqnngjhdzbp.supabase.co/functions/v1/sitemap-dynamic?type=nieuws</loc>
    <lastmod>2026-02-03</lastmod>
  </sitemap>
</sitemapindex>
```

### 4.2 Create Static Sitemap
**File:** `public/sitemap-static.xml`

Contains all static pages:
- Homepage, diensten, over-ons, contact, spoedservice, vacatures, cookies
- All service pages (dakinspectie, dakonderhoud, dakrenovatie, etc.)
- Proper lastmod, changefreq, and priority values

### 4.3 Create Dynamic Sitemap Edge Function
**File:** `supabase/functions/sitemap-dynamic/index.ts`

Features:
- Accept `type` parameter (projects, nieuws)
- Accept `page` parameter for pagination (if >50000 items)
- Query data in batches respecting the 1000 row limit
- Return proper XML with content-type header
- Include lastmod from data
- Canonical domain: https://feigro.nl

---

## Phase 5: Enhanced robots.txt

### 5.1 Update robots.txt
**File:** `public/robots.txt`

Updated configuration:
```text
# robots.txt for FEIGRO Dakwerken

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

# Block AI training bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /*?ref=
Disallow: /*?utm_*

# Sitemap
Sitemap: https://feigro.nl/sitemap.xml
```

---

## Phase 6: Open Graph Images Setup

### 6.1 Create OG Directory Structure
**Directory:** `public/og/`

Create placeholder structure for:
- `/og/default.png` - Site default (1200x630)
- `/og/home.png` - Homepage specific
- `/og/diensten.png` - Services page
- `/og/projecten.png` - Projects page
- `/og/contact.png` - Contact page
- `/og/over-ons.png` - About page
- `/og/spoedservice.png` - Emergency service
- `/og/nieuws.png` - News/blog section

### 6.2 OG Image Helper
**File:** `src/lib/og-images.ts`

Functions:
- `getOgImagePath(pageName)` - Returns page-specific OG image or default
- `getAbsoluteOgUrl(path)` - Returns full URL with domain

---

## Phase 7: SEO-Friendly Error Pages

### 7.1 Enhance NotFound Page
**File:** `src/pages/NotFound.tsx`

Already exists, enhance with:
- Add noindex meta tag via SEOHead
- Add navigation to main sections
- Add suggested popular content links
- Keep existing design

### 7.2 Create Error Page
**File:** `src/pages/Error.tsx`

For 500/generic errors:
- Helpful message without exposing errors
- Retry suggestion
- Contact info link
- noindex meta tag

---

## Phase 8: Internal Linking & Navigation Improvements

### 8.1 Create Related Content Component
**File:** `src/components/seo/RelatedContent.tsx`

Features:
- Links to 3-5 related pages/posts
- Descriptive anchor text (not "click here")
- Brief descriptions
- Styled to match FEIGRO design

### 8.2 Update FAQSection for Schema
Modify `src/components/sections/FAQSection.tsx`:
- Inject FAQPage JSON-LD schema automatically
- Use proper heading hierarchy

---

## Phase 9: Performance Optimizations

### 9.1 Add Resource Hints to index.html
**File:** `index.html`

Add to `<head>`:
```html
<!-- Preconnect to critical domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://kcujsjibycqnngjhdzbp.supabase.co">

<!-- Preload critical fonts -->
<link rel="preload" href="/src/assets/fonts/lustra-text-semi-bold.ttf" as="font" type="font/ttf" crossorigin>
```

### 9.2 Image Optimization Component
**File:** `src/components/ui/OptimizedImage.tsx`

Features:
- Lazy loading with native loading="lazy"
- Width/height attributes to prevent CLS
- Blur placeholder option
- WebP format preference

### 9.3 Core Web Vitals Monitoring
**File:** `src/lib/web-vitals.ts`

Log Core Web Vitals (LCP, FID/INP, CLS) for performance monitoring.

---

## Phase 10: Review & Rating Schema

### 10.1 Create Reviews Component with Schema
**File:** `src/components/seo/ReviewsWithSchema.tsx`

Features:
- Display testimonials with proper styling
- Generate AggregateRating and Review JSON-LD
- Star rating display with screen reader text
- Calculate aggregate dynamically

---

## Technical Details

### File Structure
```text
src/
  components/
    seo/
      SEOHead.tsx           # Main SEO component
      Breadcrumb.tsx        # Breadcrumb navigation
      RelatedContent.tsx    # Related pages/posts
      ReviewsWithSchema.tsx # Reviews with schema
  lib/
    seo-utils.ts           # Canonical URL, reading time, etc.
    structured-data.ts     # All JSON-LD generators
    og-images.ts           # OG image helpers
    web-vitals.ts          # Performance monitoring
  types/
    seo.ts                 # All SEO-related types
  pages/
    Error.tsx              # New error page
public/
  og/                      # OG images directory
  sitemap.xml              # Sitemap index
  sitemap-static.xml       # Static pages sitemap
  robots.txt               # Updated robots
supabase/
  functions/
    sitemap-dynamic/       # Dynamic sitemap generator
```

### Migration Strategy
1. Create new types and utilities first
2. Build SEOHead component
3. Gradually migrate pages from old SEO component
4. Add structured data to pages
5. Deploy edge function for dynamic sitemap
6. Update robots.txt and sitemap files

### Pages to Update
All pages will be updated to use the new SEOHead component:
- Index, OverOns, Projecten, ProjectDetail
- Diensten and all service pages
- Nieuws, BlogDetail
- Contact, Spoedservice, Vacatures
- Cookies, NotFound

### Custom OG Images Needed
Based on site structure:
1. `default.png` - FEIGRO branding, dakwerken imagery
2. `home.png` - Hero image with company name
3. `diensten.png` - Service overview imagery
4. `projecten.png` - Portfolio showcase
5. `contact.png` - Contact/communication theme
6. `over-ons.png` - Team/company story
7. `spoedservice.png` - Emergency/24-7 theme
8. `nieuws.png` - News/articles theme

---

## Summary

This implementation provides:
- Complete SEO meta tag management
- Rich structured data for search engines
- Dynamic sitemaps for scalability
- Proper breadcrumb navigation
- Performance optimizations
- Review/rating schema support
- SEO-friendly error handling

The modular approach ensures maintainability and allows for gradual rollout across all pages.
