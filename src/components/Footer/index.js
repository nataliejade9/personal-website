import styles from './index.module.css'
import Randomiser from '../Randomiser'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBanner}>
          <p>You’ve reached the footer.</p>
        <div className={styles.randomiser}>
          <p>Did you scroll past my work? Click the randomiser button to check out a random project   <span role="img" aria-label="arrow-right">➡️</span></p>
          <div><Randomiser links={[
            "/housebrain",
            "/umuntu",
            "/finchair",
            "/sierra"
          ]}/></div>
        </div>
        <div className={styles.copyright}>
          <h6>© Copyright 2024 Natalie Waites</h6>
          <h6>This site was designed and coded by Natalie Waites.</h6>
        </div>
      </div>
    </footer>
  )
}
