import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <ul className={styles.projects}>
        <li>
          <Link href="/project-one">Project One</Link>
        </li>
        <li>
          <Link href="/project-two">Project Two</Link>
        </li>
      </ul>
      <Image src="/vercel.svg" alt="Vercel logo" width={283} height={64}/>
      <Image src="/next.svg" alt="Next.js logo" width={394} height={80}/>
    </main>
  )
}
