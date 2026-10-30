import libraryHtml from '../index.html?raw';

// Preserve the standalone, accessible vanilla study app and its local-file copy.
export function GET() {
  return new Response(libraryHtml, {headers: {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff'}});
}
