import React from 'react'
import Song from "../Assets/WSY.mp3"

const AudioPlayer = () => {
  return (
    <div>
       <div id="button-container" class="hide">
        <div id="button"title="Song artist/title goes here..."></div>
       </div>
       
       <audio id="player" controls>
        <source src={Song} type="audio/mpeg">
       
       </source>
       </audio>
    </div>
  )
}

export default AudioPlayer