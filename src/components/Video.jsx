import React from 'react'

function Video() {
  return (
    <div className='h-[100vh]'>
            <video 
        className={` inset-0 w-full h-full object-cover`} 
        src='../video.mp4' 
        autoPlay 
        loop 
        muted 
        playsInline
      />

    </div>
  )
}

export default Video