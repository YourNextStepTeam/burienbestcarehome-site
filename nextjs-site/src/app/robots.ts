import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://burienbestcarehome.com'

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production'

  // On non-production deploys (PR previews, branch builds), disallow all
  // crawling so preview URLs don't get indexed.
  if (!isProduction) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
