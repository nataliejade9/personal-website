import styles from './page.module.css'
import Image from 'next/image'
import ImageSection from '@/components/ImageSection'

export const metadata = {
  title: 'Broken Elements | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <Image className={styles.onlyImg} src="/images/umuntu/umuntu-affinity-map.webp" alt="Affinity map for the three user interviews" width={1920} height={1058}/>
      <ImageSection imgTitle={"Survey Results"} imageSource={"/images/housebrain/research-results.webp"} imageAlt={"User research results for survey conducted for HouseBrain App"} imageWidth={1472} imageHeight={1071}/>
    </main>
  )
}
