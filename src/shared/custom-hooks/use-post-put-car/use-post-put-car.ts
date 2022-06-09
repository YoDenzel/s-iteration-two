import { useMutation, useQueryClient } from 'react-query';
import { fetchPostCar } from '../../api';
import { TCarsData } from '../../types';

const QUERY_KEY = 'cars';

export type TUsePostPutCar = {
  url: string;
  method: 'POST' | 'PUT';
  token: string;
};

export const usePostPutCar = ({ method, token, url }: TUsePostPutCar) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ bodyObj }: { bodyObj: any }) =>
      fetchPostCar({ bodyObj, method, token, url }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    },
  );
  return mutation;
};
