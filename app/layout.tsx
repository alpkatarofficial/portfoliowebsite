import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SÜLEYMAN ALP KATAR',
  description: 'Formed with v0 edited by SÜLEYMAN ALP KATAR for personal portfolio',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
