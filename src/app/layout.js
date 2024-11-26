import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

const font = Inter({ subsets: ['latin'], variable: '--inter-font' })
const ralewayfont = Raleway ({subsets: ['latin'], variable: '--raleway-font' })

export const metadata = {
  title: 'Natalie Waites',
  description: 'Product Design portfolio for Natalie Waites including examples of UX and UI Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics gaId="G-1BGQMKBN7R"/>
      </Head>
      <body className={`${font.variable} ${ralewayfont.variable}`}>
        <Header/>
        <div className='header-offset'>{children}</div>
        <Contact/>
        <Footer/>
      </body>
    </html>
  )
}


