import React from 'react';
import { NavBarDownArrowIcon, NavBarUpArrowIcon, NavbarRefIcon, NavbarNearIcon } from '~src/components/layoutIcon/Icon';
import { use24hVolumeVariation, useHistoricalTvl } from '~src/hooks/home';
import Link from '~src/components/common/Link';
import { toInternationalCurrencySystem } from '~src/utils/numbers';
import { BigNumber } from 'bignumber.js';
import { isMobile } from '~src/utils/device';

const Navbar = () => {
  const dayVolumeVariation = use24hVolumeVariation();
  const historyTvl = useHistoricalTvl();
  const { amount, variation } = dayVolumeVariation;
  const { tvlAmount24h, tvlVariation24h } = historyTvl;
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
  const mobile = isMobile();
  return (
    <div className="relative">
      <div style={{ background: 'rgba(57, 58, 68, 0.4)' }}>
        <div style={{ maxWidth: mobile ? '' : '1440px' }} className="mx-auto">
          <div className="flex items-center justify-between mx-auto lg:w-4/5 sm:w-full md:w-full h-11">
            <div className="flex items-center sm:justify-between md:justify-between sm:w-full md:w-full sm:px-3 md:px-3">
              <div className="flex items-center">
                <span className="text-gray-text text-xs">TVL</span>
                {tvlVariation24h ? (
                  <>
                    <span className="text-white text-xs mx-1.5">{displayTvlAmount24h()}</span>
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
                  </>
                ) : null}
              </div>
              <div className="flex items-center ml-11 sm:ml-0 md:ml-0">
                <span className="text-gray-text text-xs">24h Volume</span>
                {variation ? (
                  <>
                    <span className="text-white text-xs mx-1.5">{displayAmount()}</span>
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
                  </>
                ) : null}
              </div>
              <span
                className="text-mobile text-xs ml-11 cursor-pointer hover:underline sm:hidden md:hidden"
                onClick={goPageStats}
              >
                Stats
              </span>
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
      <div style={{ maxWidth: mobile ? '' : '1440px' }} className="mx-auto">
        <div className="relative z-50 flex items-center justify-between mt-5 mx-auto lg:w-4/5 sm:w-full md:w-full h-11 sm:px-3 md:px-3">
          <NavbarRefIcon className="cursor-pointer" onClick={goRefApp}></NavbarRefIcon>
          <Link />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
