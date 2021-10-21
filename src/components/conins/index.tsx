import React from 'react';
import {
  IconCircle,
  IconCoin1,
  IconCoin2,
  IconCoin3,
  IconCoin4,
  IconMCoin1,
  IconMCoin2,
  IconMCoin3,
  IconMCoin4
} from '../icon';
import IconMCircle from '../icon/IconMCircle';

export const Coins = () => {
  return (
    <div className="relative flex w-full h-32 s:hidden">
      {/* <IconCircle className="absolute -bottom-1" style={{ left: '36%' }} /> */}
      <img
        className="w-16 h-16 absolute -bottom-1"
        style={{ left: '36%' }}
        src="https://i.postimg.cc/7htcVj6J/token-7.png"
        alt=""
      />

      {/* <IconCoin1 className="absolute -bottom-1" style={{ left: '45%' }} /> */}
      <img
        className="w-28 h-28 absolute -bottom-1"
        style={{ left: '45%' }}
        src="https://i.postimg.cc/kMWBH9Fy/token4.png"
        alt=""
      />

      {/* <IconCircle className="absolute -bottom-1" style={{ left: '55%' }} /> */}
      <img
        className="w-16 h-16 absolute -bottom-1"
        style={{ left: '55%' }}
        src="https://i.postimg.cc/7htcVj6J/token-7.png"
        alt=""
      />

      {/* <IconCoin2 className="absolute -bottom-1" style={{ left: '60%' }} /> */}
      <img
        className="w-28 h-28 absolute -bottom-1"
        style={{ left: '60%' }}
        src="https://i.postimg.cc/q7m509sb/token4.png"
        alt=""
      />

      {/* <IconCoin3 className="absolute -bottom-1" style={{ left: '66%' }} /> */}
      <img
        className="w-28 h-28 absolute -bottom-1"
        style={{ left: '66%' }}
        src="https://i.postimg.cc/WbbqqCg6/token5.png"
        alt=""
      />

      {/* <IconCircle className="absolute -bottom-1" style={{ left: '80%' }} /> */}
      <img
        className="w-16 h-16 absolute -bottom-1"
        style={{ left: '80%' }}
        src="https://i.postimg.cc/7htcVj6J/token-7.png"
        alt=""
      />

      {/* <IconCoin4 className="absolute -bottom-1" style={{ left: '80%' }} /> */}
      <img
        className="w-28 h-28 absolute -bottom-1"
        style={{ left: '80%' }}
        src="https://i.postimg.cc/vHVFhHrQ/token6.png"
        alt=""
      />

      <svg
        className="absolute bottom-0"
        style={{ left: '10%' }}
        width="975"
        height="2"
        viewBox="0 0 975 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1L975 0.999915" stroke="url(#paint0_linear_497:798)" stroke-width="2" />
        <defs>
          <linearGradient
            id="paint0_linear_497:798"
            x1="0"
            y1="1.98141"
            x2="965"
            y2="1.98141"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.8125" stop-color="#00C6A2" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const MCoins = () => {
  return (
    <div className="relative flex w-full l:hidden">
      {/* <IconMCircle className="absolute -bottom-1" style={{ left: '-20%' }} /> */}
      <img
        className="w-12 h-12 absolute bottom-0"
        style={{ left: '-20%' }}
        src="https://i.postimg.cc/7htcVj6J/token-7.png"
        alt=""
      />

      {/* <IconMCoin1 className="absolute -bottom-4" style={{ left: '-6%' }} /> */}
      <img
        className="w-16 h-16 absolute bottom-0"
        style={{ left: '0%' }}
        src="https://i.postimg.cc/kMWBH9Fy/token4.png"
        alt=""
      />

      {/* <IconMCircle className="absolute -bottom-1" style={{ left: '20%' }} /> */}
      <img
        className="w-12 h-12 absolute bottom-0"
        style={{ left: '19%' }}
        src="https://i.postimg.cc/7htcVj6J/token-7.png"
        alt=""
      />

      {/* <IconMCoin2 className="absolute -bottom-4" style={{ left: '22%' }} /> */}
      <img
        className="w-16 h-16 absolute bottom-0"
        style={{ left: '26%' }}
        src="https://i.postimg.cc/q7m509sb/token4.png"
        alt=""
      />

      {/* <IconMCoin3 className="absolute -bottom-4" style={{ left: '40%' }} /> */}
      <img
        className="w-16 h-16 absolute bottom-0"
        style={{ left: '43%' }}
        src="https://i.postimg.cc/WbbqqCg6/token5.png"
        alt=""
      />

      {/* <IconMCircle className="absolute -bottom-1" style={{ left: '74%' }} /> */}
      <img
        className="w-12 h-12 absolute bottom-0"
        style={{ left: '70%' }}
        src="https://i.postimg.cc/7htcVj6J/token-7.png"
        alt=""
      />

      {/* <IconMCoin4 className="absolute -bottom-4" style={{ left: '77%' }} /> */}
      <img
        className="w-16 h-16 absolute bottom-0"
        style={{ left: '78%' }}
        src="https://i.postimg.cc/vHVFhHrQ/token6.png"
        alt=""
      />
    </div>
  );
};
