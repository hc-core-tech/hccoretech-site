import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact · Get in Touch',
  description: 'Ways to reach HC Core Tech. Request a written quote, book a discovery call, or send a direct email to hc@hccoretech.com.',
  alternates: {
    canonical: 'https://hccoretech.com/contact',
  },
  openGraph: {
    title: 'Contact · Get in Touch',
    description: 'Ways to reach HC Core Tech. Request a written quote, book a discovery call, or send a direct email to hc@hccoretech.com.',
    url: 'https://hccoretech.com/contact',
    type: 'website',
    siteName: 'HC Core Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact · Get in Touch',
    description: 'Ways to reach HC Core Tech. Request a written quote, book a discovery call, or send a direct email to hc@hccoretech.com.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}