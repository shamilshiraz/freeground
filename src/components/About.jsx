import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CreativePlayground = () => {
  const { scrollYProgress } = useScroll();

  // Scale effect for background only
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Floating objects */}
      <img
        src="./radio.png"
        className="absolute top-8 right-8 h-[30vh] sm:h-[30vh] rounded-full opacity-80 animate-[float_6s_ease-in-out_infinite]"
      />
      <img
        src="./speaker.png"
        className="absolute bottom-8 left-8 h-[20vh] sm:h-[40vh] rounded-lg opacity-80 animate-[float_8s_ease-in-out_infinite]"
      />

      {/* Background effect */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-[url(../paint.png)] bg-contain bg-center bg-no-repeat"
      />

      {/* Text content (remains static) */}
      <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto px-4">
        <div className="text-6xl md:text-[12em] font-bold text-white tracking-tight mb-16 text-center transform -rotate-2">
          A CREATIVE PLAYGROUND
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
};

export default CreativePlayground;
