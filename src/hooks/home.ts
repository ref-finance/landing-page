import { useEffect, useState } from 'react';
import axios from 'axios';

export interface RefPrice {
  price: string;
  token_contract_id: string;
}

export const useRefPrice = () => {
  const [data, setData] = useState<RefPrice>();

  useEffect(() => {
    axios
      .get<RefPrice>('https://indexer.ref-finance.net/get-token-price?token_id=token.v2.ref-finance.near')
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
