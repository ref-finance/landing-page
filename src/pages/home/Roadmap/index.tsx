import React from 'react';
import { IconCheck } from '~src/components/icon';
import Goals from './Goals';
import HeaderBackground from './HeaderBackground';

const Roadmap = () => {
  return (
    <div
      className={`
         h-auto relative flex flex-col justify-center align-middle CooperateCard_max_width mx-auto s:w-72 s:mt-24 l:mt-36

      `}
    >
      {/* Title */}
      <div className="font-poppins flex font-bold text-6xl s:text-4xl italic text-white l:mb-16 s:mb-0">
        What we’re
        <br />
        working on
        <div
          className="w-0 h-0 ml-1 -mt-3 border-solid -translate-y-10 inline-block s:hidden"
          style={{
            borderWidth: '0 30px 30px 0',
            borderColor: 'transparent #00C6A2 transparent transparent'
          }}
        />
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
          <div className="flex items-center">
            <span className="mr-2">{'Multi-Wallet Integration'}</span>
            <IconCheck />
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              {'Liquidity aggregation'}
              <br />
              {'(NEAR x Aurora)'}
            </span>
            <IconCheck />
          </div>
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
