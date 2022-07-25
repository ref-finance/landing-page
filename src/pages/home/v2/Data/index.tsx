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
            <span className="text-white font-bold text-2xl sm:text-xl md:text-xl">TOP TOKENS</span>
            <div className="bg-brightGreenColor w-full mt-3" style={{ height: '3px' }}></div>
          </div>
          {/* <div className="flex flex-col justify-center items-center ml-28 sm:ml-0 md:ml-0">
            <span className="text-white font-bold text-2xl opacity-30 cursor-pointer sm:text-xl md:text-xl">POPULAR FARMS</span>
            <div className="bg-brightGreenColor w-full mt-3 opacity-0 cursor-pointer" style={{ height: '3px' }}></div>
          </div> */}
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 sm:px-3 md:px-2 gap-x-3 gap-y-5 mt-10 w-full">
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
          opacity: '0.15'
        }}
      ></div>
    </div>
  );
};

function TokenBox({ token, symbolMap }: { token: Token; symbolMap: any }) {
  const { symbol, icon, amount, tvl } = token;

  return (
    <div style={{ background: 'rgba(24, 48, 48, 0.6)' }} className="rounded-2xl px-3.5 py-4">
      <div className="flex items-center">
        <img src={icon || symbolMap[symbol]} className="w-10 h-10 rounded-full border-4 border-darkBorderColor"></img>
        <span className="text-white text-lg ml-2.5">{symbol}</span>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex flex-col">
          <span className="text-white opacity-50 text-sm">Locked</span>
          <span className="text-white text-lg font-bold">{toInternationalCurrencySystem(amount)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white opacity-50 text-sm">TVL</span>
          <span className="text-white text-lg font-bold">{'$' + toInternationalCurrencySystem(tvl)}</span>
        </div>
      </div>
    </div>
  );
}

export default Data;
