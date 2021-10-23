import React, { ReactNode, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { menuItems } from '../navbar/const';

import './index.scss';

export type MenuItem = {
  title: string;
  href: string;
  icon?: ReactNode;
  children?: MenuItem[];
};

type Props = {
  items: MenuItem[];
  show?: boolean;
  onClickMenuItem?: (items: MenuItem[]) => void;
};

const Menu = ({ items, show, onClickMenuItem }: Props) => {
  const hasSubMenu = items.some(({ children }) => !!children?.length);

  console.log(items);

  return (
    <ul className={`Menu ${show ? 'flex' : 'hidden'} flex-col mx-4 py-5`}>
      {!hasSubMenu && (
        <MdArrowBackIosNew
          className="absolute left-6 top-2 text-lg text-white opacity-50"
          onClick={() => onClickMenuItem?.(menuItems)}
        />
      )}
      {items.map(({ title, href, children }) => {
        return (
          <li
            key={title}
            className="Menu_item flex justify-center items-center"
            onClick={() => {
              !!children?.length ? onClickMenuItem?.(children) : window.open(href, '_blank');
            }}
          >
            <a className="text-lg text-white opacity-50 w-full text-center">{title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
