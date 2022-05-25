import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocalStorage } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCarRateTypes } from '../../shared/types';
import { ErrorComponent } from '../error-component';
import { Loader } from '../loader';
import { Empty } from '../orders-list-component/emotion-components';
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
  const [search, setSearch] = useLocalStorage({
    key: 'rateTypesListComponent',
    defaultValue: '',
  });
  const [error, setError] = useState('');
  const { data, isLoading, isError } = useGetData<TCarRateTypes>({
    QUERY_KEY: 'rateTypes',
    url: `rateType`,
    token: cookie.access,
    setErrorStatus: setError,
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
    <>
      {!isError && (
        <Wrapper>
          <Title>Типы тарифов</Title>
          <Container>
            {!isLoading && (
              <>
                <TableHeaderWithSearchAndCount
                  inputValue={search}
                  setInputValue={setSearch}
                  placeholder="Введите тариф"
                  title="Количество типов тарифов"
                  count={data?.count}
                />
                {filteredData?.length !== 0 && (
                  <RateTypesList>
                    {filteredData?.map(item => (
                      <RateTypeItem key={item?.id}>{item?.name}</RateTypeItem>
                    ))}
                  </RateTypesList>
                )}
                {filteredData?.length === 0 && <Empty>Ничего не найдено</Empty>}
              </>
            )}
            {isLoading && <Loader />}
          </Container>
        </Wrapper>
      )}
      {isError && (
        <ErrorComponent
          reloadButtonClickhandler={() => window.location.reload()}
          errorCodeStatus={error}
        />
      )}
    </>
  );
}
