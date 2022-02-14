import React from 'react';
import { RefPrice } from '~src/hooks/home';
import { IconRef } from '../icon';

type Props = {
  data?: RefPrice;
};

const BtnAmount = ({ data }: Props) => {
  return (
    <div className="rounded-full ml-16 w-28 h-9 border border-mobile relative flex items-center ">
      <div
        className="relative w-9 h-9 rounded-full border border-mobile flex items-center justify-center"
        style={{
          right: '0.5px'
        }}
      >
        <IconRef />
      </div>

      <span className="text-white font-poppins ml-2 text-lg">${data?.price.slice(0, 4)}</span>
    </div>
  );
};

export default BtnAmount;
