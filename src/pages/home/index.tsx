import React from 'react';
import Navbar from './v2/Navbar';
import Banner from './v2/Banner';
import Intro from './v2/Intro';
import Data from './v2/Data';
import Investors from './v2/Investors';
import Footer from './v2/Footer';
import { isMobile } from '~src/utils/device';

const HomePage = () => {
  const mobile = isMobile();
  return (
    <div className="min-h-screen bg-black">
      <header>
        <Navbar />
      </header>
      <div style={{ maxWidth: mobile ? '' : '1440px' }} className="mx-auto overflow-hidden">
        <section className="mx-auto">
          <Banner />
          {/* <Intro /> */}
          <Data />
          <Investors />
        </section>
        <footer className="Home_footer flex justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
