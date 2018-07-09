import React, { Component } from 'react'
import source from './source.mp3'
import './style.css'

class App extends Component {
  constructor() {
    super()
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
    this.state = {
      isPlaying: false,
    }
  }

  play() {
    this.player.play()
    this.setState({
      isPlaying: true,
    })
  }

  stop() {
    this.player.pause()
    this.player.currentTime = 0
    this.setState({
      isPlaying: false,
    })
  }

  render() {
    const playButtonClass = this.state.isPlaying ? 'hidden' : ''
    const stopButtonClass = this.state.isPlaying ? '' : 'hidden'
    return (
      <div className="app">
        <audio ref={c => this.player = c}>
          <source src={source} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h1>¿Tienes penita?</h1>
        <button type="button" onClick={this.play} className={playButtonClass}>
          Si
        </button>
        <button type="button" onClick={this.stop} className={stopButtonClass}>
          Ya no
        </button>
      </div>
    )
  }
}
export default App
