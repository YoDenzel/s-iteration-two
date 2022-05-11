import { TPostAuth } from "../../types";

export const fetchPostAuth = async ({password, username} : TPostAuth) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic MTFkN2M5Zjo0Y2JjZWE5NmRl`,
      'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  const response = await fetch(
    'https://api-factory.simbirsoft1.com/api/auth/login',
    requestOptions,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
