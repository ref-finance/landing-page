import React, { useState } from 'react';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiOutlineMedium } from 'react-icons/ai';
import NavMenu from './NavMeun';
import MNavMenu from './MNavMenu';
import { Logo, MLogo } from '../pic';
import Menu, { MenuItem } from '../menu';
import { useRefPrice } from '~src/hooks/home';

import './index.scss';

const menuItems: MenuItem[] = [
  {
    title: 'Docs',
    href: 'https://guide.ref.finance'
  },
  {
    title: 'Analytics',
    href: 'https://sodaki.com'
  },
  {
    title: 'Community',
    href: '',
    children: [
      {
        icon: <FaTwitter />,
        title: 'Twitter',
        href: 'https://twitter.com/finance_ref'
      },
      {
        icon: <FaTelegramPlane />,
        title: 'Telegram',
        href: 'https://t.me/ref_finance'
      },
      {
        icon: <FaDiscord />,
        title: 'Discord',
        href: 'https://discord.gg/SJBGcfMxJz'
      },
      {
        icon: <AiOutlineMedium />,
        title: 'Medium',
        href: 'https://ref-finance.medium.com/'
      }
    ]
  },
  {
    title: 'Launch App',
    href: 'https://app.ref.finance'
  }
];

const Navbar = () => {
  const { data } = useRefPrice();
  const [visible, setVisible] = useState(false);

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
        <div className="Navbar_menu absolute top-20 w-full h-screen z-30 l:hidden">
          <Menu items={menuItems} show={visible} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
