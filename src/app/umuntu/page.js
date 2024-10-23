import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'
import CasestudyBanner from '@/components/CasestudyBanner'
import ReviewSection from '@/components/ReviewSection'

export const metadata = {
  title: 'Umuntu | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Umuntu"} projectDescription={"A central place for the Nigerian Diaspora to connect and share information."}  imageSource={"/images/umuntu/umuntu-header.png"} imageAlt={"Umuntu homepage displayed on laptop and mobile"} imageWidth={3400} imageHeight={3000}/>
   
      <OverviewSection
          overviewSummary={"A platform that allows users to be able to connect with the social and political life of their countries back home, empowering their voices, as well as contributing to their communities of origin. I used the double diamond approach for this project, as there were a lot of elements within the brief and I wanted to keep the project focused."} 
          roleTitle={"Role: Product Design (UX & UI)"} 
          roleText={"UX design, research & user testing, UI design of responsive web platform, high-fidelity prototyping"} 
          teamText={"Natalie Waites (solo project)"} 
          designText={"Figma, FigJam, Pitch, Speak Ai, Google Forms, Survey Swap, Slack, Adobe Photoshop and Illustrator"} 
          successOne={"100 Subscribers in first 3 months"}
          successTwo={"Web platform design that meets user's basic needs"}
          successThree={"The product addresses user painpoints from research"}
        />
        <div className={styles.mainProject}>
          <Image className={styles.onlyImg} src="/images/umuntu/hero-img.png" alt="Umuntu homescreen on laptop and iphone mockup screens" width={4500} height={2700}/>
          <TitleSection title={"The Brief"} information={"The initial brief was quite broad: 'A platform that empowers the African diaspora to engage with and impact the socio-political landscape of African countries through news, policy tracking, funding, and advocacy. Focused on developing a web platform with these functionalities.' After interviewing the client we agreed to define the brief further by understanding more about the business and conducting target user research."}/>
          <ImageSection imgTitle={"Understanding the business: Lean canvas and competitor analysis"} imageSource={"/images/umuntu/Umuntu-lean-canvas.png"} imageAlt={"Lean canvas diagram for Umuntu business"} imageWidth={7072} imageHeight={5384}/>
          <Image className={styles.onlyImg} src="/images/umuntu/Umuntu-competitor.png" alt="Competitor analysis for Umuntu business" width={7776} height={6690}/>
          <TitleSection title={"User Survey Results"} information={"Once I understood more about the business, I felt it was important to get out a target user survey to understand the market, get initial feedback on the problems presented and how user's currently solve them. For this project in particular it was important for me to allow the product to be driven by the target audience and their experience."}/>
          <div className={styles.stats}>
            <h3>The user survey guided the product direction and decision making</h3>
            <Image className={styles.onlyImg} src="/images/umuntu/mobile-first-stats.png" alt="Pie chart showing users prefer using mobile by 75%" width={2760} height={1552}/>
            <Image className={styles.onlyImg} src="/images/umuntu/important-to-users.png" alt="Bar-chart showing top three features important to user's" width={2760} height={1554}/>
            <Image className={styles.onlyImg} src="/images/umuntu/feature-info.png" alt="Bar-chart showing what features would put users off" width={2760} height={1552}/>
            <p>Based on the user survey results, we decided to take a mobile-first design approach and incorporate the top three things important to users. Finally, being aware of what would put target users off the product was crutial in order to acquire the first 100 subscribers. More questions in the survey gave us insights but these are the top three.</p>
          </div>
          <TitleSection title={"User Interviews"} information={"I was able to arrange a more in-depth interview with three people who participated in the survey. This was super valuable to the project as not only did I receive more information on the problem and their solutions but I was able to listen to their experience and understand the bigger picture. It was important for me to empathise and understand the situation user's were in as best I could to build a product that would suit them."}/>
          <ImageSection imgTitle={"Key quotes from the interviews and affinity map of everything discussed"} imageSource={"/images/umuntu/user-quotes.png"} imageAlt={"Quotes from user interview"} imageWidth={2760} imageHeight={1552}/>  
          <Image className={styles.onlyImg} src="/images/umuntu/Umuntu-affinityMap.png" alt="Affinity map for the three user interviews" width={14306} height={9818}/>
          <TitleSection title={"Defining Interview Information"} information={"From the affinity map, I was able to pull out the key themes discussed and would later use these to form the How Might We statements. I then made an experience map to understand the problems faced by user's and how they played out. I plotted where Umuntu could fit in that experience."}/>
          <ImageSection imageSource={"/images/umuntu/key-themes.png"} imageAlt={"Key themes from the user interviews"} imageWidth={2754} imageHeight={1552}/>
          <Image className={styles.onlyImg} src="/images/umuntu/Umuntu-experience-map.png" alt="Experience map for users" width={6976} height={4396}/>
          <TitleSection title={"Design Ideation"} information={"Going into the design stages I wanted to make sure I was clear on the key opportunities that Umuntu could fill in this space. From there I was able to build three 'How Might We' statements in order to direct the design process and use them to support ideation."}/>
          <ImageSection imageSource={"/images/umuntu/opportunities.png"} imageAlt={"Opportunites indetified for Umuntu"} imageWidth={2758} imageHeight={1554}/>
          <Image className={styles.onlyImg} src="/images/umuntu/HMW.png" alt="How Might We statements for Umuntu" width={2758} height={1554}/>
          <TitleSection title={"Initial Design Phase"} information={"I started the design process by making a moodboard to get a feel for what direction we were going for. I incorporated ideas from user feedback as well as the logo provided by the client. I moved on to some low fidelity wireframes to experiment with different features within the app before jumping into Figma."}/>
          <ImageSection imageSource={"/images/umuntu/Umuntu-moodboard.png"} imageAlt={"Moodboard for Umuntu"} imageWidth={5530} imageHeight={3899}/>
          <Image className={styles.onlyImg} src="/images/umuntu/wireframe.png" alt="Low fidelity wireframes for umuntu features" width={3024} height={2366}/>
          <TitleSection title={"Final Prototype & Designs"} information={"I presented these final prototype and designs to the client and the user's who participated in the interviews. The client was happy that it fulfilled the brief and I was able to get some final testing and feedback from user's. Overall the feedback was positive but I've included suggested edits for future. I've also included the implementation roadmap I provided for the client."}/>
          <div className={styles.video}>
            <div style={{padding:"68.82% 0 0 0",position:"relative"}}>
              <iframe src="https://player.vimeo.com/video/1022514120?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="Umuntu Prototype"></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div className={styles.finalSection}>
            <ImageSection imageSource={"/images/umuntu/home-screens.png"} imageAlt={"Umuntu homescreens in three iphone mock ups"} imageWidth={4500} imageHeight={2600}/>
            <Image className={styles.onlyImg} src="/images/umuntu/Community.png" alt="Umuntu community screens in three iphone mock ups" width={4500} height={2500}/> 
            <Image className={styles.onlyImg} src="/images/umuntu/Social-projects.png" alt="Umuntu social projects page on iphone mock up" width={4500} height={2500}/>
            <Image className={styles.onlyImg} src="/images/umuntu/Email-2.0.png" alt="Umuntu monthly digest example on iphone mock up" width={4500} height={2500}/>
            <Image className={styles.onlyImg} src="/images/umuntu/Final-testing.png" alt="User testing feedback of final design" width={2758} height={1550}/>
            <Image className={styles.onlyImg} src="/images/umuntu/roadmap.png" alt="Implementation roadmap" width={2756} height={1546}/>
          </div>  
          <ReviewSection 
            textOne={(
              <>
                <p>Client feedback: 'I loved the presentation and work done by Natalie, and look forward to setting much of the recommendations and work into motion.'</p>
                <p>This was a large project to take on solo, so I was happy with my process and being able to define the brief further to aid this.</p>
                <p>I felt that the research phase was crutial to this project and has shaped the kind of product designer I aim to be, by incorporating empathy at the core of my work.</p>
              </>
            )}
            textTwo={(
              <>
                <p>As ever, it would be beneficial to do more user testing and tweaking to the final design as the scrolling option was still undecided.</p>
                <p>I would have liked to collaborate more on this project and have other people and their views involved.</p>
                <p>To test more on user testing sites if the budget had allowed.</p>
              </>
            )}
          />
          <CasestudyBanner/>
          </div>
    </main>
  )
}
