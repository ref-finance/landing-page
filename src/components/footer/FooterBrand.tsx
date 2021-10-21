import React from 'react';
import { Logo } from '../pic';

const FooterBrand = () => {
  return (
    <div className="s:col-span-3 s:mb-12 s:w-full">
      <Logo />
      <div className="mx-auto mt-6 w-80 font-poppins text-sm text-left text-white opacity-50">
        Ref Finance is one of the core projects in the DeFi ecosystem on NEAR Protocol. Ref aims to bring DeFi one step
        closer to the people.
      </div>
    </div>
  );
};

export default FooterBrand;
