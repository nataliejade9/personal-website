import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '../components/Button'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='hero'>
        <h1>
          <div className={styles.natalie}>Natalie Waites</div>
          <span className={styles.highlight}>Product Designer</span><span className={styles.smalltitle}> (UX/UI)</span>
          <div>who enjoys coding</div>
        </h1>
        
     </div>
      <Button type="Secondary" label="Explore Work" href="/"/>
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

      <div className='profile-banner'>
          <div className='container-left'>
            <Image className={styles.profile} src="/natalie-office.jpg" alt="Portrait photo of Natalie Waites" width={4196} height={2241}/>
          </div>
          <div className='container-right'>
            <h2>Get to know me</h2>
            <p>I love designing impactful digital products for companies who are seeking growth and innovation. I believe this growth comes from empathising with users and shifting their current solutions to better ones. When you work with me, you'll get someone adaptable, trustworthy, and detail-oriented.</p>
            <p>In my spare time, I like to code and play around with graphic design. Feel free to browse the projects I've done for fun.</p>
          </div>
      </div>

    </main>
  )
}
