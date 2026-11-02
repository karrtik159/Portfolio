// Generates the Writing cards on /learning/ and one static page per local article.
// Zero dependencies. Run: node scripts/build-learning.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "content", "learning");
const outDir = join(root, "public", "learning");
const SITE = "https://karrtik159.github.io/Portfolio/learning/";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/karrtik-baheti";
const TYPES = ["article", "linkedin", "site"];

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const fail = (msg) => {
  console.error(`build-learning: ${msg}`);
  process.exit(1);
};

const articles = JSON.parse(readFileSync(join(contentDir, "articles.json"), "utf8"));
const seen = new Set();
for (const a of articles) {
  for (const k of ["slug", "type", "title", "summary", "date"]) {
    if (!a[k]) fail(`entry ${JSON.stringify(a.slug || a.title)} is missing "${k}"`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.slug)) fail(`bad slug "${a.slug}"`);
  if (seen.has(a.slug)) fail(`duplicate slug "${a.slug}"`);
  seen.add(a.slug);
  if (!TYPES.includes(a.type)) fail(`"${a.slug}": type must be one of ${TYPES.join(", ")}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(a.date)) fail(`"${a.slug}": date must be YYYY-MM-DD`);
  if (a.type !== "article" && !a.url) fail(`"${a.slug}": ${a.type} entries need a url`);
  if (a.type === "linkedin" && !/^https:\/\/(www\.)?linkedin\.com\//.test(a.url)) {
    fail(`"${a.slug}": linkedin url must start with https://www.linkedin.com/`);
  }
  if (a.type === "article" && !existsSync(join(contentDir, `${a.slug}.html`))) {
    fail(`"${a.slug}": missing content/learning/${a.slug}.html`);
  }
}
articles.sort((x, y) => y.date.localeCompare(x.date));

const fmt = (d) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
const where = { article: "On this site", linkedin: "On LinkedIn", site: "Mini-site" };
const href = (a) => (a.type === "article" ? `${a.slug}/` : a.url);
const external = (a) => a.type === "linkedin" || /^https?:\/\//.test(a.url || "");

// ---- cards in the hub ----
const cards = articles
  .map(
    (a) => `          <a class="read rise" href="${esc(href(a))}"${external(a) ? ' target="_blank" rel="noreferrer"' : ""}>
            <h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p>
            <p class="meta">${where[a.type]} · ${fmt(a.date)}</p>
          </a>`,
  )
  .join("\n");

const hubPath = join(outDir, "index.html");
let hub = readFileSync(hubPath, "utf8");
const START = "<!-- ARTICLES:START -->";
const END = "<!-- ARTICLES:END -->";
const a0 = hub.indexOf(START);
const a1 = hub.indexOf(END);
if (a0 < 0 || a1 < 0) fail("markers missing in public/learning/index.html");
hub = hub.slice(0, a0 + START.length) + "\n" + cards + "\n" + hub.slice(a1);
writeFileSync(hubPath, hub);

// ---- article pages (the shared template every article inherits) ----
const page = (a, body) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(a.title)} | Karrtik Baheti</title>
  <meta name="description" content="${esc(a.summary)}">
  <link rel="canonical" href="${SITE}${a.slug}/">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(a.title)}">
  <meta property="og:description" content="${esc(a.summary)}">
  <meta property="og:url" content="${SITE}${a.slug}/">
  <meta property="article:published_time" content="${a.date}">
  <meta name="theme-color" content="#b94027">
  <link rel="icon" href="../../favicon-32x32.png" sizes="32x32">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Outfit:wght@600;700&display=swap">
  <link rel="stylesheet" href="../learning.css">
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <div class="wrap">
    <header class="bar">
      <a class="wordmark" href="../../" aria-label="Karrtik Baheti, back to portfolio">kb<span>.</span></a>
      <nav aria-label="Main">
        <a href="../#writing">All writing</a>
        <a class="btn" href="${LINKEDIN_PROFILE}" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
      </nav>
    </header>
  </div>
  <main id="main">
    <article class="wrap article">
      <p class="back"><a class="textlink" href="../#writing">Back to learning</a></p>
      <h1>${esc(a.title)}</h1>
      <p class="byline">Karrtik Baheti · ${fmt(a.date)}</p>
      <div class="prose">
${body}
      </div>
    </article>
  </main>
  <footer class="close">
    <div class="wrap">
      <p class="big">Let’s talk.</p>
      <div class="links">
        <a href="${LINKEDIN_PROFILE}" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/karrtik159" target="_blank" rel="noreferrer">GitHub</a>
        <a href="../">Learning</a>
        <a href="../../">Portfolio</a>
      </div>
    </div>
  </footer>
</body>
</html>
`;

let made = 0;
for (const a of articles.filter((x) => x.type === "article")) {
  const body = readFileSync(join(contentDir, `${a.slug}.html`), "utf8").trim();
  const dir = join(outDir, a.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), page(a, body));
  made++;
}
console.log(`build-learning: ${articles.length} entries, ${made} article page(s)`);
