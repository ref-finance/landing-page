import React, { CSSProperties } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
};

const IconMCoin1 = ({ className, style }: Props) => {
  return (
    <svg
      className={className}
      style={style}
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_238:634)">
        <circle
          cx="52"
          cy="52"
          r="28.2683"
          transform="rotate(-32.304 52 52)"
          fill="url(#paint0_linear_238:634)"
          shape-rendering="crispEdges"
        />
        <circle
          cx="52"
          cy="52"
          r="28.2683"
          transform="rotate(-32.304 52 52)"
          stroke="url(#paint1_linear_238:634)"
          strokeWidth="3"
          shape-rendering="crispEdges"
        />
      </g>
      <g opacity="0.5">
        <path
          d="M44.4409 62.5442L38.0161 52.3828C35.9324 49.0872 35.9465 42.5431 43.4165 37.82C50.8865 33.0969 57.2244 37.1625 58.6136 39.3596L65.0384 49.521"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M48.6191 57.5974L54.3494 66.6603M53.8372 54.2982L61.4775 66.3821M58.7806 51.1726L62.4271 56.9399C63.1216 58.0385 64.8857 59.5636 67.2571 58.4991C69.3532 57.5582 69.1352 55.3895 69.1352 55.3895"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="45.131" cy="49.0396" r="1.62462" transform="rotate(-32.304 45.131 49.0396)" fill="white" />
        <circle cx="52.8195" cy="44.1776" r="1.62462" transform="rotate(-32.304 52.8195 44.1776)" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_bd_238:634"
          x="0.930664"
          y="0.930664"
          width="102.139"
          height="102.139"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:634" />
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
          <feBlend mode="normal" in2="effect1_backgroundBlur_238:634" result="effect2_dropShadow_238:634" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:634" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_238:634"
          x1="79.5122"
          y1="78.7136"
          x2="12.6379"
          y2="54.9465"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0641396" stopColor="white" stopOpacity="0.15" />
          <stop offset="1" stopColor="white" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_238:634"
          x1="79.0295"
          y1="23.7317"
          x2="15.181"
          y2="48.766"
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

export default IconMCoin1;
