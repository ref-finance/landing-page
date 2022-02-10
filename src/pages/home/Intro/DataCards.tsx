import React, { FC, ReactNode } from 'react';
import { HiOutlineTrendingUp } from 'react-icons/hi';

interface DataCardProps {
  value: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

const GradientBackground = () => {
  return (
    <svg width="362" height="188" viewBox="0 0 362 188" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_bd_3_191)">
        <rect
          x="11"
          y="11"
          width="340"
          height="166"
          rx="15"
          fill="url(#paint0_linear_3_191)"
          shape-rendering="crispEdges"
        />
        <rect
          x="11"
          y="11"
          width="340"
          height="166"
          rx="15"
          stroke="url(#paint1_linear_3_191)"
          stroke-width="2"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_3_191"
          x="-40"
          y="-40"
          width="442"
          height="268"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3_191" />
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
          <feBlend mode="normal" in2="effect1_backgroundBlur_3_191" result="effect2_dropShadow_3_191" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3_191" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_3_191"
          x1="346.453"
          y1="172.435"
          x2="50.373"
          y2="-43.0893"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0641396" stop-color="white" stop-opacity="0.08" />
          <stop offset="1" stop-color="white" stop-opacity="0.03" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_3_191"
          x1="343.55"
          y1="11"
          x2="74.2363"
          y2="227.279"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C6A2" stop-opacity="0.83" />
          <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
          <stop offset="1" stop-color="#00BA98" stop-opacity="0.28" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DataCard: FC<DataCardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="dataCard relative font-bold italic text-white flex flex-col justify-center items-center text-center mx-2 s:my-2 rounded-2xl">
      <div className="absolute">
        <GradientBackground />
      </div>

      <div
        style={{
          fontSize: '32px',
          lineHeight: '38px'
        }}
      >
        {title}
      </div>
      <div
        className="pb-2 pt-3"
        style={{
          fontSize: '40px',
          lineHeight: '50px'
        }}
      >
        {value}
        {icon}
      </div>
      <div className="font-poppins text-base">{description}</div>
    </div>
  );
};

const withPrefix = (money: string, prefix: string) => {
  return (
    <span>
      <span className="pr-1">{prefix}</span>
      {money}
    </span>
  );
};

const withSuffix = (money: string, suffix: string) => {
  return (
    <span>
      {money}
      <span className="pl-1">{suffix}</span>
    </span>
  );
};

const DataCards = () => {
  return (
    <ul className="mt-44 mb-7 s:mt-8 s:mb-16 flex s:flex-col">
      <DataCard title="LOW FEES" value={withPrefix('0.01', '<$')} description="NEAR'S TRANSACTION FEES" />
      <DataCard title="LIGHTING FAST" value={withSuffix('1-2', 'S')} description="TRANSACTION FINALITY" />
      <DataCard
        title="GROWING FAST"
        value="40,273"
        icon={<HiOutlineTrendingUp className="inline-block ml-2" />}
        description="INCREASING USERS"
      />
    </ul>
  );
};

export default DataCards;
