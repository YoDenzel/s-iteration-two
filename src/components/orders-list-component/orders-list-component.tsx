import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
  usePagination,
} from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import {
  TCarOrder,
  TCarRate,
  TCars,
  TCities,
  TOptionsArr,
  TOrderStatus,
} from '../../shared/types';
import { OrderInformation } from '../order-information';
import { OrderFilterComponent } from '../orders-filter-component';
import { Container, Empty, Title, Wrapper } from './emotion-components';
import { setCheckboxesStatus } from '../../redux/car-order-checkbox-data/car-order-checkbox-data';
import { Loader } from '../loader';
import { filterDataArr, PAGE_LIMIT } from './constants';
import { setActiveObj } from '../../redux/order-active-filter-data/order-active-filter-data';
import { ErrorComponent } from '../error-component';

export function OrdersListComponent() {
  const { activeCarObj, activeCitiesObj, activeRateObj, activeStatusObj } =
    useAppSelector(state => ({
      activeRateObj: state.orderActiveFilterData.activeRateObj,
      activeCarObj: state.orderActiveFilterData.activeCarObj,
      activeStatusObj: state.orderActiveFilterData.activeStatusObj,
      activeCitiesObj: state.orderActiveFilterData.activeCitiesObj,
    }));
  const [filter, setFilter] = useLocalStorage({
    defaultValue: '',
    key: 'orderListComponent',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [cookie] = useCookies(['access']);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetData<TCarOrder>({
    QUERY_KEY: 'order',
    url: `order?${filter}&page=${currentPage - 1}&limit=${PAGE_LIMIT}`,
    token: cookie.access,
    setErrorStatus: setError,
  });
  const { data: rateData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'rateType',
    url: 'rate',
    token: cookie.access,
    selectorFunction: (arr: TCarRate) =>
      arr.data.map(item => ({
        name: item?.rateTypeId?.name,
        id: item?.id,
      })),
  });
  const { data: citiesData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'cities',
    url: 'city',
    token: cookie.access,
    selectorFunction: (arr: TCities) =>
      arr.data.map(item => ({
        name: item?.name,
        id: item?.id,
      })),
  });
  const filteredCities = citiesData?.filter(
    (val, index, arr) =>
      index === arr.findIndex(item => item?.name === val.name),
  );
  const { data: orderStatusData } = useGetData<TOrderStatus>({
    QUERY_KEY: 'status',
    url: 'orderStatus',
    token: cookie.access,
  });
  const { data: carsData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'cars',
    url: 'car?limit=20',
    token: cookie.access,
    selectorFunction: (data: TCars) =>
      data.data.map(item => ({
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

  useEffect(() => {
    data &&
      dispatch(
        setCheckboxesStatus({
          isChildChair: data.data[0]?.isNeedChildChair || false,
          isRightWheel: data.data[0]?.isRightWheel || false,
          isTankFull: data.data[0]?.isFullTank || false,
        }),
      );
  }, [data]);

  const submitHandler = (e: React.FormEvent<HTMLDivElement>) => {
    let filterStr = '';
    e.preventDefault();
    if (activeRateObj) filterStr += `&rateId=${activeRateObj.id}`;
    if (activeCitiesObj) filterStr += `&cityId=${activeCitiesObj.id}`;
    if (activeStatusObj) filterStr += `&orderStatusId=${activeStatusObj.id}`;
    if (activeCarObj) filterStr += `&carId=${activeCarObj.id}`;
    setFilter(filterStr);
  };
  const dateFrom = format(
    new Date(data?.data[0]?.dateFrom || 0),
    'dd.MM.yyyy hh:mm',
  );
  const dateTo = format(
    new Date(data?.data[0]?.dateTo || 0),
    'dd.MM.yyyy HH:mm',
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const isNextPage = () => {
    if (currentPage === totalPageCount) return true;
    else return false;
  };

  const isPrevPage = () => {
    if (currentPage === 1) return true;
    else return false;
  };

  const dropdownItemClickhandler = (activeObj: TOptionsArr, index?: number) => {
    dispatch(
      setActiveObj({
        activeObj: activeObj,
        id: index,
      }),
    );
  };

  return (
    <>
      {!isError && (
        <Wrapper component="main">
          <Title variant="h1">Заказы</Title>
          <Container component="section">
            <OrderFilterComponent
              filterDataArr={filterDataArr({
                data: [
                  rateData,
                  filteredCities,
                  orderStatusData?.data,
                  carsData,
                ],
                activeObjArr: [
                  activeRateObj,
                  activeCitiesObj,
                  activeStatusObj,
                  activeCarObj,
                ],
              })}
              submitHandler={submitHandler}
              dropdownItemClickhandler={dropdownItemClickhandler}
            />
            {isLoading && <Loader />}
            {!isLoading && data?.data.length !== 0 && (
              <OrderInformation
                activeOrderObj={data?.data[0]}
                dateFrom={dateFrom}
                dateTo={dateTo}
                isNextPage={isNextPage}
                isPrevPage={isPrevPage}
                currentPage={currentPage}
                paginationRange={paginationRange}
                setCurrrentPage={setCurrentPage}
                nextPageClickhandler={() =>
                  setCurrentPage(prevValue => prevValue + 1)
                }
                prevPageClickhandler={() =>
                  setCurrentPage(prevValue => prevValue - 1)
                }
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
