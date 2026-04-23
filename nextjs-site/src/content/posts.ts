// Blog post registry
// Each post is a plain TypeScript object. Body is an array of paragraph-level
// blocks: { type: 'p' | 'h2' | 'h3' | 'ul' | 'quote', text | items }.
// This keeps the blog MVP dependency-free (no MDX pipeline, no markdown parser)
// and lets us render cleanly through a small Block renderer on the article route.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }

export interface Post {
  slug: string
  title: string
  description: string
  date: string // ISO date string
  author: string
  readingTime: string
  tags: string[]
  heroImage?: string
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: 'welcome-to-the-burien-best-care-home-blog',
    title: 'Welcome to the Burien Best Care Home blog',
    description:
      'A kickoff post about what we plan to publish here — practical, no-BS writing for families navigating senior care in King County.',
    date: '2026-04-23',
    author: 'Becca Pitts',
    readingTime: '3 min',
    tags: ['About', 'King County', 'Senior Care'],
    body: [
      {
        type: 'p',
        text: 'If you found this page, there\u2019s a reasonable chance you\u2019re in the middle of one of the hardest conversations a family ever has. You\u2019ve started to notice that your mom or dad needs more help than living alone can safely provide, and you\u2019re trying to figure out what to do next without losing your job, your sleep, or yourself in the process.',
      },
      {
        type: 'p',
        text: 'This blog exists for you. Not for Google, not for other adult family homes, not for industry insiders. For the adult child sitting on the couch at 11pm wondering whether the fall their parent took last week is going to happen again.',
      },
      { type: 'h2', text: 'What we plan to write about' },
      {
        type: 'p',
        text: 'We\u2019re going to focus on a few topics we hear about from every family that walks through our door:',
      },
      {
        type: 'ul',
        items: [
          'How to tell when it\u2019s time — the quiet signs most families miss until an emergency forces their hand.',
          'What "adult family home" actually means in Washington State, and how it\u2019s different from assisted living, memory care facilities, and nursing homes.',
          'How much senior care really costs in King County, and which payment options actually cover what.',
          'How to talk to a parent with dementia about a move — without breaking their trust or your own heart.',
          'What to look for when you tour any senior home, anywhere. Not just ours.',
        ],
      },
      { type: 'h2', text: 'How we\u2019ll write' },
      {
        type: 'p',
        text: 'Plainly. Honestly. Without the sanitized marketing voice that makes this industry sound like a brochure for a hotel you\u2019ll never want to stay in. The families we serve are in the middle of real grief and real logistics, and patronizing copy doesn\u2019t help anyone.',
      },
      {
        type: 'quote',
        text: 'Your parent deserves dignity. You deserve honesty. We try to give you both.',
        attribution: 'Becca Pitts, founder',
      },
      { type: 'h2', text: 'What you won\u2019t find here' },
      {
        type: 'p',
        text: 'Click-chasing headlines. Fear-based pitches. Articles written by people who have never actually sat with a family at the kitchen table and helped them think through whether Tuesday is the right day to move Grandpa. We\u2019ve done that work for years, and that\u2019s the knowledge we\u2019re writing from.',
      },
      { type: 'h2', text: 'Start here if you\u2019re in decision mode' },
      {
        type: 'p',
        text: 'If you\u2019re actively trying to figure out what to do for your parent right now, the most useful thing we can offer is a real conversation. You can schedule a visit to our home in Burien — no sales pitch, no pressure, just a tour and a cup of coffee. If that isn\u2019t where you are yet, keep reading. More posts coming soon.',
      },
    ],
  },
]

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
