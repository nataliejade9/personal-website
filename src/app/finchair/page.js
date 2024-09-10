import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'FinChair | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <div className={styles.projectHeader}>
        <h1>FinChair</h1>
        <h2>A credit score motivation app. Increase your score and win rewards</h2>
      </div>
      <div className={styles.projectHeaderImg}>
        <Image className={styles.finchairHeader} src="/images/finchair/header-img-both.png" alt="Finchair app screens. Bills screen and rewards screen." width={5000} height={5945}/>
      </div>
    </main>
  )
}
