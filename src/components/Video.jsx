import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import backVideo from "../Assets/Hero.mp4"

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>

            <source src={backVideo} type="video/mp4"/>
        </video>

        <div className='content'>

 <h1>
    Welcome To The Beautiful World Of Jack Stauber
 </h1>

 <p>
 Coming from a small town where art wasn't accessible and if it was it was not interesting enough, it took a lot for me to want to be a creative. I remember the first time I wanted to be an artist and create. I was 11 years old and my aunt who was in University at the time came home with a fashion magazine. That is how I got introduced to surreal and dream-like art. That experience was inspiring and I always say till this day "I could not look away".Years after that I've searched for art that has my eyes glued on the screen. Art that is odd, out of the box but yet so impactful and beautiful. There's so many I've seen but a few that stand out. Most recently I have taken interest in Jack Stauber's Art. My website features his art and music but specially his short film called "Opal". As you explore my website I hope you get to see the beauty in this type of art and Jack Stauber's talent. Open the door and Enjoy!
 </p>
        </div>
        <Link to="/" className="btn">Door</Link>
        
        </div>
  )
}

export default Video