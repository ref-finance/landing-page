import React from 'react';
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
          font-poppins font-bold italic text-4xl l:text-6xl text-white s:text-center
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
        <Goals title="Q3">
          {'- AMM on mainnet'}
          {'- Multi Reward Farm'}
          {'- Instant Swap'}
        </Goals>
        <Goals title="Q4">
          {'- Stablecoin Swap'}
          {'- Parallel Swap'}
          {'- Smart Route Swap'}
          {'- Data Analytics'}
        </Goals>
        <Goals title="2022">
          {'- Metamask support'}
          {'- Integrate with a fiat-on-ramp solution'}
          {'- An active LP management feature or an Orderbook Dex'}
          {'- Pool based stablecoin'}
          {'- Lending feature on Ref'}
          {'- New user interactive feature'}
        </Goals>
      </div>
    </div>
  );
};

export default Roadmap;
