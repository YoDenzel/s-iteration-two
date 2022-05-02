import { useQuery, UseQueryResult } from 'react-query';
import { fetchData } from '../../api';

const STALE_TIME = 0;

type TUseGetData = {
  QUERY_KEY: string;
  url: string;
  selectorFunction?: any;
  token: string;
};

export const useGetData = <T>({
  QUERY_KEY,
  url,
  selectorFunction,
  token,
}: TUseGetData): UseQueryResult<T> => {
  const query = useQuery([QUERY_KEY, url], () => fetchData(url, token), {
    select: selectorFunction,
    staleTime: STALE_TIME,
    retry: 0,
  });
  return query;
};
