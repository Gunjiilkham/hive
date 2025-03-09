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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} font-sans`}>{children}</body>
    </html>
  )
}
