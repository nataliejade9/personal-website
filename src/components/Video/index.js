import {Suspense} from "react";

import styles from './index.module.css';

export default async function Video({ src, title }) {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <div className={styles.container}>
        <video controls preload="none" aria-label="Video player" title={title} className={styles.video}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Suspense>
  )
}