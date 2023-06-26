import React from 'react'
import pageVideo from '../Styles/Download.mp4'
import "../Styles/netart.css"
import QuizPage from '../QuizPage'
import { QuizProvider } from '../../Contexts/Quiz'
import AudioPlayer from '../AudioPlayer'







const InternetArtwork = () => {
  return (
    <div>

<video autoPlay muted id='video'>

<source src={pageVideo} type="video/mp4"/>
</video>



<div id="fashion">
      <h2>The film features disturbing themes of child neglect and abuse, escapism and coping, viewer discretion is advised.</h2>
    </div>

    <AudioPlayer/>
    

    <h1>My animated collage features some highlights in Opal in no particular order</h1>
<p>Opal features infact Claire, a small child and her escapism in her mind to imagine a happier place and life far far away where she is known as Opal, loved, fed and sang to through looking out a window at a billboard. Claire is in a dysfunctional family that constantly hurts her. Her father is a narcassist, her mom is an alcoholic while her grandfather is a dying smoker </p>
  
<figure class="wave">
           <img src="https://i.pinimg.com/originals/a1/70/eb/a170eb7b5904760daf060cdb1f7f1176.jpg" alt="">
           
           </img>
          <figcaption>Claire being tortured by her family</figcaption>
        </figure>
      
        <figure class="wave">
          <img src="https://i.pinimg.com/originals/a8/85/1d/a8851dd55a4a9267dd6cdc5ba0e73540.jpg" alt=""></img>
          <figcaption>Claire as Opal with her imaginary family</figcaption>
        </figure>
      
        <figure class="wave">
          <img src="https://i.pinimg.com/originals/3f/f0/c1/3ff0c124deb26addcd94f30bc09638f4.jpg" alt=""></img>
          <figcaption>Opal curious about the house next door</figcaption>
        </figure>
      
        <figure class="wave">
          <img src="https://i.pinimg.com/originals/59/b8/11/59b81113c0167cdea0efc1fa54361bce.jpg" alt=""></img>
          <figcaption>Claire as Opal and dancing</figcaption>
        </figure>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <QuizProvider>
        <QuizPage />
            
            </QuizProvider>
       


       



      

</div>
    




  )
}

export default InternetArtwork