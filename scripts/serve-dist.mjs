import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist');
const port = Number(process.argv[2] || 4322);
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.pdf', 'application/pdf'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.woff2', 'font/woff2']
]);

const resolvePath = (url) => {
  const pathname = decodeURIComponent(new URL(url, `http://127.0.0.1:${port}`).pathname);
  const clean = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const target = join(root, clean);
  try {
    const stats = statSync(target);
    if (stats.isDirectory()) return join(target, 'index.html');
    return target;
  } catch {
    if (!extname(target)) return join(target, 'index.html');
    return target;
  }
};

createServer((request, response) => {
  try {
    const file = resolvePath(request.url || '/');
    const stats = statSync(file);
    response.writeHead(200, {
      'content-type': types.get(extname(file)) || 'application/octet-stream',
      'content-length': stats.size,
      'cache-control': 'no-cache'
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`);
});
