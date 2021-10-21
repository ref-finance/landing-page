import React from 'react';
import { cooperations } from './const';

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-10 s:grid-cols-2">
      {cooperations.map(({ icon, title }) => (
        <div className="CooperateCard relative flex flex-col items-center pt-5 l:w-56 h-32 s:w-full">
          <svg
            className="absolute top-0 left-0 s:w-full"
            width="225"
            height="128"
            viewBox="0 0 225 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              className="s:w-full"
              width="224"
              height="128"
              fill="url(#paint0_linear_337:1245)"
              stroke="url(#paint1_linear_337:1245)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_337:1245"
                x1="221.018"
                y1="118.672"
                x2="13.1176"
                y2="-17.5004"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0641396" stop-color="white" stop-opacity="0.08" />
                <stop offset="1" stop-color="white" stop-opacity="0.03" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_337:1245"
                x1="205"
                y1="11"
                x2="171.194"
                y2="46.9992"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00C6A2" />
                <stop offset="1" stop-color="#00BA98" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {icon}
          <div className="font-lexend text-lg text-white">{title}</div>
          <div className="CooperateCard_fake_wrap block absolute top-0 left-0 bottom-0 right-0 z-10 bg-gradient-to-tr hover:bg-none from-black to-gray-900 opacity-70 hover:opacity-100">
            <div className="CooperateCard_fake_arrow "></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
