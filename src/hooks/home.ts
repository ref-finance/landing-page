import { useEffect, useState } from 'react';
import axios from 'axios';

export interface RefPrice {
  price: string;
  token_contract_id: string;
}

export const useRefPrice = () => {
  const [data, setData] = useState<RefPrice>();

  useEffect(() => {
    axios.get<RefPrice>('https://indexer.ref.finance/get-token-price?token_id=token.v2.ref-finance.near').then(res => {
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return { data };
};

export const useTokenList = () => {
  const [tokenList, setTokenList] = useState<Token[]>([]);

  useEffect(() => {
    axios.get<Token[]>('https://api.stats.ref.finance/api/top-tokens').then(res => {
      if (res.status === 200) {
        setTokenList((res.data || []).slice(0, 8));
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return tokenList;
};
export const useTokenBaeInfoList = () => {
  const [tokenBaseInfMap, setTokenBaseInfMap] = useState<Record<string, TokenBaseInfo>>({});

  useEffect(() => {
    axios.get<Record<string, TokenBaseInfo>>('https://indexer.ref.finance/list-token').then(res => {
      if (res.status === 200) {
        setTokenBaseInfMap(res.data);
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return tokenBaseInfMap;
};

export const use24hVolumeVariation = () => {
  const [dayVolumeVariation, setDayVolumeVariation] = useState<Record<string, string>>({});

  useEffect(() => {
    axios.get<Record<string, string>>('https://api.stats.ref.finance/api/24h-volume-variation').then(res => {
      if (res.status === 200) {
        setDayVolumeVariation(res.data);
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return dayVolumeVariation;
};

export const useHistoricalTvl = () => {
  const [historicalTvl, setHistoricalTvl] = useState<Record<string, string>>({});

  useEffect(() => {
    axios.get<Record<string, string>>('https://api.stats.ref.finance/api/historical-tvl?period=30').then(res => {
      if (res.status === 200) {
        setHistoricalTvl(res.data);
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return historicalTvl;
};
export const useTotalHistoricalVolume = () => {
  const [totalHistoricalVolume, setTotalHistoricalVolume] = useState<string>('');
  const linkMap = {
    prd: 'https://api.stats.ref.finance/api/total-historical-volume',
    dev: 'https://api.dev.stats.ref.finance/api/total-historical-volume'
  };
  const env = getEnv();
  useEffect(() => {
    axios.get<string>(linkMap[env]).then(res => {
      if (res.status === 200) {
        setTotalHistoricalVolume(res.data);
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return totalHistoricalVolume;
};

function getEnv() {
  if (location.hostname == 'www.ref.finance') {
    return 'prd';
  } else {
    return 'dev';
  }
}

export interface Token {
  rank: number;
  symbol: string;
  icon?: string;
  amount: string;
  price: string;
  volume24h: string;
  tvl: string;
}

export interface TokenBaseInfo {
  decimals: number;
  icon: string;
  name: string;
  reference: string;
  reference_hash: string;
  spec: string;
  symbol: string;
}
