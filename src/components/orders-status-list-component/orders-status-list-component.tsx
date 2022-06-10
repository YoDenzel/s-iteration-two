import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocalStorage } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TOrderStatus } from '../../shared/types';
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

export function OrdersStatusListComponent() {
  const [cookie] = useCookies(['access']);
  const [search, setSearch] = useLocalStorage({
    key: 'orderStatusListComponent',
    defaultValue: '',
  });
  const [error, setError] = useState('');
  const { data, isLoading, isError } = useGetData<TOrderStatus>({
    QUERY_KEY: 'orderStatus',
    url: `orderStatus`,
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
          <Title>Статусы заказов</Title>
          <Container>
            {!isLoading && (
              <>
                <TableHeaderWithSearchAndCount
                  inputValue={search}
                  setInputValue={setSearch}
                  placeholder="Введите статус"
                  title="Количество статусов заказов"
                  count={data?.count}
                />
                {filteredData?.length !== 0 && (
                  <RateTypesList>
                    {filteredData?.map(item => (
                      <RateTypeItem key={item?.id}>
                        {item?.name || 'Нет информации'}
                      </RateTypeItem>
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
