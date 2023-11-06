import React, { useEffect, useState } from 'react';
import { BannerArrowIcon, MailBoxIcon } from '~src/components/layoutIcon/Icon';
import Link from '~src/components/common/Link';
import ReactTooltip from 'react-tooltip';
import { isMobile } from '~src/utils/device';
import './index.scss';

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
  function goSecurity(){
    window.open('https://guide.ref.finance/developers/audits');
  }
  function goBusinessInquiries() {
    window.open('https://form.typeform.com/to/onOPhJ6Y');
  }
  return (
    <div className="mx-auto mt-32 sm:mt-20 md:mt-20 lg:w-5/6 sm:w-full md:w-full mb-10">
      <div className="flex justify-between items-center sm:flex-col md:flex-col sm:justify-center md:justify-center">
        <div className="sm:w-full md:w-full sm:gap-4 md:gap-4 flex items-center justify-center sm:mb-5 md:mb-5">
          <span onClick={goDocs} className="footer-link">
            Docs
          </span>
          <span onClick={goForum} className="footer-link">
            Forum
          </span>
          <span onClick={goGitHub} className="footer-link">
            Github
          </span>
          <span onClick={goSecurity} className="footer-link">
            Security
          </span>
          <span onClick={goBusinessInquiries} className="footer-link">
            Business Inquiries
          </span>
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
