import type { MetadataRoute } from 'next'

const BASE = 'https://hccoretech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    // Homepage — highest priority
    { url: `${BASE}`,                                             lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    // Core service + product pages
    { url: `${BASE}/services`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/coredesk`,                                    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/about`,                                       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Case studies
    { url: `${BASE}/work`,                                        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work/seraph-zorg`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/work/magnifying-childrens-horizons`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Support pages
    { url: `${BASE}/faq`,                                         lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,                                     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/legal`,                                       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}