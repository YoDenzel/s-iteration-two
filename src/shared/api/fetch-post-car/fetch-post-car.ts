import { requestOptions } from '../constants';

export type TFetchCar = {
  token: string;
  bodyObj: any;
  method: 'POST' | 'PUT';
  url: string;
};

export const fetchPostCar = async ({
  token,
  bodyObj,
  method,
  url,
}: TFetchCar) => {
  const options = {
    ...requestOptions,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
    },
    body: JSON.stringify(bodyObj),
  };

  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/${url}`,
    options,
  );

  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
