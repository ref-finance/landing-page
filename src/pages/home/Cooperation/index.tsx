import React from 'react';
import Cards from './Cards';

import './index.scss';

const Cooperation = () => {
  const isMobile = window.screen.width < 1024;
  return (
    <div className="mt-24 w-full l:mt-44 flex justify-center">
      <div className="flex flex-col CooperateCard_max_width s:items-center">
        <div className="font-poppins inline-flex flex-col font-bold text-6xl s:text-4xl s:mx-auto s:px-10  text-white">
          <div className="italic">
            Partnerships
            <div
              className="w-0 h-0 ml-1 -mt-3 border-solid -translate-y-10 inline-block s:hidden relative bottom-5"
              style={{
                borderWidth: '0 30px 30px 0',
                borderColor: 'transparent #00C6A2 transparent transparent'
              }}
            />
          </div>

          <div className="mt-5 font-poppins text-2xl  text-white s:text-base s:italic">
            Many leading projects are already collaborating with Ref.finance, exploring
            {isMobile ? null : <br />}
            the next steps for unlocking these exciting benefits!
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Cooperation;
