import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JS Zorg en Advies | Seraph Zorg . Case Study',
  description: 'Full brand system, two websites, and founding CoreDesk workspace for a Dutch trauma-informed care practice serving families after the toeslagenaffaire.',
  alternates: {
    canonical: 'https://hccoretech.com/work/seraph-zorg',
  },
  openGraph: {
    title: 'JS Zorg en Advies | Seraph Zorg . Case Study',
    description: 'Full brand system, two websites, and founding CoreDesk workspace for a Dutch trauma-informed care practice serving families after the toeslagenaffaire.',
    url: 'https://hccoretech.com/work/seraph-zorg',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JS Zorg en Advies | Seraph Zorg . Case Study',
    description: 'Full brand system, two websites, and founding CoreDesk workspace for a Dutch trauma-informed care practice serving families after the toeslagenaffaire.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}