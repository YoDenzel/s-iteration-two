import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { TPointsListInformation } from './types';

export const Container = styled(Box)`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing(2.625)}px;
  padding-right: ${({ theme }) => theme.spacing(2.625)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: column;
`;

export const TableCols = styled(Box)`
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TableCol = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.377143px;
  color: ${({ theme }) => theme.colors.titleFont};
  flex: 33%;
`;

export const TableItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1.375)}px;
  &:last-of-type {
    padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing(1)}px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const TablePointInfo = styled(Typography)`
  flex: 33%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.377143px;
  color: ${({ theme }) => theme.colors.tableTextFont};
  display: flex;
  flex-wrap: wrap;
`;

const cols = ['Пункт', 'Адрес', 'Город'];

export function PointsListInformation({ data }: TPointsListInformation) {
  return (
    <Container>
      <TableCols>
        {cols.map((item, index) => (
          <TableCol key={item + index}>{item}</TableCol>
        ))}
      </TableCols>
      {data?.map(item => (
        <TableItem key={item.id}>
          <TablePointInfo>{item.name}</TablePointInfo>
          <TablePointInfo>{item.address}</TablePointInfo>
          <TablePointInfo>{item.cityId.name}</TablePointInfo>
        </TableItem>
      ))}
    </Container>
  );
}
