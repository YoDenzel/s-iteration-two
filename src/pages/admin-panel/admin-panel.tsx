import { addDays } from 'date-fns';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
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
  const [cookie, _, removeCookie] = useCookies(['access']);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { mutateAsync } = usePostLogout();
  const dropdownRef = useClickOutside<HTMLDivElement>(() =>
    setIsDropdownActive(false),
  );
  const navigate = useNavigate();

  const logoutClickhandler = () => {
    mutateAsync({ accessToken: cookie.access });
    removeCookie('access', {
      path: '/s-iteration-two',
      expires: addDays(new Date(), 1),
    });
    navigate('/s-iteration-two/admin');
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
