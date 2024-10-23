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

export const RefIcon = (props: any) => {
  return (
    <svg {...props} width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 0H0V3.4375H9.1875C10 3.4375 10.7415 3.79014 10.7415 4.56268V6.56268C10.7415 7.56268 10 7.8125 9.1875 7.8125H3.75L9.6875 16.5625H14.5L10.125 10.3125H11.5C11.5 10.3125 14.5 10.5627 14.5 7.06268V3.06268C14.5 0.562683 12.806 0 11.5 0Z"
        fill="white"
      />
      <path d="M0 16.5627V9.68774L4.6875 16.5627H0Z" fill="white" />
    </svg>
  );
};

const Footer = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  return (
    <div className="mx-auto w-full h-full">
      {/* <div className="flex justify-center mb-32 sm:mt-2 md:mt-2">
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
      </div> */}
      <div className="flex justify-between text-base text-white mb-16 sm:flex-wrap sm:mb-0 md:flex-wrap md:mb-0 px-4 sm:hidden">
        <div className="sm:w-1/2 md:w-1/3 md:pl-20">
          <h1 className="gotham_font_bold mb-4 flex items-center">
            <RefIcon className="mr-[4px]" />
            REF.FINANCE
          </h1>
          <div
            onClick={goRefApp}
            className="cursor-pointer hover:opacity-85 text-lg font-bold  frcc rounded-lg w-[210px] h-[54px] bg-transparent border-green-10 border text-green-10"
          >
            Launch APP
            <BannerArrowIcon className="ml-2 scale-75 text-green-10" />
          </div>
        </div>
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
      </div>


      <div className="text-base text-white mb-16 sm:flex-wrap sm:mb-0 md:flex-wrap md:mb-0 px-4 lg:hidden">
        <div className="w-full frcc mb-[50px]">
          <div
            onClick={goRefApp}
            className="cursor-pointer hover:opacity-85 text-sm font-bold  frcc rounded-lg w-[153px] h-[36px] bg-green-10 text-black"
          >
            Launch APP
            <BannerArrowIcon className="ml-2 scale-75 text-black" />
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
        <div className="w-6/12">
          <h1 className="gotham_font_bold mb-4 text-lg">REF Token</h1>
          <FooterLink href="https://www.coingecko.com/en/coins/ref-finance">Coingecko</FooterLink>
          <FooterLink href="https://coinmarketcap.com/currencies/ref-finance/">CoinMarketCap</FooterLink>
        </div>
        <div className="w-5/12">
          <h1 className="gotham_font_bold  mb-4 text-lg">Exchanges</h1>
          <FooterLink href="https://www.gate.io/trade/REF_USDT">Gate.io</FooterLink>
          <FooterLink href="https://www.mexc.com/exchange/REF_USDT?_from=search_spot_trade">MEXC</FooterLink>
        </div>

        <div className="w-6/12 mt-[40px]">
          <h1 className="gotham_font_bold  mb-4 whitespace-nowrap text-lg">Analytics</h1>
          <FooterLink href="https://stats.ref.finance/">Stats.ref.finance</FooterLink>
          <FooterLink href="https://defillama.com/protocol/ref-finance">Defi Llama</FooterLink>
          <FooterLink href="https://dexscreener.com/near/reffinance">DEX Screener</FooterLink>
        </div>
        <div className="w-5/12 mt-[40px]">
          <h1 className="gotham_font_bold  mb-4 whitespace-nowrap text-lg">Learn More</h1>
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
        <div className="w-5/12 mt-[-116px]">
          <h1 className="gotham_font_bold  mb-4 text-lg">Business</h1>
          {/* <FooterLink href="https://form.typeform.com/to/onOPhJ6Y?typeform-source=www.ref.finance">
            Business Inquiries
          </FooterLink> */}
          <FooterLink href="https://form.typeform.com/to/kxb7tTXg">Token Listing</FooterLink>
          <FooterLink href="https://form.typeform.com/to/onOPhJ6Y?typeform-source=www.ref.finance">
            Contact Us
          </FooterLink>
        </div>
       
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
