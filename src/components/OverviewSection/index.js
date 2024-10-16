import styles from './index.module.css'

const OverviewSection = ({overviewSummary, roleTitle, roleText, teamText, designText, successOne, successTwo, successThree, successFour}) => {
    return (
        <div className={styles.overviewSection}>
            <div className={styles.overviewAlign}>
                <div className={styles.titleSection}>
                    <h2>Overview</h2>
                    <p>{overviewSummary}</p>
                </div>
                <ul className={styles.overviewInfo}>
                    <li className={styles.role}>
                        <h3>{roleTitle}</h3>
                        <p>{roleText}</p>
                    </li>
                    <li className={styles.team}>
                        <h3>Team</h3>
                        <p>{teamText}</p>
                    </li>
                    <li className={styles.designTools}>
                        <h3>Design Toolkit</h3>
                        <p>{designText}</p>
                    </li>
                    <li className={styles.successMetrics}>
                        <h3>Success Metrics</h3>
                        <ul className={styles.successList}>
                            <li><p>{successOne}</p></li>
                            <li><p>{successTwo}</p></li>
                            <li><p>{successThree}</p></li>
                            <li><p>{successFour}</p></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OverviewSection;


