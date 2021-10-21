import React from 'react';
import Content from './Content';
import MContent from './MContent';
import { IconMNear, IconNear } from '~src/components/icon';
import { BlockChain, MBlockChain } from '~src/components/pic';
import { Coins, MCoins } from '~src/components/conins';

import './index.scss';
import { MdHeight } from 'react-icons/md';
import DataCards from '../Intro/DataCards';
import CommunityIcons from '../Intro/CommunityIcons';

const Banner = () => {
  return (
    <div className="Bg_Image mx-auto justify-center flex flex-col">
      <div className="flex justify-center  w-full">
        <div className="Index_Header flex s:relative">
          <div className="inline-flex flex-col mt-10 items-center s:m-0 s:mb-40 s:w-full" >
            <IconNear />
            <IconMNear />
            <Content />
            <MContent />
            <button
              className="Banner_btnLaunch l:-mt-16 font-poppins mt-4 h-10 text-lg font-bold italic text-white rounded z-10"
              onClick={() => window.open('https://app.ref.finance', '_blank')}
            >
              Launch APP
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center  w-full s:hidden">
        <div className="Index_Header flex">
          <DataCards />
        </div>
      </div>
      <div className="flex justify-center  w-full l:hidden">
        <div className="Index_Header flex">
          <CommunityIcons />
        </div>
      </div>


      {/* <MBlockChain /> */}
    </div>
  );
};

export default Banner;
