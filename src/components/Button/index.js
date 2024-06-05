
import Link from 'next/link';
import styles from './index.module.css'

const Button = ({ type = "primary", label, href, onClick}) => {
  if (type == "primary") {
    return (
      <Link className={`${styles.button} ${styles.buttonPrimary}`} href={href} onClick={onClick}>{label}</Link>
    );
  } else {
    return (
        <Link className={`${styles.button} ${styles.buttonSecondary}`} href={href} onClick={onClick}>{label}</Link>
    )
  }
}

export default Button;