import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-dm-serif',
})

export const viewport: Viewport = {
  themeColor: '#FFF5EB',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

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
  creator: 'Burien Best Care Home',
  publisher: 'Burien Best Care Home',
  metadataBase: new URL('https://burienbestcarehome.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Burien Best Care Home | Adult Family Home & Memory Care in Burien, WA',
    description:
      'Burien Best Care Home provides compassionate memory care and daily living assistance for seniors. Licensed adult family home in King County, WA with 24/7 care, home-cooked meals, and family-centered care.',
    url: 'https://burienbestcarehome.com',
    siteName: 'Burien Best Care Home',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burien Best Care Home | Adult Family Home & Memory Care in Burien, WA',
    description:
      'Compassionate memory care and daily living assistance in a warm, home-like environment for seniors in Burien, WA.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-cream text-forest min-h-screen font-sans antialiased">
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
