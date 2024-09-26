import React from 'react';
import {
  BannerArrowIcon,
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
  DclIcon18
} from '~src/components/layoutIcon/Icon';
import './index.scss';
import { FooterLink } from '~src/components/common/FooterLink';
import { IconLink } from '~src/components/common/FooterIconLink';

const Footer = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  return (
    <div className="mx-auto lg:w-5/6 sm:w-full md:w-full mb-10 sm:px-9 sm:mb-8 md:mb-8">
      <div className="flex justify-center mb-32 sm:mt-2 md:mt-2">
        <div
          onClick={goRefApp}
          className="sm:hidden gotham_font_bold flex items-center font-extrabold text-lg justify-center bg-primary rounded-lg px-14 cursor-pointer  text-black h-16 w-max hover:bg-hightGreenColor"
        >
          Launch APP <BannerArrowIcon className="ml-2 transform scale-75" />
        </div>
        <div
          onClick={goRefApp}
          className="lg:hidden md:hidden flex font-extrabold  gotham_font_bold items-center justify-center bg-primary rounded-lg cursor-pointer text-sm text-black h-9 w-max hover:bg-hightGreenColor px-5 mt-4"
        >
          Launch APP <BannerArrowIcon className="ml-1 transform scale-75" />
        </div>
      </div>
      <div className="flex justify-between text-base text-white mb-16 sm:flex-wrap sm:mb-0 md:flex-wrap md:mb-0 px-4">
        <div className="sm:w-1/2 md:w-1/3 md:pl-20">
          <h1 className="gotham_font_bold mb-4">REF Token</h1>
          <FooterLink href="https://www.coingecko.com/en/coins/ref-finance">Coingecko</FooterLink>
          <FooterLink href="https://coinmarketcap.com/currencies/ref-finance/">CoinMarketCap</FooterLink>
        </div>
        <div className="sm:w-1/2 sm:pl-12 md:w-1/3 md:pl-16">
          <h1 className="gotham_font_bold  mb-4 ">Exchanges</h1>
          <FooterLink href="https://www.gate.io/trade/REF_USDT">Gate.io</FooterLink>
          <FooterLink href="https://www.mexc.com/exchange/REF_USDT?_from=search_spot_trade">MEXC</FooterLink>
        </div>

        <div className="sm:w-1/2 sm:mt-6 md:w-1/3 md:pl-10">
          <h1 className="gotham_font_bold  mb-4 whitespace-nowrap">Analytics</h1>
          <FooterLink href="https://stats.ref.finance/">Stats.ref.finance</FooterLink>
          <FooterLink href="https://defillama.com/protocol/ref-finance">Defi Llama</FooterLink>
          <FooterLink href="https://dexscreener.com/near/reffinance">DEX Screener</FooterLink>
        </div>
        <div className="sm:w-1/2 sm:mt-6 sm:pl-12 md:w-1/3 md:pl-20">
          <h1 className="gotham_font_bold  mb-4 whitespace-nowrap">Learn More</h1>
          <FooterLink href="https://guide.ref.finance/">Docs</FooterLink>
          <FooterLink href="https://github.com/ref-finance">Github</FooterLink>
          <FooterLink href="https://gov.ref.finance/">Forum</FooterLink>
          <FooterLink href="https://iq.wiki/wiki/ref-finance/">IQ.wiki</FooterLink>
          <div className="lg:hidden md:hidden">
            <FooterLink href="https://immunefi.com/bounty/reffinance/">Bug Bounty</FooterLink>
          </div>
          <div className="lg:hidden md:hidden">
            <FooterLink href="https://guide.ref.finance/developers/audits">Security</FooterLink>
          </div>
          <div className="lg:hidden md:hidden">
            <FooterLink href="https://app.ref.finance/risks">Risks</FooterLink>
          </div>
        </div>
        <div className="sm:w-7/12 sm:-mt-24 md:w-1/3 md:pl-16">
          <h1 className="gotham_font_bold  mb-4">Business</h1>
          {/* <FooterLink href="https://form.typeform.com/to/onOPhJ6Y?typeform-source=www.ref.finance">
            Business Inquiries
          </FooterLink> */}
          <FooterLink href="https://form.typeform.com/to/kxb7tTXg">Token Listing</FooterLink>
          <FooterLink href="https://form.typeform.com/to/onOPhJ6Y?typeform-source=www.ref.finance">
            Contact Us
          </FooterLink>
        </div>
        <div className="w-1/3 flex flex-col mt-10 lg:hidden sm:hidden md:pl-10">
          <div className="block">
            <FooterLink href="https://immunefi.com/bounty/reffinance/">Bug Bounty</FooterLink>
          </div>
          <div className="block">
            <FooterLink href="https://guide.ref.finance/developers/audits">Security</FooterLink>
          </div>
          <div className="block">
            <FooterLink href="https://app.ref.finance/risks">Risks</FooterLink>
          </div>
        </div>
        <div className="sm:w-full sm:mt-6 md:w-full md:mt-20">
          <h1 className="gotham_font_bold  mb-7 sm:hidden md:hidden">Community</h1>
          <div className="flex justify-center items-center mb-7 sm:px-6 md:mb-4">
            <IconLink className="mr-4" IconComponent={DclIcon18} href="https://twitter.com/finance_ref" />
            <IconLink className="mx-4" IconComponent={FooterIcon2} href="https://t.me/ref_finance" />
            <IconLink className="mx-4" IconComponent={FooterIcon3} href="https://discord.gg/rsMyJfHQx9" />
            <IconLink className="ml-4" IconComponent={FooterIcon4} href="https://ref-finance.medium.com/" />
          </div>

          <div className="flex justify-between items-center md:hidden">
            <div className="sm:hidden">
              <FooterLink href="https://immunefi.com/bounty/reffinance/">Bug Bounty</FooterLink>
            </div>
            <div className="sm:hidden">
              <FooterLink href="https://guide.ref.finance/developers/audits">Security</FooterLink>
            </div>
            <div className="sm:hidden">
              <FooterLink href="https://app.ref.finance/risks">Risks</FooterLink>
            </div>
          </div>
          <div className="text-white text-13 float-right sm:flex md:flex sm:justify-center md:justify-center sm:items-center md:items-center sm:float-none md:float-none">
            @ 2024 Ref finance Ltd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
