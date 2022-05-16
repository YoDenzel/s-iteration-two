import { TFetchGetData } from './types';

export const fetchData = async ({
  token,
  url,
  setErrorStatus,
}: TFetchGetData) => {
  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/${url}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  if (!response.ok) {
    setErrorStatus && setErrorStatus(`${response.status}`);
    throw new Error(response.statusText);
  }
  const data = response.json();
  return data;
};
