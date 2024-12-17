import {Suspense} from "react";

export default async function Video({ src, title }) {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <div style={{padding:"65.39% 0 0 0",position:"relative"}}>
        <video controls preload="none" aria-label="Video player" title={title} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Suspense>
  )
}
