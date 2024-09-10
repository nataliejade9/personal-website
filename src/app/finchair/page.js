import Image from 'next/image'
import styles from './page.module.css'
// import Link from 'next/link'
// import Button from '../components/Button'
// import Randomiser from '../components/Randomiser'
// import ContactButton from '../components/ContactButton'

export const metadata = {
  title: 'FinChair | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.projectHeader}>
          <div className={styles.titleInfo}>
            <h1>FinChair</h1>
            <h2>A credit score motivation app. Increase your score and win rewards.</h2>
          </div>
        <div className={styles.projectHeaderImg}>
          <Image className={styles.coverImg} src="/images/finchair/header-img-both.png" alt="Finchair app screens. Bills screen and rewards screen." width={5000} height={5945}/>
        </div>
        </div>
      </main>
      {/* <footer>
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
      </footer> */}
    </>
  )
}
