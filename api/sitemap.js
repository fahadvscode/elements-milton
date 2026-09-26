const XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://elements-milton.ca/</loc>
    <lastmod>2026-09-26</lastmod>
  </url>
  <url>
    <loc>https://elements-milton.ca/privacy.html</loc>
    <lastmod>2026-09-26</lastmod>
  </url>
  <url>
    <loc>https://elements-milton.ca/terms.html</loc>
    <lastmod>2026-09-26</lastmod>
  </url>
</urlset>
`

module.exports = function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.status(405).setHeader('Allow', 'GET, HEAD').end()
    return
  }
  res.setHeader('Content-Type', 'application/xml; charset=UTF-8')
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
  res.status(200).send(XML)
}
