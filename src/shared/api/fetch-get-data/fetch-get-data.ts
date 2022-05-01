import {requestOptions} from '../constants'

export const fetchData = async (url: string) => {   
    const options = {...requestOptions, body: null, header: {
        ...requestOptions.headers,
        Authorization: 'Bearer 52efbe08228671240494f537f2486bc109a637b4'
    } }

  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/${url}`,
    options
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
