import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Import Lenis for smooth scroll

import Hero from "./components/Heroo";
import Marquee from "./components/Marquee";
import About from "./components/About";
import CreativePlayground from "./components/About";
import Video from "./components/Video";
import PositionedParagraph from "./components/Para";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import ResponsiveContent from "./components/Res";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust scrolling ease (0.1 - smooth, 0.5 - fast)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="bg-black">
      <Marquee />
      <Hero />
      <PositionedParagraph />
      <Video />
      <CreativePlayground />
      <ResponsiveContent />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
