import { requestOptions } from '../constants';

export const fetchDeleteCar = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => {
  const options = {
    ...requestOptions,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
    },
    body: undefined,
  };

  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/car/${id}`,
    options,
  );

  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
