import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { TTitleStyle, TOrderInformation } from './types';
import { CheckboxItem } from '../checkbox-item';
import { useAppSelector } from '../../shared/custom-hooks';

const Container = styled(Box)`
  display: flex;
  padding-left: 21px;
  padding-right: 21px;
`;

const CarInfoBlock = styled(Box)`
  display: flex;
  width: 230px;
  flex-wrap: wrap;
  text-align: left;
  margin-top: 15.5px;
`;

const CarImg = styled.img`
  width: 138px;
  height: auto;
  margin-top: 13.5px;
  margin-right: 16px;
`;

const CheckboxBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 13.5px;
`;

const Title = styled(({ isBlack, children, ...props }: TTitleStyle) => (
  <Typography {...props}>{children}</Typography>
))`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.408571px;
  color: ${props => (props.isBlack ? '#121212' : '#889098')};
  padding-right: 5px;
`;

export function OrderInformation({
  activeOrderObj,
  dateFrom,
  dateTo,
}: TOrderInformation) {
  const checkboxArr = useAppSelector(
    state => state.carOrderCheckboxArr.checkboxArr,
  );
  return (
    <Container component="section">
      <CarImg src={activeOrderObj?.carId.thumbnail.path} />
      <CarInfoBlock>
        <Title isBlack={true}>{activeOrderObj?.carId.name}</Title>
        <Title isBlack={false}>в</Title>
        <Title isBlack={true}>
          {(activeOrderObj?.cityId?.name ?? 'Нет информации') + ','}
        </Title>
        <Title isBlack={false}>
          {(activeOrderObj?.pointId !== null &&
            activeOrderObj?.pointId.address) ||
            ''}
        </Title>
        <Title isBlack={false}>{dateFrom + ' - ' + dateTo}</Title>
        <Title isBlack={false}>Цвет:</Title>
        <Title isBlack>{activeOrderObj?.color}</Title>
      </CarInfoBlock>
      <CheckboxBlock>
        {checkboxArr.map((item, index) => (
          <CheckboxItem
            key={item.title + index}
            isActive={item.isActive}
            title={item.title}
          />
        ))}
      </CheckboxBlock>
    </Container>
  );
}
