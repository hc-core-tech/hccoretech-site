import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process . How I Deliver Engagements',
  description: 'Written scoping, direct engineer access, versioned artifacts, clean walk-away. The four principles behind every engagement.',
  alternates: {
    canonical: 'https://hccoretech.com/process',
  },
  openGraph: {
    title: 'Process . How I Deliver Engagements',
    description: 'Written scoping, direct engineer access, versioned artifacts, clean walk-away. The four principles behind every engagement.',
    url: 'https://hccoretech.com/process',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process . How I Deliver Engagements',
    description: 'Written scoping, direct engineer access, versioned artifacts, clean walk-away. The four principles behind every engagement.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}