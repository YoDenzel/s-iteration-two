import { useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  removeActiveCitytFilter,
  setActiveCityFilterData,
} from '../../redux/points-active-filter-data/points-active-filter-data';
import { useAppDispatch, useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCities, TOptionsArr, TPoint } from '../../shared/types';
import { Loader } from '../loader';
import { OrderFilterComponent } from '../orders-filter-component';
import { PointsListInformation } from '../points-list-information';
import { Container, Title, Wrapper } from './emotion-components';

export function PointsListComponent() {
  const [cookie] = useCookies(['access']);
  const [filter, setFilter] = useState('');
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetData<TPoint>({
    QUERY_KEY: 'points',
    url: `point?${filter}`,
    token: cookie.access,
  });
  const { data: cityData } = useGetData<TOptionsArr[]>({
    QUERY_KEY: 'cities',
    url: `city`,
    token: cookie.access,
    selectorFunction: (arr: TCities) =>
      arr.data.map(item => ({
        name: item?.name,
        id: item?.id,
      })),
  });
  const activeCityObj = useAppSelector(
    state => state.pointsActiveFilterData.activeCityObj,
  );

  const dropdownItemClickhandler = (activeObj: TOptionsArr, index?: number) => {
    dispatch(
      setActiveCityFilterData({
        activeCityObj: activeObj,
        id: index,
      }),
    );
  };

  const submitHandler = (e: React.FormEvent<HTMLDivElement>) => {
    let filterStr = '';
    e.preventDefault();
    if (activeCityObj)
      setFilter(() => (filterStr += `&cityId=${activeCityObj.id}`));
  };

  return (
    <Wrapper component="main">
      <Title variant="h1">Пункты выдачи</Title>
      <Container component="section">
        <OrderFilterComponent
          filterDataArr={[
            {
              title: 'Города',
              activeTitle: activeCityObj,
              data: cityData,
            },
          ]}
          submitHandler={submitHandler}
          cancelButtonClickhandler={() => {
            dispatch(removeActiveCitytFilter());
            setFilter('');
          }}
          dropdownItemClickhandler={dropdownItemClickhandler}
        />
        {!isLoading && <PointsListInformation data={data?.data} />}
        {isLoading && <Loader />}
      </Container>
    </Wrapper>
  );
}
