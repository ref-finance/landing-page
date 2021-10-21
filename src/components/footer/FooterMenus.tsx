import React, { FC, ReactNode } from 'react';

interface MenuItemProps {
  label: string;
  href?: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, href }) => {
  return (
    <li className="mb-5 text-white opacity-50 font-poppins text-base s:text-sm hover:opacity-100 s:col-span-1">
      <a href={href} target="_blank">{label}</a>
    </li>
  );
};

interface MenuProps {
  label: string;
  children?: ReactNode[] | ReactNode;
}

const Menu: FC<MenuProps> = ({ label, children }) => {
  return (
    <ul className="flex flex-col">
      <li className="mb-3 font-poppins text-lg s:text-sm text-white s:text-mobile">{label}</li>
      <>{children}</>
    </ul>
  );
};

const FooterMenus = () => {
  return (
    <>
      <Menu label="PROJECT">
        <MenuItem label="Swap" href="https://app.ref.finance" />
        <MenuItem label="Farm" href="https://app.ref.finance/farms" />
      </Menu>
      <Menu label="ABOUT">
        <MenuItem label="DOC" href="https://guide.ref.finance" />
        <MenuItem label="Forum" href="https://gov.ref.finance" />
        <MenuItem label="Medium" href=" https://ref-finance.medium.com" />
      </Menu>
      <Menu label="COMMUNITY">
        <MenuItem label="Twitter" href="https://twitter.com/finance_ref" />
        <MenuItem label="Discord" href="https://t.me/ref_finance" />
        <MenuItem label="Telegram" href="https://discord.gg/SJBGcfMxJz" />
      </Menu>
    </>
  );
};

export default FooterMenus;
