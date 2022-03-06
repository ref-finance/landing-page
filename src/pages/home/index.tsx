import React from 'react';
import Navbar from '~src/components/navbar';
import Footer from '~src/components/footer';
import { Coins, MCoins } from '~src/components/conins';
import Banner from './Banner';
import Backgound from '~src/components/background';
import Intro from './Intro';
import Roadmap from './Roadmap';
import Cooperation from './Cooperation';
import Investors from './Investors';
import { HiringIcon } from '~src/components/common';
import { useLocation, useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <Backgound />
      <HiringIcon
        className="fixed right-0 cursor-pointer top-20 z-50"
        onClick={() => {
          history.push('/hiring');
        }}
      ></HiringIcon>
      <section className="mx-auto">
        <Banner />
        <Intro />
        <Roadmap />
        <Investors />
        <Cooperation />
      </section>
    </div>
  );
};

export default HomePage;
