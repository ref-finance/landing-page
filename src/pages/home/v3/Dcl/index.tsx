import React from 'react';
import { BannerArrowIcon, DclIcon1, DclIcon2, DclIcon3, DclIcon4, DclIcon5 } from '~src/components/layoutIcon/Icon';

type FeatureCardProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description }) => (
  <div className="flex-1 mr-12 sm:w-full sm:mr-0 sm:mb-14 md:w-full lg:mb-6">
    <div className="flex justify-center sm:overflow-hidden">
      <div className="sm:scale-90 sm:transform">
        <Icon />
      </div>
    </div>
    <h1 className="mt-16 mb-2.5 text-3xl gotham_font_bold  text-center sm:mt-10 sm:text-left md:mt-10 md:text-left">
      {title}
    </h1>
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
        <div className="mb-16 sm:justify-center md:justify-center sm:w-full md:w-full sm:text-center sm:mb-11 md:text-center md:mb-11">
          <div className="relative mb-4 sm:w-full md:w-full">
            <div className="transform -translate-x-8 sm:hidden md:hidden">
              <DclIcon1 />
            </div>
            <p className="absolute bottom-2 left-0 text-white gotham_font_bold  text-5xl sm:text-3xl  md:text-3xl md:left-1/3 sm:relative">
              REF V2 - DCL
            </p>
          </div>
          <p className="text-white gotham_font_bold  text-3xl sm:text-2xl md:text-2xl">
            Both win by using discretized liquidity AMM
          </p>
        </div>
        <div className="absolute top-16 transform translate-x-1/2 -translate-y-1/2 sm:left-0 sm:-translate-x-1/3 md:left-0 md:hidden">
          <DclIcon2 />
        </div>
        <div className="relative z-10 flex flex-wrap justify-between items-baseline text-white mb-24 sm:overflow-hidden sm:grid sm:grid-cols-1 sm:pl-4 sm:pr-4 sm:mb-0 md:grid md:grid-cols-2 md:pl-4 md:mb-0 custom-md:grid custom-md:grid-cols-3 lg:grid-cols-2">
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
        <div className="relative flex justify-center mb-80 sm:mb-64 md:mb-64">
          <div className="absolute -top-44 z-0 sm:hidden mb:hidden">
            <img src="https://assets.ref.finance/images/dclIcon6.svg"></img>
          </div>
          <div className="absolute flex sm:block sm:w-full sm:pl-4 sm:pr-4 mb:block mb:w-full mb:pl-4 mb:pr-4">
            <div
              onClick={learnMore}
              className="flex items-center justify-center gotham_font_bold  mr-5 border border-primary hover:border-hightGreenColor px-10 rounded-lg cursor-pointer text-white text-black h-14 font-extrabold w-max  sm:w-full md:w-fit sm:mb-6 md:mb-6 md:mt-6"
            >
              Learn more
            </div>
            <div
              onClick={addLiquidity}
              className="flex items-center justify-center gotham_font_bold bg-primary rounded-lg cursor-pointer text-lg text-black h-14 px-10 font-extrabold w-max hover:bg-hightGreenColor sm:w-full md:w-fit md:mt-6"
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
