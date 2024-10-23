import ImageSection from '../ImageSection'
import styles from './index.module.css'

const ExperimentSection = ({title, imageSection}) => {
    return (
        <div className={styles.experimentContent}>
            <h2>{title}</h2>
            <>{imageSection}</>
        </div>
    )
}

export default ExperimentSection;