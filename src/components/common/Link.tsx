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
const Link = (props: any) => {
  return (
    <div className={`lg:flex lg:items-center ${props.className}`}>
      <div
        className="lg:mr-9 w-[60px] h-[60px] lg:bg-dark-70 border rounded-full frcc lg:hover:bg-green-10 lg:hover:text-black lg:hover:border-green-10 sm:bg-green-10 sm:text-black"
        style={{ borderColor: 'rgba(255,255,255,.2)' }}
      >
        <FooterIconA />
      </div>
      <div
        className="lg:mr-9 w-[60px] h-[60px] lg:bg-dark-70 border rounded-full frcc lg:hover:bg-green-10 lg:hover:text-black lg:hover:border-green-10 sm:bg-green-10 sm:text-black"
        style={{ borderColor: 'rgba(255,255,255,.2)' }}
      >
        <FooterIconB />
      </div>
      <div
        className="lg:mr-9 w-[60px] h-[60px] lg:bg-dark-70 border rounded-full frcc lg:hover:bg-green-10 lg:hover:text-black lg:hover:border-green-10 sm:bg-green-10 sm:text-black"
        style={{ borderColor: 'rgba(255,255,255,.2)' }}
      >
        <FooterIconC />
      </div>
      <div
        className="lg:mr-9 w-[60px] h-[60px] lg:bg-dark-70 border rounded-full frcc lg:hover:bg-green-10 lg:hover:text-black lg:hover:border-green-10 sm:bg-green-10 sm:text-black"
        style={{ borderColor: 'rgba(255,255,255,.2)' }}
      >
        <FooterIconD />
      </div>
      <div
        className="lg:mr-9 w-[60px] h-[60px] lg:bg-dark-70 border rounded-full frcc lg:hover:bg-green-10 lg:hover:text-black lg:hover:border-green-10 sm:bg-green-10 sm:text-black"
        style={{ borderColor: 'rgba(255,255,255,.2)' }}
      >
        <FooterIconE />
      </div>
      <div
        className="w-[60px] h-[60px] lg:bg-dark-70 border rounded-full frcc lg:hover:bg-green-10 lg:hover:text-black lg:hover:border-green-10 sm:bg-green-10 sm:text-black"
        style={{ borderColor: 'rgba(255,255,255,.2)' }}
      >
        <FooterIconF />
      </div>
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
      className="cursor-pointer lg:text-white sm:text-black drop-shadow-2xl hover:text-black w-full h-full"
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
      className="cursor-pointer lg:text-white sm:text-black drop-shadow-2xl hover:text-black w-full h-full"
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
      className="cursor-pointer lg:text-white sm:text-black drop-shadow-2xl hover:text-black w-full h-full"
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
      className="cursor-pointer lg:text-white sm:text-black drop-shadow-2xl hover:text-black w-full h-full"
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
      className="cursor-pointer lg:text-white sm:text-black drop-shadow-2xl hover:text-black w-full h-full"
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
      className="cursor-pointer lg:text-white sm:text-black drop-shadow-2xl hover:text-black"
    />
  );
}
