import React, { ReactNode, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

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
};

const Menu = ({ items, show }: Props) => {
  const [visible, setVisible] = useState(false);

  console.log(visible);

  return (
    <ul className={`Menu ${show ? 'flex' : 'hidden'} flex-col mx-4 py-5`}>
      {items.map(({ title, href, children }) => {
        return (
          <li
            key={title}
            className="Menu_item flex justify-center items-center"
            onClick={() => (!!children?.length ? setVisible(true) : window.open(href, '_blank'))}
          >
            <a className="text-lg text-white opacity-50 w-full text-center">{title}</a>
            {visible && (
              <ul className={`Menu_subMenu absolute top-0 z-40 py-5`}>
                <MdArrowBackIosNew
                  className="absolute left-2 top-2 text-lg text-white opacity-50"
                  onClick={() => setVisible(false)}
                />
                {children?.map(({ icon, title, href }) => (
                  <li className="Menu_item flex items-center">
                    <span>{icon}</span>
                    <a href={href} target="_blank" className="ml-12 text-lg text-white opacity-50">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
