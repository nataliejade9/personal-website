import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import portraitPhoto from '../../public/natalie-office.jpg'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>
            <div className={styles.natalie}>Natalie Waites</div>
            <span className={styles.highlight}>Product Designer</span><span className={styles.smalltitle}> (UX/UI)</span>
            <div>who enjoys coding</div>
          </h1>
          <div className={styles.exploreWork}>
            <Button type="Secondary" label="Explore Work" href="#explore-work"/>
          </div>
        </div>
        <div className={styles.statement}>
          <h2>I designed and coded this site <span role="img" aria-label="smile">🙂</span> I design meaningful digital products that solve user problems and support rapid development processes, driving business growth through strategic design solutions.</h2>
        </div>
        <div className={styles.work}>
          <div className={styles.exploreId} id="explore-work"></div>
          <ul className={styles.projects}>
            <li className={styles.projectOne}>
              <Link href="/housebrain">
                <h3>HouseBrain</h3>
                <p>September 2024 • Product Design</p>
              </Link>
            </li>
            <li className={styles.projectTwo}>
              <Link href="/umuntu">
                <h3>Umuntu</h3>
                <p>March 2024 • Product Design</p>
              </Link>
            </li>
            <li className={styles.projectThree}>
              <Link href="/finchair">
                <h3>FinChair</h3>
                <p>September 2023 • UI Design</p>
                </Link>
            </li>
            <li className={styles.projectFour}>
              <Link href="/sierra">
                <h3>Sierra Jewellery</h3>
                <p>May 2023 • Brand Design</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.profileBanner}>
            <div className={styles.containerLeft}>
              <Image className={styles.profile} src={portraitPhoto} alt="Portrait photo of Natalie Waites"/>
            </div>
            <div className={styles.containerRight}>
              <h2>About me</h2>
              <p>I enjoy designing impactful digital products for companies who are seeking growth and innovation. <span className={styles.boldText}> My approach combines technical proficiency with user-centric design, creating digital products that genuinely solve user challenges.</span> When you work with me, you'll get someone adaptable, trustworthy, and detail oriented.</p>
              <p>In my spare time, I like exploring the outdoors, playing board games and reading. I've experimented with my design skills in various mediums, you can check these out below.</p>
              <div><Button type="Secondary" label="Experiments" href="/experiments"/></div>
            </div>
        </div>
      </main>
    </>
  )
}
