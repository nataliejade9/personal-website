import styles from './page.module.css'
import Image from 'next/image'
import Script from 'next/script'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'
import CasestudyBanner from '@/components/CasestudyBanner'
import ReviewSection from '@/components/ReviewSection'

import houseBrainHeroImage from '../../../public/images/housebrain/header.png';
import houseBrainFullImage from '../../../public/images/housebrain/housebrain-full-set.png';
import initialDesignsImage from '../../../public/images/housebrain/initial-designs.png';
import researchResultsImage from '../../../public/images/housebrain/research-results.png';
import competitorAnalysisImage from '../../../public/images/housebrain/competitor-analysis.png';

export const metadata = {
  title: 'HouseBrain | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
      <main className={styles.main}>
        <ProjectHeader projectName={"HouseBrain"} projectDescription={"Simplifying the overwhelming home-buying process for first-time buyers"}  imageSource={houseBrainHeroImage} imageAlt={"Homepage screenshot of the HouseBrain app"}/>
        <OverviewSection
            overviewSummary={"In 2017 my partner and I bought our first home and made a low fidelity app under our business 'Superwatermelon' to understand the costs involved in buying a home. We quickly realised that there were hidden costs and a lack of information for first-time buyers who may not have family support to explain the process. In 2024 I redesigned the product to suit and be more accessible to the target user."} 
            roleTitle={"Role: Product Design (UX & UI)"} 
            roleText={"UX design, user research & testing, UI APP redesign, high-fidelity prototyping, logo design, design system"} 
            teamText={"Natalie Waites (solo project)"} 
            designText={"Figma, FigJam, Useberry, Google Forms, Survey Swap, Sketch, Adobe Photoshop and Illustrator"} 
            successOne={"Onboard 200 users"}
            successTwo={"Increase properties added by users 3:1"}
            successThree={"5% Conversion rate of users who proceed to purchase a property with our recommended lenders"}
        />
        <div className={styles.mainProject}>
          <Image className={styles.onlyImg} src={houseBrainFullImage} alt="Seven iphone screens showing different pages of the HouseBrain app"/>
          <TitleSection title={"The Brief"} information={"HouseBrain is a mobile app that simplifies the complex journey of first-time home buying by providing clear, comprehensive cost information and property comparison capabilities. The app will serve aspiring homeowners who feel overwhelmed by the home buying process and need guidance on understanding the full financial picture of their purchase."}/>
          <ImageSection imgTitle={"2017 UI designs (version 1.0)"} imageSource={initialDesignsImage} imageAlt={"Four screenshots of original 2017 UI designs"} imgDescription={"The original designs are quite old and have UI design elements that relate to old iPhones where the 'home' button was in the centre. So this needs a dramatic update. Also the app is not very accessible in it's current state and will need looking at in the design system."}/>
          <TitleSection title={"Starting With Research"} information={"The original app was designed with only two user's in mind. Therefore it was important to conduct both qualitative and quantitative research to gather a variety of information and data from target user's. The results will provide direction for features and the overall app design whilst addressing user problems."}/>
          <ImageSection imgTitle={"Survey Results"} imageSource={researchResultsImage} imageAlt={"User research results for survey conducted for HouseBrain App"} imageWidth={1472} imageHeight={1071}/>
          <ImageSection imgTitle={"Competitor Analysis"} imageSource={competitorAnalysisImage} imageAlt={"Competitor analysis for HouseBrain App"} imageWidth={1472} imageHeight={2138}/>
          <TitleSection title={"Understanding the User"} information={"I looked at how we could define the research we gathered to better understand the user. I made a couple of user persona's based on the people we had spoken to and created a user journey map to empathise with the user's thoughts and feelings. These helped to direct the design phase with more focus."}/>
          <ImageSection imgTitle={"Persona one: Marcus"} imageSource={"/images/housebrain/hb-persona-1.png"} imageAlt={"HouseBrain persona, Marcus"} imageWidth={1472} imageHeight={663}/>  
          <ImageSection imgTitle={"Persona two: Ava"} imageSource={"/images/housebrain/hb-persona-2.png"} imageAlt={"HouseBrain persona, Ava"} imageWidth={1472} imageHeight={663}/>
          <ImageSection imageSource={"/images/housebrain/user-journey.png"} imageAlt={"HouseBrain user journey map"} imageWidth={1472} imageHeight={837}/>
          <TitleSection title={"Inspiration for Design"} information={"After looking at the research, the average age of a first-time buyer is 35, fitting into the millennial bracket. However, as the app ages gen-Z will filter into this range. Therefore I incorporated styles and themes that I thought would suit both generations and to appeal to the excitement around looking for a first home."}/>
          <ImageSection imageSource={"/images/housebrain/hb-moodboard.png"} imageAlt={"HouseBrain Mood board inspiration"} imageWidth={1472} imageHeight={1235}/>
          <TitleSection title={"Initial Designs"} information={"I started working on some low fidelity wireframes using a template in Figma. I experimented with different layouts, and they evolved over time before ending up on the final designs. It was useful to use a template as it was easy to move elements around."}/>
          <ImageSection imgTitle={"Low fidelity wireframes"} imageSource={"/images/housebrain/wire-frames.png"} imageAlt={"HouseBrain initial wireframes"} imageWidth={1472} imageHeight={674} imgDescription={"The mortgage calculator screen changed quite a bit from this initial design as I felt it was far to convoluted and not enough interaction around entering numbers. Also, having multiple bars that need swiping makes it not very accessible."}/>
          <ImageSection imgTitle={"User testing throughout the process"} imageSource={"/images/housebrain/heat-map.png"} imageAlt={"User testing heat maps of the HouseBrain app"} imageWidth={1201} imageHeight={577} imgDescription={"As this app is a somewhat new concept I was keen to make sure that user's new how to interact with the app and be able to achieve their goals. The heatmap analytics showed user's were able to navigate the app in the way that was expected."}/>
          <TitleSection title={"Final Designs"} information={"I incorporated two prototypes; the first showing the user experience for someone who has an account and the second showing the onboarding process. The second is important as onboarding new user's is defined in the success metrics. Also shown below is the design for the other features user's can access on the app."}/>    
          <div className={styles.finalSection}>
            <div className={styles.video}>
              <div style={{padding:"65.39% 0 0 0",position:"relative"}}>
                <iframe src="https://player.vimeo.com/video/1023258942?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="HouseBrain Prototype"></iframe>
              </div>
              <Script src="https://player.vimeo.com/api/player.js"></Script>
            </div>
            <ImageSection imageSource={"/images/housebrain/homepages.png"} imageAlt={"Three screenshot mock ups of HouseBrain App onboarding"} imageWidth={1472} imageHeight={1000}/> 
            <Image className={styles.onlyImg} src="/images/housebrain/comparison.png" alt="Three screenshot mock ups of the comparison feature in the housebrain app" width={1920} height={930}/> 
            <Image className={styles.onlyImg} src="/images/housebrain/hb-calculator.png" alt="Three screenshot mock ups of the calculator feature in the housebrain app" width={1472} height={1003}/>      
            <div className={styles.video}>
              <div style={{padding:"65.39% 0 0 0",position:"relative"}}>
                <iframe src="https://player.vimeo.com/video/1023259065?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="HouseBrain Onboarding"></iframe>
              </div>
              <Script src="https://player.vimeo.com/api/player.js"></Script>
            </div> 
            <ImageSection imageSource={"/images/housebrain/before-after.png"} imageAlt={"Before and after of the HouseBrain app"} imageWidth={1472} imageHeight={1134}/>  
            <div className={styles.caption}>
              <h3>Final testing</h3>
              <p>An example of the questions asked in the final user testing. It was useful to validate the designs in the testing format.</p>
            </div>
              <Image className={styles.onlyImg} src="/images/housebrain/final-testing.png" alt="Question example of final testing conducted" width={1920} height={746}/> 
            <div className={styles.caption}>
              <h3>Roadmap for project</h3>
            </div>
            <Image className={styles.onlyImg} src="/images/housebrain/hb-roadmap.png" alt="Roadmap for the HouseBrain app" width={1920} height={1052}/>
          </div> 
          <ReviewSection 
            textOne={(
              <>
                <p>Incorporating the use of heatmap analytics and more detailed user testing was highly beneficial in this project.</p>
                <p>From the survey work, I realised the importance of having a persona in this particular project as there were clearly different reasons and motivations for using the app.</p>
                <p>Seeing this project improve dramatically from the original design was satisfying (even though I think more work could be done around colour choice).</p>
              </>
            )}
            textTwo={(
              <>
                <p>I would like to do more user testing for the brand guidelines, in particular the colours. They could be more sophisticated whilst still appealing to the target audience and could achieve an AAA rating.</p>
                <p>If there was budget I would like to get the app live on the App Store to get further feedback in real world situations and work on the MVP.</p>
              </>
            )}
          />
          <CasestudyBanner/>
        </div>
      </main>
    </>
  )
}
