import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { AdminPanelHeader, NavigationMenu } from '../../components';
import { useAppSelector, usePostLogout } from '../../shared/custom-hooks';

const Wrapper = styled(Box)`
  flex: 1;
  display: flex;
`;

const Container = styled(Box)`
  flex: 1;
`;

export function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const authObj = useAppSelector(state => state.authSlice.authObj);
  const [cookie, _, removeCookie] = useCookies(['access']);
  const { mutateAsync } = usePostLogout();

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
        <AdminPanelHeader logoutClickhandler={logoutClickhandler} />
      </Container>
    </Wrapper>
  );
}
