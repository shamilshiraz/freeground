import React from 'react'
import Hero from './components/Heroo'
import Marquee from './components/Marquee'
import About from './components/About'
import CreativePlayground from './components/About'
import Video from './components/Video'
import PositionedParagraph from './components/Para'

function App() {
  return (
    <div>
      <Marquee/>
      <Hero/>
      <PositionedParagraph/>

      <Video/>
      <CreativePlayground/>
    </div>
  )
}

export default App
