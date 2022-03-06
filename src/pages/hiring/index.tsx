import React, { useEffect, useRef, useState } from 'react';
import { HiringRefManICon } from '~src/components/common';
const HiringPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const switchTab = (tab: number) => {
    setActiveTab(tab);
  };
  const isMobile = window.screen.width < 1024;
  return (
    <div className="my-0 mx-auto w-2/5" style={{ width: isMobile ? '95vw' : '' }}>
      <div className="relative pt-20 lg:pl-7 xs:pt-24 md:pt-24">
        <HiringRefManICon
          className="absolute right-0 lg:bottom-0 xs:top-7 md:top-7"
          style={{ zoom: isMobile ? '0.75' : '' }}
        ></HiringRefManICon>
        <p className="text-white text-3xl relative xs:text-4xl md:text-4xl xs:-top-6 md:-top-6 xs:left-5 md:left-5">
          We are hiring!
        </p>
        <div className="flex w-full items-center mt-10 xs:justify-between md:justify-between">
          <span
            onClick={() => {
              switchTab(0);
            }}
            className={`flex items-center cursor-pointer text-sm  h-10 px-2.5 rounded-lg mr-3 ${
              activeTab == 0 ? 'text-white bg-hiringTabActiveBg' : 'text-hiringTabText bg-hiringTabBg'
            }`}
          >
            Bolckchain Backend
          </span>
          <span
            onClick={() => {
              switchTab(1);
            }}
            className={`flex items-center cursor-pointer text-sm  h-10 px-2.5 rounded-lg mr-3 ${
              activeTab == 1 ? 'text-white bg-hiringTabActiveBg' : 'text-hiringTabText bg-hiringTabBg'
            }`}
          >
            Backend
          </span>
          <span
            onClick={() => {
              switchTab(2);
            }}
            className={`flex items-center cursor-pointer text-sm  h-10 px-2.5 rounded-lg ${
              activeTab == 2 ? 'text-white bg-hiringTabActiveBg' : 'text-hiringTabText bg-hiringTabBg'
            }`}
          >
            Frontend
          </span>
        </div>
      </div>
      <div className="bg-hiringContentBg rounded-2xl px-11 py-7 mt-5 xs:px-4 md:px-4">
        <TabOneContent hidden={activeTab != 0}></TabOneContent>
        <TabTwoContent hidden={activeTab != 1}></TabTwoContent>
        <TabThreeContent hidden={activeTab != 2}></TabThreeContent>
      </div>
    </div>
  );
};

const TabOneContent = (props: any) => {
  const { hidden } = props;
  return (
    <div className={`${hidden ? 'hidden' : ''}`}>
      <div className="text-primary text-lg font-semibold">BlockChain Backend Engineer</div>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Location</div>
        <p className="text-hiringContentText text-sm">Remote, Asia or Europe is a plus.</p>
      </section>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Description</div>
        <p className="text-hiringContentText text-sm mb-4">
          Design, Development and Testing of Smart Contract on NEAR chain;
        </p>
        <p className="text-hiringContentText text-sm">Cooperate with FE on integration of Frontend-Backend.</p>
      </section>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Requirement</div>
        <p className="text-hiringContentText text-sm mb-4">Has experience on BlockChain Area and Smart Contract Dev;</p>
        <p className="text-hiringContentText text-sm mb-4">proficient in using Github;</p>
        <p className="text-hiringContentText text-sm mb-4">Familiar with Database and SQL, PostgreSQL is a plus;</p>
        <p className="text-hiringContentText text-sm mb-4">
          Good at communication in English both writting and speaking;
        </p>
        <p className="text-hiringContentText text-sm">Good at team cowork.</p>
      </section>
      <div className="flex items-center justify-center rounded-md bg-firingButton cursor-pointer text-white text-base font-semibold py-2 mt-10">
        Send Resume
      </div>
    </div>
  );
};
const TabTwoContent = (props: any) => {
  const { hidden } = props;
  return (
    <div className={`${hidden ? 'hidden' : ''}`}>
      <div className="text-primary text-lg font-semibold">Backend Engineer</div>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Location</div>
        <p className="text-hiringContentText text-sm">Remote, Asia or Europe is a plus.</p>
      </section>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Description</div>
        <p className="text-hiringContentText text-sm mb-4">
          Design, Development and Testing of Smart Contract on NEAR chain;
        </p>
        <p className="text-hiringContentText text-sm">Cooperate with FE on integration of Frontend-Backend.</p>
      </section>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Requirement</div>
        <p className="text-hiringContentText text-sm mb-4">Has experience on BlockChain Area and Smart Contract Dev;</p>
        <p className="text-hiringContentText text-sm mb-4">proficient in using Github;</p>
        <p className="text-hiringContentText text-sm mb-4">Familiar with Database and SQL, PostgreSQL is a plus;</p>
        <p className="text-hiringContentText text-sm mb-4">
          Good at communication in English both writting and speaking;
        </p>
        <p className="text-hiringContentText text-sm">Good at team cowork.</p>
      </section>
      <div className="flex items-center justify-center rounded-md bg-firingButton cursor-pointer text-white text-base font-semibold py-2 mt-10">
        Send Resume
      </div>
    </div>
  );
};
const TabThreeContent = (props: any) => {
  const { hidden } = props;
  return (
    <div className={`${hidden ? 'hidden' : ''}`}>
      <div className="text-primary text-lg font-semibold">Frontend Engineer</div>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Location</div>
        <p className="text-hiringContentText text-sm">Remote, Asia or Europe is a plus.</p>
      </section>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Description</div>
        <p className="text-hiringContentText text-sm mb-4">
          Design, Development and Testing of Smart Contract on NEAR chain;
        </p>
        <p className="text-hiringContentText text-sm">Cooperate with FE on integration of Frontend-Backend.</p>
      </section>
      <section className="mt-7">
        <div className="text-white text-sm font-semibold mb-1.5">Requirement</div>
        <p className="text-hiringContentText text-sm mb-4">Has experience on BlockChain Area and Smart Contract Dev;</p>
        <p className="text-hiringContentText text-sm mb-4">proficient in using Github;</p>
        <p className="text-hiringContentText text-sm mb-4">Familiar with Database and SQL, PostgreSQL is a plus;</p>
        <p className="text-hiringContentText text-sm mb-4">
          Good at communication in English both writting and speaking;
        </p>
        <p className="text-hiringContentText text-sm">Good at team cowork.</p>
      </section>
      <div className="flex items-center justify-center rounded-md bg-firingButton cursor-pointer text-white text-base font-semibold py-2 mt-10">
        Send Resume
      </div>
    </div>
  );
};

export default HiringPage;
