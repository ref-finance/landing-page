import React from 'react';
import {
  BannerMainIcon,
  BannerBIcon,
  BannerTIcon,
  BannerBallIcon1,
  BannerBallIcon2,
  BannerBallIcon3,
  BannerNearIconAndTextIcon,
  BannerArrowIcon
} from '~src/components/layoutIcon/Icon';
import './index.scss';

const Banner = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  return (
    <div className="relative">
      <div className="absolute">
        <BannerMainIcon />
        <BannerBallIcon1 className="absolute ball1Ani" />
        <BannerBallIcon2 className="absolute ball2Ani" />
        <BannerBallIcon3 className="absolute ball3Ani" />
      </div>
      <div className="flex justify-end mx-auto 2xl:w-3/5 lg:w-4/5 sm:w-full md:w-full">
        <div className="flex flex-col text-white mt-44 mr-1/5">
          <span className="text-white" style={{ fontSize: '42px' }}>
            Where your DeFi
          </span>
          <span className="text-white" style={{ fontSize: '42px' }}>
            {' '}
            journey on
          </span>
          <BannerNearIconAndTextIcon className="mb-5 mt-2.5"></BannerNearIconAndTextIcon>
          <div
            onClick={goRefApp}
            className="flex items-center justify-center bg-primary rounded-lg cursor-pointer text-lg text-black h-12 w-48"
          >
            Launch APP <BannerArrowIcon className="ml-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto 2xl:w-3/5 lg:w-4/5 sm:w-full md:w-full mt-40">
        <div className="flex flex-col items-center">
          <span className="text-mobile text-2xl">LOW FEES</span>
          <span className="text-white font-bold text-4xl my-2">{'<$0.01'}</span>
          <span className="text-white text-base">Near’s transaction fees</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-mobile text-2xl">LIGHTING FAST</span>
          <span className="text-white font-bold text-4xl my-2">{'1-2s'}</span>
          <span className="text-white text-base">transaction Finality</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-mobile text-2xl">GROWING FAST</span>
          <span className="text-white font-bold text-4xl my-2">{'$30B+'}</span>
          <span className="text-white text-base">Accumulative Trading Volume</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
