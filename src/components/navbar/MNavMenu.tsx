import React from 'react';
import { AiOutlineMedium } from 'react-icons/ai';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { RefPrice } from '~src/hooks/home';
import BtnAmount from '../btnAmount';
import Dropdown, { DropdownItem } from '../dropdown';
import { IconBubble } from '../icon';

type Props = {
  data?: RefPrice;
  onOpenMenu?: () => void;
};

const dropdownItems: DropdownItem[] = [
  {
    icon: <FaTwitter />,
    title: 'Twitter',
    href: 'https://twitter.cosm/finance_ref'
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
];

const MNavMenu = ({ data, onOpenMenu }: Props) => {
  return (
    <div className="MNavMenu flex items-center l:hidden">
      <BtnAmount data={data} />
      <HiMenu className="MNavMenu_iconMenu ml-3 text-2xl cursor-pointer" onClick={onOpenMenu} />
    </div>
  );
};

export default MNavMenu;
