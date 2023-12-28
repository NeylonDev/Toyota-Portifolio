import type { Metadata } from 'next'
import Hero from './components/hero'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toyota',
  description: 'Site portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div>
  <Hero/>
  <body className={inter.className}>{children}</body>
  </div>
  )
}
