import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://hccoretech.com/sitemap.xml',
    host: 'https://hccoretech.com',
  }
}