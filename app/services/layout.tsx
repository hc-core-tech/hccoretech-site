import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Websites, AI engineering, AI governance, CoreDesk, and advisory. Fixed-scope engagements delivered by one accountable engineer.',
  alternates: {
    canonical: 'https://hccoretech.com/services',
  },
  openGraph: {
    title: 'Services',
    description: 'Websites, AI engineering, AI governance, CoreDesk, and advisory. Fixed-scope engagements delivered by one accountable engineer.',
    url: 'https://hccoretech.com/services',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services',
    description: 'Websites, AI engineering, AI governance, CoreDesk, and advisory. Fixed-scope engagements delivered by one accountable engineer.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}