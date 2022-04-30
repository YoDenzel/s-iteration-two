import { TPostAuth } from '../../types';
import { requestOptions } from '../constants';

export const fetchPostAuth = async ({ password, username }: TPostAuth) => {
  const options = {
    ...requestOptions,
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  const response = await fetch(
    'https://api-factory.simbirsoft1.com/api/auth/login',
    options,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
