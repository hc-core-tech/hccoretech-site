import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Notices . Terms, Privacy, DPA',
  description: 'Terms of Service, Privacy Policy, and Data Processing Agreement for HC Core Tech engagements. Dutch law, GDPR-aligned.',
  alternates: {
    canonical: 'https://hccoretech.com/legal',
  },
  openGraph: {
    title: 'Legal Notices . Terms, Privacy, DPA',
    description: 'Terms of Service, Privacy Policy, and Data Processing Agreement for HC Core Tech engagements. Dutch law, GDPR-aligned.',
    url: 'https://hccoretech.com/legal',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Notices . Terms, Privacy, DPA',
    description: 'Terms of Service, Privacy Policy, and Data Processing Agreement for HC Core Tech engagements. Dutch law, GDPR-aligned.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}