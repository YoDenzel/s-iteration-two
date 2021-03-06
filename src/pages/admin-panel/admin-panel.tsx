import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import {
  AdminPanelFooter,
  AdminPanelHeader,
  NavigationMenu,
  OrdersListComponent,
} from '../../components';
import {
  useClickOutside,
  useGetWindowWidth,
  usePostLogout,
} from '../../shared/custom-hooks';
import { Container, Wrapper } from './emotion-components';

export function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cookie, _, removeCookie] = useCookies(['access']);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { windowWidth } = useGetWindowWidth();
  const { mutateAsync } = usePostLogout();
  const dropdownRef = useClickOutside<HTMLDivElement>(() =>
    setIsDropdownActive(false),
  );
  const mobileMenuRef = useClickOutside<HTMLDivElement>(
    () => windowWidth < 1024 && setIsMenuActive(false),
  );
  const navigate = useNavigate();

  useEffect(() => {
    windowWidth > 1023 && setIsMenuActive(true);
  }, [windowWidth]);

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
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
        windowWidth={windowWidth}
        mobileMenuRef={mobileMenuRef}
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
