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
  InvestorsBgIcon
} from '~src/components/layoutIcon/Icon';

const Investors = () => {
  return (
    <div className="relative mx-auto sm:mt-28 md:mt-28 mt-56 lg:w-4/5 sm:w-full md:w-full sm:overflow-hidden md:overflow-hidden">
      <div className="flex justify-center text-white font-bold text-2xl">INVESTORS</div>
      <div className="flex justify-center text-white mt-3 font-light" style={{ fontSize: '42px' }}>
        Trusted by the best
      </div>
      <div className="flex justify-center items-center">
        <div className="relative z-10 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-2 place-items-center gap-y-16 mt-16 w-full">
          <InvestorsIcon1 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100 cursor-pointer" />
          <InvestorsIcon2 className="sm:transform sm:scale-90 origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon3 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon4 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon5 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon6 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon7 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon8 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon9 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
          <InvestorsIcon10 className="sm:transform sm:scale-90  origin-center opacity-80 hover:opacity-100" />
        </div>
        <InvestorsBgIcon className="absolute sm:transform sm:scale-75 md:transform md:scale-75"></InvestorsBgIcon>
      </div>
    </div>
  );
};

export default Investors;
