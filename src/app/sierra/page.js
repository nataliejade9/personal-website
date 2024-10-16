import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'
import CasestudyBanner from '@/components/CasestudyBanner'
import ReviewSection from '@/components/ReviewSection'

export const metadata = {
  title: 'Sierra Jewellery | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
    <main className={styles.main}>
      <ProjectHeader projectName={"Sierra"} projectDescription={"Jewellery store rebrand, giving users an easy and familiar way to shop their next purchase."}  imageSource={"/images/sierra/sierra-header-thin.png"} imageAlt={"Laptop and mobile screenshot of the Sierra Jewellery website"} imageWidth={4500} imageHeight={3000}/>
        <OverviewSection
          overviewSummary={"To transform Sierra Jewellery from an Etsy-based startup into a recognised, independent luxury brand with a robust digital presence, positioning it as a leader in ethical, artisanal jewellery in the UK market."} 
          roleTitle={"Role: UI Design"} 
          roleText={"Responsive visual web design, high-fidelity prototyping, design system, brand style guide, logo & packaging design"} 
          teamText={"Natalie Waites (solo project)"} 
          designText={"Figma, FigJam, Zoom, Adobe Photoshop and Illustrator"} 
          successOne={"Increase direct sales by 50% within 6 months"}
          successTwo={"Customer retention rate of 60% within one year"}
          successThree={"3% conversion rate within 6 months"}
          successFour={"Achieve 40% brand recognition among target audience within the first year"}
        />
        <div className={styles.mainProject}>
          <Image className={styles.onlyImg} src="/images/sierra/Sierra-title-img.png" alt="Homepage of Sierra Jewellery website on mac and mobile mock ups" width={4000} height={2902}/>
          <TitleSection title={"The Brief"} information={"Create a cohesive branding strategy to establish Sierra Jewellery as a standalone luxury brand, moving beyond the Etsy marketplace. To fulfil this brief I met with the client and filled out the lean canvas together, so that I could understand the business and have the client think about how the business's strategy fits with the design goals. "}/>
          <ImageSection imgTitle={"Understanding the business: Lean Canvas"} imageSource={"/images/sierra/Lean-Canvas.png"} imageAlt={"Filled out lean canvas for Sierra Jewellery"} imageWidth={3833} imageHeight={2359}/>
          <ImageSection imgTitle={"How can I help?: Agreeing the deliverables brainstorm"} imageSource={"/images/sierra/Success-metrics.png"} imageAlt={"Brainstorm of deciding deliverables"} imageWidth={3833} imageHeight={2359} imgDescription={"We agreed on a new brand identity (including style guide and design system), responsive e-commerce landing page with components to design future pages and packaging design."}/>
          <TitleSection title={"Inspiration for branding"} information={"I conducted thorough competitor research to gain a clear understanding of the desired visual direction. To guide my process and ensure cohesive deliverables, I created a mood board. This visual tool helped inform the development of the landing page design, branding elements, and UI design system."}/>
          <Image className={styles.onlyImg} src="/images/sierra/Moodboard-sierra.png" alt="Moodboard for Sierra Jewellery" width={2127} height={1762}/>
          
          <TitleSection title={"Initial design ideas"} information={"Our team went away and drafted up some initial design ideas using the information we had gathered from the client interview, the research, UX and designs provided. As well as using our inspiration and what we knew about the users to put together our individual take on how the application could look. We dissected the pros and cons of each design as a group before heading into the next meeting."}/>
          <ImageSection imageSource={"/images/finchair/first-designs.png"} imageAlt={"First designs for the finchair app"} imageWidth={7400} imageHeight={3508}/>  
          <TitleSection title={"Design Sprint"} information={"With a clear direction from the client feedback we jumped into design. We worked on various iterations and A,B tested as we went to establish the preferred design with users. I worked on components and design of the home, bills and rewards pages. Tiffany also worked on the components, wallet and design assets. Grace worked on video assets and log in page. We worked together well, using Figma comments to share feedback and progress."}/>
          <ImageSection imgTitle={"Initial iterations of the homepage and rewards page"} imageSource={"/images/finchair/Design-iterations.png"} imageAlt={"Four screens of the finchair app designs in early stages"} imageWidth={3626} imageHeight={1751} imgDescription={"A glimpse into the early stages of our design iterations and how we could optimally display the information to users. We played around with a few different card options and homepage display as this is where users would be drawn in."}/>
          <TitleSection title={"Final Designs"} information={"After making any last design edits we presented the final designs and prototype to the client. We had some very positive feedback from the client. In particular they loved the abstract space theme and thought it put accross a sophisticated aesthetic. He also really enjoyed the gamification of the rewards section, as he had a few designers look at this project and found this to be unqiue and stand out for the brand. Encouraging more investment and user adoption in the early stages."}/>
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
