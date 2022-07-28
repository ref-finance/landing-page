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
    <div className="relative mx-auto sm:mt-28 md:mt-28 mt-56 lg:w-4/5 sm:w-full md:w-full">
      <div className="flex justify-center text-white font-bold text-2xl">INVESTORS</div>
      <div
        className="flex justify-center text-white mt-3 gotham_font_light text-opacity-50 sm:mt-0 md:mt-0"
        style={{ fontSize: mobile ? '32px' : '42px' }}
      >
        Trusted by the best
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative z-10 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-2 place-items-center gap-y-16 mt-16 w-full">
          <InvestorsIcon1 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon2 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon3 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon4 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon5 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon6 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon7 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon8 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon9 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <InvestorsIcon10 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        {mobile ? (
          <InvestorsBgIconBobile className="absolute bottom-10"></InvestorsBgIconBobile>
        ) : (
          <InvestorsBgIcon className="absolute"></InvestorsBgIcon>
        )}
        <div
          onClick={goRefApp}
          className="lg:hidden flex font-extrabold items-center justify-center bg-primary rounded-lg cursor-pointer  mt-44 text-sm text-black h-8 w-32 hover:bg-hightGreenColor"
        >
          Launch APP <BannerArrowIcon className="ml-1 transform scale-75" />
        </div>
      </div>
    </div>
  );
};

export default Investors;
