import React from 'react';
import Cards from './Cards';

import './index.scss';

const Cooperation = () => {
  return (
    <div className="mt-24 w-full l:mt-44 flex justify-center">
      <div className="flex flex-col CooperateCard_max_width s:items-center">
        <div className="font-poppins s:px-2 flex font-bold text-6xl s:text-4xl italic text-white">
          Partnerships
          <div
            className="w-0 h-0 ml-1 -mt-3 border-solid -translate-y-10 inline-block"
            style={{
              borderWidth: '0 30px 30px 0',
              borderColor: 'transparent #00C6A2 transparent transparent'
            }}
          />
        </div>
        <div className="mt-5 font-poppins font-bold text-2xl s:px-4 italic text-white">
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
