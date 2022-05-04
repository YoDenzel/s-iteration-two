import { Icons } from '../../shared/icons';
import {
  Container,
  ApplicationTitleWrapper,
  ApplicationTitleContainer,
  Title,
} from './emotion-components';

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
