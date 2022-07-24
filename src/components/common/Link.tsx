import React from 'react';
import { FooterIcon1, FooterIcon2, FooterIcon3, FooterIcon4 } from '~src/components/layoutIcon/Icon';
const Link = () => {
  return (
    <div className="flex items-center">
      <FooterIcon1
        className="cursor-pointer text-opacity80White hover:text-white"
        onClick={() => {
          window.open('https://twitter.com/finance_ref');
        }}
      />
      <FooterIcon2
        className="ml-7 cursor-pointer text-opacity80White hover:text-white"
        onClick={() => {
          window.open('https://t.me/ref_finance');
        }}
      />
      <FooterIcon3
        className="ml-7 cursor-pointer text-opacity80White hover:text-white"
        onClick={() => {
          window.open('https://discord.com/invite/SJBGcfMxJz');
        }}
      />
      <FooterIcon4
        className="ml-7 cursor-pointer text-opacity80White hover:text-white"
        onClick={() => {
          window.open('https://ref-finance.medium.com/');
        }}
      />
    </div>
  );
};

export default Link;
