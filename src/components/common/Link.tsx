import React, { useState } from 'react';
import {
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
  FooterIcon1Hover,
  FooterIcon2Hover,
  FooterIcon3Hover,
  FooterIcon4Hover
} from '~src/components/layoutIcon/Icon';
const Link = (props: any) => {
  return (
    <div className={`flex items-center ${props.className}`}>
      <FooterIconA />
      <FooterIconB />
      <FooterIconC />
      <FooterIconD />
    </div>
  );
};

export default Link;

function FooterIconA() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://twitter.com/finance_ref');
  }
  return (
    <FooterIcon1Hover
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-opacity80White drop-shadow-2xl hover:text-hightGreenColor"
    />
  );
}
function FooterIconB() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://t.me/ref_finance');
  }
  return (
    <FooterIcon2Hover
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-opacity80White drop-shadow-2xl hover:text-hightGreenColor lg:ml-1"
    />
  );
}
function FooterIconC() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://discord.com/invite/SJBGcfMxJz');
  }
  return (
    <FooterIcon3Hover
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-opacity80White drop-shadow-2xl hover:text-hightGreenColor lg:ml-1"
    />
  );
}
function FooterIconD() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://ref-finance.medium.com/');
  }
  return (
    <FooterIcon4Hover
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-opacity80White drop-shadow-2xl hover:text-hightGreenColor lg:ml-1"
    />
  );
}
