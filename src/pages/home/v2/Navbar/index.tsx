import React, { useEffect, useState } from 'react';
import {
  NavBarDownArrowIcon,
  NavBarUpArrowIcon,
  NavbarRefIcon,
  NavbarNearIcon,
  RefAnalytics,
  RefAnalyticsGary,
  RefAnalyticsIcon,
  NavbarRefMobileIcon,
  RefMobileLogo
} from '~src/components/layoutIcon/Icon';
import { use24hVolumeVariation, useHistoricalTvl } from '~src/hooks/home';
import { toInternationalCurrencySystem } from '~src/utils/numbers';
import { BigNumber } from 'bignumber.js';
import { isMobile } from '~src/utils/device';
import { getAuthenticationHeaders } from '~src/utils/signature';
import { Logo } from '~src/assets/newIcon/icon';

const mobile = isMobile();
const Navbar = () => {
  const dayVolumeVariation = use24hVolumeVariation();
  const [hoverLogo, setHoverLogo] = useState(false);
  const [float, setFloat] = useState(false);
  const historyTvl = useHistoricalTvl();
  const { amount, variation } = dayVolumeVariation;
  const { tvlAmount24h, tvlVariation24h } = historyTvl;
  const [price, setPrice] = useState('');
  // useEffect(() => {
  //   window.addEventListener('scroll', srollFun);
  //   return () => {
  //     window.removeEventListener('scroll', srollFun);
  //   };
  // }, []);
  // function srollFun(e: any) {
  //   const scrollTop = e.srcElement.documentElement.scrollTop || window.pageYOffset || e.srcElement.body.scrollTop;
  //   const h = mobile ? 60 : 43;
  //   if (scrollTop > h) {
  //     setFloat(true);
  //   } else {
  //     setFloat(false);
  //   }
  // }
  function displayAmount() {
    if (+amount > 0) {
      return '$' + toInternationalCurrencySystem(amount);
    } else {
      return '-';
    }
  }
  function displayVariation() {
    if (Math.abs(+variation) > 0) {
      return new BigNumber(variation).multipliedBy(100).toFixed(2) + '%';
    } else {
      return '-%';
    }
  }

  function displayTvlAmount24h() {
    if (+tvlAmount24h > 0) {
      return '$' + toInternationalCurrencySystem(tvlAmount24h);
    } else {
      return '-';
    }
  }

  function displayTvlVariation24h() {
    if (Math.abs(+tvlVariation24h) > 0) {
      return new BigNumber(tvlVariation24h).multipliedBy(100).toFixed(2) + '%';
    } else {
      return '-%';
    }
  }
  function goPageStats() {
    window.open('https://stats.ref.finance/');
  }
  function goPageNear() {
    window.open('https://awesomenear.com/ref-finance');
  }
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
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
    <div className="relative">
      <div className="fixed left-0 top-0 w-full min-h-[44px] bg-dark-320 z-50 flex items-center lg:px-20">
        <Logo className="lg:mr-[129px] sm:hidden" />
        <div className="flex items-center justify-between flex-1 sm:w-full">
          <div className="flex items-center sm:justify-between sm:px-[23px] sm:w-full">
            <div className="flex lg:items-center lg:mr-[55px] sm:flex-col ">
              <span className="text-gray-10 text-xs lg:mr-[19px]">TVL</span>
              {tvlVariation24h ? (
                <div className="flex items-center">
                  <span className="text-white text-xs lg:mr-[12px]">{displayTvlAmount24h()}</span>
                  {+tvlVariation24h > 0 ? (
                    <span className={`flex items-center text-xs text-green-10`}>
                      (<NavBarUpArrowIcon className="mr-0.5"></NavBarUpArrowIcon>
                      {displayTvlVariation24h()})
                    </span>
                  ) : (
                    <span className={`flex items-center text-xs text-error`}>
                      (<NavBarDownArrowIcon className="mr-0.5"></NavBarDownArrowIcon>
                      {displayTvlVariation24h()})
                    </span>
                  )}
                </div>
              ) : null}
            </div>
            <div className="flex lg:items-center lg:mr-[55px] sm:flex-col">
              <span className="text-gray-10 text-xs lg:mr-[19px]">24h Volume</span>
              {variation ? (
                <div className="flex items-center">
                  <span className="text-white text-xs lg:mr-[12px]">{displayAmount()}</span>
                  {+variation > 0 ? (
                    <span className={`flex items-center text-xs text-green-10`}>
                      (<NavBarUpArrowIcon className="mr-0.5"></NavBarUpArrowIcon>
                      {displayVariation()})
                    </span>
                  ) : (
                    <span className={`flex items-center text-xs text-error`}>
                      (<NavBarDownArrowIcon className="mr-0.5"></NavBarDownArrowIcon>
                      {displayVariation()})
                    </span>
                  )}
                </div>
              ) : null}
            </div>
            <div className="flex items-center lg:mr-[51px] sm:hidden">
              <span className="text-gray-10 text-xs lg:mr-[13px]">Price</span>
              <div className="flex items-center">
                {price && <span className="text-white text-xs mx-1.5 sm:ml-0 md:ml-0">${price}</span>}
              </div>
            </div>
            <div
              className="cursor-pointer sm:hidden"
              onMouseOver={() => setHoverLogo(true)}
              onMouseLeave={() => setHoverLogo(false)}
              onClick={goPageStats}
            >
              {hoverLogo ? <RefAnalytics /> : <RefAnalyticsGary />}
            </div>
            <div onClick={goPageStats}>
              <RefMobileLogo />
            </div>
            {/* <div className="lg:hidden md:ml-auto" onClick={goPageStats}>
                <RefAnalyticsIcon></RefAnalyticsIcon>
              </div> */}
          </div>
          <div
            onClick={goPageNear}
            className="flex items-center text-gray-10 text-xs cursor-pointer hover:text-white sm:hidden"
          >
            <span> Built on</span>
            <span className="flex items-center ml-3 ">
              <NavbarNearIcon className="mr-1"></NavbarNearIcon>NEAR
            </span>
          </div>
        </div>
      </div>
      {/* <div
        className={float ? 'fixed left-0 top-0 w-full bg-shadowColor z-50' : ''}
        style={{
          boxShadow: float ? '0px 4px 20px rgba(0, 0, 0, 0.5)' : '',
          backdropFilter: float ? 'blur(16px)' : '',
          WebkitBackdropFilter: float ? 'blur(16px)' : ''
        }}
      >
        <div className="relative z-50 flex items-center justify-between mx-auto lg:w-5/6 sm:w-full md:w-full h-14 sm:px-6 md:px-6">
          <NavbarRefIcon className="sm:hidden md:hidden cursor-pointer" onClick={goRefApp}></NavbarRefIcon>
          <NavbarRefMobileIcon className="lg:hidden cursor-pointer" onClick={goRefApp}></NavbarRefMobileIcon>
          <Link className={float ? 'sm:hidden md:hidden' : 'sm:-mr-4'} />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
