import React from 'react'
import IAW from "./IAW.png"
import HPW from "./HPW.png"
import BW from "./BW.png"
import SG from "./SG.png"

const Design = () => {
  return (
    <div>
       <h1>Design Rationale</h1>

<div class="container">
		<section id="main">
		
		<p>
        My new site with React is true to what I wanted to do from the beginning, make a website that is inspired by Jack Staubers art. The arts chaoticness, creativity and beauty. My design goals did not change but from Assignments one’s feedback I had new goals. One of my concerns I addressed was convention and familiarity. I felt like as much as I wanted a blog that was unique, challenged a lot of web design boundaries because that is what Jack’s art does, I still had to consider the assignment and the rubric. In my last website I thought I had considered good UI and UX but that was not the case because I didn’t get marked well on that. My new goals for my website were familiarity and good UI and UX design, specifically fixing my navigation. My marker had expressed that my website could be confusing when they landed on certain pages especially pages that did not have my original navbar that was on the landing/homepage. This made it difficult to keep track of where you are on my website. Navigating through the blogs was also difficult. Beginning my blog I had a new set of goals including still having some shock value for my site after having extensively analysed a website called Screenfull for Assignment 2 I was inspired. My assignment feedback really made me think about what my site was about, I had said my site was going to be inspired by Jack Stauber’s art but I only focused on Opal, the short film. In this new site, the website does not solely focus on Opal but rather on Jack Stauber. The homepage displays some of his work in a carousel style that a user can interact by dragging and scrolling.  My last assignments colourways included shades of dusty green, greys and black. This new site has shades of blue, this is because the site does not focus on Opal anymore but Jack's work in general which gave me the creative freedom to introduce new colours. These shades of blue are all around the site, on the navbar, footer and quiz component. The content on the navbar fits perfectly, this is an issue I have addressed from the last site. I’ve added videos as backgrounds on the pages; home, blog card page as well as the internet art page. This is to stay true to my design goals for chaoticness that I wanted to experiment with on my last assignment. One thing I realised with Screenfull was that the pages on the site did not correlate but it still worked because it created a beautiful mess, a content overload website that the users intended for. My pages have chaotic videos all from Jack’s work. One of the requirements for this assignment were to make the website an internet artwork itself. My website still has a door animation that users can interact with, another way there is interactivity on the web is through the carousel. Users can scroll and see all of the pictures featured on the carousel. To choosing to make the website all about Jack Stauber and his art and exclusively the internet art about Opal, I used the footer as a medium to get a sense of Jack. The footer has all the things people have said about Jack Stauber and his art quoted, all the descriptions about the type of artist he is, including music genres and distinct features in his art like teeth. The footer also has images of Jack. The quotes are links. I noticed that Screenfull had a lot of links that led to different pages, for this assignment I could not do that because of the time and wanting a manageble size of site. I wanted the links to lead to different pages and that would mean my site would have to have multiple pages which was not ideal. The quotes all bounce the user back to the top of the page.
		</p>
		</section>
    </div>
    <h1>UI and UX</h1>

    <div class="container">
		<section id="main">
		
		<p>
    For my new site, I have considered spacing and negative space extensively. The spacing in between components. I wanted the website to not be clustered. As mentioned in my rationale, Screenfull is a website that inspired me. I felt though that Screenfull was clustered and user experience was not considered but as the creators have mentioned in interviews, that was the whole point of the website. My website was also made to be an experience but there is also content and writing and I did not want to get in the way of that thus the improvement in spacing. Another UI and UX consideration is consideration a background colour for content and writing. I wanted the videos to not get in the way of reading content on the site. Text that does not have a background colour on my blog is bigger and bold, therefore users can easily read. The pages with blogs do not have videos at all. There is rather a black background so users can soley focus on the conten. The videos also do not loop, after the shock value it was intended for, users can explore the website. The video on the all pages excluding the internet art page are of Jack's work, while the background video on the internet artpage is about Opal. This was very intentinal. My whole site is responsive including my new internet art addition. The users can easily use components on my website. There is text that indicates that a certain component is a door. There is text that indicates that users can scroll to use the carousel. Another thing I wanted to consider this time was consistent navigation. My navbar is on all of my pages. It is sticky, the user can scroll down and they will still have access to the navbar. React made things easier for me. I was able to create a navbar function and add it to app.js and have it appear on all of my pages. The font is consistent, style and size.  
		</p>
		</section>
    </div>

    <h1>Internet Art Rationale</h1>

    <div class="container">
		<section id="main">
		
		<p>
    For my internet artwork I’m still stuck to storytelling through images, text and audio. My internet art consists of a collage. This collage features points in the movie Opal, a short film by Jack Stauber. My plan for this intire project was to tell the story well, tell the story like how Jack tels the story. I wanted to share the whole film or make users have an idea of how the film is like or feels like through text, audio and visuals. The user will be seeing a picture, listening to audio and creating and visualising the events in their head.Users can interact with the collage because its animated. The swinging images stop once a user stops on one image. That was my internet art for my last submission so for this submission I wanted to add on that. To test if explaining the film was a success I decided to include a quiz for my internet art. A comprehension quiz with questions about the events of the film that were disclosed via the text, imagery and audio. There are instances were the answer is hinted. The quiz is made up of 5 questions, some very obvious and some not so obvious. Users can simply count the number of family members on one of the images in the collage to get the answer "There are 4 family memeber's in Opal's family. There are answers that users need to think about like "who coughs up blood". This is common with smokers, the content about the collage discloses that Opal's grandpa is a smoker, there the answer is Grandpa. I would have loved to add snippets of the original audio from the film, a bigger collage and that would have given me the opportunity to make the quiz bigger and more interesting. 
       
		</p>
		</section>
    </div>


      <h1>Wireframes</h1>
    <div class="container">
		<section id="main">
    <img className='wireframes' src={IAW} alt="IAW" />

		</section>
    </div>

    <div class="container">
		<section id="main">
    <img className='wireframes' src={HPW} alt="HPW" />

		</section>
    </div>

    <div class="container">
		<section id="main">
    <img className='wireframes' src={BW} alt="BW" />

		</section>
    </div>

    <h1>Styleguide</h1>

    <div class="container">
		<section id="main">
    <img  className="wireframes"src={SG} alt="SG" />

		</section>
    </div>


   

      

    </div>
  )
}

export default Design