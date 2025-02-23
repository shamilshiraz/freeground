import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VerticalGallery = () => {
  const { scrollYProgress } = useScroll(); // Track scrolling

  // Zoom-in effect on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.3]);

  return (
    <div className="bg-black text-white font-[sohne]">
      <div className="max-w-7xl mx-auto p-4 py-10">
        {/* Description Paragraph */}
        <div className="my-8 max-w-2xl mx-auto text-center">
          <p className="text-lg sm:text-2xl leading-relaxed">
            Explore our curated collection of moments captured in vertical
            frames. Each image tells its own story, preserving the height and
            grandeur of these scenes while maintaining perfect visual harmony.
            From towering architecture to intimate portraits, these
            compositions showcase the beauty of vertical photography.
          </p>
        </div>

        {/* Image Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Image */}
          <div className="relative overflow-hidden rounded-lg h-[70vh] lg:h-[80vh]">
            <motion.img
              style={{ scale }}
              src="../img1.jpeg"
              alt="Vertical image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative overflow-hidden rounded-lg h-[70vh] lg:h-[80vh]">
            <motion.img
              style={{ scale }}
              src="../img2.jpeg"
              alt="Vertical image 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Image */}
          <div className="relative overflow-hidden rounded-lg h-[70vh] lg:h-[80vh]">
            <motion.img
              style={{ scale }}
              src="../img3.jpeg"
              alt="Vertical image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalGallery;
