import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [imageErrors, setImageErrors] = useState({});

  // Floating Images for the smaller orbit
  const floatingImages = [
    { src: "/asterisk.png", altSrc: "/asterisk.png" },
    { src: "/blue.png", altSrc: "/blue.png" },
    { src: "/comet.png", altSrc: "/comet.png" },
    { src: "/mellow.png", altSrc: "/mellow.png" },
    { src: "/pink.png", altSrc: "/pink.png" },
    { src: "/cloud.png", altSrc: "/star.png" },
    { src: "/violet.png", altSrc: "/violet.png" }
  ];

  // Floating Images for the larger orbit
  const floatingImages2 = [
    { src: "/cloud.png", altSrc: "/asterisk.png" },
    { src: "/pgummy.png", altSrc: "/blue.png" },
    { src: "/comet.png", altSrc: "/comet.png" },
    { src: "/mellow.png", altSrc: "/mellow.png" },
    { src: "/pink.png", altSrc: "/pink.png" },
    { src: "/star.png", altSrc: "/star.png" },
    { src: "/violet.png", altSrc: "/violet.png" },
    { src: "/asterisk2.webp", altSrc: "/asterisk.png" },
    { src: "/rgummy.png", altSrc: "/blue.png" },
    { src: "/comet.png", altSrc: "/comet.png" },
    { src: "/mellow.png", altSrc: "/mellow.png" },
    { src: "/pink.png", altSrc: "/pink.png" },
    { src: "/star.png", altSrc: "/star.png" }
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
    console.log(`Image ${index} failed to load`);
  };

  return (
    <div className="relative h-[100vh] w-[100vw] bg-black overflow-hidden sm:overflow-visible ">
      {/* Orbiting Images Container - Smaller Orbit */}
      <div className="absolute inset-0 flex items-center justify-center">
        {floatingImages.map((image, index) => {
          const angle = (index / floatingImages.length) * 360; // Even distribution around the circle
          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              initial={{ rotate: image.initialRotation }}
              animate={{
                x: 300 * Math.cos((angle * Math.PI) / 180), // Smaller radius X
                y: 200 * Math.sin((angle * Math.PI) / 180), // Smaller radius Y
                rotate: 360, // Continuous rotation of the image
                yoyo: Infinity, // To make the float effect loop up and down
                transition: {
                  y: {
                    yoyo: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                    duration: 3
                  },
                }
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: 'center center',
                position: 'absolute',
                left: '50%',
                top: '50%',
              }}
            >
              <motion.div
                className="absolute"
                style={{
                  width: '25vh',
                  height: '25vh',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {imageErrors[index] ? (
                  <motion.img
                    src={image.altSrc}
                    alt={`Floating element ${index + 1}`}
                    className="w-full h-full object-contain"
                    onError={() => console.log(`Both paths failed for image ${index}`)}
                    animate={{
                      rotate: [0, -360] // Rotate in the opposite direction (counterclockwise)
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  />
                ) : (
                  <motion.img
                    src={image.src}
                    alt={`Floating element ${index + 1}`}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(index)}
                    animate={{
                      rotate: [0, -360] // Rotate in the opposite direction (counterclockwise)
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Orbiting Images Container - Larger Orbit (Opposite Rotation) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {floatingImages2.map((image, index) => {
          const angle = (index / floatingImages2.length) * 360; // Even distribution around the circle
          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              initial={{ rotate: image.initialRotation }}
              animate={{
                x: 600 * Math.cos((angle * Math.PI) / 180), // Larger radius X (Increased to 400)
                y: 400 * Math.sin((angle * Math.PI) / 180), // Larger radius Y (Increased to 400)
                rotate: -360, // Rotate in the opposite direction (counterclockwise)
                yoyo: Infinity, // To make the float effect loop up and down
                transition: {
                  y: {
                    yoyo: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                    duration: 3
                  },
                }
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: 'center center',
                position: 'absolute',
                left: '50%',
                top: '50%',
              }}
            >
              <motion.div
                className="absolute"
                style={{
                  width: '25vh',
                  height: '25vh',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {imageErrors[index] ? (
                  <motion.img
                    src={image.altSrc}
                    alt={`Floating element ${index + 1}`}
                    className="w-full h-full object-contain"
                    onError={() => console.log(`Both paths failed for image ${index}`)}
                    animate={{
                      rotate: [0, 360] // Rotate in the opposite direction (clockwise)
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  />
                ) : (
                  <motion.img
                    src={image.src}
                    alt={`Floating element ${index + 1}`}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(index)}
                    animate={{
                      rotate: [0, 360] // Rotate in the opposite direction (clockwise)
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

{/* Central Text */}
<div className="absolute z-10 text-center w-full top-1/2 transform -translate-y-1/2">
  <motion.h1
    className="text-white font-[bold] text-8xl sm:text-[25rem] font-bold mb-6"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    FREEGROUND
    <motion.p
  className="text-gray-300 font-bold text-2xl sm:text-5xl flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <span>INSPIRING</span>

  <span className="border-2 border-white rounded-full px-6 py-2 inline-flex items-center transition-all duration-300 hover:bg-white hover:text-black">
    ARTISTS
  </span>

  <span className="relative bg-white text-black px-6 py-2 inline-flex items-center rounded-xl transition-all duration-300 hover:scale-105">
    AMPLIFYING IDEAS
    <span className="absolute -right-2 -bottom-2 w-full h-full bg-yellow-400 rounded-xl -z-10"></span>
  </span>

  <span className="inline-flex items-center">
    CREATING
    <img 
      src="./smile.png" 
      className="h-8 w-8 mx-2 object-contain" 
      alt="smiley"
    /> 
    SMILES
  </span>
</motion.p>



  </motion.h1>
</div>
    </div>
  );
}

export default Hero;
