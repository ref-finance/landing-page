import React, { useEffect, useState } from 'react';
import {
  PartnersBgIcon,
  PartnersMobileBgIcon,
  PartnersOrderly,
  PartnersOKEX,
  PartnersRainbow,
  PartnerScedeStore,
  PartnerTransak,
  PartnersCoin,
  PartnersPikespeak,
  PartnersFrax,
  PartnersImmunefi,
  PartnersSweatEconomy,
  PartnersBurrow,
  PartnersNear,
  PartnersBlocksec,
  PartnersSlowMist
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
          <PartnersNear className="justify-self-start self-start origin-start opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersBlocksec className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersSlowMist className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersImmunefi className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersBurrow className="justify-self-end self-end origin-end opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="relative z-10 grid grid-cols-5 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersOKEX className="justify-self-start self-start origin-start opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersFrax className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersCoin className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersOrderly className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersSweatEconomy className="justify-self-end self-end origin-end opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="relative z-10 grid grid-cols-5 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersPikespeak className="justify-self-start self-start origin-start opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnersRainbow className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnerScedeStore className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
          <PartnerTransak className="justify-self-end self-end origin-end opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
        </div>
        <div className="lg:hidden sm:hidden relative z-10 mt-16 w-full flex justify-center pl-8 pr-8">
          <div className="grid grid-cols-3 gap-x-20 gap-y-16">
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersNear className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersBlocksec className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersSlowMist className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersImmunefi className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersBurrow className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersOKEX className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersFrax className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersCoin className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersOrderly className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersSweatEconomy className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersPikespeak className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersRainbow className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnerScedeStore className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnerTransak className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden relative z-10 mt-16 w-full flex justify-center pl-10 pr-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-14">
            <div className="max-w-xs w-full flex justify-start items-center ml-2">
              <PartnersNear className="transform scale-90 -ml-3 opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center -ml-2">
              <PartnersBlocksec className="transform scale-110 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center -ml-2">
              <PartnersSlowMist className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-end ml-2.5">
              <PartnersImmunefi className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center -ml-0">
              <PartnersBurrow className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersOKEX className="origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersFrax className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersCoin className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersOrderly className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersSweatEconomy className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnersPikespeak className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersRainbow className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center ml-1">
              <PartnerScedeStore className="transform scale-90 -ml-3 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnerTransak className="transform scale-90 origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite" />
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
