import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  margin-right: ${({ theme }) => theme.spacing(6.3)}px;
  border-radius: 9px;
  overflow: auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;
    margin-right: ${({ theme }) => theme.spacing(1.5)}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    overflow: unset;
  }
`;

export const Container = styled(Box)`
  width: 100%;
  height: 70%;
  border-radius: 9px;
  margin-top: ${({ theme }) => theme.spacing(3.8)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 0px rgba(90, 97, 105, 0.11),
    0px 4px 8px rgba(90, 97, 105, 0.12), 0px 10px 10px rgba(90, 97, 105, 0.06),
    0px 7px 70px rgba(90, 97, 105, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    overflow: unset;
    height: 100%;
  }
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 33px;
  letter-spacing: -0.725px;
  color: ${({ theme }) => theme.colors.titleFont};
  margin-top: ${({ theme }) => theme.spacing(3.5)}px;
`;

export const CitiesList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: ${({ theme }) => theme.spacing(1.5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1.5)}px;
  margin-left: ${({ theme }) => theme.spacing(1.5)}px;
  margin-right: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const CityItem = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.377143px;
  color: #3d5170;
  border-bottom: 0.5px solid #e0e2e8;
  padding-bottom: ${({ theme }) => theme.spacing(0.5)}px;
  &:last-of-type {
    border: none;
  }
`;
