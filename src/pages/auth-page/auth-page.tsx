import { useState } from 'react';
import { AuthWindow } from '../../components';
import { usePostAuth } from '../../shared/custom-hooks';
import { Icons } from '../../shared/icons';
import { Wrapper, TitleContainer, Title } from './emotion-components';

export function AuthPage() {
  const { data, mutateAsync } = usePostAuth();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const authClickHandler = () => {
    mutateAsync({
      username: login,
      password: password,
    });
  };
  console.log(data);
  return (
    <Wrapper component="main">
      <TitleContainer>
        <Icons.NeedForDriveLogo />
        <Title variant="h3">Need for drive</Title>
      </TitleContainer>
      <AuthWindow
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        authClickHandler={authClickHandler}
      />
    </Wrapper>
  );
}
