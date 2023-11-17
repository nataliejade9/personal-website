import Link from 'next/link'
import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>Natalie Waites</h3>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
