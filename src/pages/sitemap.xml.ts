import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
export const GET: APIRoute = async ({ site }) => {
  const paths = ['/', ...(await getCollection('projects')).map(p => `/work/${p.id}/`)];
  const escape = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${site ? paths.map(path => `<url><loc>${escape(new URL(path, site).href)}</loc></url>`).join('') : ''}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
