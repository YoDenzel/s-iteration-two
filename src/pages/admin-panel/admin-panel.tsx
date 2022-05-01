import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  AdminPanelFooter,
  AdminPanelHeader,
  NavigationMenu,
  OrdersListComponent,
} from '../../components';
import {
  useAppSelector,
  useClickOutside,
  usePostLogout,
} from '../../shared/custom-hooks';
import { Container, Wrapper } from './emotion-components';

export function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const authObj = useAppSelector(state => state.authSlice.authObj);
  const [cookie, _, removeCookie] = useCookies(['access']);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { mutateAsync } = usePostLogout();
  const dropdownRef = useClickOutside<HTMLDivElement>(() =>
    setIsDropdownActive(false),
  );

  const logoutClickhandler = () => {
    mutateAsync({ accessToken: cookie.access });
    removeCookie('access', {
      path: '/s-iteration-two',
      expires: addDays(new Date(), 1),
    });
  };
  return (
    <Wrapper>
      <NavigationMenu
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Container>
        <AdminPanelHeader
          logoutClickhandler={logoutClickhandler}
          dropdownRef={dropdownRef}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        />
        <OrdersListComponent />
        <AdminPanelFooter />
      </Container>
    </Wrapper>
  );
}
