import { relative } from 'path'
import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'FawOtomotif.id',
  description: 'Jual Beli kendaraan Berkuliatas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative" >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
