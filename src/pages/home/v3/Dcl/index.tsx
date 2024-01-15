import React from 'react';
import { DclIcon1, DclIcon2 } from '~src/components/layoutIcon/Icon';

const Dcl = () => {
  return (
    <div className="relative">
      <div className="relative z-10  mx-auto mt-64 sm:mt-20 md:mt-20 lg:w-4/5 sm:w-full md:w-full">
        <div className="mb-16 sm:justify-center md:justify-center sm:w-full md:w-full sm:px-6 md:px-6">
          <div className="relative mb-4">
            <DclIcon1 />
            <p className="absolute bottom-2 left-8 text-white font-bold text-5xl">REF V2 - DCL</p>
          </div>
          <p className="text-white font-bold ml-8 text-3xl">Both Win by using Discretized Liquidity AMM</p>
        </div>
        <div className="absolute top-1/2 right-0 rounded-full transform translate-x-1/2 -translate-y-1/2">
          <DclIcon2 />
        </div>
        <div className="text-white">111</div>
      </div>
    </div>
  );
};

export default Dcl;
