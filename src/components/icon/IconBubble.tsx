import React from 'react';

const IconQuiz = () => {
  return (
    <svg width="59" height="33" viewBox="0 0 59 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_98:915)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 3C7.14873 3 2 8.14873 2 14.5C2 20.8513 7.14873 26 13.5 26H29.5H34C37.5 30 42 31.3333 44 31.5V26H45.5C51.8513 26 57 20.8513 57 14.5C57 8.14873 51.8513 3 45.5 3H13.5Z"
          fill="url(#paint0_linear_98:915)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_98:915"
          x="0"
          y="0"
          width="59"
          height="32.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98:915" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98:915" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_98:915"
          x1="2"
          y1="6.82318"
          x2="55.7617"
          y2="-1.33616"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D6AF" />
          <stop offset="1" stopColor="#1AA289" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconQuiz;
