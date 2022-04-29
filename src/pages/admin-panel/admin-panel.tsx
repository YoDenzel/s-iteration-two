import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { NavigationMenu } from '../../components';
import { useAppSelector } from '../../shared/custom-hooks';

const Container = styled(Box)`
  flex: 1;
  display: flex;
`;

export function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const authObj = useAppSelector(state => state.authSlice.authObj);
  return (
    <Container>
      <NavigationMenu
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      Hello world
    </Container>
  );
}
