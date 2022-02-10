import React from 'react';
import CommunityIcons from '~src/pages/home/Intro/CommunityIcons';
import { Logo } from '../pic';

const FooterBrand = () => {
  return (
    <div className="s:col-span-3 s:mb-12 s:w-full">
      <div className="flex items-center s:justify-center">
        <Logo />
      </div>
      <div className="FooterBrand_content mx-auto mt-6 font-poppins text-sm text-left text-white opacity-50 s:w-80">
        Multi-purpose DeFi platform built on
        <br />
        NEAR Protocol
      </div>
      <div className="s:hidden">
        <CommunityIcons />
      </div>
    </div>
  );
};

export default FooterBrand;
