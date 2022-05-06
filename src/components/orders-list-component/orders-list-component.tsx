import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import { useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { filterDataArr } from '../../shared/functions';
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
import { Container, Title, Wrapper } from './emotion-components';

export function OrdersListComponent() {
  const { activeCarObj, activeCitiesObj, activeRateObj, activeStatusObj } =
    useAppSelector(state => ({
      activeRateObj: state.filterActiveData.activeRateObj,
      activeCarObj: state.filterActiveData.activeCarObj,
      activeStatusObj: state.filterActiveData.activeStatusObj,
      activeCitiesObj: state.filterActiveData.activeCitiesObj,
    }));
  const [filter, setFilter] = useState('');
  const [cookie] = useCookies(['access']);
  const { data } = useGetData<TCarOrder>({
    QUERY_KEY: 'order',
    url: `order?${filter}&page=0&limit=10`,
    token: cookie.access,
  });
  const { data: rateData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'rateType',
    url: 'rate',
    token: cookie.access,
    selectorFunction: (arr: TCarRate) =>
      arr.data.map(item => ({
        name: item.rateTypeId.name,
        id: item.id,
      })),
  });
  const { data: citiesData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'cities',
    url: 'city',
    token: cookie.access,
    selectorFunction: (arr: TCities) =>
      arr.data.map(item => ({
        name: item.name,
        id: item.id,
      })),
  });
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
        name: item.name,
        id: item.id,
      })),
  });

  console.log(data);

  const submitHandler = (e: React.FormEvent<HTMLDivElement>) => {
    let filterStr = '';
    e.preventDefault();
    if (activeRateObj)
      setFilter(() => (filterStr += `&rateId=${activeRateObj.id}`));
    if (activeCitiesObj)
      setFilter(() => (filterStr += `&cityId=${activeCitiesObj.id}`));
    if (activeStatusObj)
      setFilter(() => (filterStr += `&orderStatusId=${activeStatusObj.id}`));
    if (activeCarObj)
      setFilter(() => (filterStr += `&carId=${activeCarObj.id}`));
  };
  const dateFrom = format(
    new Date(data?.data[0]?.dateFrom || 0),
    'dd.MM.yyyy hh:mm',
  );
  const dateTo = format(
    new Date(data?.data[0]?.dateTo || 0),
    'dd.MM.yyyy HH:mm',
  );
  return (
    <Wrapper component="main">
      <Title variant="h1">Заказы</Title>
      <Container>
        <OrderFilterComponent
          filterDataArr={filterDataArr({
            data: [rateData, citiesData, orderStatusData?.data, carsData],
            activeObjArr: [
              activeRateObj,
              activeCitiesObj,
              activeStatusObj,
              activeCarObj,
            ],
          })}
          submitHandler={submitHandler}
        />
        <OrderInformation
          activeOrderObj={data?.data[0]}
          dateFrom={dateFrom}
          dateTo={dateTo}
        />
      </Container>
    </Wrapper>
  );
}
