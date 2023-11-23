import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Image className={styles.profile} src="/natalie-office.jpg" alt="Portrait photo of Natalie Waites" width={4196} height={2241}/>
      <ul className={styles.projects}>
        <li>
          <Link href="/project-one">Project One</Link>
        </li>
        <li>
          <Link href="/project-two">Project Two</Link>
        </li>
        <li>
          <Link href="/project-three">Project Three</Link>
        </li>
        <li>
          <Link href="/project-four">Project Four</Link>
        </li>
      </ul>
    </main>
  )
}
