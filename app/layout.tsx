import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'HC Core Tech . Production AI, real governance, websites that ship',
    template: '%s . HC Core Tech',
  },
  description: 'Engineering-grade AI, mapped to EU frameworks, delivered by one accountable engineer-founder. Independent Dutch practice building websites, AI systems, and AI governance programmes.',
  metadataBase: new URL('https://hccoretech.com'),
  authors: [{ name: 'Hilary Azimoh', url: 'https://hccoretech.com/about' }],
  creator: 'Hilary Azimoh',
  publisher: 'HC Core Tech',
  keywords: [
    'AI engineering',
    'AI governance',
    'EU AI Act',
    'NIST AI RMF',
    'ISO/IEC 42001',
    'GDPR compliance',
    'web development Netherlands',
    'Next.js development',
    'WordPress development',
    'multi-agent systems',
    'RAG pipelines',
    'Applied AI Engineer',
    'Netherlands AI consultant',
    'CoreDesk',
    'Hilary Azimoh',
  ],
  openGraph: {
    title: 'HC Core Tech',
    description: 'AI Engineering · AI Governance · Web Development. Built and operated by Hilary Azimoh, Netherlands.',
    url: 'https://hccoretech.com',
    siteName: 'HC Core Tech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HC Core Tech — Production AI, real governance, websites that ship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HC Core Tech',
    description: 'AI Engineering . AI Governance . Web Development. One accountable engineer.',
    creator: '@hccoretech',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hccoretech.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        {/* Vercel Analytics: cookieless, EU-safe, no consent banner needed.
            Does nothing in local dev — only reports when deployed to Vercel. */}
        <Analytics />
      </body>
    </html>
  )
}