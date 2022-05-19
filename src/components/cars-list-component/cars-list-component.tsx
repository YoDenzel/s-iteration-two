import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { setActiveCarObj } from '../../redux/cars-active-filter-data/cars-active-filter-data';
import { useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCarCategory, TCars, TOptionsArr } from '../../shared/types';
import { OrderFilterComponent } from '../orders-filter-component';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  margin-right: ${({ theme }) => theme.spacing(6.3)}px;
  border-radius: 9px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;
    margin-right: ${({ theme }) => theme.spacing(1.5)}px;
  }
`;

export const Container = styled(Box)`
  width: 100%;
  min-height: 50%;
  border-radius: 9px;
  margin-top: ${({ theme }) => theme.spacing(3.8)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 0px rgba(90, 97, 105, 0.11),
    0px 4px 8px rgba(90, 97, 105, 0.12), 0px 10px 10px rgba(90, 97, 105, 0.06),
    0px 7px 70px rgba(90, 97, 105, 0.1);
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 33px;
  letter-spacing: -0.725px;
  color: #3d5170;
  margin-top: ${({ theme }) => theme.spacing(3.5)}px;
`;

export function CarsListComponent() {
  const [cookie] = useCookies(['access']);
  const { data } = useGetData<TCars>({
    QUERY_KEY: 'cars',
    url: 'car?limit=20',
    token: cookie.access,
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

  console.log(data);

  return (
    <Wrapper>
      <Title>Список автомобилей</Title>
      <Container>
        <OrderFilterComponent
          filterDataArr={[
            {
              title: 'Категории',
              activeTitle: activeCarObj,
              data: carCategoryData,
            },
          ]}
          submitHandler={() => void 0}
          cancelButtonClickhandler={() => void 0}
          dropdownItemClickhandler={dropdownItemClickhandler}
        />
      </Container>
    </Wrapper>
  );
}
