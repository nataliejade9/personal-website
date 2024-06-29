import Link from 'next/link';
import styles from './index.module.css'

const Button = ({ type = "primary", label, href, onClick}) => {
  const isMailLink = href?href.search("mailto:") === 0:false;
  const className = `${styles.button} ${type === "primary" ? styles.buttonPrimary : styles.buttonSecondary}`;
  if (!href) {
    return (
      <button className={className} onClick={onClick}>{label}</button>
    )
  }
  else if (isMailLink) {
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