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
import { TAuthPage } from './types';

export function AuthWindow({
  login,
  password,
  setLogin,
  setPassword,
  authClickHandler,
}: TAuthPage) {
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
        <AuthorizeButton variant="contained" onClick={authClickHandler}>
          Войти
        </AuthorizeButton>
      </ButtonsContainer>
    </Container>
  );
}
