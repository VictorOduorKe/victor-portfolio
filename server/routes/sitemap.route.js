import express from 'express';

const router = express.Router();

router.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');

  const urls = [
    '/',
    '/about',
    '/contact',
    '/projects',
    '/skills',
    '/resume',
    '/blogs'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
      <url>
        <loc>https://victor-portfolio-qqer.onrender.com${url}</loc>
      </url>
    `).join('')}
  </urlset>`;

  res.send(sitemap);
});

export default router;