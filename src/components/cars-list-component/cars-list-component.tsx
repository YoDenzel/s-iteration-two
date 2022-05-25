import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import {
  removeFilter,
  setActiveCarObj,
} from '../../redux/cars-active-filter-data/cars-active-filter-data';
import { useAppSelector, usePagination } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCarCategory, TCars, TOptionsArr } from '../../shared/types';
import { CarsInformation } from '../cars-information';
import { ErrorComponent } from '../error-component';
import { Loader } from '../loader';
import { OrderFilterComponent } from '../orders-filter-component';
import { Empty } from '../orders-list-component/emotion-components';
import { PAGE_LIMIT } from './constants';
import { Container, Title, Wrapper } from './emotion-components';

export function CarsListComponent() {
  const [cookie] = useCookies(['access']);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const { data, isLoading, isError } = useGetData<TCars>({
    QUERY_KEY: 'cars',
    url: `car?${filter}&page=${currentPage - 1}&limit=${PAGE_LIMIT}`,
    token: cookie.access,
    setErrorStatus: setError,
  });
  const { data: carCategoryData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'category',
    url: 'category',
    token: cookie.access,
    selectorFunction: (arr: TCarCategory) =>
      arr.data.map(item => ({
        name: item?.name,
        id: item?.id,
      })),
  });
  const { paginationRange, totalPageCount } = usePagination({
    currentPage: currentPage,
    pageSize: PAGE_LIMIT,
    totalCount: data?.count ?? 1,
    siblingCount: 1,
  });
  const activeCarObj = useAppSelector(
    state => state.carsActiveFilterData.activeCarCategoryObj,
  );
  const dispatch = useDispatch();

  const dropdownItemClickhandler = (activeObj: TOptionsArr, index?: number) => {
    dispatch(
      setActiveCarObj({
        activeCarCategoryObj: activeObj,
        id: index,
      }),
    );
  };

  const isNextPage = () => {
    if (currentPage === totalPageCount) return true;
    else return false;
  };

  const isPrevPage = () => {
    if (currentPage === 1) return true;
    else return false;
  };

  const submitHandler = (e: React.FormEvent<HTMLDivElement>) => {
    let filterStr = '';
    e.preventDefault();
    if (activeCarObj)
      setFilter(() => (filterStr += `&categoryId=${activeCarObj.id}`));
  };

  return (
    <>
      {!isError && (
        <Wrapper component="main">
          <Title>Список автомобилей</Title>
          <Container component="section">
            <OrderFilterComponent
              filterDataArr={[
                {
                  title: 'Категории',
                  activeTitle: activeCarObj,
                  data: carCategoryData,
                },
              ]}
              submitHandler={submitHandler}
              cancelButtonClickhandler={() => {
                dispatch(removeFilter());
                setFilter('');
              }}
              dropdownItemClickhandler={dropdownItemClickhandler}
            />
            {isLoading && <Loader />}
            {!isLoading && data?.data.length !== 0 && (
              <CarsInformation
                carsData={data?.data}
                currentPage={currentPage}
                setCurrrentPage={setCurrentPage}
                isNextPage={isNextPage}
                isPrevPage={isPrevPage}
                nextPageClickhandler={() =>
                  setCurrentPage(prevValue => prevValue + 1)
                }
                prevPageClickhandler={() =>
                  setCurrentPage(prevValue => prevValue - 1)
                }
                paginationRange={paginationRange}
              />
            )}
            {data?.data.length === 0 && <Empty>Ничего не найдено</Empty>}
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
