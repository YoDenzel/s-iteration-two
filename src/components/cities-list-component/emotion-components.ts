import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

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

export const CitiesCountBlock = styled(Box)`
  width: 100%;
  display: flex;
  padding: 16px 0px 14px 0px;
  box-shadow: 0px -0.5px 0px #e0e2e8, 0px 0.5px 0px #e0e2e8;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`;

export const CitiesCountTitle = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(1.5)}px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.titleFont};
`;

export const CitiesCountNumber = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(0.4)}px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.lightGray};
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
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.377143px;
  color: #3d5170;
  border-bottom: 0.5px solid #e0e2e8;
  padding-bottom: ${({ theme }) => theme.spacing(0.5)}px;
  &:last-of-type {
    border: none;
  }
`;
