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
  BannerArrowIcon
} from '~src/components/layoutIcon/Icon';
import { isMobile } from '~src/utils/device';

const Investors = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  const mobile = isMobile();
  return (
    <div className="relative mx-auto sm:mt-20 md:mt-28 mt-56 lg:w-4/5 sm:w-full md:w-full md:mb-64">
      <div className="flex justify-center text-white gotham_font_bold  text-2xl">INVESTORS</div>
      <div
        className="flex justify-center text-4xl text-white mt-3 gotham_font_light  sm:text-center md:text-center text-opacity-50 sm:mt-0 md:mt-0 sm:text-3xl"
      >
        Trusted by the best
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative z-10 grid grid-cols-5 sm:hidden md:hidden place-items-center gap-y-16 mt-16 w-full">
          <InvestorsIcon1 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon3 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon4 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon5 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon6 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="relative z-10 grid grid-cols-4 sm:hidden md:hidden place-items-center gap-y-16 mt-16 w-full">
          <InvestorsIcon7 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon8 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon9 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon10 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="lg:hidden sm:hidden relative z-10 mt-16 w-full flex justify-center pl-10 pr-8">
          <div className="grid grid-cols-3 gap-x-20 gap-y-16">
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon1 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon3 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon4 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon5 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon6 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon7 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon8 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon9 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon10 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden relative z-10 mt-16 w-full flex justify-center pl-10 pr-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-16">
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon1 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon3 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon4 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon5 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon6 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon7 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon8 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon9 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start">
              <InvestorsIcon10 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
          </div>
        </div>
        <InvestorsBgIconBobile className="absolute -bottom-20 lg:hidden md:hidden"></InvestorsBgIconBobile>
        <InvestorsBgIcon className="absolute sm:hidden md:-bottom-44"></InvestorsBgIcon>

        {/* <div
          onClick={goRefApp}
          className="lg:hidden flex font-extrabold items-center justify-center bg-primary rounded-lg cursor-pointer  mt-44 text-sm text-black h-8 w-32 hover:bg-hightGreenColor"
        >
          Launch APP <BannerArrowIcon className="ml-1 transform scale-75" />
        </div> */}
      </div>
    </div>
  );
};

export default Investors;
