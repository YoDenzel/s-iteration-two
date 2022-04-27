import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { fetchPostAuth } from '../../api';
import { TPostAuth, TPostAuthResponse } from '../../types';

const QUERY_KEY = 'carOrder';

export const usePostAuth = (): UseMutationResult<
  TPostAuthResponse,
  unknown,
  TPostAuth
> => {
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
