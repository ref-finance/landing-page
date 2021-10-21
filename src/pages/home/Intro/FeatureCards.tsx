import React, { FC, ReactNode, useMemo } from 'react';
import { IconAirdrop, IconEarn, IconSwap, IconTrade } from '~src/components/icon';

interface FeatureCardProps {
  index: number;
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({ index, icon, title, description }) => {
  const [iconStartIndex, contentStartIndex] = useMemo(() => {
    const isOddRow = (index & 1) === 0;
    if (isOddRow) {
      return [1, 2];
    } else {
      return [3, 1];
    }
  }, [index]);

  return (
    <li
      className={`
        w-auto xl:w-56 s:min-w-96 mx-2 my-5
        flex flex-col
        s:grid s:auto-rows-min s:auto-cols-auto s:gap-5
      `}
    >
      <span
        className={`
          mx-auto l:h-32 s:h-24
          s:row-span-full s:col-start-${iconStartIndex}
        `}
      >
        {icon}
      </span>
      <div
        className={`
          s:col-start-${contentStartIndex} s:col-span-2
          flex flex-col justify-start
        `}
      >
        <div
          className={`
          font-poppins font-bold italic text-2xl xl:text-3xl s:text-xl text-white text-left
          w-full mb-1 l:mt-4 s:mt-2 px-0
        `}
        >
          {title}
        </div>
        <span
          className={`
          w-full l:mt-4 font-poppins text-sm text-white-gray
        `}
        >
          {description}
        </span>
      </div>
    </li>
  );
};

const FeatureCards = () => {
  return (
    <ul
      className={`
        xl:px-32 lg:px-20 md:px-12 sm:px-8
        grid
          l:grid-cols-4 l:grid-rows-1 l:gap-5
          s:grid-cols-1 s:auto-rows-min s:gap-2
      `}
    >
      <FeatureCard
        index={0}
        icon={<IconSwap />}
        title={
          <>
            Swap with
            <br />
            low fee
          </>
        }
        description="A swap or a typical transaction on NEAR only costs less than $0.01 for network transaction fee."
      />
      <FeatureCard
        index={1}
        icon={<IconTrade />}
        title={
          <>
            Trade faster
            <br />
            high efficacy
          </>
        }
        description={
          "Close to centralized service trading experience with less than 2 seconds network transaction finality."
        }
      />
      <FeatureCard
        index={2}
        icon={<IconEarn />}
        title={
          <>
            Earn more
            <br />
            multi-rewards
          </>
        }
        description="Ref allows each liquidty pool to host up to 16 different farms at the same time to max token exposure to users."
      />
      <FeatureCard
        index={3}
        icon={<IconAirdrop />}
        title={
          <>
            Airdrop
            <br />
            earn rewards
          </>
        }
        description="..."
      />
    </ul>
  );
};

export default FeatureCards;
