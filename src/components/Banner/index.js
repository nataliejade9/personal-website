import styles from './index.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>Welcome</h3>
      <p></p>
      <img src="./public/natalie-office.jpg" alt="Portrait Image of Natalie Waites"/>
    </div>
  )
}
