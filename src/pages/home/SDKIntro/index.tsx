import React, { useEffect, useState } from 'react';
import { DownArrow, ReadDoc, CodeBlock, CodeBlockMobile } from '../../../components/icon/SDKIntro';

export const SDKIntro = () => {
  return (
    <div className="relative">
      <div className="relative z-10 flex sm:flex-col md:flex-col  items-center justify-center mx-auto mt-44 sm:mt-20 md:mt-20 lg:w-4/5 sm:w-full md:w-full md:mb-44 sm:mb-44">
        <div className="w-1/2 sm:w-full md:w-full flex flex-col">
          <div className="text-white text-2xl sm:text-center md:text-center gotham_font_bold ">DEVELOPERS</div>

          <div className="text-hightGreenColor text-6xl sm:text-center md:text-center  sm:text-42 md:text-46 gotham_font_bold  mt-12 sm:mt-8 md:mt-8">{`{ REF SDK`}</div>

          <div className="font-light text-white lg:mr-14 text-42 gotham_font_light sm:text-2xl md:text-2xl sm:px-10 md:px-10  mt-4 sm:text-center md:text-center mb-6">
            The easiest way to build on top of Ref
          </div>

          <div className="flex items-center sm:hidden md:hidden">
            <button
              className="flex mr-5 items-center rounded-lg text-white gotham_font_bold  text-lg px-6 py-4 h-14"
              style={{
                background: 'linear-gradient(270deg, #7331FF 0%, #004FC6 49.79%, #00C6A2 97.06%)'
              }}
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
              className="flex items-center rounded-lg text-white text-opacity-70 text-lg h-14 px-6 py-4"
              style={{
                background: 'linear-gradient(90deg, rgba(58, 110, 114, 0.64) 0%, rgba(13, 43, 37, 0.64) 100.18%)'
              }}
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
        <div className="w-1/2 sm:hidden md:hidden relative bottom-44">
          <CodeBlock />
        </div>
        <div className="lg:hidden md:hidden">
          <CodeBlockMobile />
        </div>
        <div className="sm:hidden lg:hidden mb-80 absolute md:scale-x-110 top-44 left-1/2 transform -translate-x-1/2 mx-auto" style={{width:'556px'}}>
          <CodeBlock />
        </div>
        <div className="flex flex-col px-10 w-full items-center lg:hidden md:flex-row md:mt-96 md:space-x-4 md:justify-center">
          <button
            className="flex mt-8 w-full md:w-auto md:mt-0 md:mb-0 justify-center items-center rounded-lg text-white gotham_font_bold text-lg px-6 py-4 h-14"
            style={{
              background: 'linear-gradient(270deg, #7331FF 0%, #004FC6 49.79%, #00C6A2 97.06%)'
            }}
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
            className="flex mt-8 w-full md:w-auto md:mt-0 md:mb-0 justify-center items-center rounded-lg text-white text-opacity-70 text-lg h-14 px-6 py-4"
            style={{
              background: 'linear-gradient(90deg, rgba(58, 110, 114, 0.64) 0%, rgba(13, 43, 37, 0.64) 100.18%)'
            }}
            onClick={() => {
              window.open('https://github.com/ref-finance/ref-sdk/blob/main/README.md', '_blank');
            }}
          >
            Read Doc
            <span className="ml-2">
              <ReadDoc />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
