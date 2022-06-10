import { cols } from './constants';
import {
  Container,
  TableCol,
  TableCols,
  TableItem,
  TablePointInfo,
} from './emotion-components';
import { TPointsListInformation } from './types';

export function PointsListInformation({ data }: TPointsListInformation) {
  return (
    <Container>
      <TableCols>
        {cols.map((item, index) => (
          <TableCol key={item + index}>{item}</TableCol>
        ))}
      </TableCols>
      {data?.map(item => (
        <TableItem key={item?.id}>
          <TablePointInfo>{item?.name || 'Нет информации'}</TablePointInfo>
          <TablePointInfo>{item?.address || 'Нет информации'}</TablePointInfo>
          <TablePointInfo>
            {item.cityId?.name || 'Нет информации'}
          </TablePointInfo>
        </TableItem>
      ))}
    </Container>
  );
}
