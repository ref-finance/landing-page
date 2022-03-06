import React, { CSSProperties } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
};

const IconMCircle = ({ className, style }: Props) => {
  return (
    <svg
      className={className}
      style={style}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_238:633)">
        <circle cx="27" cy="27" r="16" fill="url(#paint0_linear_238:633)" shape-rendering="crispEdges" />
        <circle
          cx="27"
          cy="27"
          r="16"
          stroke="url(#paint1_linear_238:633)"
          strokeWidth="2"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_238:633"
          x="0"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:633" />
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
          <feBlend mode="normal" in2="effect1_backgroundBlur_238:633" result="effect2_dropShadow_238:633" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:633" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_238:633"
          x1="42.572"
          y1="42.12"
          x2="4.7209"
          y2="28.6677"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0641396" stopColor="white" stopOpacity="0.15" />
          <stop offset="1" stopColor="white" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_238:633"
          x1="42.2988"
          y1="11"
          x2="6.16026"
          y2="25.1695"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C1FFF4" />
          <stop offset="0.588542" stopColor="#73818B" stopOpacity="0.56" />
          <stop offset="1" stopColor="#BFCDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconMCircle;
