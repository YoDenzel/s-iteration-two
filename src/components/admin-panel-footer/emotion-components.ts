import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)`
  background: #ffffff;
  box-shadow: 0px -0.5px 0px #d7dae3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBlock = styled(Box)`
  padding: 27px 0 25.5px 27.5px;
  display: flex;
  gap: 16px;
`;

export const NavLink = styled(Link)`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  color: #007bff;
`;

export const Copyright = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #818ea3;
  padding-right: 27.5px;
`;
