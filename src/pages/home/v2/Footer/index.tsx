import React, { useEffect, useState } from 'react';
import { BannerArrowIcon, MailBoxIcon } from '~src/components/layoutIcon/Icon';
import Link from '~src/components/common/Link';
import ReactTooltip from 'react-tooltip';
import { isMobile } from '~src/utils/device';

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
    <div className="mx-auto mt-32 sm:mt-20 md:mt-20 lg:w-5/6 sm:w-full md:w-full mb-10">
      <div className="flex justify-between items-center sm:flex-col md:flex-col sm:justify-center md:justify-center">
        <div className="sm:w-full md:w-full flex items-center justify-center sm:mb-5 md:mb-5">
          <span onClick={goDocs} className="text-white text-sm mr-14 cursor-pointer sm:mr-10 md:mr-10">
            Docs
          </span>
          <span onClick={goForum} className="text-white text-sm mr-14 cursor-pointer sm:mr-10 md:mr-10">
            Forum
          </span>
          <span onClick={goGitHub} className="text-white text-sm mr-14 cursor-pointer sm:mr-10 md:mr-10">
            Github
          </span>
          <div
            className={`text-white text-right lg:mr-11 lg:-ml-3`}
            data-class="reactTip"
            data-for={'mailBoxId'}
            data-place="top"
            data-html={true}
            data-tip={isMobile() ? '' : `<div class="opacity-50 text-xs text-left">Business Inquiries</div>`}
          >
            <MailBoxIcon
              className="relative cursor-pointer"
              onClick={() => {
                window.open('https://form.typeform.com/to/onOPhJ6Y');
              }}
            ></MailBoxIcon>
            <ReactTooltip id={'mailBoxId'} backgroundColor="#1D2932" border borderColor="#7e8a93" effect="solid" />
          </div>
          <div
            onClick={goRefApp}
            className="flex items-center font-extrabold justify-center bg-primary rounded-lg cursor-pointer text-sm text-black h-9 w-40 sm:hidden md:hidden hover:bg-hightGreenColor"
          >
            Launch APP <BannerArrowIcon className="ml-2 transform scale-75" />
          </div>
        </div>
        <Link className="lg:hidden" />
      </div>
    </div>
  );
};

export default Footer;
