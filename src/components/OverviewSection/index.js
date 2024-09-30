import styles from './index.module.css'
import Image from 'next/image'

const OverviewSection = ({overviewTitle, overviewSummary, roleTitle, roleText, teamTitle, teamText, designTitle, designText, successTitle, successText}) => {
    return (
        <div className={styles.overviewSection}>
            <h2>{overviewTitle}</h2>
            <p>{overviewSummary}</p>
            <div className={styles.overviewInfo}>
                <div className={styles.role}>
                    <h3>{roleTitle}</h3>
                    <p>{roleText}</p>
                </div>
                <div className={styles.team}>
                    <h3>{teamTitle}</h3>
                    <p>{teamText}</p>
                </div>
                <div className={styles.designTools}>
                    <h3>{designTitle}</h3>
                    <p>{designText}</p>
                </div>
                <div className={styles.successMetrics}>
                    <h3>{successTitle}</h3>
                    <p>{successText}</p>
                </div>
            </div>
        </div>
    )
}

export default OverviewSection;


