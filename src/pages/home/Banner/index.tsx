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
    <div className="mx-auto justify-center flex flex-col">
      <div className="flex justify-center  w-full">
        <div className="Index_Header flex s:relative">
          <div className="inline-flex flex-col my-10 items-center s:m-0 s:mb-40 s:w-full">
            <IconNear />
            <Content />
          </div>
        </div>
      </div>
      <div className="flex justify-center  w-full ">
        <div className="Index_Header flex">
          <DataCards />
        </div>
      </div>
      <div className="flex justify-center w-full l:hidden">
        <div className="Index_Header flex">
          <CommunityIcons />
        </div>
      </div>
    </div>
  );
};

export default Banner;
