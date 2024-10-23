import React, { useEffect, useState } from 'react';
import { useTokenList, Token, useTokenBaeInfoList, TokenBaseInfo } from '~src/hooks/home';
import icons from '~src/utils/metadata';
import { TopTokenIcon } from '~src/assets/newIcon/icon';
import { toInternationalCurrencySystem } from '~src/utils/numbers';
import './index.scss';
import { BannerArrowIcon } from '~src/components/layoutIcon/Icon';

const Data = () => {
  const [symbolMap, setSymbolMap] = useState({});
  const tokenList = useTokenList();
  const tokenBaseInfMap = useTokenBaeInfoList();
  useEffect(() => {
    const tempMap: any = {};
    Object.values(tokenBaseInfMap).forEach((tokenBaseInfo: TokenBaseInfo) => {
      tempMap[tokenBaseInfo.symbol] = tokenBaseInfo.icon;
    });
    setSymbolMap(tempMap);
  }, [tokenBaseInfMap]);
  return (
    <div className="relative sm:mt-[70px]">
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto lg:mt-[120px]">
        <div className="flex items-center w-full sm:justify-center">
          <span className="text-white gotham_font_light font-light text-2xl mr-[8px]">Top tokens</span>
          <TopTokenIcon />
        </div>
        <div className="text-[54px] font-bold w-full flex items-center mt-[25px] sm:hidden">
          <span className="g-the-most">The most</span>
          <span className="text-green-10 mx-[16px]">popular</span>
          <span className="g-token">token</span>
        </div>

        <div className="text-[40px] font-bold w-full fccc mt-[40px] lg:hidden">
          <span className="g-the-most">The most</span>
          <div>
            <span className="text-green-10 mx-[16px]">popular</span>
            <span className="g-token">token</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[17px] mt-10 w-full sm:hidden">
          {tokenList.map((token: Token, index: number) => {
            return <TokenBox token={token} key={index} symbolMap={symbolMap}></TokenBox>;
          })}
        </div>

        <div className="mt-10 w-full lg:hidden px-[20px]">
          {tokenList.map((token: Token, index: number) => {
            return <TokenBox token={token} key={index} symbolMap={symbolMap}></TokenBox>;
          })}
        </div>
        {/* go swap */}
        <div
          onClick={() => window.open('https://app.ref.finance/')}
          className="cursor-pointer hover:opacity-85 text-lg font-bold text-black frcc rounded-lg w-[250px] h-[54px] bg-green-10 mt-[70px]"
        >
          Go Swap
          <BannerArrowIcon className="ml-2 scale-75" />
        </div>
      </div>
      {/* <div
        className="absolute right-0 top-5 rounded-full  transform translate-x-1/2 sm:hidden md:translate-y-full"
        style={{
          width: '478px',
          height: '478px',
          backgroundImage: 'linear-gradient(90deg, #3AFFF2 0%, rgba(58, 255, 242, 0) 55.01%)',
          opacity: '0.2'
        }}
      ></div>
      <div
        className="lg:hidden md:hidden absolute left-5 -top-20 rounded-full opacity-20 transform -translate-x-2/3"
        style={{
          width: '405px',
          height: '405px',
          backgroundImage: 'linear-gradient(270deg, #3AFFF2 2.65%, rgba(58, 255, 242, 0) 44.99%)',
          opacity: '0.2'
        }}
      ></div> */}
    </div>
  );
};

function TokenBox({ token, symbolMap }: { token: Token; symbolMap: any }) {
  const { symbol, icon, amount, tvl, volume24h, price } = processToken(token);
  return (
    <>
      <div className="rounded-[10px] p-5 text-white bg-dark-330 hover:opacity-85 sm:hidden">
        <div className="flex items-center">
          <img src={icon || symbolMap[symbol]} className="w-9 h-9 rounded-full border-4 border-darkBorderColor"></img>
          <div className="flex flex-col ml-2.5">
            <span className="text-base font-normal">{symbol == 'wNEAR' ? 'NEAR' : symbol}</span>
            <span className="text-xl text-white font-medium">${price}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col">
            <span className="text-gray-320 text-sm ">24h Volume</span>
            <span className=" text-lg  ">{'$' + toInternationalCurrencySystem(volume24h)}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-320 text-sm ">TVL</span>
            <span className=" text-lg  ">{'$' + toInternationalCurrencySystem(tvl)}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-320 text-sm">Locked</span>
            <span className=" text-lg ">{toInternationalCurrencySystem(amount)}</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-[10px] p-[18px] text-white  lg:hidden h-[139px] mt-[40px] relative"
        style={{ background: 'linear-gradient(to bottom, #0B151C, #122127)' }}
      >
        <img
          src={icon || symbolMap[symbol]}
          className="absolute -top-[22px] left-0 w-11 h-11 rounded-full border-4 border-darkBorderColor transform translate-x-2"
        />
        <div className="relative flex items-center justify-between w-full mt-[6px]">
          <span className="text-lg font-extrabold">{symbol == 'wNEAR' ? 'NEAR' : symbol}</span>
          <span className="text-lg text-white font-medium">${price}</span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col">
            <span className="text-gray-320 text-sm ">24h Volume</span>
            <span className=" text-base  ">{'$' + toInternationalCurrencySystem(volume24h)}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-320 text-sm ">TVL</span>
            <span className=" text-base  ">{'$' + toInternationalCurrencySystem(tvl)}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-320 text-sm">Locked</span>
            <span className=" text-base ">{toInternationalCurrencySystem(amount)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
function processToken(token: Token) {
  token.icon = icons[token.token_id] || token.icon;
  return token;
}

export default Data;
