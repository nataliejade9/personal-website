import Image from 'next/image'
import styles from './page.module.css'
import ProjectHeader from '@/components/ProjectHeader'

export const metadata = {
  title: 'FinChair | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
      <main className={styles.main}>
      <ProjectHeader projectName={"FinChair"} projectDescription={"A credit score motivation app. Increase your score and win rewards."}  imageSource={"/images/finchair/header-img-both.png"} imageAlt={"Two Finchair app screens. Bills screen and rewards screen."} imageWidth={5000} imageHeight={5945}/>
      <div className={styles.overviewSection}>
        <h2>Overview</h2>
        <p>Redesigning the UI for FinChair, an app designed to simplify credit management and prevent missed payments. The goal was to help users boost their credit scores through centralised tracking and an engaging reward system. Our client sought a modernised UI design to appeal to the target audience and drive user acquisition.</p>
      </div>
      </main>
    </>
  )
}
