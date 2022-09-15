import React, { FC, ReactNode } from 'react';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import { usersCount } from '../../../config';
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
          strokeWidth="2"
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
          colorInterpolationFilters="sRGB"
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
          <stop offset="0.0641396" stopColor="white" stopOpacity="0.08" />
          <stop offset="1" stopColor="white" stopOpacity="0.03" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_3_191"
          x1="343.55"
          y1="11"
          x2="74.2363"
          y2="227.279"
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

const DataCard: FC<DataCardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="dataCard relative font-bold italic text-white flex flex-col justify-center items-center text-center mx-2 s:my-2 rounded-2xl border border-mobile">
      <div
        style={{
          fontSize: '26px',
          lineHeight: '38px'
        }}
        className="text-mobile"
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
      <div className="font-poppins text-base not-italic  font-normal">{description}</div>
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
      <DataCard title="LOW FEES" value={withPrefix('0.01', '<$')} description="Near’s Transaction Fees" />
      <DataCard title="LIGHTNING FAST" value={withSuffix('1-2', 'S')} description="Transaction Finality" />
      <DataCard
        title="GROWING FAST"
        value={usersCount}
        icon={<HiOutlineTrendingUp className="inline-block ml-2" />}
        description="Increasing Users"
      />
    </ul>
  );
};

export default DataCards;
