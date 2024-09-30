import styles from './index.module.css'

const OverviewSection = ({overviewTitle, overviewSummary, roleTitle, roleText, teamTitle, teamText, designTitle, designText, successTitle, successOne, successTwo, successThree, successFour}) => {
    return (
        <div className={styles.overviewSection}>
            <h2>{overviewTitle}</h2>
            <p>{overviewSummary}</p>
            <ul className={styles.overviewInfo}>
                <li className={styles.role}>
                    <h3>{roleTitle}</h3>
                    <p>{roleText}</p>
                </li>
                <li className={styles.team}>
                    <h3>{teamTitle}</h3>
                    <p>{teamText}</p>
                </li>
                <li className={styles.designTools}>
                    <h3>{designTitle}</h3>
                    <p>{designText}</p>
                </li>
                <li className={styles.successMetrics}>
                    <h3>{successTitle}</h3>
                    <ul>
                        <li>{successOne}</li>
                        <li>{successTwo}</li>
                        <li>{successThree}</li>
                        <li>{successFour}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default OverviewSection;


