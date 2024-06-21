import Link from 'next/link';
import styles from './index.module.css'

const Button = ({ type = "primary", label, href, onClick}) => {
  const isMailLink = href.search("mailto:") === 0;
  const className = `${styles.button} ${type === "primary" ? styles.buttonPrimary : styles.buttonSecondary}`;
  if (isMailLink) {
    return (
      <a className={className} href={href} onClick={onClick}>{label}</a>
    );
  } else {
    return (
      <Link className={className} href={href} onClick={onClick}>{label}</Link>
    );
  }
}

export default Button;