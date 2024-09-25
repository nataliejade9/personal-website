import Image from 'next/image'
import styles from './page.module.css'

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
        <div className={styles.overviewSection}>
          <h2>Overview</h2>
          <p>Redesigning the UI for FinChair, an app designed to simplify credit management and prevent missed payments. The goal was to help users boost their credit scores through centralised tracking and an engaging reward system. Our client sought a modernised UI design to appeal to the target audience and drive user acquisition.</p>
        </div>
      </main>
    </>
  )
}
