import React from 'react'
import "./FooterStyles.css"
import Image1 from "./Image1.jpg"
import Image2 from "./Image2.jpg"



const Footer = () => {
  return (
    <div> 
       <body>
    
    <footer>
      <div class="top">
        <div class="pages">
          <ul>
            <h3>Jack Stauber </h3>
            <li><a href="#"> <img classname= "footer-images"src={Image1} alt="Img1" /></a></li>
            <li><a href="#">hypnagogogic pop music</a></li>
            <li><a href="#">"Collects objects to create sound"</a></li>
            <li><a href="#">"Surreal characters" </a></li>
            <li><a href="#"> "odd and striking facial expressions "</a></li>
          </ul>

          <ul>
            <h3>American musician</h3>
            <li><a href="#">"false teeth being created using resin"</a></li>
            <li><a href="#">"Jack Stauber is certainly not our usual synthwave sound"</a></li>
            <li><a href="#"><img className="footer-images"src={Image2} alt="Img2" /></a></li>
            <li><a href="#">"His work includes themes of absurdity"</a></li>
            <li><a href="#">"nostalgia"</a></li>
            <li><a href="#"> "Strange"</a></li>
            <li><a href="#">"Avant-Pop musician "</a></li>
            <li><a href="#">"Many of your lyrics border on nonsense</a></li>
            <li><a href="#">can also feel very meaningful</a></li>
            <li><a href="#">but somehow 
            at the same time they</a></li>
            <li><a href="#">can also feel very meaningful"</a></li>

          </ul>

          <ul>
            <h3>animator </h3>
            <h3> and net personality</h3>
            <li><a href="#">Synth pop music</a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"> (born April 6, 1996) </a></li>
          </ul>
        </div>
        <div class="newsletter">
         
        </div>
      </div>
      
      <div class="info">
        
        <div class="copyright">2023 &copy; Hope Shembe</div>
      </div>
    </footer>
  </body>
    </div>
  )
}

export default Footer