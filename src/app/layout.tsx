import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Planspiegel',
    default: 'Planspiegel',
  },
  description:
    'Planspiegel - TU Chemnitz student project dedicated to make the world cybersafer contributing to Enfield!',
  keywords: [
    'Planspiegel',
    'TU Chemnitz',
    'startup',
    'innovation',
    'entrepreneurship',
    'creative solutions',
    'future shaping',
    'Enfield',
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://planspiegel-landing.vercel.app/',
    siteName: 'Planspiegel',
    title: 'Planspiegel - Reflecting Ideas, Shaping Futures',
    description:
      'TU Chemnitz student project dedicated to make the world cybersafer contributing to Enfield!',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Planspiegel',
    title: 'Planspiegel - Reflecting Ideas, Shaping Futures',
    description:
      'TU Chemnitz student project dedicated to make the world cybersafer contributing to Enfield!',
  },
  robots: 'index, follow',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
