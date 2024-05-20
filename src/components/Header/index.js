import styles from './index.module.css'
import Image from 'next/image'
import Button from '../Button'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src="/Natalie-logo-v2.png" alt="Logo for Natalie Waites" width={968} height={968}/>
      <nav>
        <ul>
          <li>
            <Button type="primary" label="Let's Chat" href="/"/>
          </li>
        </ul>
      </nav>
    </header>
  )
}
