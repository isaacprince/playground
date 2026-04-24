/**
 * After CRA build, replace __PRINCE_PORTFOLIO_ORIGIN__ in build/index.html so og:image /
 * twitter:image use absolute URLs on Vercel (VERCEL_URL) or REACT_APP_CANONICAL_URL.
 */
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'build', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.warn('inject-og-origin: build/index.html missing, skip');
  process.exit(0);
}

let html = fs.readFileSync(indexPath, 'utf8');
const raw =
  process.env.REACT_APP_CANONICAL_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');
const origin = raw.replace(/\/$/, '');

html = html.replace(/__PRINCE_PORTFOLIO_ORIGIN__/g, origin);
fs.writeFileSync(indexPath, html);
console.log(
  `inject-og-origin: OG base set to "${origin || '(root-relative / paths only)'}"`
);
