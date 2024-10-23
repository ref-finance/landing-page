import React, { useEffect, useState } from 'react';
import {
  InvestorsIcon1,
  InvestorsIcon2,
  InvestorsIcon3,
  InvestorsIcon4,
  InvestorsIcon5,
  InvestorsIcon6,
  InvestorsIcon7,
  InvestorsIcon8,
  InvestorsIcon9,
  InvestorsIcon10,
  InvestorsBgIcon,
  InvestorsBgIconBobile,
  BannerArrowIcon,
  Hands,
  MobileHands
} from '~src/components/layoutIcon/Icon';
import { MobileGrid } from '~src/components/icon/SDKIntro';
import { isMobile } from '~src/utils/device';
import { MobileStar,MobileStarGreen } from '~src/components/icon/SDKIntro';
import './index.scss';

const Investors = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  const mobile = isMobile();
  return (
    <>
      <div className="relative mx-auto mb-[366px] sm:hidden">
        <div className="flex justify-end text-white font-medium text-2xl">Investors‍</div>
        <div className="flex justify-end text-[54px] text-white mt-3 font-bold">
          <span className="text-green-10 mr-4">Trusted</span> <span className="g-the-best">by the best</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-10 mt-[37px] rounded-[10px] lg:min-h-[428px] relative z-[1]">
          <div className="relative z-10 grid grid-cols-5 place-items-center gap-y-16 mt-16 w-full">
            <InvestorsIcon1 className="hover:opacity-85" />
            <InvestorsIcon3 className="hover:opacity-85" />
            <InvestorsIcon4 className="hover:opacity-85" />
            <InvestorsIcon5 className="hover:opacity-85" />
            <InvestorsIcon6 className="hover:opacity-85" />
          </div>
          <div className="relative z-10 grid grid-cols-4 place-items-center gap-y-16 mt-16 w-full">
            <InvestorsIcon7 className="hover:opacity-85" />
            <InvestorsIcon8 className="hover:opacity-85" />
            <InvestorsIcon9 className="hover:opacity-85" />
            <InvestorsIcon10 className="hover:opacity-85" />
          </div>
          {/* <div
          onClick={goRefApp}
          className="lg:hidden flex font-extrabold items-center justify-center bg-primary rounded-lg cursor-pointer  mt-44 text-sm text-black h-8 w-32 hover:bg-hightGreenColor"
        >
          Launch APP <BannerArrowIcon className="ml-1 transform scale-75" />
        </div> */}
        </div>
        <Hands />
      </div>
      <div className="relative mx-auto lg:hidden overflow-hidden max-h-[1300px]">
        <div className="fccc text-white font-thin text-2xl relative w-full h-[295px]">
          <span>Investors‍</span>
          <MobileGrid className="absolute" />
          <div className="fccc text-[40px] text-white mt-[40px] font-bold">
            <span className="text-green-10">Trusted</span> <span className="g-the-best mt-[12px]">by the best</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-green-10 mt-[-37px] w-full relative z-[1]">
          <div className="relative z-10 w-full grid grid-cols-2 gap-16 px-[38px] py-[50px]">
            <InvestorsIcon1 className="hover:opacity-85" />
            <InvestorsIcon3 className="hover:opacity-85" />
            <InvestorsIcon4 className="hover:opacity-85" />
            <InvestorsIcon5 className="hover:opacity-85" />
            <InvestorsIcon6 className="hover:opacity-85" />
            <InvestorsIcon7 className="hover:opacity-85" />
            <InvestorsIcon8 className="hover:opacity-85" />
            <InvestorsIcon9 className="hover:opacity-85" />
            <InvestorsIcon10 className="hover:opacity-85" />
          </div>
        </div>
        <MobileStar className="relative top-[40px] left-[30px]"/>
        <MobileStarGreen className="relative top-[-10px] left-[80vw]"/>
        <MobileHands className="relative left-[0px] top-[-260px] w-full h-full"/>
      </div>
    </>
  );
};

export default Investors;
