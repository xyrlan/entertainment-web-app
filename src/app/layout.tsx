import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>M&S - Home</title>
        <link rel='icon' type='svg' href='/images/logo.svg' />
      </head>
      <body>
        {children}</body>
    </html>
  )
}
