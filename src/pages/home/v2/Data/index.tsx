import React, { useEffect, useState } from 'react';
import { useTokenList, Token, useTokenBaeInfoList, TokenBaseInfo } from '~src/hooks/home';
import {} from '~src/components/layoutIcon/Icon';

import { toInternationalCurrencySystem } from '~src/utils/numbers';
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
    <div className="relative">
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto mt-44 sm:mt-20 md:mt-20 lg:w-4/5 sm:w-full md:w-full">
        <div className="flex items-center sm:justify-center md:justify-center sm:w-full md:w-full sm:px-6 md:px-6">
          <div className="flex flex-col justify-center items-center">
            <span className="text-white font-bold text-2xl">TOP TOKENS</span>
            {/* <div className="bg-brightGreenColor w-full mt-3" style={{ height: '3px' }}></div> */}
          </div>
          {/* <div className="flex flex-col justify-center items-center ml-28 sm:ml-0 md:ml-0">
            <span className="text-white font-bold text-2xl opacity-30 cursor-pointer sm:text-xl md:text-xl">POPULAR FARMS</span>
            <div className="bg-brightGreenColor w-full mt-3 opacity-0 cursor-pointer" style={{ height: '3px' }}></div>
          </div> */}
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 sm:px-9 md:px-9 gap-x-3 gap-y-5 mt-10 w-full">
          {tokenList.map((token: Token, index: number) => {
            return <TokenBox token={token} key={index} symbolMap={symbolMap}></TokenBox>;
          })}
        </div>
      </div>
      <div
        className="absolute right-0 top-5 rounded-full  transform translate-x-1/2 sm:hidden md:hidden"
        style={{
          width: '478px',
          height: '478px',
          backgroundImage: 'linear-gradient(90deg, #3AFFF2 0%, rgba(58, 255, 242, 0) 55.01%)',
          opacity: '0.2'
        }}
      ></div>
      <div
        className="lg:hidden absolute left-5 -top-20 rounded-full opacity-20 transform -translate-x-2/3"
        style={{
          width: '405px',
          height: '405px',
          backgroundImage: 'linear-gradient(270deg, #3AFFF2 2.65%, rgba(58, 255, 242, 0) 44.99%)',
          opacity: '0.2'
        }}
      ></div>
    </div>
  );
};

function TokenBox({ token, symbolMap }: { token: Token; symbolMap: any }) {
  const { symbol, icon, amount, tvl } = token;
  const nearIcon =
    'data:image/png;base64,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';
  return (
    <>
      <div
        className="rounded-2xl px-3.5 py-4 text-white bg-blueColor hover:bg-brightGreenColor sm:hidden md:hidden"
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <div className="flex items-center">
          <img
            src={symbol == 'wNEAR' ? nearIcon : icon || symbolMap[symbol]}
            className="w-10 h-10 rounded-full border-4 border-darkBorderColor"
          ></img>
          <span className="text-lg ml-2.5 font-extrabold">{symbol == 'wNEAR' ? 'NEAR' : symbol}</span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col">
            <span className=" opacity-50 text-sm">Locked</span>
            <span className=" text-lg font-bold">{toInternationalCurrencySystem(amount)}</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-50 text-sm ">TVL</span>
            <span className=" text-lg font-bold ">{'$' + toInternationalCurrencySystem(tvl)}</span>
          </div>
        </div>
      </div>
      <div
        className="flex items-end justify-between rounded-2xl p-3 text-white bg-blueColor hover:bg-brightGreenColor lg:hidden"
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <div className="relative flex flex-col items-start">
          <img
            src={symbol == 'wNEAR' ? nearIcon : icon || symbolMap[symbol]}
            className="absolute -top-12 w-10 h-10 rounded-full border-4 border-darkBorderColor transform translate-x-2"
          ></img>
          <span className="text-lg ml-2.5 font-extrabold">{symbol == 'wNEAR' ? 'NEAR' : symbol}</span>
        </div>
        <div className="flex flex-col">
          <span className=" opacity-50 text-sm">Locked</span>
          <span className=" text-lg font-bold mt-2">{toInternationalCurrencySystem(amount)}</span>
        </div>
        <div className="flex flex-col">
          <span className="opacity-50 text-sm ">TVL</span>
          <span className=" text-lg font-bold mt-2">{'$' + toInternationalCurrencySystem(tvl)}</span>
        </div>
      </div>
    </>
  );
}

export default Data;
