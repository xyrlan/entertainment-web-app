import './globals.css'
import { Inter } from 'next/font/google'
import { BookmarksProvider } from './context/bookmarksProvider'
import SearchContextProvider from './context/searchContext'



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
      <SearchContextProvider>
        <div
          className={`xl:grid xl:grid-cols-[96px_minmax(1185px,_1fr)]`}>
            <body className='font-outfit'>
              {children}</body>
          
        </div>
      </SearchContextProvider>
    </html>
  )
}
