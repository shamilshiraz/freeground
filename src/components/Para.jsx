import React from 'react';

const PositionedParagraph = () => {
  return (
    <div className="w-full min-h-[50vh] py-20 flex flex-col justify-center bg-black  ">
      {/* Container with responsive positioning */}
      <div className="w-full px-4 md:px-0 md:max-w-[80rem] mx-auto">
        {/* Paragraph container with custom alignment */}
        <div className="w-full md:w-[500px] md:ml-auto md:mr-24">
          <p className="text-xl leading-relaxed text-white font-[sohne]">
          "a sonic voyage where music, art, and culture collide in a vibrant explosion of expression. A playground for fresh energy, where new artists rise, and the pulse of creativity never fades. Neon-lit beats, mind-bending visuals, and a crowd that moves like waves—this is where you lose yourself to find something real. FREEGROUND is more than a sound, more than a scene—it’s a movement. Step in, tune out, and let the rhythm guide you."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PositionedParagraph;