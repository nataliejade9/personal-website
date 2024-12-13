import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { GoogleAnalytics } from '@next/third-parties/google'

const font = Inter({ subsets: ['latin'], variable: '--inter-font' })
const ralewayfont = Raleway ({subsets: ['latin'], variable: '--raleway-font' })

export const metadata = {
  title: 'Natalie Waites',
  description: 'Product Design Portfolio - Natalie Waites. Case studies showing use of UX and UI Design for digital products across various companies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1BGQMKBN7R"/>
      <body className={`${font.variable} ${ralewayfont.variable}`}>
        <Header/>
        <div className='header-offset'>{children}</div>
        <Contact/>
        <Footer/>
      </body>
    </html>
  )
}


