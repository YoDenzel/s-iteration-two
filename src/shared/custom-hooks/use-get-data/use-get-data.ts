import { useQuery, UseQueryResult } from 'react-query';
import { fetchData } from '../../api';

const STALE_TIME = 86000;

type TUseGetData = {
  QUERY_KEY: string;
  url: string;
  selectorFunction?: any;
  token: string;
  setErrorStatus?: (v: string) => void;
};

export const useGetData = <T>({
  QUERY_KEY,
  url,
  selectorFunction,
  token,
  setErrorStatus,
}: TUseGetData): UseQueryResult<T> => {
  const query = useQuery(
    [QUERY_KEY, url],
    () =>
      fetchData({
        url: url,
        token: token,
        setErrorStatus: setErrorStatus,
      }),
    {
      select: selectorFunction,
      staleTime: STALE_TIME,
      retry: 0,
    },
  );
  return query;
};
