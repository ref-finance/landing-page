import React, { useEffect, useState } from 'react';
import { HomeTeamMobile, HomeTeamPc } from '~src/components/icon/Team';

const Team = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10 text-center mx-auto mt-64 sm:mt-36 md:mt-24  sm:w-full md:w-full sm:pl-0">
        <div className="absolute -top-10 inset-1/3 sm:relative sm:flex sm:flex-col sm:justify-center sm:items-center sm:m-auto sm:top-0 sm:left-0 sm:right-0 sm:bottom-0">
          <div className="flex justify-center text-white gotham_font_bold  text-2xl">REF TEAM</div>
          <div className="flex justify-center text-42 -mt-4 text-white gotham_font_light  sm:text-center md:text-center text-opacity-50 sm:mb-4 md:mb-4">
            Refolutioners
          </div>
        </div>
        <div className="sm:hidden md:hidden">
          <HomeTeamPc />
        </div>
        <div className="lg:hidden relative overflow-auto px-4 md:pt-6">
          <HomeTeamMobile />
        </div>
      </div>
    </div>
  );
};

export default Team;
