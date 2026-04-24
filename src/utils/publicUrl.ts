/** Prefix for static assets under `public/` when `homepage` is set in package.json. */
export function publicUrl(path: string): string {
  const base = process.env.PUBLIC_URL || '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${encodeURI(normalized)}`;
}
