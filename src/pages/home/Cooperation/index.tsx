import React from 'react';
import Cards from './Cards';

import './index.scss';

const Cooperation = () => {
  return (
    <div className="mt-24 w-full l:mt-44">
      <div className="flex flex-col items-center">
        <div className="font-poppins font-bold text-6xl italic text-white">Partnerships</div>
        <div className="mt-5 font-poppins font-bold text-2xl italic text-white">
          Many leading projects are already collaborating with Ref.finance,
          <br />
          exploring the next steps for unlocking these exciting benefits!
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Cooperation;
