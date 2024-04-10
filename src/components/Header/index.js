import Link from 'next/link'
import styles from './index.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src="/Natalie-logo-v2.png" alt="Logo for Natalie Waites" width={968} height={968}/>
      <nav>
        <ul>
          <li>
            <Link href="/">Let's Chat</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
