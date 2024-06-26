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
  NavbarNearIcon,
  BannerMainIconMobile,
  BannerBallIcon1Mobile,
  BannerBallIcon2Mobile,
  BannerBallIcon3Mobile
} from '~src/components/layoutIcon/Icon';
import './index.scss';
import { isMobile } from '~src/utils/device';
import { useTrail, animated } from '@react-spring/web';
import useAnimateNumber from 'use-animate-number';
import { toInternationalCurrencySystemSplit } from '~src/utils/numbers';
import { useTotalHistoricalVolume } from '~src/hooks/home';
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
  const volume = useTotalHistoricalVolume();
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
  let resultVolume;
  if (volume) {
    resultVolume = toInternationalCurrencySystemSplit(volume);
  }
  return (
    <div className="relative sm:mt-12 md:mt-12 pr-10 sm:pr-0">
      {mobile ? null : (
        <div className="absolute lg:transform xl:transform md:transform lg:scale-75 xl:scale-100 md:scale-65 right-1/3 mr-32 md:mr-0 md:-bottom-6 md:right-16% sm:right-3/4">
          <BannerMainIcon />
          <BannerBallIcon1 className={`absolute ball1Ani`} style={{ bottom: '270px', left: '450px' }} />
          <BannerBallIcon2 className={`absolute ball2Ani`} style={{ top: '210px', left: '590px' }} />
          <BannerBallIcon3 className={`absolute ball3Ani`} style={{ top: '50px', left: '702px' }} />
        </div>
      )}
      <div className="relative z-10 flex justify-end sm:justify-center mx-auto sm:w-full">
        <div className="flex flex-col sm:justify-center md:justify-center text-white mt-44 sm:mt-0  mr-1/5 md:mt-0">
          <Trail open>
            <span className="text-white gotham_font_bold  lg:hidden" style={{ fontSize: '32px' }}>
              Where your DeFi
            </span>
            <span className="text-white gotham_font_bold  lg:hidden" style={{ fontSize: '32px' }}>
              journey on
            </span>
            <span className="text-white gotham_font_bold  sm:hidden md:hidden" style={{ fontSize: '42px' }}>
              Where your DeFi journey on
            </span>
            <div className="sm:w-56">
              <BannerNearIconAndTextIcon className="mb-5 mt-2.5 sm:transform md:transform sm:scale-75 md:scale-75 sm:origin-left md:origin-left"></BannerNearIconAndTextIcon>
            </div>
          </Trail>
          <div
            onClick={goRefApp}
            className="flex items-center gotham_font_bold justify-center bg-primary rounded-lg cursor-pointer text-lg text-black h-14 font-extrabold w-max px-12 hover:bg-hightGreenColor sm:text-sm md:text-sm sm:h-10 md:h-10 sm:px-3.5 md:px-3.5"
          >
            Launch APP{' '}
            <BannerArrowIcon className="ml-2 sm:transform sm:scale-75 sm:origin-left md:transform md:scale-75 md:origin-left sm:ml-1 md:ml-1" />
          </div>
        </div>
      </div>
      <div className="relative lg:hidden xl:hidden md:hidden">
        <BannerMainIconMobile />
        <BannerBallIcon1Mobile className="absolute ball1AniMobile" style={{ bottom: '160', left: '105px' }} />
        <BannerBallIcon2Mobile className="absolute ball2AniMobile" style={{ top: '110px', left: '195px' }} />
        <BannerBallIcon3Mobile className="absolute ball3AniMobile" style={{ top: '10px', left: '260px' }} />
      </div>

      <div className="relatve z-10 flex mt-40 sm:-mt-10 sm:flex-col justify-around mx-auto lg:w-4/5 sm:w-full sm:px-5 md:-mr-10">
        <div className="flex flex-col items-center rounded-2xl sm:p-5  sm:my-5 md:my-5 ">
          <span className={`text-mobile text-2xl sm:text-2xl md:text-xl gotham_font_bold`}>Low Fees</span>
          <span className="text-white gotham_font_bold  text-42 my-2 md:text-4xl">
            {'<$'}
            <FeeNumber />
          </span>
          <span className="text-white text-base">Near’s Transaction Fees</span>
        </div>
        <div className="flex flex-col items-center rounded-2xl sm:p-5  sm:my-5 md:my-5 ">
          <span className={`text-mobile text-2xl sm:text-2xl md:text-xl gotham_font_bold`}>Lightning Fast</span>
          <span className="text-white gotham_font_bold  text-42 my-2 md:text-4xl">
            {'1-'}
            <FastNumber></FastNumber>
            {'S'}
          </span>
          <span className="text-white text-base">Transaction Finality</span>
        </div>
        <div className="flex flex-col items-center rounded-2xl sm:p-5 md:px-5 sm:my-5 md:my-5 ">
          <span className={`text-mobile text-2xl sm:text-2xl md:text-xl gotham_font_bold`}>Growing Fast</span>
          <span className="text-white gotham_font_bold  text-42 my-2 md:text-4xl">
            {'$'}
            {resultVolume ? (
              <>
                <GrowNumber num={resultVolume.value}></GrowNumber>
                {resultVolume.unit}
              </>
            ) : (
              '0'
            )}
          </span>
          <span className="text-white text-base md:hidden">Accumulative Trading Volume</span>
          <span className="text-white text-base text-center sm:hidden lg:hidden">
            Accumulative <br></br>Trading Volume
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

function FeeNumber() {
  const [value, setValue] = useAnimateNumber(0.01, {
    decimals: 3
  });
  return <>{value}</>;
}
function FastNumber() {
  const [value, setValue] = useAnimateNumber(2, {
    decimals: 1
  });
  return <>{value}</>;
}
function GrowNumber(props: any) {
  const [value, setValue] = useAnimateNumber(+props.num, {
    decimals: 1
  });
  return <>{value}</>;
}
