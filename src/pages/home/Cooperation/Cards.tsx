import React from 'react';
import { cooperations } from './const';

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-10 s:grid-cols-2">
      {cooperations.map(({ icon, title }, index) => (
        <div className="CooperateCard relative items-center" key={index}>
          <svg
            className="l:hidden"
            width="155"
            height="85"
            viewBox="0 0 155 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="153.355"
              height="83.6677"
              fill="url(#paint0_linear_618:136)"
              stroke="url(#paint1_linear_618:136)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_618:136"
                x1="151.317"
                y1="81.3943"
                x2="9.27881"
                y2="-11.6396"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0641396" stopColor="white" stopOpacity="0.08" />
                <stop offset="1" stopColor="white" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_618:136"
                x1="140.374"
                y1="7.83205"
                x2="117.277"
                y2="32.4268"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00C6A2" />
                <stop offset="1" stopColor="#00BA98" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="s:hidden"
            width="226"
            height="123"
            viewBox="0 0 226 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="225"
              height="122"
              fill="url(#paint0_linear_595:4057)"
              stroke="url(#paint1_linear_595:4057)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_595:4057"
                x1="222.004"
                y1="118.672"
                x2="13.734"
                y2="-18.3546"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0641396" stopColor="white" stopOpacity="0.08" />
                <stop offset="1" stopColor="white" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_595:4057"
                x1="205.915"
                y1="11"
                x2="172.118"
                y2="47.1501"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00C6A2" />
                <stop offset="1" stopColor="#00BA98" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute top-3 items-center flex flex-col w-40 left-1/2 -ml-20">{icon}</div>
          <div className="absolute mx-auto w-full justify-center flex bottom-3 font-lexend text-lg text-white">
            <span>{title}</span>
          </div>
          <div className="CooperateCard_fake_wrap block absolute top-0 left-0 bottom-0 right-0 z-10 bg-gradient-to-tr hover:bg-none from-black to-gray-900 opacity-70 hover:opacity-100">
            <div className="CooperateCard_fake_arrow "></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
