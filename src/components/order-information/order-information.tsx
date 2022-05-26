import { TOrderInformation } from './types';
import { CheckboxItem } from '../checkbox-item';
import { useAppSelector } from '../../shared/custom-hooks';
import { OrderChangeStatusData } from './constants';
import {
  CarImg,
  CarInfoBlock,
  CarInfoWrapper,
  ChangeStatusBlock,
  ChangeStatusButton,
  CheckboxBlock,
  Container,
  Price,
  Title,
  Wrapper,
} from './emotion-components';
import { Pagination } from '../pagination';

export function OrderInformation({
  activeOrderObj,
  dateFrom,
  dateTo,
  currentPage,
  isNextPage,
  isPrevPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrrentPage,
}: TOrderInformation) {
  const checkboxArr = useAppSelector(
    state => state.carOrderCheckboxArr.checkboxArr,
  );
  return (
    <Wrapper>
      <Container component="section">
        <CarInfoWrapper>
          <CarImg src={activeOrderObj?.carId?.thumbnail?.path} />
          <CarInfoBlock component="article">
            <Title isblack={1}>{activeOrderObj?.carId?.name}</Title>
            <Title isblack={0}>в</Title>
            <Title isblack={1}>
              {(activeOrderObj?.cityId?.name ?? 'Нет информации') + ','}
            </Title>
            <Title isblack={0}>
              {(activeOrderObj?.pointId !== null &&
                activeOrderObj?.pointId?.address) ||
                ''}
            </Title>
            <Title isblack={0}>{dateFrom + ' - ' + dateTo}</Title>
            <Title isblack={0}>Цвет:</Title>
            <Title isblack={1}>{activeOrderObj?.color}</Title>
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
        <Price>{activeOrderObj?.price} ₽</Price>
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
      <Pagination
        currentPage={currentPage}
        isNextPage={isNextPage}
        isPrevPage={isPrevPage}
        nextPageClickhandler={nextPageClickhandler}
        paginationRange={paginationRange}
        prevPageClickhandler={prevPageClickhandler}
        setCurrentPage={setCurrrentPage}
      />
    </Wrapper>
  );
}
