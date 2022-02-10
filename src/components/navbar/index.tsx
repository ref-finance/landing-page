import React, { useState } from 'react';
import NavMenu from './NavMeun';
import MNavMenu from './MNavMenu';
import { Logo, MLogo } from '../pic';
import Menu, { MenuItem } from '../menu';
import { menuItems } from './const';
import { useRefPrice } from '~src/hooks/home';

import './index.scss';

const Navbar = () => {
  const { data } = useRefPrice();
  const [visible, setVisible] = useState(false);
  const [curMenuItems, setCurMenuItems] = useState(menuItems);

  const onClickMenuItem = (items: MenuItem[]) => {
    setCurMenuItems(items);
  };

  return (
    <nav className="Navbar fixed top-0 flex items-center w-full h-20 rounded z-50">
      <div className="flex justify-between items-center px-6 w-full s:pl-6 s:pr-4">
        <a className="s:hidden ml-52 flex items-center" href="//app.ref.finance/" target="_blank">
          <Logo />
        </a>
        <a className="l:hidden" href="//app.ref.finance/" target="_blank">
          <MLogo />
        </a>
        <NavMenu data={data} />
        <MNavMenu data={data} onOpenMenu={() => setVisible(!visible)} />
      </div>
      {visible && (
        <div
          className="Navbar_menu absolute top-20 w-full h-screen z-30 l:hidden"
          onClick={e => {
            e.stopPropagation();
            setVisible(false);
          }}
        >
          <Menu items={curMenuItems} show={visible} onClickMenuItem={onClickMenuItem} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
