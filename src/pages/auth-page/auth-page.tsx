import { AuthWindow } from '../../components';
import { Icons } from '../../shared/icons';
import { Wrapper, TitleContainer, Title } from './emotion-components';

export function AuthPage() {
  return (
    <Wrapper component="main">
      <TitleContainer>
        <Icons.NeedForDriveLogo />
        <Title variant="h3">Need for drive</Title>
      </TitleContainer>
      <AuthWindow />
    </Wrapper>
  );
}
