import styles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ContactButton from '../ContactButton'
import contactImage from '../../../public/contact-img.png'
import linkedInLogo from '../../../public/linkedin.svg'

export default function Contact() {
  return (
    <div className={styles.contactBanner}>
      <div className={styles.contactText}>
        <div className={styles.contactInner}>
          <h2>Contact</h2>
          <p>Let's discuss how my skills and unique perspective could contribute to the success of your business or product.</p>
          <div className={styles.contactContainer}>
            <Link href="https://www.linkedin.com/in/nataliewaites/" target="_blank"><Image className={styles.linkedIn} src={linkedInLogo} alt="LinkedIn logo icon"/></Link>
            <ContactButton label="Send Message"/>
          </div>  
        </div>
      </div>
      <div className={styles.contactImg}>
        <Image className={styles.profile} src={contactImage} alt="Illustration of laptop and notebook with send message icon"/>
      </div>
    </div>
  )
}
