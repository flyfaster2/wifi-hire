import { MetadataRoute } from 'next'

const base = 'https://www.flexiwifi.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/devices/pocket-mifi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/devices/home-router`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/delivery-and-returns`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/rental-agreement`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
