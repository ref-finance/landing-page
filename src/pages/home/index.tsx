import React from 'react';
import Navbar from './v2/Navbar';
import Banner from './v2/Banner';
import Intro from './v2/Intro';
import Data from './v2/Data';
import Investors from './v2/Investors';
import Footer from './v2/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="h-20">
        <Navbar />
      </header>
      <section className="mx-auto">
        <Banner />
        <Intro />
        <Data />
        <Investors />
      </section>
      <footer className="Home_footer flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
