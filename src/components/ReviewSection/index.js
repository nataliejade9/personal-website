import styles from './index.module.css'

const ReviewSection = ({textOne, textTwo}) => {
    return (
        <div className={styles.reviewSection}>
            <h2>Retrospective</h2>
            <div className={styles.wentWell}></div>
                <h3>What went well</h3>
                <>{textOne}</>
            <div className={styles.spacing}></div>
            <div className={styles.improved}>
                <h3>What could be improved</h3>
                <>{textTwo}</>
            </div>
        </div>
    )
}

export default ReviewSection;