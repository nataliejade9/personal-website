import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Natalie Waites',
  description: 'A description of the site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
