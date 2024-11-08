import styles from './index.module.css'
import Image from 'next/image'
import ContactButton from '../ContactButton'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/"><Image className={styles.logo} src="/natalie-logo.png" alt="Natalie Waites Logo" width={968} height={968}/></Link>
      <nav>
        <ul>
          <li>
            <ContactButton label="Let's Chat"/>
          </li>
        </ul>
      </nav>
    </header>
  )
}
