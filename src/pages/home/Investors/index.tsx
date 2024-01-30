import React from 'react';
import Cards from './Cards';

import './index.scss';

const Investors = () => {
  return (
    <div className="mt-24 w-full l:mt-44 flex justify-center s:w-full">
      <div className="flex flex-col Investors_max_width s:w-full l:items-center">
        <div className="font-poppins l:inline-flex l:flex-col gotham_font_bold  text-6xl s:text-4xl s:px-10 investorCard_title_max_width text-white ">
          <div className="italic">
            Investors
            <div
              className="w-0 h-0 ml-1 -mt-3 border-solid -translate-y-10 inline-block s:hidden relative bottom-5"
              style={{
                borderWidth: '0 30px 30px 0',
                borderColor: 'transparent #00C6A2 transparent transparent'
              }}
            />
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
};
export default Investors;
