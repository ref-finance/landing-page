import React from 'react';
import { investors } from './const';

const Card = ({ icon }: { icon: JSX.Element }) => {
  return <div className="l:m-auto s:flex s:items-center s:justify-center opacity-60 hover:opacity-100">{icon}</div>;
};

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-y-16 l:gap-x-26 s:gap-x-16 mt-10 s:grid-cols-2 s:transform s:scale-95 investorCard_max_width mx-auto">
      {investors.map(({ icon, title }, i) => {
        return <Card icon={icon} key={title} />;
      })}
    </div>
  );
};

export default Cards;
