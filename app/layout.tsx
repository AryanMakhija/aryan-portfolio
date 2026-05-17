import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aryan Makhija | Strategic Finance & Business Finance Professional',
  description: 'CA Finalist & Strategic Finance Professional with experience at Groww and PlatinumRx. Specializing in FP&A, Revenue Optimization, Business Finance, and Fintech Growth Strategy in Bangalore, India.',
  keywords: [
    'Aryan Makhija',
    'Strategic Finance',
    'Business Finance',
    'FP&A',
    'Fintech',
    'CA Final',
    'Groww',
    'PlatinumRx',
    'Financial Analyst',
    'Bangalore',
    'Revenue Optimization',
    'Growth Strategy',
    'Investment Analysis',
  ],
  authors: [{ name: 'Aryan Makhija', url: 'mailto:Aryanmakhija2002@gmail.com' }],
  creator: 'Aryan Makhija',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Aryan Makhija | Strategic Finance & Business Finance',
    description: 'CA Finalist driving strategic finance, growth, and operational excellence across fintech and startups.',
    siteName: 'Aryan Makhija Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Makhija | Strategic Finance Professional',
    description: 'CA Finalist | Ex-Groww | PlatinumRx | Strategic Finance & FP&A',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💹</text></svg>",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
