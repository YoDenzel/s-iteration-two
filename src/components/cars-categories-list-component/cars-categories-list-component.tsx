import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocalStorage } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCarCategory } from '../../shared/types';
import { ErrorComponent } from '../error-component';
import { Loader } from '../loader';
import { Empty } from '../orders-list-component/emotion-components';
import { TableHeaderWithSearchAndCount } from '../table-header-with-search-and-count/table-header-with-search-and-count';
import { cols } from './constants';
import {
  CarsCategoriesInformationContainer,
  Container,
  TableCategoryInfo,
  TableCol,
  TableCols,
  TableItem,
  Title,
  Wrapper,
} from './emotion-components';

export function CarsCategoriesListComponent() {
  const [cookie] = useCookies(['access']);
  const [search, setSearch] = useLocalStorage({
    defaultValue: '',
    key: 'carsCategoriesListComponent',
  });
  const [error, setError] = useState('');
  const { data, isLoading, isError } = useGetData<TCarCategory>({
    QUERY_KEY: 'category',
    url: 'category',
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
          <Title>Категории автомобилей</Title>
          <Container>
            {!isLoading && (
              <>
                <TableHeaderWithSearchAndCount
                  placeholder="Введите категорию"
                  inputValue={search}
                  setInputValue={setSearch}
                  count={data?.count}
                  title="Количество категорий"
                />
                {filteredData?.length !== 0 && (
                  <CarsCategoriesInformationContainer>
                    <TableCols>
                      {cols.map((item, index) => (
                        <TableCol key={item + index}>{item}</TableCol>
                      ))}
                    </TableCols>
                    {filteredData?.map(item => (
                      <TableItem key={item?.id}>
                        <TableCategoryInfo>
                          {item?.name || 'Нет информации'}
                        </TableCategoryInfo>
                        <TableCategoryInfo>
                          {item?.description || 'Нет информаци'}
                        </TableCategoryInfo>
                      </TableItem>
                    ))}
                    {isLoading && <Loader />}
                  </CarsCategoriesInformationContainer>
                )}
                {filteredData?.length === 0 && <Empty>Ничего не найдено</Empty>}
              </>
            )}
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
