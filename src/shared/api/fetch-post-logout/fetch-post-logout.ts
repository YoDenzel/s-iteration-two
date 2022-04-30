import { requestOptions } from '../constants';

export const fetchPostLogout = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  const options = {
    ...requestOptions,
    headers: {
      ...requestOptions.headers,
      Authorization: `Bearer ${accessToken}`,
    },
    body: null,
  };

  const response = await fetch(
    'https://api-factory.simbirsoft1.com/api/auth/logout',
    options,
  );
  if (!response.ok) throw new Error(response.statusText);
  return response;
};
