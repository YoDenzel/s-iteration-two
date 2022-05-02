import { useCookies } from 'react-cookie';
import { requestOptions } from '../constants';

export const fetchData = async (url: string, token: string) => {
  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/${url}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
