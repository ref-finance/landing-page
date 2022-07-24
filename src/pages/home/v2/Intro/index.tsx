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
  IntroVideoLightBg
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
    <div className="relative pt-px sm:w-full md:w-full overflow-hidden">
      <div
        className="absolute flex justify-end items-center rounded-full  bg-greenColor bg-opacity-20 -left-72 sm:left-0 md:-left-0 sm:transform sm:-translate-x-50%"
        style={{ width: mobile ? '500px' : '831px', height: mobile ? '500px' : '831px', top: '122px' }}
      >
        <div className=" transform translate-x-20 -translate-y-12">
          <p className="text-white font-bold text-2xl">GOVERNANCE</p>
          <div className="text-white w-80 leading-tight mt-3 font-extralight" style={{ fontSize: '42px' }}>
            Voting power & Extra earnings
          </div>
          <div className="flex items-center mt-12">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg ml-2">Assign the weight multiplier according to lockup period</span>
          </div>
          <div className="flex items-center mt-3">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg ml-2">Vote on farm set up & ballocation</span>
          </div>
          <div className="flex items-center mt-3">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg ml-2">Vote on important DAO proposals</span>
          </div>
          <div className="flex items-center mt-3">
            <IntroRightIcon></IntroRightIcon>
            <span className="text-white text-lg ml-2">Boost farming yield up to 2.5x</span>
          </div>
          <div className="flex items-center mt-16">
            <div
              onClick={() => {
                window.open('https://app.ref.finance//referendum');
              }}
              className="flex items-center justify-center bg-primary text-black text-sm cursor-pointer rounded-lg h-9 w-32"
            >
              Vote<IntroArrowIcon className="ml-3.5"></IntroArrowIcon>
            </div>
            <div
              onClick={() => {
                window.open('https://medium.com/@ref-finance/ref-tokenomics-2-0-vetokenomics-on-testnet-c2b6ea0e4f96');
              }}
              className="flex items-center justify-center bg-primary text-black text-sm cursor-pointer rounded-lg h-9 w-32 ml-3"
            >
              Read more<IntroArrowIcon className="ml-3.5"></IntroArrowIcon>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-end mx-auto 2xl:w-3/5 lg:w-4/5 sm:w-full md:w-full mt-80">
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
      <div className="flex items-center justify-center mx-auto mt-28 2xl:w-3/5 lg:w-4/5 sm:w-full md:w-full">
        <div className={`relative flex items-center justify-center ${showVideo ? 'hidden' : ''}`}>
          <IntroVideoBg style={{ width: '779px' }}></IntroVideoBg>
          <IntroVideoButtonIcon className="absolute cursor-pointer" onClick={playVideo}></IntroVideoButtonIcon>
        </div>
        <div className={`relative flex items-center justify-center ${showVideo ? '' : 'hidden'}`}>
          <IntroVideoLightBg></IntroVideoLightBg>
          <IntroVideoButtonIcon
            className={`${showPlayButton ? '' : 'hidden'} absolute z-20 cursor-pointer`}
            onClick={playVideo}
          ></IntroVideoButtonIcon>
          <video
            className={`absolute z-10 rounded-3xl`}
            controlsList="nodownload"
            ref={video}
            src={'https://assets.ref.finance/tokenomics%202.0%20video.m4v'}
            // poster={IntroVideoPoster()}
            preload="metadata"
            width={'679'}
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
