import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';

export const Container = styled(Box)`
  width: 375px;
  background-color: #ffffff;
  border-radius: 9px;
  @media (max-width: 767px) {
    width: 100%;
  } ;
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 17.5px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.4375px;
  color: #3d5170;
  padding-top: 11px;
  padding-right: 17px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled(Box)`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const RequestAccessButton = styled(Button)`
  margin-left: 17px;
  padding: 0;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10.5px;
  line-height: 12px;
  color: #007bff;
  &:hover {
    background: unset;
  }
  &:active {
    background: unset;
  }
`;

export const AuthorizeButton = styled(Button)`
  font-family: 'Helvetica';
  margin-right: 15px;
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  color: #ffffff;
  background: #007bff;
  padding: 12px 45px;
  border-radius: 4px;
`;

export const InputWrapper = styled(Box)`
  margin: 15px 17px;
`;
