import { useMutation, useQueryClient } from 'react-query';
import { fetchDeleteCar } from '../../api';

const QUERY_KEY = 'cars';

export const useDeleteCarData = ({ token }: { token: string }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ id }: { id: string }) => fetchDeleteCar({ id, token }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    },
  );
  return mutation;
};
