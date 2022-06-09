import { requestOptions } from '../constants';

export const fetchDeleteCar = async (id: string) => {
  const options = { ...requestOptions, method: 'DELETE', body: undefined };

  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/car/${id}`,
    options,
  );

  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
