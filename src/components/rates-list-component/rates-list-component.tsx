import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCarRate } from '../../shared/types';
import { rows } from './constants';
import {
  BodyContainer,
  CitiesCountBlock,
  CitiesCountNumber,
  CitiesCountTitle,
  Container,
  TableCol,
  TableCols,
  TableHeader,
  TableItem,
  TableRateTextInfo,
  Title,
  Wrapper,
} from './emotion-components';

export function RatesListComponent() {
  const [cookie] = useCookies(['access']);
  const { data, isLoading } = useGetData<TCarRate>({
    QUERY_KEY: 'rates',
    url: `rate`,
    token: cookie.access,
  });

  console.log(data);
  return (
    <Wrapper component="main">
      <Title variant="h1">Список тарифов</Title>
      <Container component="section">
        <TableHeader>
          <CitiesCountBlock component="article">
            <CitiesCountTitle variant="h2">
              Количество тарифов:
            </CitiesCountTitle>
            <CitiesCountNumber variant="h2">{data?.count}</CitiesCountNumber>
          </CitiesCountBlock>
        </TableHeader>
        <BodyContainer>
          <TableCols>
            {rows.map((item, index) => (
              <TableCol variant="h2" key={index + item}>
                {item}
              </TableCol>
            ))}
          </TableCols>
          {data?.data.map(item => (
            <TableItem key={item.id}>
              <TableRateTextInfo>{item.rateTypeId.name}</TableRateTextInfo>
              <TableRateTextInfo>{item.price}₽</TableRateTextInfo>
              <TableRateTextInfo>{item.rateTypeId.unit}</TableRateTextInfo>
            </TableItem>
          ))}
        </BodyContainer>
      </Container>
    </Wrapper>
  );
}
