import { addDays } from 'date-fns';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import {
  AdminPanelFooter,
  AdminPanelHeader,
  NavigationMenu,
} from '../../components';
import { setActiveComponentIndex } from '../../redux/active-component-index/active-component-index';
import {
  useAppDispatch,
  useAppSelector,
  useClickOutside,
  useGetWindowWidth,
  usePostLogout,
} from '../../shared/custom-hooks';
import { components } from './constants';
import { Container, Wrapper } from './emotion-components';

export function AdminPanel() {
  const [cookie, _, removeCookie] = useCookies(['access']);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const activeComponentIndex = useAppSelector(
    state => state.activeComponentIndex.activeComponentIndex,
  );
  const { windowWidth } = useGetWindowWidth();
  const { mutateAsync } = usePostLogout();
  const dispatch = useAppDispatch();
  const dropdownRef = useClickOutside<HTMLDivElement>(() =>
    setIsDropdownActive(false),
  );
  const mobileMenuRef = useClickOutside<HTMLDivElement>(
    () => windowWidth < 1024 && setIsMenuActive(false),
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

  const navItemClickhandler = (index: number) => {
    dispatch(
      setActiveComponentIndex({
        activeComponentIndex: index,
      }),
    );
    if (windowWidth < 1024) {
      setIsMenuActive(false);
    }
  };
  return (
    <Wrapper>
      <NavigationMenu
        activeIndex={activeComponentIndex}
        navItemClickhandler={navItemClickhandler}
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
        windowWidth={windowWidth}
        mobileMenuRef={mobileMenuRef}
      />
      <Container>
        <>
          <AdminPanelHeader
            logoutClickhandler={logoutClickhandler}
            dropdownRef={dropdownRef}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isDropdownActive={isDropdownActive}
            setIsDropdownActive={setIsDropdownActive}
          />
          {components.map(
            (Item, index) =>
              index === activeComponentIndex && (
                <Item key={index + Date.now()} />
              ),
          )}
          <AdminPanelFooter />
        </>
      </Container>
    </Wrapper>
  );
}
