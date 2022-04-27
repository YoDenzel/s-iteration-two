import { useMutation, useQueryClient } from 'react-query';
import { fetchPostAuth } from '../../api';
import { TPostAuth } from '../../types';

const QUERY_KEY = 'carOrder';

export const usePostAuth = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ password, username }: TPostAuth) =>
      fetchPostAuth({ username, password }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    },
  );
  return mutation;
};
