import React from 'react';
import { BannerArrowIcon, DclIcon1, DclIcon2, DclIcon3, DclIcon4, DclIcon5 } from '~src/components/layoutIcon/Icon';

type FeatureCardProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description }) => (
  <div className="flex-1 mr-12 sm:w-11/12 sm:mr-0 sm:mb-14">
    <Icon />
    <h1 className="mt-20 mb-2.5 text-3xl font-bold text-center sm:mt-16 sm:text-left">{title}</h1>
    <p className="text-xl">{description}</p>
  </div>
);

const Dcl = () => {
  function learnMore() {
    window.open('https://medium.com/nearprotocol/why-ref-v2-is-better-than-uni-v3-d24afb5c693c');
  }
  function addLiquidity() {
    window.open('https://app.ref.finance/pools');
  }
  return (
    <div className="relative">
      <div className="relative z-10  mx-auto mt-64 sm:mt-24 md:mt-24 lg:w-4/5 sm:w-full md:w-full">
        <div className="mb-16 sm:justify-center md:justify-center sm:w-full md:w-full sm:text-center sm:mb-11">
          <div className="relative mb-4 sm:w-full">
            <div className="transform -translate-x-8 sm:hidden">
              <DclIcon1 />
            </div>
            <p className="absolute bottom-2 left-0 text-white font-bold text-5xl sm:text-3xl sm:left-28">
              REF V2 - DCL
            </p>
          </div>
          <p className="text-white font-bold text-3xl sm:text-2xl">Both Win by using Discretized Liquidity AMM</p>
        </div>
        <div className="absolute top-16 transform translate-x-1/2 -translate-y-1/2 sm:left-0 sm:-translate-x-1/3">
          <DclIcon2 />
        </div>
        <div className="relative z-10 flex justify-between items-baseline text-white mb-24 sm:grid sm:pl-10 sm:pr-10 sm:mb-0">
          <FeatureCard
            Icon={DclIcon3}
            title="Precise & Efficient"
            description="Reduced slippage and more accurate liquidity provision within a price range"
          />
          <FeatureCard
            Icon={DclIcon4}
            title="Experience"
            description="Enable a CEX-like trading experience on DEXs with a built-in limit order functionality"
          />
          <FeatureCard
            Icon={DclIcon5}
            title="Both Win"
            description="Discretized liquidity AMM is a positive sum game where LPs and traders both win."
          />
        </div>
        <div className="relative flex justify-center mb-80 sm:mb-64">
          <div className="absolute -top-44 z-0 sm:hidden">
            <img src="https://assets.ref.finance/images/dclIcon6.svg"></img>
          </div>
          <div className="absolute flex sm:block sm:w-full sm:pl-10 sm:pr-10">
            <div
              onClick={learnMore}
              className="flex items-center justify-center  mr-5 border border-primary hover:border-hightGreenColor rounded-lg cursor-pointer text-white text-black h-12 font-extrabold w-44 sm:text-sm md:text-sm  sm:w-full md:w-full sm:mb-6"
            >
              Learn more
            </div>
            <div
              onClick={addLiquidity}
              className="flex items-center justify-center bg-primary rounded-lg cursor-pointer text-lg text-black h-12 font-extrabold w-80 hover:bg-hightGreenColor sm:text-sm md:text-sm sm:w-full md:w-full"
            >
              Add Liquidity in DCL Pool{' '}
              <BannerArrowIcon className="ml-2 sm:transform sm:scale-75 sm:origin-left md:transform md:scale-75 md:origin-left sm:ml-1 md:ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dcl;
