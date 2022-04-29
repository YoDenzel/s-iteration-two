import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useState } from 'react';
import { AdminPanelHeader, NavigationMenu } from '../../components';
import { useAppSelector } from '../../shared/custom-hooks';

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
  return (
    <Wrapper>
      <NavigationMenu
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Container>
        <AdminPanelHeader />
      </Container>
    </Wrapper>
  );
}
