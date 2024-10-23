import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthenticationHeaders } from '../utils/signature';

export interface RefPrice {
  price: string;
  token_contract_id: string;
}

export const useRefPrice = () => {
  const [data, setData] = useState<RefPrice>();

  useEffect(() => {
    axios
      .get<RefPrice>('https://api.ref.finance/get-token-price?token_id=token.v2.ref-finance.near', {
        method: 'GET',
        headers: getAuthenticationHeaders('/get-token-price')
      })
      .then(res => {
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
    axios.get<Token[]>('https://api.data-service.ref.finance/overview/top_tokens').then(res => {
      if (res.status === 200) {
        const list = (res.data || []).slice(0, 30);
        const targetList = list.filter(t => {
          if (t.symbol !== 'USN') return true;
        });
        setTokenList((targetList || []).slice(0, 8));
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
    axios
      .get<Record<string, TokenBaseInfo>>('https://api.ref.finance/list-token', {
        method: 'GET',
        headers: getAuthenticationHeaders('/list-token')
      })
      .then(res => {
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
    axios.get<Record<string, string>>('https://api.data-service.ref.finance/api/24h_volume_variation').then(res => {
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
    axios.get<Record<string, string>>('https://api.data-service.ref.finance/api/historical_tvl?period=30').then(res => {
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
  useEffect(() => {
    axios.get<string>('https://api.data-service.ref.finance/api/total_historical_volume').then(res => {
      if (res.status === 200) {
        setTotalHistoricalVolume(res.data);
      } else {
        console.error(res.statusText);
      }
    });
  }, []);

  return totalHistoricalVolume;
};

export interface Token {
  rank: number;
  symbol: string;
  icon?: string;
  amount: string;
  price: string;
  volume24h: string;
  tvl: string;
  token_id: string;
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
