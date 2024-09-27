import ProjectHeader from '@/components/ProjectHeader'
import styles from './page.module.css'

export const metadata = {
  title: 'Sierra Jewellery | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Sierra"} projectDescription={"Jewellery store rebrand, giving users an easy and familiar way to shop their next purchase."}  imageSource={"/images/sierra/sierra-header-thin.png"} imageAlt={"Laptop and mobile screenshot of the Sierra Jewellery website"} imageWidth={4500} imageHeight={3000}/>
    </main>
  )
}
