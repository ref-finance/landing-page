import React, { FC, ReactNode, useMemo } from 'react';

export interface GoalsProps {
  title: ReactNode;
  children?: ReactNode[] | ReactNode;
}

const Goals: FC<GoalsProps> = ({ title, children }) => {
  const blocks = useMemo(() => React.Children.toArray(children) ?? [], [children]);

  return (
    <div
      className={`
        w-72 xl:w-80
      `}
    >
      <div
        className={`
          mb-6
          font-poppins font-bold italic text-3xl text-white
          flex
        `}
      >
        {title}
        <div
          className="w-0 h-0 ml-1 border-solid -translate-y-2"
          style={{
            borderWidth: '0 20px 20px 0',
            borderColor: 'transparent #00C6A2 transparent transparent'
          }}
        />
      </div>
      <ul className="grid grid-flow-row auto-cols-auto gap-3">
        {blocks.map((block, index) => {
          return (
            <li
              key={index}
              className={`
                w-full p-4
                font-poppins text-md text-white
                backdrop-filter backdrop-blur-xl rounded-md
                flex justify-start items-center
              `}
              style={{
                minHeight: 56,
                background: '#192B36'
              }}
            >
              {block}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Goals;
