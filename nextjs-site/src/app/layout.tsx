import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Burien Best Care Home | Adult Family Home & Memory Care in Burien, WA',
    template: '%s | Burien Best Care Home',
  },
  description:
    'Burien Best Care Home provides compassionate memory care and daily living assistance for seniors. Licensed adult family home in King County, WA with 24/7 care, home-cooked meals, and family-centered care.',
  keywords: [
    'adult family home Burien',
    'memory care Burien WA',
    'senior care King County',
    'assisted living Burien Washington',
    'dementia care Burien',
  ],
  authors: [{ name: 'Burien Best Care Home' }],
  metadataBase: new URL('https://burienbestcarehome.com'),
  openGraph: {
    title: 'Burien Best Care Home | Adult Family Home & Memory Care in Burien, WA',
    description:
      'Burien Best Care Home provides compassionate memory care and daily living assistance for seniors. Licensed adult family home in King County, WA with 24/7 care, home-cooked meals, and family-centered care.',
    url: 'https://burienbestcarehome.com',
    siteName: 'Burien Best Care Home',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Burien Best Care Home',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-forest min-h-screen font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LoadingScreen />
        <Navigation />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
