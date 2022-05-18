import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorStatus = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 75px;
  line-height: 88px;
  letter-spacing: -5.76923px;
  color: ${({ theme }) => theme.colors.veryLightGray};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 55px;
    line-height: 67px;
  }
`;

export const SomethingWentWrong = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 57px;
  text-align: center;
  letter-spacing: -2.5px;
  color: ${({ theme }) => theme.colors.titleFont};
  margin-bottom: ${({ theme }) => theme.spacing(1.5)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 40px;
    line-height: 47px;
  }
`;

export const TryReload = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #818ea3;
  margin-bottom: ${({ theme }) => theme.spacing(4.5)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const GoBackButton = styled(Button)`
  border-radius: 4px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  background-color: #007bff;
  text-align: center;
  letter-spacing: -0.345714px;
  color: #ffffff;
  padding: 10px 20px;
  &:hover {
    background-color: #007bff;
  }
`;
