import React from 'react';
import { Logo } from '../pic';

const FooterBrand = () => {
  return (
    <div className="s:col-span-3 s:mb-12 s:w-full">
      <Logo />
      <div className="FooterBrand_content mx-auto mt-6 font-poppins text-sm text-left text-white opacity-50 s:w-80">
        Ref Finance is one of the core projects in the DeFi ecosystem on NEAR Protocol. Ref aims to bring DeFi one step
        closer to the people. to {'>'} Multi-purpose DeFi platform built on NEAR Protocol
      </div>
    </div>
  );
};

export default FooterBrand;
