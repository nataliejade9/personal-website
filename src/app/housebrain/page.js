import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'
import CasestudyBanner from '@/components/CasestudyBanner'
import ReviewSection from '@/components/ReviewSection'

export const metadata = {
  title: 'HouseBrain | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
      <main className={styles.main}>
        <ProjectHeader projectName={"HouseBrain"} projectDescription={"Simplifying the overwhelming home-buying process for first-time buyers"}  imageSource={"/images/housebrain/header.png"} imageAlt={"Homepage screenshot of the HouseBrain app"} imageWidth={2736} imageHeight={3000}/> 
        <OverviewSection
            overviewSummary={"In 2017 my partner and I bought our first home and made a low fidelity app under our business 'Superwatermelon' to understand the costs involved in buying a home. We quickly realised that there were hidden costs and a lack of information for first-time buyers who may not have family support to explain the process. In 2024 I redesigned the product to suit and be more accessible to the target user."} 
            roleTitle={"Role: Product Design (UX & UI)"} 
            roleText={"UX design, user research & testing, UI APP redesign, high-fidelity prototyping, logo design, design system"} 
            teamText={"Natalie Waites (solo project)"} 
            designText={"Figma, FigJam, Useberry, Google Forms, Survey Swap, Adobe Photoshop and Illustrator"} 
            successOne={"Onboard 200 users"}
            successTwo={"Increase properties added by users 3:1"}
            successThree={"5% Conversion rate of users who proceed to purchase a property with our recommended lenders"}
        />
        <div className={styles.mainProject}>
          <Image className={styles.onlyImg} src="/images/housebrain/hero-img.png" alt="Seven iphone screens showing different pages of the HouseBrain app" width={4500} height={3000}/>
          <TitleSection title={"The Brief"} information={"HouseBrain will be a mobile app that simplifies the complex journey of first-time home buying by providing clear, comprehensive cost information and property comparison capabilities. The app will serve aspiring homeowners who feel overwhelmed by the home buying process and need guidance on understanding the full financial picture of their purchase."}/>
          <ImageSection imgTitle={"2017 UI designs (version 1.0)"} imageSource={"/images/housebrain/housebrain-Initial-designs.png"} imageAlt={"Four screenshots of original 2017 UI designs"} imageWidth={7400} imageHeight={2776} imgDescription={"The original designs are quite old and have UI design elements that relate to old iPhones where the 'home' button was in the centre. So this needs a dramatic update. Also the app is not very accessible in it's current state and will need looking at in the design system."}/>
          <TitleSection title={"Starting With Research"} information={"The original app was designed with only two user's in mind. Therefore it was important to conduct both qualitative and quantitative research to gather a variety of information and data from target user's. The results will provide direction for features and the overall app design whilst addressing user problems."}/>
          <ImageSection imgTitle={"Survey Results"} imageSource={"/images/housebrain/User-research-results.png"} imageAlt={"Research results for survey conducted for HouseBrain App"} imageWidth={13590} imageHeight={9880}/>
          <ImageSection imgTitle={"Competitor Analysis"} imageSource={"/images/housebrain/Competitors.png"} imageAlt={"Competitor analysis for HouseBrain App"} imageWidth={10340} imageHeight={15018}/>
          <TitleSection title={"Understanding the User"} information={"I looked at how we could define the research we gathered to better understand the user. I made a couple of user persona's based on the people we had spoken to and created a user journey map to empathise with the user's thoughts and feelings. These helped to direct the design phase with more focus."}/>
          <ImageSection imgTitle={"Persona one: Marcus"} imageSource={"/images/housebrain/Persona-1.png"} imageAlt={"HouseBrain persona, Marcus"} imageWidth={1543} imageHeight={663}/>  
          <ImageSection imgTitle={"Persona two: Ava"} imageSource={"/images/housebrain/Persona-2.png"} imageAlt={"HouseBrain persona, Ava"} imageWidth={1543} imageHeight={663}/>
          <ImageSection imageSource={"/images/housebrain/User-Journey-Map.png"} imageAlt={"HouseBrain user journey map"} imageWidth={1857} imageHeight={1055}/>
          <TitleSection title={"Inspiration for Design"} information={"After looking at the research, the average age of a first-time buyer is 35. However, as the app ages, more of gen-Z will likely use it. I incorporated styles and themes that I thought would suit both generations when excited about looking for a home."}/>
          <ImageSection imageSource={"/images/housebrain/Moodboard.png"} imageAlt={"HouseBrain Moodboard inspiration"} imageWidth={3626} imageHeight={1751}/>
          <TitleSection title={"Initial Designs"} information={"I started working on some low fidelity wireframes using a template in Figma. I experimented with different layouts, and they evolved over time before ending up on the final designs. It was useful to use a template as it was easy to move elements around."}/>
          <ImageSection imgTitle={"Low fidelity wireframes"} imageSource={"/images/housebrain/wire-frames.png"} imageAlt={"HouseBrain initial wireframes"} imageWidth={3626} imageHeight={1751} imgDescription={"The mortgage calculator screen changed quite a bit from this initial design as I felt it was far to convoluted and not enough interaction around entering numbers. Also, having multiple bars that need swiping makes it not very accessible."}/>
          
          <ImageSection imgTitle={"User testing throughout the process"} imageSource={"/images/housebrain/User-testing.png"} imageAlt={"User testing heat maps of the HouseBrain app"} imageWidth={1201} imageHeight={577} imgDescription={"I wanted to user test various home pages and test where users would click. As this App is a new concept I was keen to make sure that user's new how to interact with the app and be able to achieve their goals. The heat maps showed users were able to navigate the app."}/>
          
          <TitleSection title={"Final Designs"} information={""}/>
          
          
          <div className={styles.finalSection}>
            <Image className={styles.onlyImg} src="/images/finchair/Homepages.png" alt="Five homepage screenshots of the finchair app final designs" width={6000} height={3500}/> 
            <Image className={styles.onlyImg} src="/images/finchair/3-iphone-blue.png" alt="Three screenshots of the finchair app final desgins, the wallet, bills and rewards pages" width={4500} height={2800}/>
            <Image className={styles.onlyImg} src="/images/finchair/Finchair-3-screen.png" alt="Three screenshots of the finchair app rewards function final designs" width={4500} height={2800}/>
          </div>  
          <ReviewSection 
            textOne={(
              <>
                <p>The designs fit to the success metrics, particularly the high-fidelity prototype worked for acquiring users as well as seed funding investment.</p>
                <p>The client was happy with gamification of the rewards section and believed this would entice new users as well as keep them engaged.</p>
                <p>Our team worked well together. We used a combination of zoom calls, joint FigJam boards, and Figma comments. </p>
              </>
            )}
            textTwo={(
              <>
                <p>If we had more say in the UX, I would’ve liked to look at how we could adapt the UX/UI to better suit the success metric of acquiring 5,000 users in the first year. As we could look at incorporating referral schemes or onboarding screens that were tested on users to better achieve this result.</p>
                <p>In this project, I learnt the importance of well tested UX and wireframes before defining the UI designs and not jumping to UI too early.</p>
              </>
            )}
          />
          <CasestudyBanner/>
        </div>
      </main>
    </>
  )
}
