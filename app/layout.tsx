import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MAADHAVAN',
  description: 'Created with tears...',
  generator: 'modulus.LLC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
