import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import Randomiser from '../components/Randomiser'

export default function Home() {
  return (
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
      
      <div className={styles.work}>
        <div className={styles.linkTarget} id="explore-work"></div>
        <div className={styles.statement}>
          <h2>I designed and coded this site <span role="img" aria-label="geek">🤓</span> Designing products that users love and developers can implement efficiently is my passion. I enjoy seeing the businesses I work for grow and evolve.</h2>
        </div>
        <ul className={styles.projects}>
          <li className={styles.projectOne}>
            <Link href="/housebrain">
              <h3>House Brain</h3>
              <p>June 2024 • Product Design</p>
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
              <p>May 2023 • Product Design</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.profileBanner}>
          <div className={styles.containerLeft}>
            <Image className={styles.profile} src="/natalie-office.jpg" alt="Portrait photo of Natalie Waites" width={4196} height={2241}/>
          </div>
          <div className={styles.containerRight}>
            <h2>About me</h2>
            <p>I love designing impactful digital products for companies who are seeking growth and innovation. <span className={styles.boldText}> I believe this growth comes from empathising with users and shifting their current solutions to better ones.</span> When you work with me, you'll get someone adaptable, trustworthy, and detail-oriented.</p>
            <p>In my spare time, I enjoy exploring the outdoors, board games and reading. I also experiment with some coding projects and fun designs, you can check these out here...</p>
            <div><Button type="Secondary" label="Experiments" href="/experiments"/></div>
          </div>
      </div>

      <div className={styles.contactBanner}>
          <div className={styles.contactText}>
            <div className={styles.contactInner}>
              <h2>Contact</h2>
              <p>Let's discuss how my skills and unique perspective could contribute to the success of your business or product.</p>
              <Button type="primary" label="Send message" href="/"/>
            </div>
          </div>
          <div className={styles.contactImg}>
            <Image className={styles.profile} src="/sending a message from laptop blue.png" alt="Illustration of laptop and notebook with send message icon" width={4196} height={2241}/>
          </div>
      </div>

      <div className={styles.footerBanner}>
          <p>You’ve reached the footer.</p>
          <div className={styles.randomiser}>
              <p>Did you scroll past my work? Click the randomiser button to check out a random project   <span role="img" aria-label="arrow-right">➡️</span></p>
              <div><Randomiser links={[
                "/housebrain",
                "/umuntu",
                "/finchair",
                "/sierra"
              ]}/></div>
          </div>
          <div className={styles.copyright}>
            <h6>© Copyright 2024 Natalie Waites</h6>
            <h6>This site was designed and coded by Natalie Waites.</h6>
          </div>
      </div>

    </main>
  )
}
