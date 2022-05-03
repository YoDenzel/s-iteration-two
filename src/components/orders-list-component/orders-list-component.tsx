import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { filterDataArr } from '../../shared/functions';
import {
  TCarRate,
  TCars,
  TCities,
  TOptionsArr,
  TOrderStatus,
} from '../../shared/types';
import { OrderFilterComponent } from '../orders-filter-component';
import { Container, Title, Wrapper } from './emotion-components';

export function OrdersListComponent() {
  const [activeRateObj, setActiveRateObj] = useState<TOptionsArr | null>(null);
  const [activeCitiesObj, setActiveCitiesObj] = useState<TOptionsArr | null>(
    null,
  );
  const [activeStatusObj, setActiveStatusObj] = useState<TOptionsArr | null>(
    null,
  );
  const [activeCarObj, setActiveCarObj] = useState<TOptionsArr | null>(null);
  const [filter, setFilter] = useState('');
  const [cookie] = useCookies(['access']);
  const { data } = useGetData<any>({
    QUERY_KEY: 'order',
    url: `order?${filter}&page=1&limit=10`,
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
    e.preventDefault();
    if (activeRateObj)
      setFilter(state => (state += `&rateId=${activeRateObj.id}`));
    if (activeCitiesObj)
      setFilter(state => (state += `&cityId=${activeCitiesObj.id}`));
    if (activeStatusObj)
      setFilter(state => (state += `&orderStatusId=${activeStatusObj.id}`));
    if (activeCarObj)
      setFilter(state => (state += `&carId=${activeCarObj.id}`));
  };

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
            setActiveCitiesObj: setActiveCitiesObj,
            setActiveRateObj: setActiveRateObj,
            setActiveStatusObj: setActiveStatusObj,
            setActiveCarObj: setActiveCarObj,
          })}
          submitHandler={submitHandler}
        />
      </Container>
    </Wrapper>
  );
}
