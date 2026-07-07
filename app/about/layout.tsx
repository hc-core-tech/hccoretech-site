import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hilary Azimoh . Applied AI Engineer',
  description: 'Applied AI Engineer building websites, AI systems, and the governance behind both. Amsterdam-based, serving clients in the NL, EU, and beyond.',
  alternates: {
    canonical: 'https://hccoretech.com/about',
  },
  openGraph: {
    title: 'About Hilary Azimoh . Applied AI Engineer',
    description: 'Applied AI Engineer building websites, AI systems, and the governance behind both. Amsterdam-based, serving clients in the NL, EU, and beyond.',
    url: 'https://hccoretech.com/about',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hilary Azimoh . Applied AI Engineer',
    description: 'Applied AI Engineer building websites, AI systems, and the governance behind both. Amsterdam-based, serving clients in the NL, EU, and beyond.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}