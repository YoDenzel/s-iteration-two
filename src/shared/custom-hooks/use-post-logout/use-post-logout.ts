import { useMutation, useQueryClient } from 'react-query';
import { fetchPostLogout } from '../../api';

const QUERY_KEY = 'logout';

export const usePostLogout = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ accessToken }: { accessToken: string }) =>
      fetchPostLogout({ accessToken }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    },
  );
  return mutation;
};
