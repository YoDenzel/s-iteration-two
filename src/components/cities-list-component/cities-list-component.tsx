import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { Icons } from '../../shared/icons';
import { TCities } from '../../shared/types';
import { Loader } from '../loader';
import {
  CitiesCountBlock,
  CitiesCountNumber,
  CitiesCountTitle,
  CitiesList,
  CityItem,
  Container,
  Loop,
  SearchBlock,
  SearchInput,
  TableHeader,
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
        .replace('/s/g', '')
        .includes(search.toLowerCase().replace('/s/g', ''))
    )
      return item;
  });

  return (
    <Wrapper component="main">
      <Title variant="h1">Список городов</Title>
      <Container component="section">
        {!isLoading && (
          <>
            <TableHeader>
              <CitiesCountBlock component="article">
                <CitiesCountTitle variant="h2">
                  Количество городов:
                </CitiesCountTitle>
                <CitiesCountNumber variant="h2">
                  {data?.count}
                </CitiesCountNumber>
              </CitiesCountBlock>
              <SearchBlock>
                <Loop>
                  <Icons.SearchLoop />
                </Loop>
                <SearchInput
                  placeholder="Введите название"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                />
              </SearchBlock>
            </TableHeader>
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
