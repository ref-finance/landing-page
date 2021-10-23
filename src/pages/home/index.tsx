import React from 'react';
import Navbar from '~src/components/navbar';
import Footer from '~src/components/footer';
import { Coins, MCoins } from '~src/components/conins';
import Banner from './Banner';
import Intro from './Intro';
import Roadmap from './Roadmap';
import Cooperation from './Cooperation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="h-20">
        <Navbar />
      </header>
      <section className="mx-auto">
        <Banner />
        <Intro />
        <Roadmap />
        <Cooperation />
      </section>
      <footer className="Home_footer flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
