import styles from './page.module.css'
import ProjectHeader from '@/components/ProjectHeader'

export const metadata = {
  title: 'Umuntu | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Umuntu"} projectDescription={"A central place for the Nigerian Diaspora to connect and share information."}  imageSource={"/images/umuntu/umuntu-header.png"} imageAlt={"Screen shots of the Umuntu website on mobile."} imageWidth={3400} imageHeight={3000}/>
    </main>
  )
}
