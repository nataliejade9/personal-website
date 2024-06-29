import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'


export const metadata = {
  title: 'HouseBrain | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <div className={styles.titleSection}>
        <h1>HouseBrain</h1>
        <h2>Epowering first-time buyers by combining comprehensive cost breakdowns, property logging, and educational resources, the app will simplify the home-buying journey and help users achieve their dream of home ownership.</h2>
        <Link href="#"> <Image className={styles.arrowDown} src="/arrow-down.png" alt="Down arrow" width={64} height={64}/></Link>
      </div>
    </main>
  )
}
