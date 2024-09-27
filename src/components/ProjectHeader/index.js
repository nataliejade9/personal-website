import styles from './index.module.css'
import Image from 'next/image'

const ProjectHeader = ({projectName, projectDescription}) => {
    return (
        <div className={styles.projectHeader}>
        <div className={styles.titleInfo}>
            <h1>{projectName}</h1>
            <h2>{projectDescription}</h2>
        </div>
        <div className={styles.projectHeaderImg}>
            <Image className={styles.coverImg} src="/images/finchair/header-img-both.png" alt="Finchair app screens. Bills screen and rewards screen." width={5000} height={5945}/>
        </div>
    </div> 
    )
}

export default ProjectHeader;