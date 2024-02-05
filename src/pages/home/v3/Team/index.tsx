import React, { useEffect, useState } from 'react';

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
      <div className="relative z-10 text-center mx-auto mt-64 md:mt-24  sm:w-full md:w-full sm:pl-0">
        <div className="absolute -top-10 inset-1/3 sm:relative sm:flex sm:flex-col sm:justify-center sm:items-center sm:m-auto sm:top-0 sm:left-0 sm:right-0 sm:bottom-0">
          <h1 className="text-white gotham_font_bold text-2xl leading-7">REF TEAM</h1>
          <p className="text-white opacity-50 text-5xl font-medium -mt-2 gotham_font_ligh sm:text-4xl md:text-4xl sm:mb-4">Refolutioners</p>
        </div>
        <div className="sm:hidden">
          <img src="https://assets.ref.finance/images/LandingTeamPc.svg" alt="" />
        </div>
        <div className="lg:hidden md:hidden relative overflow-auto w-screen px-2.5">
          <img src="https://assets.ref.finance/images/LandingTeamMobile.svg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Team;
