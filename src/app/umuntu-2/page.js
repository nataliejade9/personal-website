import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'
import CasestudyBanner from '@/components/CasestudyBanner'
import ReviewSection from '@/components/ReviewSection'
import Vimeo from "@/components/Vimeo";

export const metadata = {
  title: 'Umuntu | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Umuntu"} projectDescription={"A central place for the Nigerian Diaspora to connect and share information."}  imageSource={"/images/umuntu/umuntu-header.png"} imageAlt={"Umuntu homepage displayed on laptop and mobile"} imageWidth={778} imageHeight={813} priority/>
      <OverviewSection
        overviewSummary={"A platform that allows users to be able to connect with the social and political life of their countries back home, empowering their voices, as well as contributing to their communities of origin. I used the double diamond approach for this project, as there were a lot of elements within the brief and I wanted to keep the project focused."}
        roleTitle={"Role: Product Design (UX & UI)"}
        roleText={"UX design, research & user testing, UI design of responsive web platform, high-fidelity prototyping"}
        teamText={"Natalie Waites (solo project)"}
        designText={"Figma, FigJam, Pitch, Speak Ai, Google Forms, Survey Swap, Slack, Adobe Photoshop and Illustrator"}
        successOne={"100 Subscribers in first 3 months"}
        successTwo={"Web platform design that meets user's basic needs"}
        successThree={"The product addresses user pain points from research"}
      />
      <div className={styles.mainProject}>
        <Image className={styles.onlyImg} src="/images/umuntu/hero-img.png" alt="Umuntu home screen on laptop and iphone mockup screens" width={1920} height={913}/>
        <TitleSection title={"The Brief"} information={"The initial brief was quite broad: 'A platform that empowers the African diaspora to engage with and impact the socio-political landscape of African countries through news, policy tracking, funding, and advocacy. Focused on developing a web platform with these functionalities.' After interviewing the client we agreed to define the brief further by understanding more about the business and conducting target user research."}/>
        <ImageSection imgTitle={"Understanding the business: Lean canvas and competitor analysis"} imageSource={"/images/umuntu/umuntu-lean-canvas-1.png"} imageAlt={"Lean canvas diagram for Umuntu business"} imageWidth={1472} imageHeight={1121}/>
        <Image className={styles.onlyImg} src="/images/umuntu/umuntu-competitor-analysis.png" alt="Competitor analysis for Umuntu business" width={1920} height={1315}/>
        <TitleSection title={"User Survey Results"} information={"Once I understood more about the business, I felt it was important to get out a target user survey to understand the market, get initial feedback on the problems presented and how user's currently solve them. For this project in particular it was important for me to allow the product to be driven by the target audience and their experience."}/>
        <div className={styles.stats}>
          <h3>The user survey guided the product direction and decision making</h3>
          <Image className={styles.onlyImg} src="/images/umuntu/mobile-first-stats.png" alt="Pie chart showing users prefer using mobile by 75%" width={1920} height={876}/>
          <Image className={styles.onlyImg} src="/images/umuntu/important-to-users.png" alt="Bar-chart showing top three features important to user's" width={1920} height={877}/>
          <Image className={styles.onlyImg} src="/images/umuntu/feature-info.png" alt="Bar-chart showing what features would put users off" width={1920} height={876}/>
          <p>Based on the user survey results, we decided to take a mobile-first design approach and incorporate the top three things important to users. Finally, being aware of what would put target users off the product was crutial in order to acquire the first 100 subscribers. More questions in the survey gave us insights but these are the top three.</p>
        </div>
        <TitleSection title={"User Interviews"} information={"I was able to arrange a more in-depth interview with three people who participated in the survey. This was super valuable to the project as not only did I receive more information on the problem and their solutions but I was able to listen to their experience and understand the bigger picture. It was important for me to empathise and understand the situation user's were in as best I could to build a product that would suit them."}/>
        <ImageSection imgTitle={"Key quotes from the interviews and affinity map of everything discussed"} imageSource={"/images/umuntu/user-quotes.png"} imageAlt={"Quotes from user interview"} imageWidth={1472} imageHeight={828}/>
        <Image className={styles.onlyImg} src="/images/umuntu/umuntu-affinity-map.png" alt="Affinity map for the three user interviews" width={1920} height={1058}/>
        <TitleSection title={"Defining Interview Information"} information={"From the affinity map, I was able to pull out the key themes discussed and would later use these to form the How Might We statements. I then made an experience map to understand the problems faced by user's and how they played out. I plotted where Umuntu could fit in that experience."}/>
        {/*<ImageSection imageSource={"/images/umuntu/key-themes.png"} imageAlt={"Key themes from the user interviews"} imageWidth={1472} imageHeight={830}/>*/}
        {/*<Image className={styles.onlyImg} src="/images/umuntu/umuntu-experience.png" alt="Experience map for users" width={1920} height={976}/>*/}
        {/*<TitleSection title={"Design Ideation"} information={"Going into the design stages I wanted to make sure I was clear on the key opportunities that Umuntu could fill in this space. From there I was able to build three 'How Might We' statements in order to direct the design process and use them to support ideation."}/>*/}
        {/*<ImageSection imageSource={"/images/umuntu/opportunities.png"} imageAlt={"Opportunities identified for Umuntu"} imageWidth={1472} imageHeight={830}/>*/}
        {/*<Image className={styles.onlyImg} src="/images/umuntu/h-m-w.png" alt="How Might We statements for Umuntu" width={1920} height={875}/>*/}
        {/*<TitleSection title={"Initial Design Phase"} information={"I started the design process by making a moodboard to get a feel for what direction we were going for. I incorporated ideas from user feedback as well as the logo provided by the client. I moved on to some low fidelity wireframes to experiment with different features within the app before jumping into Figma."}/>*/}
        {/*<ImageSection imageSource={"/images/umuntu/umuntu-moodboard-1.png"} imageAlt={"Moodboard for Umuntu"} imageWidth={1472} imageHeight={1038}/>*/}
        {/*<Image className={styles.onlyImg} src="/images/umuntu/wireframe.png" alt="Low fidelity wireframes for umuntu features" width={1920} height={1125}/>*/}
        {/*<TitleSection title={"Final Prototype & Designs"} information={"I presented these final prototype and designs to the client and the user's who participated in the interviews. The client was happy that it fulfilled the brief and I was able to get some final testing and feedback from user's. Overall the feedback was positive but I've included suggested edits for future. I've also included the implementation roadmap I provided for the client."}/>*/}
        <div className={styles.video}>
          <Vimeo src="https://player.vimeo.com/video/1022514120?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Umuntu Prototype" width={2354} height={1620}/>
        </div>
        {/*<div className={styles.finalSection}>*/}
        {/*  <ImageSection imageSource={"/images/umuntu/home-screens.png"} imageAlt={"Umuntu home screens in three iphone mock ups"} imageWidth={1472} imageHeight={851}/>*/}
        {/*  <Image className={styles.onlyImg} src="/images/umuntu/umuntu-community.png" alt="Umuntu community screens in three iphone mock ups" width={1920} height={866}/>*/}
        {/*  <Image className={styles.onlyImg} src="/images/umuntu/umuntu-social-projects.png" alt="Umuntu social projects page on iphone mock up" width={1920} height={866}/>*/}
        {/*  <Image className={styles.onlyImg} src="/images/umuntu/umuntu-email.png" alt="Umuntu monthly digest example on iphone mock up" width={1920} height={866}/>*/}
        {/*  <Image className={styles.onlyImg} src="/images/umuntu/umuntu-final-testing.png" alt="User testing feedback of final design" width={1920} height={876}/>*/}
        {/*  <Image className={styles.onlyImg} src="/images/umuntu/roadmap.png" alt="Implementation roadmap" width={1920} height={874}/>*/}
        {/*</div>*/}
        {/*<ReviewSection*/}
        {/*  textOne={(*/}
        {/*    <>*/}
        {/*      <p>Client feedback: 'I loved the presentation and work done by Natalie, and look forward to setting much of the recommendations and work into motion.'</p>*/}
        {/*      <p>This was a large project to take on solo, so I was happy with my process and being able to define the brief further to aid this.</p>*/}
        {/*      <p>I felt that the research phase was crucial to this project and has shaped the kind of product designer I aim to be, by incorporating empathy at the core of my work.</p>*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*  textTwo={(*/}
        {/*    <>*/}
        {/*      <p>As ever, it would be beneficial to do more user testing and tweaking to the final design as the scrolling option was still undecided.</p>*/}
        {/*      <p>I would have liked to collaborate more on this project and have other people and their views involved.</p>*/}
        {/*      <p>To test more on user testing sites if the budget had allowed.</p>*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*/>*/}
        {/*<CasestudyBanner/>*/}
      </div>
    </main>
  )
}
