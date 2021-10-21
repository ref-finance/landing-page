import React, { useState } from 'react';
import { AiOutlineMedium } from 'react-icons/ai';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { RefPrice } from '~src/hooks/home';
import BtnAmount from '../btnAmount';
import Dropdown, { DropdownItem } from '../dropdown';
import { IconBubble } from '../icon';
import { MenuItem } from '../menu';

type Props = {
  data?: RefPrice;
};

const dropdownItems: DropdownItem[] = [
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
];

const MNavMenu = ({ data }: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="NavMenu flex items-center s:hidden justify-center">
      {/* <span className="relative inline-flex">
        <IconBubble />
        <span className="NavMenu_iconQuiz-text absolute left-3">Quiz</span>
      </span> */}
      <a href="https://guide.ref.finance" target="_blank" className="NavMenu_item relative ml-10">
        <span>Docs</span>
      </a>
      <a href="https://sodaki.com/" target="_blank" className="NavMenu_item relative ml-10">
        <span>Analytics</span>
      </a>
      <a
        onClick={() => void 0}
        className="NavMenu_item relative ml-10"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <span>Community</span>
        <Dropdown items={dropdownItems} show={isHover} />
      </a>
      <button
        className="NavMenu_btnLaunch ml-8 h-10 text-base font-bold text-white rounded"
        onClick={() => window.open('https://app.ref.finance', '_blank')}
      >
        Launch APP
      </button>
      <BtnAmount data={data} />
    </div>
  );
};

export default MNavMenu;
