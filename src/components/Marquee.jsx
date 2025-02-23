import React from 'react';

const Marquee = () => {
  const text = "SECOND SEASON IS COMING SOON • ";

  return (
    <div className="sticky top-0 z-[100]  ">
    <div className="relative w-[100vw] overflow-hidden bg-black py-2">
      <div className="flex animate-marquee">
        <div className="flex whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-white text-xl font-bold mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .animate-marquee {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div></div>
  );
};

export default Marquee;