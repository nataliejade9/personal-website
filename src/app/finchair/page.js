import styles from './page.module.css'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'

export const metadata = {
  title: 'FinChair | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
      <main className={styles.main}>
        <ProjectHeader projectName={"FinChair"} projectDescription={"A credit score motivation app. Increase your score and win rewards."}  imageSource={"/images/finchair/header-img-both.png"} imageAlt={"Two Finchair app screens. Bills screen and rewards screen."} imageWidth={5000} imageHeight={5945}/>
        <OverviewSection
          overviewTitle={"Overview"} 
          overviewSummary={"Redesigning the UI for FinChair, an app designed to simplify credit management and prevent missed payments. The goal was to help users boost their credit scores through centralised tracking and an engaging reward system. Our client sought a modernised UI design to appeal to the target audience and drive user acquisition."} 
          roleTitle={"Role: UI Design"} 
          roleText={"Visual redesign, high-fidelity prototyping, design system, gamification for reward flow"} 
          teamTitle={"Team"} 
          teamText={"Natalie Waites, Tiffany Leung, Grace Savage"} 
          designTitle={"Design Toolkit"} 
          designText={"Figma, FigJam, Slack, Adobe Photoshop and Illustrator"} 
          successTitle={"Success metrics"} 
          successOne={"Successfully beta test 100 users with the MVP"}
          successTwo={"Minimum 50 brands on-board in first 3 months"}
          successThree={"Acquire 5000 users within first year of launching"}
          successFour={"Raise seed investment of £150,000"}
        />
      </main>
    </>
  )
}
