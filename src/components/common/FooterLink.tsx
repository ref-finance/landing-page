import React from 'react';
import { openInNewTab } from '~src/utils/openNewTab';

type FooterLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    openInNewTab(href);
  };
  return (
    <div className="opacity-50 mb-4 hover:text-hightGreenColor hover:opacity-100 cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
};
