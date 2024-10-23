import React, { useEffect, useState } from 'react';
import {
  DownArrow,
  ReadDoc,
  CodeBlock,
  CodeBlockMobile,
  CodeBlockBg,
  RefSDKIcon,
  MobileStar,
  MobileGrid,
  RefSDKMobileIcon,
  CodeBlockBgMobile
} from '../../../components/icon/SDKIntro';
import './index.scss';

export const SDKIntro = () => {
  return (
    <>
      <div className="relative w-full sm:hidden">
        <CodeBlockBg />
        <div className="relative z-10 flex items-center justify-center mx-auto mt-[291px] mb-[326px] ">
          <div className="w-1/2 relative bottom-44">
            <CodeBlock />
          </div>

          <div className="w-1/2 flex flex-col">
            <div className="text-white text-2xl font-light">Developers</div>

            <div className="text-green-10 text-[54px] gotham_font_bold lg:mt-[25px] flex items-center">
              <span className="mr-4">{`{ REF SDK`}</span>
              <RefSDKIcon />
            </div>

            <div className="font-light text-white lg:pr-24 text-[54px]">
              <span className="g-the-easiest">The easiest way to</span>{' '}
              <span className="g-the-build">build on top of Ref.</span>
            </div>

            <div className="flex items-center mt-[60px]">
              <button
                className="cursor-pointer hover:opacity-85 text-lg font-bold text-black frcc rounded-lg w-[250px] h-[54px] bg-green-10 lg:mr-[50px]"
                onClick={() => {
                  window.open('https://github.com/ref-finance/ref-sdk/releases', '_blank');
                }}
              >
                Download ref-sdk
                <span className="ml-3">
                  <DownArrow />
                </span>
              </button>

              <button
                className="flex items-center rounded-lg text-white text-opacity-30 text-lg h-14 px-6 py-4"
                onClick={() => {
                  window.open('https://github.com/ref-finance/ref-sdk/blob/main/README.md', '_blank');
                }}
              >
                Read Doc
                <span className="ml-2">
                  <ReadDoc></ReadDoc>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:hidden mt-[94px] px-[20px]">
        <MobileStar />
        <div className="w-full h-[295px] frcc">
          <CodeBlockBgMobile className="absolute top-[100px] h-full  w-[100vw]" />
          <MobileGrid className="absolute top-[40px]" />
          <div className="pt-[160px]">
            <div className="text-white text-2xl font-light frcc">
              <span className="mr-[8px]">Developers</span> <RefSDKMobileIcon />
            </div>

            <div className="text-green-10 text-[40px] gotham_font_bold mt-[40px] flex items-center justify-center">
              {`{ REF SDK`}
            </div>

            <div className="font-light text-white lg:pr-24 text-[40px] fccc">
              <span className="g-the-easiest">The easiest way</span>{' '}
              <span className="g-the-build">to build on top</span>
              <span className="g-the-build"> of Ref.</span>
            </div>
          </div>
        </div>
        <CodeBlockMobile />

        <div className="flex flex-col items-center my-[60px] px-[20px]">
          <button
            className="cursor-pointer hover:opacity-85 text-lg font-bold text-black frcc rounded-lg w-full h-[60px] bg-green-10"
            onClick={() => {
              window.open('https://github.com/ref-finance/ref-sdk/releases', '_blank');
            }}
          >
            Download ref-sdk
            <span className="ml-3">
              <DownArrow />
            </span>
          </button>

          <button
            className="flex items-center rounded-lg text-white text-opacity-50 text-lg h-14 px-6 py-4 mt-[40px]"
            onClick={() => {
              window.open('https://github.com/ref-finance/ref-sdk/blob/main/README.md', '_blank');
            }}
          >
            Read Doc
            <span className="ml-2">
              <ReadDoc></ReadDoc>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
