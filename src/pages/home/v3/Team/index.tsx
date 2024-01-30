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

  const imgStyle = {
    maxWidth: windowWidth < 600 ? 'fit-content' : '100%'
  };
  return (
    <div className="relative">
      <div className="relative z-10 text-center mx-auto mt-64 md:mt-24 pl-12 pr-12 sm:w-full md:w-full sm:pl-0">
        <div className="absolute -top-10 inset-1/3 sm:top-0 sm:w-min sm:text-cente sm:inset-x-auto sm:-top-24 sm:left-14">
          <h1 className="text-white gotham_font_bold  text-2xl leading-7">REF TEAM</h1>
          <p className="text-white opacity-50 text-5xl font-medium -mt-2">Refolutioners</p>
        </div>
        <div className="sm:hidden">
          <img src="https://assets.ref.finance/images/LandingTeamPc.svg" alt="" />
        </div>
        <div className="lg:hidden md:hidden relative overflow-auto w-screen">  
          <img src="https://assets.ref.finance/images/LandingTeamMobile.svg" alt="" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default Team;
