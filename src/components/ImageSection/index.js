import styles from './index.module.css'
import Image from 'next/image'

const ImageSection = ({imageSource, imageAlt, imageWidth, imageHeight}) => {
    return (
        <div className={styles.projectImg}>
            <Image className={styles.img} src={imageSource} alt={imageAlt} width={imageWidth} height={imageHeight}/>
        </div>
    )
}

export default ImageSection;