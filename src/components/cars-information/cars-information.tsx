import { Pagination } from '../pagination';
import { cols } from './constants';
import {
  Container,
  TableCarTextInfo,
  TableCol,
  TableCols,
  TableItem,
  TableItemIcon,
  TableItemIconBlock,
  Wrapper,
} from './emotion-components';
import { TCarsInformation } from './types';

export function CarsInformation({
  carsData,
  currentPage,
  isNextPage,
  isPrevPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrrentPage,
  carClickhandler
}: TCarsInformation) {
  return (
    <Wrapper>
      <Container component="section">
        <TableCols>
          {cols.map((item, index) => (
            <TableCol variant="h2" key={index + item}>
              {item}
            </TableCol>
          ))}
        </TableCols>
        {carsData?.map(item => (
          <TableItem key={item.id} onClick={() => carClickhandler(item.id)}>
            <TableItemIconBlock>
              <TableItemIcon alt="Машина" src={item?.thumbnail?.path || ''} />
            </TableItemIconBlock>
            <TableCarTextInfo>
              {item?.name || 'Нет информации'}
            </TableCarTextInfo>
            <TableCarTextInfo>
              {item?.categoryId?.name || 'Нет информации'}
            </TableCarTextInfo>
            <TableCarTextInfo>
              {item?.priceMin ? item.priceMin + '₽' : 'Нет информации'}
            </TableCarTextInfo>
            <TableCarTextInfo>
              {item?.tank ? item.tank + '%' : 'Нет информации'}
            </TableCarTextInfo>
          </TableItem>
        ))}
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
