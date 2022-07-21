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
    <div className="mx-auto mt-56 2xl:w-3/5 lg:w-4/5 sm:w-full md:w-full">
      <div className="flex justify-center text-white font-bold text-2xl">INVESTORS</div>
      <div className="flex justify-center text-white mt-3 font-light" style={{ fontSize: '42px' }}>
        Trusted by the best
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-5 place-items-center gap-y-16 mt-16 w-full">
          <InvestorsIcon1 />
          <InvestorsIcon2 />
          <InvestorsIcon3 />
          <InvestorsIcon4 />
          <InvestorsIcon5 />
          <InvestorsIcon6 />
          <InvestorsIcon7 />
          <InvestorsIcon8 />
          <InvestorsIcon9 />
          <InvestorsIcon10 />
        </div>
        <InvestorsBgIcon className="absolute"></InvestorsBgIcon>
      </div>
    </div>
  );
};

export default Investors;
