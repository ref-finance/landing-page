import React, { useEffect, useRef, useState } from 'react';
import {
  IntroIcon1,
  IntroIcon2,
  IntroIcon3,
  IntroIcon4,
  IntroRightIcon,
  IntroArrowIcon,
  IntroVideoBg,
  IntroVideoButtonIcon,
  IntroVideoPoster,
  IntroVideoLightBg,
  MobileVeIconList,
  IntroVideoLightBg_m,
  IntroVideoBg_m,
  IntroVideoButtonIcon_m
} from '~src/components/layoutIcon/Icon';
import { isMobile } from '~src/utils/device';
import './index.scss';

const Intro = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const video = useRef<any>(null);
  function playVideo() {
    setShowVideo(true);
    const videoObj = video.current;
    videoObj.play();
  }
  useEffect(() => {
    const videoObj = video.current;
    videoObj.addEventListener('ended', () => {
      setShowVideo(false);
      setShowPlayButton(false);
    });
    videoObj.addEventListener('play', () => {
      setShowPlayButton(false);
    });
    videoObj.addEventListener('pause', () => {
      setShowPlayButton(true);
    });
  }, []);
  const mobile = isMobile();
  return (
    <div className="sm:flex md:flex sm:flex-col md:flex-col relative pt-px mt-16 sm:w-full md:w-full sm:mt-28 md:mt-28">
      <div
        className="sm:relative md:relative absolute flex justify-end items-center sm:flex-col md:flex-col -left-72 sm:left-0 md:left-0 sm:transform sm:-translate-x-50%"
        style={{ top: mobile ? '' : '122px' }}
      >
        <div
          className="sm:absolute md:absolute bg-leftBall opacity-20 rounded-full"
          style={{
            width: mobile ? '573px' : '831px',
            height: mobile ? '573px' : '831px',
            right: mobile ? '20%' : ''
          }}
        ></div>
        <div className="sm:relative md:relative absolute z-10 transform translate-x-20  sm:translate-x-10 md:translate-x-10 -translate-y-12 sm:-translate-y-2 md:-translate-y-2 sm:pr-10 md:pr-10">
          <p className="text-white font-bold text-2xl">GOVERNANCE</p>
          <div
            className="text-white w-96 sm:w-80 md:w-80 leading-tight mt-3 gotham_font_light sm:opacity-50 md:opacity-50"
            style={{ fontSize: mobile ? '32px' : '42px' }}
          >
            Voting power & Extra earnings
          </div>
          <div className="flex items-center mt-12">
            <IntroRightIcon className="flex flex-shrink-0 relative sm:-top-3 md:-top-3"></IntroRightIcon>
            <span className="text-white text-lg sm:text-base md:text-base ml-2">
              Assign the weight multiplier according to lockup period
            </span>
          </div>
          <div className="flex items-center mt-3">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg sm:text-base md:text-base ml-2">Vote on farm set up & allocation</span>
          </div>
          <div className="flex items-center mt-3">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg sm:text-base md:text-base ml-2">Vote on important DAO proposals</span>
          </div>
          <div className="flex items-center mt-3">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg sm:text-base md:text-base ml-2">Boost farming</span>
          </div>
          <div className="flex items-center mt-16 sm:hidden md:hidden">
            <div
              onClick={() => {
                window.open('https://app.ref.finance/referendum');
              }}
              className="flex items-center justify-center bg-primary text-black text-sm cursor-pointer rounded-lg h-9 w-32 hover:bg-hightGreenColor"
            >
              Vote<IntroArrowIcon className="ml-3.5"></IntroArrowIcon>
            </div>
            <div
              onClick={() => {
                window.open('https://medium.com/@ref-finance/ref-tokenomics-2-0-vetokenomics-on-testnet-c2b6ea0e4f96');
              }}
              className="flex items-center justify-center bg-primary text-black text-sm cursor-pointer rounded-lg h-9 w-32 ml-3 hover:bg-hightGreenColor"
            >
              Read more<IntroArrowIcon className="ml-3.5"></IntroArrowIcon>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 lg:hidden">
          <div
            onClick={() => {
              window.open('https://app.ref.finance/referendum');
            }}
            className="flex items-center justify-center bg-primary text-black text-sm cursor-pointer rounded-lg h-9 w-32 hover:bg-hightGreenColor"
          >
            Vote<IntroArrowIcon className="ml-3.5"></IntroArrowIcon>
          </div>
          <div
            onClick={() => {
              window.open('https://medium.com/@ref-finance/ref-tokenomics-2-0-vetokenomics-on-testnet-c2b6ea0e4f96');
            }}
            className="flex items-center justify-center bg-primary text-black text-sm cursor-pointer rounded-lg h-9 w-32 ml-3 hover:bg-hightGreenColor"
          >
            Read more<IntroArrowIcon className="ml-3.5"></IntroArrowIcon>
          </div>
        </div>
      </div>
      <div className="sm:hidden md:hidden flex items-center justify-end mx-auto lg:w-4/5 sm:w-full md:w-full mt-80">
        <div className="flex flex-col items-center">
          <div className="flex items-center h-60">
            <IntroIcon1></IntroIcon1>
            <IntroIcon2></IntroIcon2>
          </div>
          <span className="text-white text-lg mt-4">REF+ NEAR</span>
        </div>
        <div className="flex flex-col items-center boardAni2">
          <IntroIcon3 className="h-60"></IntroIcon3>
          <span className="text-white text-lg mt-4">veLPT</span>
        </div>
        <div className="flex flex-col items-center boardAni3">
          <IntroIcon4 className="h-60"></IntroIcon4>
          <span className="text-white text-lg mt-4">LOVE</span>
        </div>
      </div>
      <div className="lg:hidden flex justify-center mt-20 w-full">
        <MobileVeIconList></MobileVeIconList>
      </div>
      <div className="flex items-center justify-center mx-auto mt-44 sm:mt-20 md:mt-20 lg:w-4/5 sm:w-full md:w-full">
        <div className={`relative flex items-center justify-center ${showVideo ? 'hidden' : ''}`}>
          <IntroVideoBg className="sm:hidden md:hidden" style={{ width: '779px' }}></IntroVideoBg>
          <IntroVideoBg_m className="lg:hidden" style={{ width: '375px' }}></IntroVideoBg_m>
          <IntroVideoButtonIcon
            className="absolute cursor-pointer sm:hidden md:hidden"
            onClick={playVideo}
          ></IntroVideoButtonIcon>
          <IntroVideoButtonIcon_m
            className="absolute cursor-pointer lg:hidden"
            onClick={playVideo}
          ></IntroVideoButtonIcon_m>
        </div>
        <div className={`relative flex items-center justify-center   ${showVideo ? '' : 'hidden'}`}>
          <IntroVideoLightBg className="sm:hidden md:hidden"></IntroVideoLightBg>
          <IntroVideoLightBg_m className="lg:hidden"></IntroVideoLightBg_m>
          <IntroVideoButtonIcon
            className={`${showPlayButton ? '' : 'hidden'} absolute z-20 cursor-pointer sm:hidden md:hidden`}
            onClick={playVideo}
          ></IntroVideoButtonIcon>
          <IntroVideoButtonIcon_m
            className={`${showPlayButton ? '' : 'hidden'} absolute z-20 cursor-pointer lg:hidden`}
            onClick={playVideo}
          ></IntroVideoButtonIcon_m>
          <video
            className={`absolute z-10 rounded-3xl`}
            controlsList="nodownload"
            ref={video}
            src={'https://assets.ref.finance/tokenomics%202.0%20video.m4v'}
            // poster={IntroVideoPoster()}
            preload="metadata"
            width={mobile ? '345' : '679'}
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
