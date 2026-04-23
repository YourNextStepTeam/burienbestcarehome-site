import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, type Block } from '@/content/posts'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'

const SITE_URL = 'https://burienbestcarehome.site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: 'Not found | Burien Best Care Home' }
  }
  return {
    title: `${post.title} | Burien Best Care Home`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'h2':
      return (
        <h2
          key={i}
          className="font-serif text-3xl md:text-4xl text-ink leading-tight mt-14 mb-5"
        >
          {b.text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={i}
          className="font-serif text-2xl md:text-3xl text-ink leading-tight mt-10 mb-4"
        >
          {b.text}
        </h3>
      )
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-base md:text-lg text-ink-soft leading-relaxed">
          {b.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote
          key={i}
          className="my-8 pl-6 border-l-4 border-sunshine italic text-lg md:text-xl text-ink leading-relaxed"
        >
          &ldquo;{b.text}&rdquo;
          {b.attribution && (
            <footer className="mt-2 text-sm not-italic text-ink-soft">&mdash; {b.attribution}</footer>
          )}
        </blockquote>
      )
    case 'p':
    default:
      return (
        <p key={i} className="text-base md:text-lg text-ink-soft leading-relaxed mb-5">
          {b.text}
        </p>
      )
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`

  return (
    <>
      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Person', name: post.author },
            publisher: {
              '@type': 'Organization',
              name: 'Burien Best Care Home',
              url: SITE_URL,
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            keywords: post.tags.join(', '),
            url,
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
              { '@type': 'ListItem', position: 3, name: post.title, item: url },
            ],
          }),
        }}
      />

      <article className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-sunshine-deep transition-colors mb-8"
            >
              &larr; Back to the blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5 text-xs uppercase tracking-widest text-ink-soft">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">&bull;</span>
              <span>{post.readingTime} read</span>
              <span aria-hidden="true">&bull;</span>
              <span>{post.author}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-10">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="inline-block text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-sunshine/15 text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose-wrap">{post.body.map(renderBlock)}</div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="solid" className="mt-16 p-8 md:p-12 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-4">
                Thinking about a home for your parent?
              </h2>
              <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-7 max-w-xl mx-auto">
                Come tour our home in Burien. Meet the team. Ask every question on your list. No pressure, no sales pitch.
              </p>
              <ScheduleVisitButton surface="on-white" />
            </GlassCard>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
