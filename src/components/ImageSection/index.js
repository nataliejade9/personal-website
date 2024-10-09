import styles from './index.module.css'
import Image from 'next/image'

const ImageSection = ({imgTitle, imageSource, imageAlt, imageWidth, imageHeight}) => {
    return (
        <div className={styles.projectImg}>
            {imgTitle && (<h2>{imgTitle}</h2>)}
            <Image className={styles.img} src={imageSource} alt={imageAlt} width={imageWidth} height={imageHeight}/>
        </div>
    )
}

export default ImageSection;