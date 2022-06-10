import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

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
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TableCols = styled(Box)`
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: ${({ theme }) => theme.spacing(1)}px;
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
  flex: 20%;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex: 40%;
    justify-content: center;
    display: flex;
  }
`;

export const TableItem = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1.375)}px;
  height: 50px;
  text-transform: none;
  padding: 0;
  text-align: left;
  border: 0;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: unset;
    flex-wrap: wrap;
    gap: 10px;
    box-shadow: 0px -0.5px 0px #e0e2e8, 0px 0.5px 0px #e0e2e8;
    margin-top: 0;
    padding-top: ${({ theme }) => theme.spacing(1)}px;
    padding-bottom: ${({ theme }) => theme.spacing(1)}px;
    &:last-of-type {
      box-shadow: none;
    }
  }
`;

export const TableItemIconBlock = styled(Box)`
  flex: 20%;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: flex;
    flex: 40%;
    justify-content: center;
  }
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
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: flex;
    flex: 40%;
    justify-content: center;
  }
`;
