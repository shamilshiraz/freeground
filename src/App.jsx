import React from 'react'
import Hero from './components/Heroo'
import Marquee from './components/Marquee'
import About from './components/About'
import CreativePlayground from './components/About'
import Video from './components/Video'
import PositionedParagraph from './components/Para'
import Ready from './components/Ready'
import Footer from './components/Footer'
import ResponsiveContent from './components/Res'

function App() {
  return (
    <div>
      <Marquee/>
      <Hero/>
      <PositionedParagraph/>
      <Video/>
      <CreativePlayground/>
      <ResponsiveContent/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App
