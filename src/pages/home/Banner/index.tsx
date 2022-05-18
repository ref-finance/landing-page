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
import BugBountyBanners from '../../../components/icon/Banners';
import { BugBountyBannersMobile } from '../../../components/icon/Banners';

const Banner = () => {
  const [hoverText, setHoverText] = useState<boolean>(false);

  return (
    <div className="mx-auto justify-center flex flex-col">
      <div className="flex justify-center  w-full">
        <div className="Index_Header flex s:relative">
          <div className="inline-flex flex-col font-semibold my-10 items-center s:mb-28 s:w-full z-30">
            <div
              className="cursor-pointer pb-6 s:hidden"
              onClick={() => {
                window.open('https://immunefi.com/bounty/reffinance/', '_blank');
              }}
            >
              <BugBountyBanners />
            </div>
            <a
              target="_blank"
              href="https://near.org/"
              className={`flex text-white ${
                hoverText ? 'text-opacity-100' : 'text-opacity-60'
              }  font-lexend items-center font-normal`}
              onMouseEnter={() => setHoverText(true)}
              onMouseLeave={() => setHoverText(false)}
            >
              <span>Built on</span>
              <span className="ml-2 mr-1">{hoverText ? <IconNearNewWhite /> : <IconNearNewGray />}</span>
              <span>NEAR</span>
            </a>
            <Content />
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer l:hidden z-50 relative top-4 px-1 flex items-center justify-center"
        onClick={() => {
          window.open('https://immunefi.com/bounty/reffinance/', '_blank');
        }}
      >
        <BugBountyBannersMobile />
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
