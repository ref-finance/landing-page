import React from 'react';
import DataCards from './DataCards';
import FeatureCards from './FeatureCards';
import CommunityIcons from './CommunityIcons';

const Intro = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="l:hidden">
        <DataCards />
      </div>
      <FeatureCards />
    </div>
  );
};

export default Intro;
