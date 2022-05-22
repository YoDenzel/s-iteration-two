import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

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
`;

export const TableCol = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.377143px;
  color: ${({ theme }) => theme.colors.titleFont};
  flex: 20%;
`;

export const TableItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1.375)}px;
  height: 50px;
`;

export const TableItemIconBlock = styled(Box)`
  flex: 20%;
`;

export const TableItemIcon = styled.img`
  width: 70px;
  height: auto;
`;

export const TableCarTextInfo = styled(Typography)`
  flex: 20%;
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
