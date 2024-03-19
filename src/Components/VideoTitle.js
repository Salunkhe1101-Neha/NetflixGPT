import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' w-screen aspect-video absolute pt-[10%] px-20 text-white bg-gradient-to-r from-black overflow-x-hidden'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle