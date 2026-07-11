import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnifying Children\'s Horizons · Case Study',
  description: 'Two-site build for a values-led children\'s education programme and its founder\'s author companion. Forest and sunlight-gold brand, no AI imagery.',
  alternates: {
    canonical: 'https://hccoretech.com/work/magnifying-childrens-horizons',
  },
  openGraph: {
    title: 'Magnifying Children\'s Horizons · Case Study',
    description: 'Two-site build for a values-led children\'s education programme and its founder\'s author companion. Forest and sunlight-gold brand, no AI imagery.',
    url: 'https://hccoretech.com/work/magnifying-childrens-horizons',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnifying Children\'s Horizons · Case Study',
    description: 'Two-site build for a values-led children\'s education programme and its founder\'s author companion. Forest and sunlight-gold brand, no AI imagery.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}