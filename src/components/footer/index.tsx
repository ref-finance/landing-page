import React from 'react';
import FooterMenus from './FooterMenus';
import FooterBrand from './FooterBrand';

import './index.scss';

const Footer = () => {
  return (
    <footer
      className={`
        max-width
        s:px-8 py-24
        l:flex l:justify-between
        s:grid s:grid-cols-3 s:justify-items-center s:text-center
      `}
    >
      <FooterBrand />
      <FooterMenus />
    </footer>
  );
};

export default Footer;
