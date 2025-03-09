import type { Metadata } from 'next'
import './globals.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-comfortaa',
})

export const metadata: Metadata = {
  title: 'Hive - Student Marketplace',
  description: 'Rent what you need, share what you don\'t',
  generator: 'v0.dev',
  icons: {
    icon: '/images/hive-logo.png',
    apple: '/images/hive-logo.png',
    shortcut: '/images/hive-logo.png',
  },
  manifest: '/manifest.json',
  themeColor: '#42A5F5',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hive',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hive-marketplace.vercel.app/',
    title: 'Hive - Student Marketplace',
    description: 'Rent what you need, share what you don\'t',
    siteName: 'Hive',
    images: [{
      url: '/images/hive-logo.png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hive - Student Marketplace',
    description: 'Rent what you need, share what you don\'t',
    images: ['/images/hive-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/hive-logo.png" />
        <link rel="apple-touch-icon" href="/images/hive-logo.png" />
        <link rel="shortcut icon" type="image/png" href="/images/hive-logo.png" />
        <meta name="theme-color" content="#42A5F5" />
      </head>
      <body className={`${comfortaa.variable} font-sans`}>{children}</body>
    </html>
  )
}
