import styles from './index.module.css'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/"><Image className={styles.logo} src="/Natalie-logo-v2.png" alt="Logo for Natalie Waites" width={968} height={968}/></Link>
      <nav>
        <ul>
          <li>
            <Button type="primary" label="Let's Chat" href="mailto:natalie@superwatermelon.com"/>
          </li>
        </ul>
      </nav>
    </header>
  )
}
