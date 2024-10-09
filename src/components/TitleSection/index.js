import styles from './index.module.css'

const TitleSection = ({title, information}) => {
    return (
        <div className={styles.titleContent}>
            <h2>{title}</h2>
            <p>{information}</p>
        </div>
    )
}

export default TitleSection;