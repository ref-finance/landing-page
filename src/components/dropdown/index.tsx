import React, { ReactNode } from 'react';

import './index.scss';

export type DropdownItem = {
  icon: ReactNode;
  title: string;
  href: string;
};

type Props = {
  items: DropdownItem[];
  show?: boolean;
};

const Dropdown = ({ items, show }: Props) => {
  return (
    <ul className={`Dropdown ${show ? 'flex' : 'hidden'} absolute -left-4 top-11  flex-col py-3 rounded-md`}>
      {items.map(({ icon, title, href }) => (
        <li className="flex items-center h-11" key={title}>
          <a href={href} className="Dropdown_item-inner flex items-center px-5" target="_blank">
            <span className="Dropdown_item-icon mr-5 text-white opacity-40">{icon}</span>
            <span className="Dropdown_item-title text-sm text-white opacity-50">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
