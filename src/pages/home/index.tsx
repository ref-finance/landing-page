import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from './v2/Navbar';
import Banner from './v2/Banner';
import Intro from './v2/Intro';
import Data from './v2/Data';
import Investors from './v2/Investors';
import { isMobile } from '~src/utils/device';
import { SDKIntro } from './SDKIntro/index';
import Dcl from './v3/Dcl';
import Overview from './v3/Overview';
import Team from './v3/Team';
import Footer from './v3/Footer';
import Partners from './v3/Partners';
import Link from '~src/components/common/Link';
import LinkMobile from '~src/components/common/LinkMobile';
import { FooterLink } from '~src/components/common/FooterLink';
import { Logo } from '~src/assets/newIcon/icon';
import { NavbarNearIcon } from '~src/components/layoutIcon/Icon';
import { getAuthenticationHeaders } from '~src/utils/signature';
import { RefTokenIcon } from '~src/components/layoutIcon/Icon';

const HomePage = () => {
  const mobile = isMobile();
  const [price, setPrice] = useState('');
  useEffect(() => {
    fetch('https://api.ref.finance/get-token-price?token_id=token.v2.ref-finance.near', {
      method: 'GET',
      headers: getAuthenticationHeaders('/get-token-price')
    })
      .then(response => response.json())
      .then(data => {
        const formattedPrice = Number(data.price).toFixed(2);
        setPrice(formattedPrice);
      })
      .catch(error => {
        console.error('Error fetching price:', error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-dark-30">
      <header>
        <Navbar />
      </header>
      <div className="mx-auto lg:px-[130px] sm:mt-[94px]">
        <section className="mx-auto">
          <div className="lg:hidden w-full flex flex-col items-center justify-center">
            <Logo />
            <LinkMobile className="mt-5" />
          </div>
          <Data />
          <SDKIntro />
          <Investors />
          <Partners />
        </section>
      </div>
      <footer
        className="border border-r-0 border-l-0  mt-[215px] pt-[100px] sm:hidden"
        style={{
          borderColor: 'rgba(255,255,255,.2)'
        }}
      >
        <div className="px-[130px]">
          <Footer />
        </div>
      </footer>

      <footer
        className="mt-[131px] lg:hidden"
      >
        <div className="px-[30px]">
          <Footer />
        </div>
      </footer>

      <Link className="py-[100px] w-full flex items-center justify-center sm:hidden" />
      <Link className="py-[100px] px-[30px] w-full grid grid-cols-3 lg:hidden place-items-center gap-y-[30px]" />
      <div className="w-full flex items-center justify-between lg:px-[130px] mt-[84px] sm:hidden">
        <div className="flex justify-between items-center md:hidden">
          <div>
            <FooterLink href="https://immunefi.com/bounty/reffinance/">
              <span className="underline text-gray-60">Bug Bounty</span>
            </FooterLink>
          </div>
          <div className="mx-9">
            <FooterLink href="https://guide.ref.finance/developers/audits">
              <span className="underline text-gray-60">Security</span>
            </FooterLink>
          </div>
          <div>
            <FooterLink href="https://app.ref.finance/risks">
              <span className="underline text-gray-60">Risks</span>
            </FooterLink>
          </div>
        </div>
        <div className="text-gray-60 text-sm">@ 2024 Ref finance Ltd</div>
      </div>
      <div className='h-[38px] w-full bg-dark-320 fixed bottom-0 flex items-center justify-between px-[38px] z-[12] lg:hidden'>
        <div className="flex items-center">
          <RefTokenIcon/>
        <span className='text-gray-10 text-xs mx-1.5'>Price</span>
        <div className="flex items-center">
                {price && <span className="text-white text-xs sm:ml-0 md:ml-0">${price}</span>}
              </div>
        </div>
      <div
            onClick={()=>window.open('https://awesomenear.com/ref-finance')}
            className="flex items-center text-white text-xs cursor-pointer "
          >
            <span className='text-gray-10'>Built on</span>
            <span className="flex items-center ml-3 ">
              <NavbarNearIcon className="mr-1 text-white"></NavbarNearIcon>NEAR
            </span>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
