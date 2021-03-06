import React, { FC, ReactNode } from 'react';

interface MenuItemProps {
  label: string;
  href?: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, href }) => {
  return (
    <li className="mb-5 text-white opacity-50 font-poppins text-base s:text-sm hover:opacity-100 s:col-span-1">
      <a href={href} target="_blank">
        {label}
      </a>
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
      <li className="mb-3 font-poppins text-lg s:text-sm text-white ">{label}</li>
      <>{children}</>
    </ul>
  );
};

const FooterMenus = () => {
  return (
    <>
      <Menu label="PRODUCT">
        <MenuItem label="Swap" href="https://app.ref.finance" />
        <MenuItem label="Farm" href="https://app.ref.finance/farms" />
      </Menu>
      <Menu label="ABOUT">
        <MenuItem label="Docs" href="https://guide.ref.finance" />
        <MenuItem label="Forum" href="https://gov.ref.finance" />
      </Menu>
      <Menu label="COMMUNITY">
        <MenuItem label="Twitter" href="https://twitter.com/finance_ref" />
        <MenuItem label="Telegram" href="https://t.me/ref_finance" />
        <MenuItem label="Discord" href="https://discord.gg/SJBGcfMxJz" />
        <MenuItem label="Medium" href=" https://ref-finance.medium.com" />
      </Menu>
    </>
  );
};

export default FooterMenus;
