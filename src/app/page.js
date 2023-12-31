import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='profile-banner'>
        <div className='container-left'>
          <Image className={styles.profile} src="/natalie-office.jpg" alt="Portrait photo of Natalie Waites" width={4196} height={2241}/>
        </div>
        <div className='container-right'>
          <h1>Hey! I&apos;m Natalie.</h1>
          <h2>UI Designer</h2>
          <p>I design digital products, so that your business can reach it's goals.</p>
        </div>
     </div>
      <h3>My Work</h3>
      <ul className={styles.projects}>
        <li className={styles.projectOne}>
          <Link href="/project-one">FinChair</Link>
          <p>2023</p>
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
