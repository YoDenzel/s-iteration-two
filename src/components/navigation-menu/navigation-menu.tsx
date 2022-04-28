import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Icons } from '../../shared/icons';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 255px;
  background-color: #ffffff;
  height: 100vh;
`;

const ApplicationTitleWrapper = styled(Box)`
  width: 100%;
  box-shadow: 0px 1px 0px #e1e5eb;
`;

const ApplicationTitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 23px 0;
  padding-left: 49px;
`;

const Title = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #3d5170;
`;

export function NavigationMenu() {
  return (
    <Container>
      <ApplicationTitleWrapper>
        <ApplicationTitleContainer>
          <Icons.NeedForDriveLogo />
          <Title>Need for car</Title>
        </ApplicationTitleContainer>
      </ApplicationTitleWrapper>
    </Container>
  );
}
