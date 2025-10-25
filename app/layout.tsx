import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quality Destination - Your Journey Awaits',
  description: 'Discover premium destinations with Quality Destination. Book flights, hotels, and transport with luxury and excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
