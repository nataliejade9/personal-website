import styles from './index.module.css';
import Script from "next/script";

function VimeoScript() {
  return <Script src="https://player.vimeo.com/api/player.js"/>
}

export default async function Vimeo({ src, title, width, height }) {
  return (
    <>
      <div
        className={styles.container}
        style={{paddingTop: `${height / width * 100}%`}}>
        <iframe
          className={styles.video}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title={title}></iframe>
      </div>
      <VimeoScript/>
    </>
  )
}
