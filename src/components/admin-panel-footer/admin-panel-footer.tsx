import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled(Box)`
  background: #ffffff;
  box-shadow: 0px -0.5px 0px #d7dae3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBlock = styled(Box)`
  padding: 27px 0 25.5px 27.5px;
  display: flex;
  gap: 16px;
`;

const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  color: #007bff;
`;

const Copyright = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #818ea3;
  padding-right: 27.5px;
`;

export function AdminPanelFooter() {
  return (
    <Container component="footer">
      <NavBlock component="nav">
        <NavLink to="">Главная страница</NavLink>
        <NavLink to="">Ссылка</NavLink>
      </NavBlock>
      <Copyright variant="body1">Copyright © 2020 Simbirsoft</Copyright>
    </Container>
  );
}
