import React, { useEffect, useState } from 'react';
import { BannerArrowIcon } from '~src/components/layoutIcon/Icon';
import Link from '~src/components/common/Link';

const Footer = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  function goGitHub() {
    window.open('https://github.com/ref-finance');
  }
  function goDocs() {
    window.open('https://guide.ref.finance/');
  }
  function goForum() {
    window.open('https://gov.ref.finance/');
  }
  return (
    <div className="mx-auto mt-32 sm:mt-20 md:mt-20 2xl:w-4/5 lg:w-4/5 sm:w-full md:w-full mb-10">
      <div className="flex justify-between items-center sm:flex-col md:flex-col sm:justify-center md:justify-center">
        <div className="flex items-center sm:mb-8 md:mb-8">
          <span onClick={goDocs} className="text-white text-sm mr-14 cursor-pointer">
            Docs
          </span>
          <span onClick={goForum} className="text-white text-sm mr-14 cursor-pointer">
            Forum
          </span>
          <span onClick={goGitHub} className="text-white text-sm mr-14 cursor-pointer sm:mr-0 md:mr-0">
            Github
          </span>
          <div
            onClick={goRefApp}
            className="flex items-center font-extrabold justify-center bg-primary rounded-lg cursor-pointer text-sm text-black h-9 w-40 sm:hidden md:hidden hover:bg-hightGreenColor"
          >
            Launch APP <BannerArrowIcon className="ml-2 transform scale-75" />
          </div>
        </div>
        <Link />
      </div>
    </div>
  );
};

export default Footer;
