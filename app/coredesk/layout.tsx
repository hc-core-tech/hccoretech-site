import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CoreDesk . AI Back Office for Independent Practitioners',
  description: 'The AI-first back office platform for solo practitioners and small teams. Invoicing, CRM, meetings, agents, and governance in one workspace.',
  alternates: {
    canonical: 'https://hccoretech.com/coredesk',
  },
  openGraph: {
    title: 'CoreDesk . AI Back Office for Independent Practitioners',
    description: 'The AI-first back office platform for solo practitioners and small teams. Invoicing, CRM, meetings, agents, and governance in one workspace.',
    url: 'https://hccoretech.com/coredesk',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreDesk . AI Back Office for Independent Practitioners',
    description: 'The AI-first back office platform for solo practitioners and small teams. Invoicing, CRM, meetings, agents, and governance in one workspace.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}