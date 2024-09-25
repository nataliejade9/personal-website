import styles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ContactButton from '../ContactButton'

export default function Contact() {
  return (
    <div className={styles.contactBanner}>
      <div className={styles.contactText}>
        <div className={styles.contactInner}>
          <h2>Contact</h2>
          <p>Let's discuss how my skills and unique perspective could contribute to the success of your business or product.</p>
          <div className={styles.contactContainer}>
            <Link href="https://www.linkedin.com/in/nataliewakes/" target="_blank"><Image className={styles.linkedIn} src={"/linkedin.svg"} alt="LinkedIn logo icon" width={34} height={34}/></Link>
            <ContactButton label="Send Message"/>
          </div>  
        </div>
      </div>
      <div className={styles.contactImg}>
        <Image className={styles.profile} src="/sending a message from laptop blue.png" alt="Illustration of laptop and notebook with send message icon" width={4196} height={2241}/>
      </div>
    </div>
  )
}
