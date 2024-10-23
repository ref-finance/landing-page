import React, { useState } from 'react';
import {
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
  FooterIcon1Hover,
  FooterIcon2Hover,
  FooterIcon3Hover,
  FooterIcon4Hover,
  FooterIcon5Hover,
  HeadWiki
} from '~src/components/layoutIcon/Icon';
const LinkMobile = (props: any) => {
  return (
    <div className={`flex items-center ${props.className}`}>
      <FooterIconA />

      <FooterIconB />

      <FooterIconC />

      <FooterIconD />

      <FooterIconE />

      <div className="w-5 h-5 frcc ml-2">
        <FooterIconF />
      </div>
    </div>
  );
};

export default LinkMobile;

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
      className="cursor-pointer text-white drop-shadow-2xl  w-full h-full"
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
      className="cursor-pointer text-white drop-shadow-2xl w-full h-full"
    />
  );
}
function FooterIconC() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://discord.gg/rsMyJfHQx9');
  }
  return (
    <FooterIcon3Hover
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-white drop-shadow-2xl w-full h-full"
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
      className="cursor-pointer text-white drop-shadow-2xl w-full h-full"
    />
  );
}

function FooterIconE() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://form.typeform.com/to/onOPhJ6Y?typeform-source=www.ref.finance');
  }
  return (
    <FooterIcon5Hover
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-white drop-shadow-2xl  w-full h-full"
    />
  );
}

function FooterIconF() {
  const [hoverLogo, setHoverLogo] = useState(false);
  function go() {
    window.open('https://iq.wiki/wiki/ref-finance/');
  }
  return (
    <HeadWiki
      onMouseOver={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
      onClick={go}
      hoverLogo={hoverLogo}
      className="cursor-pointer text-white drop-shadow-2xl"
    />
  );
}
