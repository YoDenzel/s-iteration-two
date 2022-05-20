import {
  Container,
  TableCarTextInfo,
  TableCol,
  TableCols,
  TableItem,
  TableItemIcon,
  TableItemIconBlock,
} from './emotion-components';
import { TCarsInformation } from './types';

const rows = [
  'Фотография машины',
  'Название машины',
  'Категория машины',
  'Цена машины',
  'Заполненность бака',
];

export function CarsInformation({ carsData }: TCarsInformation) {
  return (
    <Container component="section">
      <TableCols>
        {rows.map((item, index) => (
          <TableCol variant="h2" key={index + item}>
            {item}
          </TableCol>
        ))}
      </TableCols>
      {carsData?.map(item => (
        <TableItem key={item.id}>
          <TableItemIconBlock>
            <TableItemIcon src={item?.thumbnail?.path || ''} />
          </TableItemIconBlock>
          <TableCarTextInfo>{item?.name || 'Нет информации'}</TableCarTextInfo>
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
  );
}
