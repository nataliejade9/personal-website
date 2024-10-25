import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ProjectHeader from '@/components/ProjectHeader'
import ExperimentSection from '@/components/ExperimentSection'

export const metadata = {
  title: 'Experiments | Natalie Waites'
}

export default function ExperimentsPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Experiments"} projectDescription={"Throughout my life I've loved playing around with my design skills in various different mediums."}  imageSource={"/images/experiments/hero-experiments.png"} imageAlt={"Coding project on laptop and mobile mock up"} imageWidth={3264} imageHeight={3500}/>
      <ExperimentSection 
        title={"Fashion Design & Construction"} 
        description={"I studied fashion and design at college and university. This is where I fell in love with all aspects of design and developed my critical eye. These images are from my final design project at university that was inspired by citrus fruits, I designed, made and styled this collection."}
        imageCards={
          <>
          <div className={styles.experimentImages}>
            <Image className={styles.onlyImg} src="/images/experiments/uni-project-4.jpg" alt="Fashion design project outfit 1" width={2033} height={2550}/> 
            <Image className={styles.onlyImg} src="/images/experiments/Uni-project-2.jpg" alt="Fashion design project outfit 2" width={1461} height={2156}/>
          </div>
          </>
        }
      /> 
      <Link href="/">
        <Image className={styles.onlyImg} src="/images/experiments/uni-project-4.jpg" alt="Fashion design project outfit 1" width={2033} height={2550}/> 
      </Link>
    </main>
  )
}