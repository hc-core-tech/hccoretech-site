import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ . Frequently Asked Questions',
  description: 'Common questions about working with HC Core Tech. Pricing, engagement process, one-person practice, NDA, response times.',
  alternates: {
    canonical: 'https://hccoretech.com/faq',
  },
  openGraph: {
    title: 'FAQ . Frequently Asked Questions',
    description: 'Common questions about working with HC Core Tech. Pricing, engagement process, one-person practice, NDA, response times.',
    url: 'https://hccoretech.com/faq',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ . Frequently Asked Questions',
    description: 'Common questions about working with HC Core Tech. Pricing, engagement process, one-person practice, NDA, response times.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}