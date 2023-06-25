import React from 'react'
import Video from "../Video"
import {Link} from 'react-router-dom'
import Carousel from '../Carousel'
import Door from "../Door/Door"


const Home = () => {
  return (
    <div>
            
      
         

          
          <section id="showcase">
		<div class="container">
			<h1>
				Welcome to The Beautiful World of Jack Stauber's Art
			</h1>
		</div>
	</section>

	<div class="container">
		<section id="main">
		
		<p>Coming from a small town where art wasn't accessible and if it was it was not interesting enough, it took a lot for me to want to be a creative. I remember the first time I wanted to be an artist and create. I was 11 years old and my aunt who was in University at the time came home with a fashion magazine. That is how I got introduced to surreal and dream-like art. That experience was inspiring and I always say till this day "I could not look away".Years after that I've searched for art that has my eyes glued on the screen. Art that is odd, out of the box but yet so impactful and beautiful. There's so many I've seen but a few that stand out. Most recently I have taken interest in Jack Stauber's Art. My website features his art and music but specially his short film called "Opal". As you explore my website I hope you get to see the beauty in this type of art and Jack Stauber's talent. Open the door and Enjoy!
		</p>
		</section>

		<aside id="sidebar">
    <Link to="/internetartwork" className="internetartwork"> 
			<p>
			<Door/>
			</p>
      </Link>
      
      
		</aside>
    <Carousel/>
	</div>
  <Video/>
    </div>


  )
}

export default Home