import React, { useEffect, useState } from 'react';
import {
  NavBarDownArrowIcon,
  NavBarUpArrowIcon,
  NavbarRefIcon,
  NavbarNearIcon,
  RefAnalytics,
  RefAnalyticsGary,
  RefAnalyticsIcon
} from '~src/components/layoutIcon/Icon';
import { use24hVolumeVariation, useHistoricalTvl } from '~src/hooks/home';
import Link from '~src/components/common/Link';
import { toInternationalCurrencySystem } from '~src/utils/numbers';
import { BigNumber } from 'bignumber.js';
import { isMobile } from '~src/utils/device';
const mobile = isMobile();
const Navbar = () => {
  const dayVolumeVariation = use24hVolumeVariation();
  const [hoverLogo, setHoverLogo] = useState(false);
  const [float, setFloat] = useState(false);
  const historyTvl = useHistoricalTvl();
  const { amount, variation } = dayVolumeVariation;
  const { tvlAmount24h, tvlVariation24h } = historyTvl;
  const [price, setPrice] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', srollFun);
    return () => {
      window.removeEventListener('scroll', srollFun);
    };
  }, []);
  function srollFun(e: any) {
    const scrollTop = e.srcElement.documentElement.scrollTop || window.pageYOffset || e.srcElement.body.scrollTop;
    const h = mobile ? 60 : 43;
    if (scrollTop > h) {
      setFloat(true);
    } else {
      setFloat(false);
    }
  }
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
    fetch('https://indexer.ref.finance/get-token-price?token_id=token.v2.ref-finance.near')
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
      <div style={{ background: 'rgba(57, 58, 68, 0.4)' }}>
        <div className="mx-auto sm:mb-2 md:mb-2">
          <div
            className="flex items-center justify-between mx-auto lg:w-5/6 sm:w-full md:w-full"
            style={{ minHeight: '44px' }}
          >
            <div className="flex items-center py-2 sm:items-end md:items-end sm:justify-between md:justify-between sm:w-full md:w-full sm:px-6 md:px-6">
              <div className="flex items-center sm:flex-col md:flex-col sm:items-start md:items-start">
                <span className="text-gray-text text-xs">TVL</span>
                {tvlVariation24h ? (
                  <div className="flex items-center sm:mt-1 md:mt-1">
                    <span className="text-white text-xs mx-1.5 sm:ml-0 md:ml-0">{displayTvlAmount24h()}</span>
                    {+tvlVariation24h > 0 ? (
                      <span className={`flex items-center text-xs text-growingColor`}>
                        (<NavBarUpArrowIcon className="mr-0.5"></NavBarUpArrowIcon>
                        {displayTvlVariation24h()})
                      </span>
                    ) : (
                      <span className={`flex items-center text-xs text-warningColor`}>
                        (<NavBarDownArrowIcon className="mr-0.5"></NavBarDownArrowIcon>
                        {displayTvlVariation24h()})
                      </span>
                    )}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center sm:flex-col md:flex-col sm:items-start md:items-start ml-11 sm:ml-0 md:ml-0">
                <span className="text-gray-text text-xs">24h Volume</span>
                {variation ? (
                  <div className="flex items-center sm:mt-1 md:mt-1">
                    <span className="text-white text-xs mx-1.5 sm:ml-0 md:ml-0">{displayAmount()}</span>
                    {+variation > 0 ? (
                      <span className={`flex items-center text-xs text-growingColor`}>
                        (<NavBarUpArrowIcon className="mr-0.5"></NavBarUpArrowIcon>
                        {displayVariation()})
                      </span>
                    ) : (
                      <span className={`flex items-center text-xs text-warningColor`}>
                        (<NavBarDownArrowIcon className="mr-0.5"></NavBarDownArrowIcon>
                        {displayVariation()})
                      </span>
                    )}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center sm:flex-col md:flex-col sm:items-start md:items-start ml-11 sm:ml-0 md:ml-0">
                <span className="text-gray-text text-xs">Price</span>
                <div className="flex items-center sm:mt-1 md:mt-1">
                  {price && <span className="text-white text-xs mx-1.5 sm:ml-0 md:ml-0">${price}</span>}
                </div>
              </div>
              <div
                className="ml-6 cursor-pointer sm:hidden md:hidden"
                onMouseOver={() => setHoverLogo(true)}
                onMouseLeave={() => setHoverLogo(false)}
                onClick={goPageStats}
              >
                {!hoverLogo && <RefAnalyticsGary className="transform scale-75 origin-center" />}
                {hoverLogo && <RefAnalytics className="transform scale-75 origin-center" />}
              </div>
              <RefAnalyticsIcon className="lg:hidden" onClick={goPageStats}></RefAnalyticsIcon>
            </div>
            <div
              onClick={goPageNear}
              className="flex items-center text-white text-opacity-60 text-sm cursor-pointer hover:text-opacity-100 sm:hidden md:hidden"
            >
              Built on{' '}
              <span className="flex items-center ml-3">
                <NavbarNearIcon className="mr-1"></NavbarNearIcon>NEAR
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={float ? 'fixed left-0 top-0 w-full bg-shadowColor z-50' : ''}
        style={{
          boxShadow: float ? '0px 4px 20px rgba(0, 0, 0, 0.5)' : '',
          backdropFilter: float ? 'blur(16px)' : '',
          WebkitBackdropFilter: float ? 'blur(16px)' : ''
        }}
      >
        <div className="relative z-50 flex items-center justify-between mx-auto lg:w-5/6 sm:w-full md:w-full h-14 sm:px-6 md:px-6">
          <NavbarRefIcon className="cursor-pointer" onClick={goRefApp}></NavbarRefIcon>
          <Link className={float ? 'sm:hidden md:hidden' : 'sm:-mr-4'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
