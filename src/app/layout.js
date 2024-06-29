import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const font = Inter({ subsets: ['latin'], variable: '--inter-font' })
const ralewayfont = Raleway ({subsets: ['latin'], variable: '--raleway-font' })

export const metadata = {
  title: 'Natalie Waites',
  description: 'A description of the site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} ${ralewayfont.className}`}>
        <Header/>
        <div className='header-offset'>{children}</div>
      </body>
    </html>
  )
}
