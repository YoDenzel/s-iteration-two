import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  removeActiveCitytFilter,
  setActiveCityFilterData,
} from '../../redux/points-active-filter-data/points-active-filter-data';
import { useAppDispatch, useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCities, TOptionsArr, TPoint } from '../../shared/types';
import { OrderFilterComponent } from '../orders-filter-component';
import { PointsListInformation } from '../points-list-information';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  margin-right: ${({ theme }) => theme.spacing(6.3)}px;
  border-radius: 9px;
  overflow: auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;
    margin-right: ${({ theme }) => theme.spacing(1.5)}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    overflow: unset;
  }
`;

export const Container = styled(Box)`
  width: 100%;
  height: 70%;
  border-radius: 9px;
  margin-top: ${({ theme }) => theme.spacing(3.8)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 0px rgba(90, 97, 105, 0.11),
    0px 4px 8px rgba(90, 97, 105, 0.12), 0px 10px 10px rgba(90, 97, 105, 0.06),
    0px 7px 70px rgba(90, 97, 105, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    overflow: unset;
    height: 100%;
  }
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 33px;
  letter-spacing: -0.725px;
  color: ${({ theme }) => theme.colors.titleFont};
  margin-top: ${({ theme }) => theme.spacing(3.5)}px;
`;

export function PointsListComponent() {
  const [cookie] = useCookies(['access']);
  const [filter, setFilter] = useState('');
  const dispatch = useAppDispatch();
  const { data } = useGetData<TPoint>({
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

  console.log(data);

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
        <PointsListInformation data={data?.data} />
      </Container>
    </Wrapper>
  );
}
