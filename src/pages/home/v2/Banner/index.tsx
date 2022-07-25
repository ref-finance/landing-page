import React from 'react';
import {
  BannerMainIcon,
  BannerBIcon,
  BannerTIcon,
  BannerBallIcon1,
  BannerBallIcon2,
  BannerBallIcon3,
  BannerNearIconAndTextIcon,
  BannerArrowIcon,
  NavbarNearIcon
} from '~src/components/layoutIcon/Icon';
import './index.scss';
import { isMobile } from '~src/utils/device';
import { useTrail, animated } from '@react-spring/web';

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 600 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div className="flex items-start flex-col l:mt-6 s:mt-4">
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};
const Banner = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  function goPageNear() {
    window.open('https://awesomenear.com/ref-finance');
  }
  function goPageStats() {
    window.open('https://stats.ref.finance/');
  }
  const mobile = isMobile();
  return (
    <div className="relative overflow-hidden sm:mt-10 md:mt-10">
      <div className="absolute sm:-top-48 md:-top-48 lg:transform xl:transform sm:transform md:transform lg:scale-75 xl:scale-100 sm:scale-50 md:scale-50 sm:origin-left md:origin-left sm:opacity-20 md:opacity-20">
        <BannerMainIcon />
        <BannerBallIcon1
          className={`absolute ${mobile ? '' : 'ball1Ani'}`}
          style={{ bottom: '270px', left: '370px' }}
        />
        <BannerBallIcon2 className={`absolute ${mobile ? '' : 'ball2Ani'}`} style={{ top: '210px', left: '510px' }} />
        <BannerBallIcon3 className={`absolute ${mobile ? '' : 'ball3Ani'}`} style={{ top: '50px', left: '622px' }} />
      </div>
      <div className="relative z-10 flex justify-end sm:justify-center md:justify-center mx-auto lg:w-4/5 sm:w-full md:w-full">
        <div className="flex flex-col sm:items-center md:items-center text-white mt-44 mr-1/5">
          <div
            onClick={goPageNear}
            className="lg:hidden flex items-center text-white text-opacity-60 text-sm cursor-pointer hover:text-opacity-100"
          >
            Built on{' '}
            <span className="flex items-center ml-3">
              <NavbarNearIcon className="mr-1"></NavbarNearIcon>NEAR
            </span>
            <span className="text-mobile text-xs ml-11 cursor-pointer hover:underline lg:hidden" onClick={goPageStats}>
              Stats
            </span>
          </div>
          <Trail open>
            <span className="text-white" style={{ fontSize: '42px' }}>
              Where your DeFi
            </span>
            <span className="text-white" style={{ fontSize: '42px' }}>
              {' '}
              journey on
            </span>
            <BannerNearIconAndTextIcon className="mb-5 mt-2.5"></BannerNearIconAndTextIcon>
          </Trail>
          <div
            onClick={goRefApp}
            className="flex items-center justify-center bg-primary rounded-lg cursor-pointer text-lg text-black h-12 w-48 hover:bg-hightGreenColor"
          >
            Launch APP <BannerArrowIcon className="ml-2" />
          </div>
        </div>
      </div>
      <div className="relatve z-10 flex mt-40 sm:mt-20 md:mt-20 sm:flex-col md:flex-col justify-between mx-auto lg:w-4/5 sm:w-full md:w-full sm:px-5 md:px-5">
        <div className="flex flex-col items-center rounded-2xl sm:p-5 md:p-5 sm:my-5 md:my-5 sm:border sm:border-mobile md:border md:border-mobile">
          <span className="text-mobile text-2xl">LOW FEES</span>
          <span className="text-white font-bold text-4xl my-2">{'<$0.01'}</span>
          <span className="text-white text-base">Near’s transaction fees</span>
        </div>
        <div className="flex flex-col items-center rounded-2xl sm:p-5 md:p-5 sm:my-5 md:my-5 sm:border sm:border-mobile md:border md:border-mobile">
          <span className="text-mobile text-2xl">LIGHTING FAST</span>
          <span className="text-white font-bold text-4xl my-2">{'1-2s'}</span>
          <span className="text-white text-base">transaction Finality</span>
        </div>
        <div className="flex flex-col items-center rounded-2xl sm:p-5 md:p-5 sm:my-5 md:my-5 sm:border sm:border-mobile md:border md:border-mobile">
          <span className="text-mobile text-2xl">GROWING FAST</span>
          <span className="text-white font-bold text-4xl my-2">{'$30B+'}</span>
          <span className="text-white text-base">Accumulative Trading Volume</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
