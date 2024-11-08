import styles from './index.module.css'
import Link from 'next/link';

const CasestudyBanner = ({}) => {
    return (
        <h2 className={styles.promo}>Want a walk-through of this case study?{" "}<Link href="https://calendar.app.google/xjTKr9jayhcL5cP1A" target="_blank" className={styles.linkStyle}>Let's schedule a time</Link></h2>
    )
}

export default CasestudyBanner;