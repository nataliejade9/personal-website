import styles from './index.module.css'

const ReviewSection = ({titleOne, textOne, titleTwo, textTwo}) => {
    return (
        <div className={styles.reviewSection}>
            <h3>{titleOne}</h3>
            <p>{textOne}</p>
            <h3>{titleTwo}</h3>
            <p>{textTwo}</p>
        </div>
    )
}

export default ReviewSection;