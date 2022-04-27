import { useState } from 'react';
import { TextInputComponent } from '../text-input-component';
import {
  ButtonsContainer,
  AuthorizeButton,
  Container,
  InputWrapper,
  RequestAccessButton,
  Title,
} from './emoition-components';

export function AuthWindow() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container component="section">
      <Title variant="h2">Вход</Title>
      <InputWrapper>
        <TextInputComponent
          title="Почта"
          setValue={setLogin}
          value={login}
          placeholder="Введите почту"
          type="Text"
        />
      </InputWrapper>
      <InputWrapper>
        <TextInputComponent
          title="Пароль"
          setValue={setPassword}
          placeholder="Введите пароль"
          value={password}
          type="password"
        />
      </InputWrapper>
      <ButtonsContainer>
        <RequestAccessButton>Запросить доступ</RequestAccessButton>
        <AuthorizeButton variant="contained">Войти</AuthorizeButton>
      </ButtonsContainer>
    </Container>
  );
}
