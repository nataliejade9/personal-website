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
        description={"I studied fashion and design at college and university. This is where I fell in love with all aspects of design and developed my critical eye. These images are from my final design project at university that was inspired by citrus fruits, I designed, made and styled this collection. I went on to work in fashion for a few years but due to ethical reasons I decided to take my career in a different direction."}
        imageCards={
          <>
          <div className={styles.experimentImages}>
            <Image className={styles.onlyImg} src="/images/experiments/uni-project-4.jpg" alt="Fashion design project outfit 1" width={2033} height={2550}/> 
            <Image className={styles.onlyImg} src="/images/experiments/Uni-project-2.jpg" alt="Fashion design project outfit 2" width={1461} height={2156}/>
            <Image className={styles.onlyImg} src="/images/experiments/Uni-project-8.jpg" alt="Fashion design project outfit 3" width={2577} height={3675}/> 
              <Image className={styles.onlyImg} src="/images/experiments/Uni-project-9.jpg" alt="Fashion design project outfit 4" width={2467} height={3653}/>
              <Image className={styles.onlyImg} src="/images/experiments/Uni-project-11.jpg" alt="Fashion design project outfit 5" width={1261} height={1884}/> 
          </div>
          </>
        }
      /> 

        <ExperimentSection 
          title={"Graphic Design & Artwork"} 
          description={"I started an Etsy shop in 2016 as an outlet for my design and illustration skills. I thoroughly enjoyed running a small business and doing market stalls. It was a great way to meet new people and share my designs with the world. The brand had an ethical focus with recycled materials and vegan dyes."}
          imageCards={
            <>
            <div className={styles.experimentImages}>
              <Image className={styles.onlyImg} src="/images/experiments/uni-project-4.jpg" alt="Fashion design project outfit 1" width={2033} height={2550}/> 
              <Image className={styles.onlyImg} src="/images/experiments/Uni-project-2.jpg" alt="Fashion design project outfit 2" width={1461} height={2156}/>
              <Image className={styles.onlyImg} src="/images/experiments/Uni-project-8.jpg" alt="Fashion design project outfit 3" width={2577} height={3675}/> 
              <Image className={styles.onlyImg} src="/images/experiments/Uni-project-9.jpg" alt="Fashion design project outfit 4" width={2467} height={3653}/>
              <Image className={styles.onlyImg} src="/images/experiments/Uni-project-11.jpg" alt="Fashion design project outfit 5" width={1261} height={1884}/> 
              
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