import { useMutation, useQueryClient } from 'react-query';
import { fetchDeleteCar } from '../../api';

const QUERY_KEY = 'cars';

export const useDeleteCarData = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((id: string) => fetchDeleteCar(id), {
    onSettled: () => {
      queryClient.invalidateQueries(QUERY_KEY);
    },
  });
  return mutation;
};
