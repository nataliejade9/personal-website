import styles from './index.module.css'
import Image from 'next/image'

const ProjectHeader = ({projectName, projectDescription, imageSource, imageAlt, imageWidth, imageHeight}) => {
    return (
        <div className={styles.projectHeader}>
            <div className={styles.titleInfo}>
                <h1>{projectName}</h1>
                <h2>{projectDescription}</h2>
            </div>
            <div className={styles.projectHeaderImg}>
                <Image className={styles.coverImg} src={imageSource} alt={imageAlt} width={imageWidth} height={imageHeight} priority/>
            </div>
        </div> 
    )
}

export default ProjectHeader;
