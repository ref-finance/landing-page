import React, { useEffect, useState } from 'react';
import { DownArrow, ReadDoc, CodeBlock, CodeBlockMobile } from '../../../components/icon/SDKIntro';

export const SDKIntro = () => {
  return (
    <div className="relative">
      <div className="relative z-10 flex sm:flex-col md:flex-col  items-center justify-center mx-auto mt-44 sm:mt-20 md:mt-20 lg:w-4/5 sm:w-full md:w-full">
        <div className="w-1/2 sm:w-full md:w-full flex flex-col">
          <div className="text-white text-2xl sm:text-center md:text-center font-bold">Developers</div>

          <div className="text-hightGreenColor text-6xl sm:text-center md:text-center  sm:text-5xl md:text-5xl font-bold mt-12 sm:mt-8 md:mt-8">{`{ REF SDK`}</div>

          <div className="font-light text-white text-4xl sm:text-2xl md:text-2xl sm:px-10 md:px-10 sm:text-opacity-50 md:text-opacity-50 mt-4 sm:text-center md:text-center  mb-8">
            0 code functional components of AMM
          </div>

          <div className="flex items-center sm:hidden md:hidden">
            <button
              className="flex mr-5 items-center rounded-lg text-white font-bold text-lg px-6 py-4 h-14"
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
        <div className="lg:hidden ">
          <CodeBlockMobile />
        </div>
        <div className="flex whitespace-nowrap flex-col px-10 w-full items-center lg:hidden">
          <button
            className="flex mt-8 mb-6 w-full justify-center items-center rounded-lg text-white font-bold text-lg px-6 py-4 h-14"
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
            className="flex w-full justify-center items-center rounded-lg text-white text-opacity-70 text-lg h-14 px-6 py-4"
            style={{
              background: 'linear-gradient(90deg, rgba(58, 110, 114, 0.64) 0%, rgba(13, 43, 37, 0.64) 100.18%)'
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
  );
};
