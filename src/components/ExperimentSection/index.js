import ImageSection from '../ImageSection'
import styles from './index.module.css'

const ExperimentSection = ({title, imageCards}) => {
    return (
        <div className={styles.experimentContent}>
            <h2>{title}</h2>
            <>{imageCards}</>
        </div>
    )
}

export default ExperimentSection;