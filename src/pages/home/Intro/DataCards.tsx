import React, { FC, ReactNode } from 'react';

interface DataCardProps {
  label: ReactNode;
  value: ReactNode;
}

const GradientBackground = () => {
  return (
    <svg width="255" height="143" viewBox="0 0 255 143" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_bd_226:36)">
        <rect
          x="11"
          y="11"
          width="233"
          height="121"
          rx="15"
          fill="url(#paint0_linear_226:36)"
          shapeRendering="crispEdges"
        />
        <rect
          x="11"
          y="11"
          width="233"
          height="121"
          rx="15"
          stroke="url(#paint1_linear_226:36)"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_226:36"
          x="-40"
          y="-40"
          width="335"
          height="223"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_226:36" />
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
          <feBlend mode="normal" in2="effect1_backgroundBlur_226:36" result="effect2_dropShadow_226:36" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_226:36" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_226:36"
          x1="240.884"
          y1="128.672"
          x2="29.4807"
          y2="-16.0042"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0641396" stopColor="white" stopOpacity="0.08" />
          <stop offset="1" stopColor="white" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_226:36"
          x1="238.894"
          y1="11"
          x2="45.5332"
          y2="156.991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6A2" stopOpacity="0.83" />
          <stop offset="0.588542" stopColor="#73818B" stopOpacity="0.56" />
          <stop offset="1" stopColor="#00BA98" stopOpacity="0.28" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DataCard: FC<DataCardProps> = ({ label, value }) => {
  return (
    <div className="">
      <div className="hidden l:block absolute l:w-64 l:h-36">
        <GradientBackground />
      </div>
      <li
        className={`
        flex flex-col justify-center align-middle text-center
        l:w-64 l:h-36 l:rounded-15
      `}
      >
        <div className="pb-2 font-poppins font-bold italic text-5xl text-white">{value}</div>
        <div className="font-poppins text-base text-white">{label}</div>
      </li>
    </div>
  );
};

const withPrefix = (money: string, prefix: string) => {
  return (
    <span>
      <span className="text-3xl pr-1">{prefix}</span>
      {money}
    </span>
  );
};

const withSuffix = (money: string, suffix: string) => {
  return (
    <span>
      {money}
      <span className="text-3xl pl-1">{suffix}</span>
    </span>
  );
};

const DataCards = () => {
  return (
    <ul className="mt-16 mb-7 s:mt-8 s:mb-16 grid grid-flow-col s:grid-flow-row gap-6 s:gap-12">
      <DataCard label="Low Fee" value={withPrefix('0.01', '$')} />
      <DataCard label="Trade Finality" value={withSuffix('1-2', 's')} />
      <DataCard label="Users" value="22,359" />
    </ul>
  );
};

export default DataCards;
