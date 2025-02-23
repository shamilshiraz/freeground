import React from 'react';
import { CircleIcon } from 'lucide-react';

const SeasonAnnouncement = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-black to-violet-800 p-4">
      <h1 className="text-6xl font-[bold] md:text-8xl font-bold text-white mb-6 text-center">
        GET READY FOR {/* <br /> */}SECOND SEASON
      </h1>
      
      <p className="text-lg font-[sohne] md:text-xl text-violet-200 max-w-2xl text-center mb-12 leading-relaxed">
        Immerse yourself in a world of captivating live music, engaging workshops, 
        mouthwatering cuisine, and stunning art installations. Connect with fellow 
        enthusiasts and create unforgettable moments in an atmosphere of creativity 
        and joy.
      </p>
      
      <div className="">
        <img src="Ologo.png" className='h-[10vh]' alt="" />
      </div>
      
    </div>
  );
};

export default SeasonAnnouncement;