import { AiOutlineMedium } from 'react-icons/ai';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { MenuItem } from '../menu';

export const menuItems: MenuItem[] = [
  {
    title: 'Docs',
    href: 'https://guide.ref.finance'
  },
  {
    title: 'Analytics',
    href: 'https://stats.ref.finance'
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
