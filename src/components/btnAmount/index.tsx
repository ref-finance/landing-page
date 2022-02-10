import React from 'react';
import { RefPrice } from '~src/hooks/home';
import { IconRef } from '../icon';

type Props = {
  data?: RefPrice;
};

const BtnAmount = ({ data }: Props) => {
  return (
    <button className="relative ml-16 w-32 h-14 flex items-center cursor-auto left-8">
      <svg width="135" height="58" viewBox="0 0 120 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_453:218)">
          <rect
            x="10.9727"
            y="11"
            width="112.865"
            height="36"
            rx="18"
            fill="url(#paint0_linear_453:218)"
            shape-rendering="crispEdges"
          />
          <rect
            x="10.9727"
            y="11"
            width="112.865"
            height="36"
            rx="18"
            stroke="url(#paint1_linear_453:218)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_453:218"
            x="-39.5273"
            y="-39.5"
            width="213.865"
            height="137"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_453:218" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_453:218" result="effect2_dropShadow_453:218" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_453:218" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_453:218"
            x1="122.328"
            y1="46.01"
            x2="55.2459"
            y2="-28.7346"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.08" />
            <stop offset="1" stop-color="white" stop-opacity="0.03" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_453:218"
            x1="121.364"
            y1="11"
            x2="62.8008"
            y2="82.9895"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00C6A2" stop-opacity="0.83" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#00BA98" stop-opacity="0.28" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className="absolute flex justify-center items-center w-8 h-8 rounded-full border border-solid border-primary box-content"
        style={{ left: 10 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5293 17.7281H17.7007L11.5293 11.5566V17.7281Z" fill="white" />
          <path d="M17.7002 0.75669L14.1002 0.756689L17.7002 4.35669L17.7002 0.75669Z" fill="#00C6A2" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7871 11.5568C11.7003 11.5568 11.614 11.5546 11.5283 11.5501V7.68709L15.73 3.78549C16.3228 4.59406 16.6728 5.59171 16.6728 6.67111C16.6728 9.36942 14.4854 11.5568 11.7871 11.5568ZM14.6326 2.69909L11.5283 5.58164V1.79214C11.614 1.78766 11.7003 1.7854 11.7871 1.7854C12.8487 1.7854 13.8313 2.124 14.6326 2.69909Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0153 1.78516H6.38672V6.35081L8.46407 8.42815L11.0153 6.05916V1.78516ZM11.0153 8.16461L8.42441 10.5704L6.38672 8.53274V17.728H11.0153V8.16461Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.87235 1.78516H0.729492V8.40878L4.58709 4.55118L5.87235 5.83644V1.78516ZM5.87235 8.01837L4.58709 6.73311L0.729492 10.5907V17.728H5.87235V8.01837Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="absolute font-lexend text-lg text-center text-white" style={{ left: 50 }}>
        ${data?.price.slice(0, 4)}
      </span>
    </button>
  );
};

export default BtnAmount;
