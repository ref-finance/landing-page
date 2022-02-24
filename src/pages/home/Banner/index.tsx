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
import { IconNearNewGray, IconNearNewWhite } from '../../../components/icon/IconNear';
import { useState } from 'react';

const Banner = () => {
  const [hoverText, setHoverText] = useState<boolean>(false);

  return (
    <div className="mx-auto justify-center flex flex-col">
      <div className="flex justify-center  w-full">
        <div className="Index_Header flex s:relative">
          <div className="inline-flex flex-col font-semibold my-10 items-center s:mb-28 s:w-full z-30">
            <Content />
          </div>
        </div>
      </div>
      <div className="flex justify-center  w-full ">
        <div className="Index_Header flex">
          <DataCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
