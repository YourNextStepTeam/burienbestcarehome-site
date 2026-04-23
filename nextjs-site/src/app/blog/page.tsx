import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/content/posts'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Blog | Burien Best Care Home',
  description:
    'Honest writing for families navigating senior care in King County — practical guides, real-talk about cost and timing, and what to look for when you tour any adult family home.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Burien Best Care Home',
    description:
      'Honest writing for families navigating senior care in King County.',
    url: 'https://burienbestcarehome.site/blog',
    type: 'website',
  },
}

const SITE_URL = 'https://burienbestcarehome.site'

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <>
      {/* JSON-LD: Blog + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Burien Best Care Home Blog',
            url: `${SITE_URL}/blog`,
            description:
              'Honest writing for families navigating senior care in King County.',
            publisher: {
              '@type': 'Organization',
              name: 'Burien Best Care Home',
              url: SITE_URL,
            },
            blogPost: posts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              datePublished: p.date,
              url: `${SITE_URL}/blog/${p.slug}`,
              author: { '@type': 'Person', name: p.author },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-sunshine-deep mb-3">
              The Blog
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-6">
              Honest writing for families in{' '}
              <span className="text-sunshine-deep italic">decision mode</span>.
            </h1>
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
              Practical guides, real-talk about cost and timing, and what to look for when you tour any adult family home in King County &mdash; not just ours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Post list */}
      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-ink-soft">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-6 md:space-y-8">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.05}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group focus:outline-none focus-visible:ring-4 focus-visible:ring-sunshine/60 rounded-2xl"
                  >
                    <GlassCard variant="solid" className="p-6 md:p-10 transition-transform group-hover:-translate-y-0.5">
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-xs uppercase tracking-widest text-ink-soft">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span aria-hidden="true">&bull;</span>
                        <span>{post.readingTime} read</span>
                        <span aria-hidden="true">&bull;</span>
                        <span>{post.author}</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-3 group-hover:text-sunshine-deep transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-4">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-block text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-sunshine/15 text-ink-soft"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
