import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCarRateTypes } from '../../shared/types';
import { Loader } from '../loader';
import { TableHeaderWithSearchAndCount } from '../table-header-with-search-and-count/table-header-with-search-and-count';
import {
  Container,
  RateTypeItem,
  RateTypesList,
  Title,
  Wrapper,
} from './emotion-components';

export function RateTypesListComponent() {
  const [cookie] = useCookies(['access']);
  const [search, setSearch] = useState('');
  const { data, isLoading } = useGetData<TCarRateTypes>({
    QUERY_KEY: 'rateTypes',
    url: `rateType`,
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
    <Wrapper>
      <Title>Типы тарифов</Title>
      <Container>
        {!isLoading && (
          <>
            <TableHeaderWithSearchAndCount
              inputValue={search}
              setInputValue={setSearch}
              placeholder="Введите название"
              title="Количество типов тарифов"
              count={data?.count}
            />
            <RateTypesList>
              {filteredData?.map(item => (
                <RateTypeItem key={item.id}>{item.name}</RateTypeItem>
              ))}
            </RateTypesList>
          </>
        )}
        {isLoading && <Loader />}
      </Container>
    </Wrapper>
  );
}
