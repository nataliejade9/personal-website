import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

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
      <Script>{`
        (function (c, s, q, u, a, r, e) {
            c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
            c._hjSettings = { hjid: a };
            r = s.getElementsByTagName('head')[0];
            e = s.createElement('script');
            e.async = true;
            e.src = q + c._hjSettings.hjid + u;
            r.appendChild(e);
        })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5264151);
        `}
      </Script>
      <body className={`${font.variable} ${ralewayfont.variable}`}>
        <Header/>
        <div className='header-offset'>{children}</div>
        <Contact/>
        <Footer/>
      </body>
    </html>
  )
}


