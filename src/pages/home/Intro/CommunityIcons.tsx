import React, { FC, ReactNode } from 'react';
import { FaDiscord, FaMedium, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

interface CommunityAnchorProps {
  icon: ReactNode;
  label?: string;
  href?: string;
}

const CommunityAnchor: FC<CommunityAnchorProps> = ({ icon, label = '', href = '' }) => {
  return (
    <a className="text-white-gray hover:text-white" href={href} aria-label={label} target="_blank">
      {icon}
    </a>
  );
};

const Community = () => {
  return (
    <div className="s:order-first mb-16 s:mb-12 mt-9 max-w-sm grid grid-flow-col s:justify-items-center l:justify-items-start gap-12 s:gap-7">
      <CommunityAnchor icon={<FaTwitter size={30} />} label="Twitter" href="https://twitter.com/finance_ref" />
      <CommunityAnchor icon={<FaTelegramPlane size={30} />} label="Telegram" href="https://t.me/ref_finance" />
      <CommunityAnchor icon={<FaDiscord size={30} />} label="Discord" href="https://discord.gg/SJBGcfMxJz" />
      <CommunityAnchor icon={<FaMedium size={30} />} label="Medium" href="https://ref-finance.medium.com" />
    </div>
  );
};

export default Community;
