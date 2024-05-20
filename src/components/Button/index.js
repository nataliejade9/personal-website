
import Link from 'next/link';
import styles from './index.module.css'

const Button = ({ type = "primary", label, href}) => {
  if (type == "primary") {
    return (
      <Link className={`${styles.button} ${styles.buttonPrimary}`} href={href}>{label}</Link>
    );
  } else {
    return (
        <Link className={`${styles.button} ${styles.buttonSecondary}`} href={href}>{label}</Link>
    )
  }
}

export default Button;