import React, { useState } from 'react';
import { openInNewTab } from '~src/utils/openNewTab';

type IconLinkProps = {
  IconComponent: React.ElementType;
  href: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ IconComponent, href }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    openInNewTab(href);
    setClicked(true);
  };
  
  const handleMouseLeave = () => {
    setClicked(false);
  };

  const divClass = `w-10 h-10 bg-opacity-50 rounded-3xl bg-primary flex justify-center items-center mr-6 cursor-pointer  ${
    clicked ? '' : 'hover:bg-opacity-100'
  }`;

  return (
    <div className={divClass} onClick={handleClick} onMouseLeave={handleMouseLeave}>
      <IconComponent />
    </div>
  );
};
