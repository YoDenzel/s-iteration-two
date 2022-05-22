import { Container, Copyright, NavBlock, NavLink } from './emotion-components';

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
