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
          <Image className={styles.onlyImg} src="/images/sierra/sierra-title-img.png" alt="Homepage of Sierra Jewellery website on mac and mobile mock ups" width={2796} height={1820}/>
          <TitleSection title={"The Brief"} information={"Create a cohesive branding strategy to establish Sierra Jewellery as a standalone luxury brand, moving beyond the Etsy marketplace. To fulfil this brief I met with the client and filled out the lean canvas together, so that I could understand the business and have the client think about how the business's strategy fits with the design goals. "}/>
          <ImageSection imgTitle={"Understanding the business: Lean Canvas"} imageSource={"/images/sierra/lean-canvas.png"} imageAlt={"Filled out lean canvas for Sierra Jewellery"} imageWidth={3833} imageHeight={2359}/>
          <ImageSection imgTitle={"How can I help?: Agreeing the deliverables brainstorm"} imageSource={"/images/sierra/success-metrics.png"} imageAlt={"Brainstorm of deciding deliverables"} imageWidth={3833} imageHeight={2359} imgDescription={"We agreed on a new brand identity (including style guide and design system), responsive e-commerce landing page with components to design future pages and packaging design."}/>
          <TitleSection title={"Inspiration"} information={"I conducted thorough competitor research to gain a clear understanding of the desired visual direction. To guide my process and ensure cohesive deliverables, I created a mood board. This visual tool helped inform the development of the landing page design, branding elements, and UI design system."}/>
          <Image className={styles.onlyImg} src="/images/sierra/moodboard-sierra.png" alt="Mood board for Sierra Jewellery" width={2127} height={1762}/>
          <TitleSection title={"Design System & Brand Style Guide"} information={"I originally thought about having red and green as the primary colours for the brand but when putting this into the web design, the visuals became too busy and didn’t give the elegant feel we were going for. This final design system and brand style guide lends itself more to the luxury brand."}/>
          <div className={styles.branding}>
            <div className={styles.textBranding}>
              <h2>Colour Palette</h2>
              <p>Our colour palette embodies the essence of Sierra Jewellery, reflecting our commitment to timeless elegance and British heritage. We've chosen a sophisticated array of hues that evoke the rich traditions of fine jewellery while embracing modern sensibilities.</p>
            </div>
            <Image className={styles.onlyImg} src="/images/sierra/colours.png" alt="Colour swatches for Sierra Jewellery designs" width={2973} height={1809}/>
            </div>
            <div className={styles.branding}>
              <div className={styles.textBranding}>
                <h2>Typography</h2>
                <h3>Sierra Jewellery's font selection marries tradition with modernity:</h3>
                <p>Snell Roundhand: Our primary display font, embodies classic elegance. Its flowing, calligraphic style evokes the artistry of hand-engraved jewelry, emphasizing our commitment to craftsmanship and sophistication.</p>
                <p>Montserrat: Our secondary font, provides a contemporary balance. This clean, geometric sans-serif ensures readability and versatility across various applications, representing our brand's modern sensibilities.</p>
              </div>
            <Image className={styles.onlyImg} src="/images/sierra/typography.png" alt="Typography sets for Sierra Jewellery designs" width={3082} height={2447}/>
            </div>
            <div className={styles.branding}>
              <div className={styles.textBranding}>
                <h2>Logo Set</h2>
                <p>The Sierra Jewellery logo embodies elegance and craftsmanship. The serif font in ruby red evokes a sense of timeless sophistication, while the pendant hanging from the curve of the "S" cleverly integrates our core product into our brand mark. This primary logo is complemented by a simplified secondary version and a distinctive pendant signifier, creating a versatile and cohesive visual identity that represents our commitment to classic beauty and attention to detail.</p>
              </div>
              <div className={styles.logos}>
                <Image className={styles.onlyImg} src="/images/sierra/logos.png" alt="Logo set for Sierra Jewellery design" width={1387} height={2632}/>
              </div>
            <div className={styles.mockups}>
              <Image className={styles.onlyImg} src="/images/sierra/jewellery-necklace-Box-Mockup.png" alt="Logo placement mock up on necklace jewellery box" width={4500} height={3000}/>
              <Image className={styles.onlyImg} src="/images/sierra/t-shirt-sierra.png" alt="Logo placement mock up on T-shirt" width={4000} height={2854}/>
              <Image className={styles.onlyImg} src="/images/sierra/jewellery-box-mockup.png" alt="Jewellery box mock up with Sierra Logo" width={2913} height={1802}/>
            </div>
          </div>
          <TitleSection title={"Initial Landing Page Design & Iterations"} information={"The client was keen on highlighting individual products as the user hovers over them, to encourage conversion. I experimented with how this could look. However when we A/B tested it, users seemed to prefer the more simple design for the product cards. Which would correspond with Jakob's Law about consistency and standards; noted in the 10 usability heuristics."}/>
          <ImageSection imageSource={"/images/sierra/sierra-edits.png"} imageAlt={"Initial Sierra Jewellery website designs and edit notes"} imageWidth={1512} imageHeight={3742} imgDescription={"There were multiple versions of the design. I'm a fan of testing throughout the design process and getting feedback on certain elements of the design to allow natural pivots towards a more user-friendly experience."}/>
          <TitleSection title={"Final Landing Page Design (Responsive)"} information={"The page seamlessly guides users through carefully positioned product imagery and clear calls-to-action. Allowing users to navigate the site with ease, while maintaining a focus on the artisanal quality. The result is an engaging, responsive design that elevates Sierra Jewellery from its Etsy origins to a premium digital presence."}/>
          <div className={styles.finalSection}>
            <Image className={styles.onlyImg} src="/images/sierra/sierra-responsive.png" alt="Sierra homepage laptop and iPhone mockup" width={4500} height={3000}/> 
            <Image className={styles.onlyImg} src="/images/sierra/sierra-mood-image.png" alt="Sierra homepage laptop mockup" width={4500} height={3000}/> 
            <Image className={styles.onlyImg} src="/images/sierra/sierra-signup.png" alt="Sierra homepage laptop and iPhone mockup with book and reading glasses" width={4500} height={3000}/> 
            </div>  
          <ReviewSection 
            textOne={(
              <>
                <p>I was happy with the clear visual language achieved and the design process it took to get there.</p>
                <p>The client was impressed with the result and thought it really showed the luxury feel they were looking for.</p>
                <p>Having that initial open communication with the client was essential on this project, ensuring the correct deliverables were agreed.</p>
              </>
            )}
            textTwo={(
              <>
                <p>Unfortunately the client is yet to make the designs "live". I would have liked to see it in the real world and make edits based on user feedback.</p>
                <p>I would have liked to arrange a photoshoot of the clients' actual product rather than use stock imagery. It would have made the final design a lot more cohesive.</p>
              </>
            )}
          />
          <CasestudyBanner/>
      </div>
    </main>
    </>
  )
}
