import ImageSection from '../ImageSection'
import styles from './index.module.css'

const ExperimentSection = ({title}) => {
    return (
        <div className={styles.experimentContent}>
            <h2>{title}</h2>
            <><ImageSection/></>
        </div>
    )
}

export default ExperimentSection;