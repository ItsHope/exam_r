import React from 'react'

import './VideoStyles.css'

import backVideo from "../Assets/Hero.mp4"

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay muted id='video'>

            <source src={backVideo} type="video/mp4"/>
        </video>

        

 
       
        
        
        </div>
  )
}

export default Video