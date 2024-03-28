import React from 'react';
import Navbar from './v2/Navbar';
import Banner from './v2/Banner';
import Intro from './v2/Intro';
import Data from './v2/Data';
import Investors from './v2/Investors';
import { isMobile } from '~src/utils/device';
import { SDKIntro } from './SDKIntro/index';
import Dcl from './v3/Dcl';
import Overview from './v3/Overview';
import Team from './v3/Team';
import Footer from './v3/Footer';
import Partners from './v3/Partners';

const HomePage = () => {
  const mobile = isMobile();
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <header>
        <Navbar />
      </header>
      <div style={{ maxWidth: mobile ? '' : '1440px' }} className="mx-auto">
        <section className="mx-auto">
          <Banner />
          {/* <Intro /> */}
          <Dcl />
          <Overview />
          <Data />
          <SDKIntro />
          <Investors />
          <Partners />
          <Team />
        </section>
      </div>
      <footer className="Home_footer flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
