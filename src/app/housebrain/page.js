import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'

export const metadata = {
  title: 'HouseBrain | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"HouseBrain"} projectDescription={"Simplifying the overwhelming home-buying process"}  imageSource={"/images/housebrain/housebrain-header.png"} imageAlt={"Homepage screenshot of the HouseBrain app"} imageWidth={5000} imageHeight={5945}/>
      {/* <Link href="#"> <Image className={styles.arrowDown} src="/arrow-down.png" alt="Down arrow" width={64} height={64}/></Link> */}
    </main>
  )
}
