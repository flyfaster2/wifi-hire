import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const dmSerif = DM_Serif_Display({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-dm-serif',
});

export const metadata: Metadata = {
  title: 'FlexiWiFi | Flexible WiFi Rentals – Portable & Home',
  description: 'Rent portable WiFi devices in the UK. No contracts, no installation. Fast delivery, free returns. Perfect for moving home, tourists, or remote workers.',
  openGraph: {
    title: 'FlexiWiFi | Flexible WiFi Rentals – Portable & Home',
    description: 'Rent portable WiFi devices in the UK. No contracts, no installation. Fast delivery, free returns.',
    url: 'https://www.flexiwifi.co.uk',
    siteName: 'FlexiWiFi',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlexiWiFi | Flexible WiFi Rentals – Portable & Home',
    description: 'Rent portable WiFi devices in the UK. No contracts, no installation. Fast delivery, free returns.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
