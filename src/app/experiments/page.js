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
      <ProjectHeader projectName={"Experiments"} projectDescription={"Throughout my career, design has been the central thread expressed across various mediums."}  imageSource={"/images/experiments/hero-experiments.png"} imageAlt={"Coding project on laptop and mobile mock up"} imageWidth={778} imageHeight={834} priority/>
      <ExperimentSection 
        title={"Fashion Design & Construction"} 
        description={"I studied fashion and design at college and university. This is where I fell in love with all aspects of design and developed my critical eye. These images are from my final design project at university that was inspired by citrus fruits, I designed, made and styled this collection. I went on to work in fashion for a few years but due to ethical reasons I decided to take my career in a different direction."}
        imageCards={
          <>
          <div className={styles.experimentImages}>
            <Image className={styles.onlyImg} src="/images/experiments/uni-design-1.jpg" alt="Fashion design project outfit 1" width={306} height={384}/> 
            <Image className={styles.onlyImg} src="/images/experiments/uni-design-2.jpg" alt="Fashion design project outfit 2" width={260} height={384}/>
            <Image className={styles.onlyImg} src="/images/experiments/uni-design-3.jpg" alt="Fashion design project outfit 3" width={270} height={3675}/> 
            <Image className={styles.onlyImg} src="/images/experiments/uni-design-4.jpg" alt="Fashion design project outfit 4" width={270} height={3653}/>
            <Image className={styles.onlyImg} src="/images/experiments/uni-design-5.jpg" alt="Fashion design project outfit 5" width={266} height={1884}/> 
            <Image className={styles.onlyImg} src="/images/experiments/uni-design-6.jpg" alt="Fashion design project outfit 6" width={258} height={3746}/> 
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
            <Image className={styles.onlyImg} src="/images/experiments/planner.jpg" alt="Periwinkle daily planner design" width={384} height={384}/> 
            <Image className={styles.onlyImg} src="/images/experiments/selection.jpg" alt="Selection of five greeting card designs" width={384} height={384}/>
            <Image className={styles.onlyImg} src="/images/experiments/watermelon-card.jpg" alt="Watermelon greeting card" width={384} height={384}/> 
            <Image className={styles.onlyImg} src="/images/experiments/panther-tee.jpg" alt="Fashion design project outfit 4" width={384} height={384}/>
            <Image className={styles.onlyImg} src="/images/experiments/robin-card.png" alt="Robin greeting card" width={384} height={384}/> 
          </div>
          </>
        }
      />
      <ExperimentSection 
        title={"Business & Start-ups"} 
        description={"I've been interested in business since I left university. Starting many different businesses myself as well as helping others with their business ideas. I currently run a software engineering business with my partner and we've worked with a variety of business sizes as well as making our own digital products. These graphics I designed were for one of our projects."}
        imageCards={
          <>
          <div className={styles.experimentImages}>
            <Image className={styles.onlyImg} src="/images/experiments/problem-1.png" alt="Productivity app info-graphic 1" width={154} height={384}/> 
            <Image className={styles.onlyImg} src="/images/experiments/problem-2.png" alt="Productivity app info-graphic 2" width={154} height={384}/>
            <Image className={styles.onlyImg} src="/images/experiments/problem-3.png" alt="Productivity app info-graphic 3" width={154} height={384}/> 
          </div>
          </>
        }
      />  
      <ExperimentSection 
        title={"Web Development"} 
        description={"As I run my own business, the day-to-day tasks can vary quite a lot and I've had to grow to be very adaptable. For instance, I decided to learn front-end development in order to understand more about the business. During this process I've really started to enjoy coding and have created these websites to practice my skills along the way."}
        imageCards={
          <>
          <div className={styles.experimentImages}>
            <Link href="https://nataliejade9.github.io/styling-template/" target="_blank">
              <Image className={styles.webImg} src="/images/experiments/style-guide.jpg" alt="Mock up screen of digital style guide" width={378} height={384}/> 
            </Link>
            <Link href="https://nataliejade9.github.io/superwatermelon/" target="_blank">
              <Image className={styles.webImg} src="/images/experiments/superwatermelon.jpg" alt="Mock up screen of Superwatermelon website" width={583} height={384}/>
            </Link>
            <Link href="https://nataliejade9.github.io/colmar/" target="_blank">
              <Image className={styles.webImg} src="/images/experiments/colmar-web.png" alt="Mock up screen of Colmar academy website" width={569} height={384}/> 
            </Link>
            <Link href="https://nataliejade9.github.io/coding-club/" target="_blank">
              <Image className={styles.webImg} src="/images/experiments/coding-club.png" alt="Mock up screen of coding club website" width={576} height={384}/>
            </Link>
          </div>
          </>
        }
      />
      <div className={styles.gitHub}>
        <p>Check out my <span className={styles.linkText}><Link href="https://github.com/nataliejade9" target="_blank">GitHub</Link></span></p>
      </div>
    </main>
  )
}