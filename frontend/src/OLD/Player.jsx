import React, { Component } from "react"
 
export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
 
  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="./audio/piano.mp3"></source>
        </audio>
      </div>
    )
  }
} 