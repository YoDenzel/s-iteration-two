import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCities } from '../../shared/types';
import {
  CitiesCountBlock,
  CitiesCountNumber,
  CitiesCountTitle,
  CitiesList,
  CityItem,
  Container,
  Title,
  Wrapper,
} from './emotion-components';

export function CitiesListComponent() {
  const [cookie] = useCookies(['access']);
  const { data, isLoading } = useGetData<TCities>({
    QUERY_KEY: 'cars',
    url: `city`,
    token: cookie.access,
  });
  return (
    <Wrapper component="main">
      <Title>Список городов</Title>
      <Container component="section">
        <CitiesCountBlock component="article">
          <CitiesCountTitle variant="h2">Количество городов: </CitiesCountTitle>
          <CitiesCountNumber variant="h2">{data?.count}</CitiesCountNumber>
        </CitiesCountBlock>
        <CitiesList>
          {data?.data.map(item => (
            <CityItem key={item.id}>{item.name}</CityItem>
          ))}
        </CitiesList>
      </Container>
    </Wrapper>
  );
}
