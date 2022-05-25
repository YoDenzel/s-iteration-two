import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCities } from '../../shared/types';
import { Loader } from '../loader';
import { TableHeaderWithSearchAndCount } from '../table-header-with-search-and-count/table-header-with-search-and-count';
import {
  CitiesList,
  CityItem,
  Container,
  Title,
  Wrapper,
} from './emotion-components';

export function CitiesListComponent() {
  const [cookie] = useCookies(['access']);
  const [search, setSearch] = useState('');
  const { data, isLoading } = useGetData<TCities>({
    QUERY_KEY: 'cities',
    url: `city`,
    token: cookie.access,
  });

  const filteredData = data?.data?.filter(item => {
    if (
      item?.name
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(search.toLowerCase().replace(/\s/g, ''))
    )
      return item;
  });

  return (
    <Wrapper component="main">
      <Title variant="h1">Список городов</Title>
      <Container component="section">
        {!isLoading && (
          <>
            <TableHeaderWithSearchAndCount
              placeholder="Введите название"
              count={data?.count}
              inputValue={search}
              setInputValue={setSearch}
              title="Количество городов"
            />
            <CitiesList>
              {filteredData?.map(item => (
                <CityItem key={item?.id}>{item?.name}</CityItem>
              ))}
            </CitiesList>
          </>
        )}
        {isLoading && <Loader />}
      </Container>
    </Wrapper>
  );
}
