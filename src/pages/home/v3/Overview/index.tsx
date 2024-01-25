import React, { useEffect, useState } from 'react';
import { BannerArrowIcon, DclIcon11, DclIcon12 } from '~src/components/layoutIcon/Icon';

const Overview = () => {
  function checkYourPortfolio() {
    window.open('https://app.ref.finance/overview');
  }
  return (
    <div className="relative">
      <div className="relative z-10 flex items-center mx-auto mt-64 sm:mt-24 sm:flex-col-reverse md:mt-24 pl-12 sm:px-9 sm:w-full md:w-full">
        <div className="w-fit sm:justify-center md:justify-center sm:w-full md:w-full sm:text-center sm:mb-11 sm:">
          <div className="sm:hidden">
            <img src="https://assets.ref.finance/images/dclIcon10.svg" alt="" />
          </div>
          <div className="lg:hidden md:hidden flex justify-center items-center">
            <img
              src="https://assets.ref.finance/images/LandingViewMobile.png"
              alt=""
              style={{ transform: 'scale(1.5)' }}
            />
          </div>
          <div
            onClick={checkYourPortfolio}
            className="hidden  sm:flex items-center justify-center bg-primary font-bold rounded-lg cursor-pointer text-lg text-black h-12 font-extrabold w-60  hover:bg-hightGreenColor sm:text-sm md:text-sm sm:ml-14 sm:mt-0"
          >
            Check your Portfolio
            <BannerArrowIcon className="ml-2 sm:transform sm:scale-75 sm:origin-left md:transform md:scale-75 md:origin-left sm:ml-1 md:ml-1 " />
          </div>
        </div>
        <div className="text-white ml-7 sm:ml-0 sm:text-center">
          <h1 className="text-5xl font-bold whitespace-nowrap mb-5 sm:text-4xl sm:mb-3">Portfolio-Overview</h1>
          <p className="text-3xl font-bold mb-5 sm:text-2xl sm:mb-3">Overview of your invests and assets</p>
          <p className="flex items-center text-lg sm:text-base">
            Composed by
            <div className="ml-2 mr-2">
              <DclIcon11 />
            </div>
            Ref. <span className="text-primary">finance</span>
            <div className="ml-3.5 mr-2">
              <img src="https://assets.ref.finance/images/dclIcon16.svg" alt="" />
            </div>
            Burrow
          </p>
          <p className="flex items-center text-lg mb-10 sm:justify-center sm:mb-0 sm:text-base">
            and
            <div className="ml-3.5 mr-2">
              <DclIcon12 />
            </div>
            Orderly
          </p>
          <div
            onClick={checkYourPortfolio}
            className="sm:hidden flex items-center justify-center bg-primary font-bold rounded-lg cursor-pointer text-lg text-black h-12 font-extrabold w-72  hover:bg-hightGreenColor sm:text-sm md:text-sm sm:w-full md:w-full"
          >
            Check your Portfolio
            <BannerArrowIcon className="ml-2 sm:transform sm:scale-75 sm:origin-left md:transform md:scale-75 md:origin-left sm:ml-1 md:ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
