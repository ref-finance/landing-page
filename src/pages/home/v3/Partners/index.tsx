import React, { useEffect, useState } from 'react';
import {
  PartnersBgIcon,
  PartnersMobileBgIcon,
  PartnersIcon1,
  PartnersIcon2,
  PartnersIcon3,
  PartnersIcon4,
  PartnersIcon5,
  PartnersIcon6,
  PartnersIcon7,
  PartnersIcon8,
  PartnersIcon9,
  PartnersIcon10,
  PartnersIcon11,
  PartnersIcon12,
  PartnersIcon13,
  PartnersIcon14
} from '~src/components/layoutIcon/Icon';
import { isMobile } from '~src/utils/device';

const Partners = () => {
  function goRefApp() {
    window.open('https://app.ref.finance/');
  }
  const mobile = isMobile();
  return (
    <div className="relative mx-auto sm:mt-32 md:mt-28 mt-56 lg:w-4/5 sm:w-full md:w-full md:mb-64">
      <div className="flex justify-center text-white gotham_font_bold  text-2xl">PARTNERS</div>
      <div
        className="flex justify-center text-42 text-white mt-3 gotham_font_light  sm:text-center md:text-center text-opacity-50 sm:mt-0 md:mt-0 sm:text-32"
      >
        Get better together
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative z-10 grid grid-cols-5 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersIcon1 className="justify-self-start self-start origin-start opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon2 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon3 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon4 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon5 className="justify-self-end self-end origin-end opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="relative z-10 grid grid-cols-5 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersIcon6 className="justify-self-start self-start origin-start opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon7 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon8 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon9 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon10 className="justify-self-end self-end origin-end opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="relative z-10 grid grid-cols-5 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersIcon11 className="justify-self-start self-start origin-start opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon12 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon13 className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersIcon14 className="justify-self-end self-end origin-end opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="lg:hidden sm:hidden relative z-10 mt-16 w-full flex justify-center pl-8 pr-8">
          <div className="grid grid-cols-3 gap-x-20 gap-y-16">
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon1 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon2 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon3 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon4 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon5 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon6 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon7 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon8 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon9 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon10 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon11 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon12 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon13 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon14 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden relative z-10 mt-16 w-full flex justify-center pl-10 pr-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-14">
            <div className="max-w-xs w-full flex justify-start items-center ml-2">
              <PartnersIcon7 className="transform scale-90 -ml-3 opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center -ml-2">
              <PartnersIcon2 className="transform scale-110 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center -ml-2">
              <PartnersIcon5 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-end ml-2.5">
              <PartnersIcon6 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center -ml-0">
              <PartnersIcon3 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon8 className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersIcon14 className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon9 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersIcon12 className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon10 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersIcon13 className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon1 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersIcon4 className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon11 className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
          </div>
        </div>
        <PartnersMobileBgIcon className="absolute top-40 lg:hidden md:hidden"></PartnersMobileBgIcon>
        <PartnersBgIcon className="absolute sm:hidden md:-bottom-44"></PartnersBgIcon>

        {/* <div
          onClick={goRefApp}
          className="lg:hidden flex font-extrabold items-center justify-center bg-primary rounded-lg cursor-pointer  mt-44 text-sm text-black h-8 w-32 hover:bg-hightGreenColor"
        >
          Launch APP <BannerArrowIcon className="ml-1 transform scale-75" />
        </div> */}
      </div>
    </div>
  );
};

export default Partners;