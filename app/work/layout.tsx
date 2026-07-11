import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selected Work · Client Engagements',
  description: 'Case studies of client engagements delivered end-to-end. Dutch care practice, Canadian education programme, enterprise AI, and more.',
  alternates: {
    canonical: 'https://hccoretech.com/work',
  },
  openGraph: {
    title: 'Selected Work · Client Engagements',
    description: 'Case studies of client engagements delivered end-to-end. Dutch care practice, Canadian education programme, enterprise AI, and more.',
    url: 'https://hccoretech.com/work',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Work · Client Engagements',
    description: 'Case studies of client engagements delivered end-to-end. Dutch care practice, Canadian education programme, enterprise AI, and more.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}