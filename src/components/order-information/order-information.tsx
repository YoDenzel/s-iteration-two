import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { TTitleStyle, TOrderInformation } from './types';
import { CheckboxItem } from '../checkbox-item';
import { useAppSelector } from '../../shared/custom-hooks';
import { OrderChangeStatusData } from './constants';

const Container = styled(Box)`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing(2.625)}px;
  padding-right: ${({ theme }) => theme.spacing(2.625)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
`;

const CarInfoWrapper = styled(Box)`
  display: flex;
  flex: 40%;
`;

const CarInfoBlock = styled(Box)`
  display: flex;
  width: 230px;
  flex-wrap: wrap;
  text-align: left;
`;

const CarImg = styled.img`
  width: 138px;
  height: auto;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

const CheckboxBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
  flex: 20%;
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

const Price = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.754286px;
  color: ${({ theme }) => theme.colors.black};
  padding-top: ${({ theme }) => theme.spacing(1.5)}px;
  flex: 20%;
`;

const ChangeStatusBlock = styled(Box)`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(1.5)}px;
  align-items: flex-start;
  border: 0.5px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  height: fit-content;
  @media (max-width: 1200px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

const ChangeStatusButton = styled(Button)<{ activeindex: number }>`
  border: none;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
  letter-spacing: -0.345714px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  text-transform: none;
  border-left: ${({ activeindex }) =>
    activeindex === 1 ? '0.5px solid #BECAD6' : 'none'};
  border-right: ${({ activeindex }) =>
    activeindex === 1 ? '0.5px solid #BECAD6' : 'none'};
  border-radius: 0;
  margin: 0;
  padding: 6px 15px;
  &:hover {
    background: none;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.desktopMin}) {
    border: none;
  }
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
      <CarInfoWrapper>
        <CarImg src={activeOrderObj?.carId.thumbnail.path} />
        <CarInfoBlock component="article">
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
      </CarInfoWrapper>
      <CheckboxBlock component="article">
        {checkboxArr.map((item, index) => (
          <CheckboxItem
            key={item.title + index}
            isActive={item.isActive}
            title={item.title}
          />
        ))}
      </CheckboxBlock>
      <Price>${activeOrderObj?.price}</Price>
      <ChangeStatusBlock component="article">
        {OrderChangeStatusData.map((item, index) => (
          <ChangeStatusButton
            activeindex={index}
            key={item.title + index}
            startIcon={<item.icon color={index === 0 ? '#17C671 ' : ''} />}
          >
            {item.title}
          </ChangeStatusButton>
        ))}
      </ChangeStatusBlock>
    </Container>
  );
}
