import ProjectHeader from '@/components/ProjectHeader'
import styles from './page.module.css'

export const metadata = {
  title: 'Sierra Jewellery | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Sierra"} projectDescription={"Jewellery store rebrand, giving users an easy way to shop their next purchase."}/>
    </main>
  )
}
