import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import { SpeedInsights } from '@vercel/speed-insights/next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Shawn Azar',
    default: 'Shawn Azar - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Shawn, a software designer and entrepreneur based in Denver. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <SpeedInsights />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
