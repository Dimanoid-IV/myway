#!/usr/bin/env node
/**
 * Generates 50 SEO-optimized static blog articles for MyWayTo.Space
 * Run: node scripts/generate-seo-blog.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE, CATEGORIES } from './seo-site-config.mjs';
import { ARTICLES } from './seo-articles.mjs';
import { expandSections, expandFaq } from './seo-content-expander.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'blog');
const POSTS_DIR = path.join(OUT_DIR, 'posts');

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function buildDescription(article) {
  if (article.description) return article.description.slice(0, 160);
  return `Expert guide to ${article.primaryKeyword}: U.S. declassified UAP files, AARO reports, and space-ticket booking at ${SITE.name}.`.slice(0, 160);
}

function renderArticleHtml(article, allSlugs) {
  const sections = expandSections(article);
  const faq = expandFaq(article);
  const url = `${SITE.url}/blog/posts/${article.slug}.html`;
  const cat = CATEGORIES[article.category] || { label: 'Blog', slug: 'blog' };
  const description = buildDescription(article);
  const bodyText = sections.flatMap((s) => s.paragraphs).join(' ');
  const words = wordCount(bodyText + faq.map((f) => f.a).join(' '));
  const readingMin = Math.max(5, Math.round(words / 200));

  const related = (article.relatedSlugs || [])
    .filter((s) => allSlugs.has(s))
    .slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog/` },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
      {
        '@type': 'Article',
        headline: article.title,
        description,
        image: SITE.ogImage,
        datePublished: article.publishDate,
        dateModified: article.publishDate,
        author: { '@type': 'Organization', name: SITE.author },
        publisher: {
          '@type': 'Organization',
          name: SITE.name,
          logo: { '@type': 'ImageObject', url: SITE.ogImage },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        keywords: article.keywords.join(', '),
        articleSection: cat.label,
        wordCount: words,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  const sectionHtml = sections
    .map(
      (sec) => `
    <section>
      <h2>${escapeHtml(sec.heading)}</h2>
      ${sec.paragraphs.map((para) => `<p>${escapeHtml(para)}</p>`).join('\n      ')}
    </section>`
    )
    .join('\n');

  const faqHtml = faq
    .map(
      (item) => `
      <details class="faq-item">
        <summary><h3>${escapeHtml(item.q)}</h3></summary>
        <p>${escapeHtml(item.a)}</p>
      </details>`
    )
    .join('');

  const relatedHtml = related.length
    ? `<section class="related">
      <h2>Related articles</h2>
      <ul>${related.map((s) => `<li><a href="/blog/posts/${s}.html">${escapeHtml(s.replace(/-/g, ' '))}</a></li>`).join('')}</ul>
    </section>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(article.title)} | ${SITE.name}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="keywords" content="${escapeHtml(article.keywords.join(', '))}">
  <meta name="author" content="${escapeHtml(SITE.author)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(article.title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${SITE.ogImage}">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="article:published_time" content="${article.publishDate}">
  <meta property="article:section" content="${escapeHtml(cat.label)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(article.title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${SITE.ogImage}">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <link rel="stylesheet" href="/blog/blog.css">
</head>
<body>
  <header class="site-header">
    <nav aria-label="Primary">
      <a href="${SITE.url}">Home</a>
      <a href="/blog/">Blog</a>
      <a href="${SITE.url}/#tickets">Book Tickets</a>
    </nav>
  </header>
  <main class="article">
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <a href="${SITE.url}">Home</a> › <a href="/blog/">Blog</a> › <span>${escapeHtml(cat.label)}</span>
    </nav>
    <article>
      <header>
        <p class="meta"><span class="category">${escapeHtml(cat.label)}</span> · ${article.publishDate} · ${readingMin} min read · ~${words} words</p>
        <h1>${escapeHtml(article.title)}</h1>
        <p class="lead">${escapeHtml(description)}</p>
      </header>
      ${sectionHtml}
      <section class="faq">
        <h2>Frequently asked questions</h2>
        ${faqHtml}
      </section>
      ${relatedHtml}
      <aside class="cta">
        <h2>Book your voyage</h2>
        <p>Turn curiosity about U.S. UAP transparency into a ticketed space experience — Economy Orbit from $10, Alien VIP from $25.</p>
        <p><a class="btn" href="${SITE.url}/#tickets">View tickets at ${SITE.name}</a></p>
      </aside>
      <footer class="article-footer">
        <p>Sources: <a href="https://www.war.gov/UFO/" rel="noopener noreferrer">war.gov/UFO</a>, <a href="https://www.aaro.mil/" rel="noopener noreferrer">AARO.mil</a>, ODNI AARO reports. Educational content; not government affiliated.</p>
      </footer>
    </article>
  </main>
  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${SITE.name}. <a href="${SITE.url}/privacy">Privacy</a></p>
  </footer>
</body>
</html>`;
}

function renderBlogIndex(articles) {
  const byCat = {};
  for (const a of articles) {
    if (!byCat[a.category]) byCat[a.category] = [];
    byCat[a.category].push(a);
  }

  const catBlocks = Object.entries(byCat)
    .map(([key, list]) => {
      const label = CATEGORIES[key]?.label || key;
      const items = list
        .map(
          (a) =>
            `<li><a href="/blog/posts/${a.slug}.html">${escapeHtml(a.title)}</a><span class="date">${a.publishDate}</span></li>`
        )
        .join('\n');
      return `<section><h2>${escapeHtml(label)}</h2><ul class="post-list">${items}</ul></section>`;
    })
    .join('\n');

  const url = `${SITE.url}/blog/`;
  const description =
    '50+ SEO guides on U.S. UFO/UAP declassification (PURSUE, AARO, Grusch, Apollo files) and alien spacecraft tickets at MyWayTo.Space.';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UAP & UFO Disclosure Blog (50 Articles) | ${SITE.name}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="application/rss+xml" title="${SITE.name} RSS" href="/rss.xml">
  <meta property="og:title" content="UAP Disclosure Blog | ${SITE.name}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${url}">
  <link rel="stylesheet" href="/blog/blog.css">
</head>
<body>
  <header class="site-header">
    <nav><a href="${SITE.url}">Home</a> <a href="/blog/">Blog</a> <a href="${SITE.url}/#tickets">Tickets</a></nav>
  </header>
  <main class="blog-index">
    <h1>UAP, UFO Disclosure & Space Travel Blog</h1>
    <p class="lead">${escapeHtml(description)}</p>
    <p>Covering <strong>war.gov/UFO</strong>, <strong>PURSUE</strong>, <strong>AARO 2024 reports</strong>, <strong>KONA BLUE</strong>, <strong>David Grusch</strong>, Apollo anomalies, and ticket guides — optimized for Google search intent.</p>
    ${catBlocks}
  </main>
  <footer class="site-footer"><p>© ${new Date().getFullYear()} ${SITE.name}</p></footer>
</body>
</html>`;
}

function renderSitemap(articles) {
  const urls = [
    { loc: SITE.url + '/', priority: '1.0' },
    { loc: SITE.url + '/blog/', priority: '0.9' },
    // /privacy is a client-side route; included after vercel rewrite to index.html
    { loc: SITE.url + '/privacy', priority: '0.3' },
    ...articles.map((a) => ({
      loc: `${SITE.url}/blog/posts/${a.slug}.html`,
      priority: '0.8',
    })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
}

function renderBlogCss() {
  return `:root {
  --bg: #050508;
  --text: #e8e8f0;
  --muted: #9ca3af;
  --accent: #7c3aed;
  --card: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.12);
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); line-height: 1.65; }
a { color: #a78bfa; }
.site-header, .site-footer { padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); }
.site-footer { border-top: 1px solid var(--border); border-bottom: none; margin-top: 3rem; }
.site-header nav { display: flex; gap: 1.25rem; flex-wrap: wrap; }
main { max-width: 720px; margin: 0 auto; padding: 1.5rem; }
h1 { font-size: 1.85rem; line-height: 1.2; }
h2 { font-size: 1.35rem; margin-top: 2rem; color: #fff; }
h3 { font-size: 1.05rem; display: inline; }
.lead { font-size: 1.1rem; color: var(--muted); }
.meta { color: var(--muted); font-size: 0.9rem; }
.category { color: var(--accent); font-weight: 600; }
section { margin-bottom: 1.5rem; }
.faq-item { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 0.75rem; }
.faq-item summary { cursor: pointer; list-style: none; }
.cta { background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.15)); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; margin: 2rem 0; }
.btn { display: inline-block; background: var(--accent); color: #fff; padding: 0.65rem 1.25rem; border-radius: 8px; text-decoration: none; font-weight: 600; }
.post-list { list-style: none; padding: 0; }
.post-list li { margin-bottom: 0.65rem; display: flex; flex-direction: column; gap: 0.15rem; }
.post-list .date { font-size: 0.8rem; color: var(--muted); }
.blog-index section { margin-top: 2rem; }
`;
}

// --- main ---
fs.mkdirSync(POSTS_DIR, { recursive: true });
const slugSet = new Set(ARTICLES.map((a) => a.slug));

console.log(`Generating ${ARTICLES.length} SEO articles...`);
for (const article of ARTICLES) {
  const html = renderArticleHtml(article, slugSet);
  const outPath = path.join(POSTS_DIR, `${article.slug}.html`);
  fs.writeFileSync(outPath, html, 'utf8');
}

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderBlogIndex(ARTICLES), 'utf8');
fs.writeFileSync(path.join(OUT_DIR, 'blog.css'), renderBlogCss(), 'utf8');
fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), renderSitemap(ARTICLES), 'utf8');
fs.writeFileSync(path.join(ROOT, 'public', 'robots.txt'), renderRobots(), 'utf8');

function renderRss(articles) {
  const items = articles
    .map(
      (a) => `
    <item>
      <title>${escapeHtml(a.title)}</title>
      <link>${SITE.url}/blog/posts/${a.slug}.html</link>
      <guid isPermaLink="true">${SITE.url}/blog/posts/${a.slug}.html</guid>
      <pubDate>${new Date(a.publishDate).toUTCString()}</pubDate>
      <description>${escapeHtml(buildDescription(a))}</description>
    </item>`
    )
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE.name} UAP Blog</title>
    <link>${SITE.url}/blog/</link>
    <description>${escapeHtml(SITE.description)}</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;
}

fs.writeFileSync(path.join(ROOT, 'public', 'rss.xml'), renderRss(ARTICLES), 'utf8');

// manifest for React
fs.writeFileSync(
  path.join(ROOT, 'src', 'blog-manifest.json'),
  JSON.stringify(
    ARTICLES.map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.category,
      publishDate: a.publishDate,
      primaryKeyword: a.primaryKeyword,
    })),
    null,
    2
  ),
  'utf8'
);

console.log(`Done. Posts: ${POSTS_DIR}`);
console.log(`Sitemap: public/sitemap.xml`);
