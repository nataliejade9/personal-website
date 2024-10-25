import ImageSection from '../ImageSection'
import styles from './index.module.css'

const ExperimentSection = ({title, description, imageCards}) => {
    return (
        <div className={styles.experimentContent}>
            <h2>{title}</h2>
            <p>{description}</p>
            <>{imageCards}</>
        </div>
    )
}

export default ExperimentSection;