import React from 'react';
import { IconCheck } from '~src/components/icon';
import Goals from './Goals';
import HeaderBackground from './HeaderBackground';

const Roadmap = () => {
  return (
    <div
      className={`
        w-full h-auto relative flex flex-col justify-center align-middle
      `}
    >
      <HeaderBackground />
      {/* Title */}
      <div
        className={`
          w-full l:mb-20
          l:grid l:grid-flow-col l:auto-cols-fr
        `}
      >
        <div
          className={`
          font-poppins font-bold italic text-4xl l:text-6xl text-white s:text-center relative s:right-14
          l:mt-64 s:mt-8 xl:mr-36 l:mr-32 l:justify-self-end
        `}
        >
          What we’re
          <br />
          working on
        </div>
        <div className="hidden l:block l:w-1/2 l:h-1" />
      </div>
      {/* Content */}
      <div
        className={`
          mx-auto s:mt-8
          grid
            l:grid-flow-col l:auto-cols-fr l:gap-7
            s:grid-flow-row s:auto-cols-auto s:gap-16
        `}
      >
        <Goals title="Q1 2022">
          <div className="flex items-center">
            <span className="mr-2">Parallel Swap</span>
            <IconCheck />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Single-sided Staking</span>
            <IconCheck />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Smart Routing</span>
            <IconCheck />
          </div>
          {'Multi-Wallet Integration'}
          <span>
            'Liquidity aggregation'
            <br />
            '(NEAR x Aurora)'
          </span>
        </Goals>
        <Goals title="Q2 2022">
          {'Auto-compounding'}
          {'Zap Function'}
          {'Liquidity Management Dashboard'}
          {'Referendum'}
          {'Enhanced Ref Analytics'}
          {'Enhanced UX'}
        </Goals>
        <Goals title="H2 2022">
          {'Central Limit Orderbook Integration'}
          {'Concentrated Liquidity'}
          {'Cross-chain smart contract calls'}
          {'All-in-one DAO'}
        </Goals>
      </div>
    </div>
  );
};

export default Roadmap;
