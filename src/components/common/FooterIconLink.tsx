import React from 'react';
import { openInNewTab } from '~src/utils/openNewTab';

type IconLinkProps = {
  IconComponent: React.ElementType;
  href: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ IconComponent, href }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    openInNewTab(href);
  };

  return (
    <div
      className="w-10 h-10 bg-opacity-50 rounded-3xl bg-primary hover:bg-opacity-100 flex justify-center items-center mr-6 cursor-pointer"
      onClick={handleClick}
    >
      <IconComponent />
    </div>
  );
};
