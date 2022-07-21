import React, { useEffect, useState } from 'react';
import { BannerArrowIcon } from '~src/components/layoutIcon/Icon';
import Link from '~src/components/common/Link';

const Footer = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  function goGitHub() {
    window.open('https://github.com/ref-finance/ref-ui');
  }
  function goDocs() {
    window.open('https://guide.ref.finance/');
  }
  function goForum() {
    window.open('https://gov.ref.finance/');
  }
  return (
    <div className="mx-auto mt-32 2xl:w-4/5 lg:w-4/5 sm:w-full md:w-full mb-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span onClick={goDocs} className="text-white text-sm mr-14 cursor-pointer">
            Docs
          </span>
          <span onClick={goForum} className="text-white text-sm mr-14 cursor-pointer">
            Forum
          </span>
          <span onClick={goGitHub} className="text-white text-sm mr-14" cursor-pointer>
            Github
          </span>
          <div
            onClick={goRefApp}
            className="flex items-center justify-center bg-primary rounded-lg cursor-pointer text-lg text-black h-9 w-40"
          >
            Launch APP <BannerArrowIcon className="ml-2" />
          </div>
        </div>
        <Link />
      </div>
    </div>
  );
};

export default Footer;
