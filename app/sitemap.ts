import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://abdulahadfarooqiportfolio.vercel.app', lastModified: new Date() },
    { url: 'https://abdulahadfarooqiportfolio.vercel.app/about', lastModified: new Date() },
    { url: 'https://abdulahadfarooqiportfolio.vercel.app/skills', lastModified: new Date() },
    { url: 'https://abdulahadfarooqiportfolio.vercel.app/projects', lastModified: new Date() },
    { url: 'https://abdulahadfarooqiportfolio.vercel.app/contact', lastModified: new Date() },
  ]
}