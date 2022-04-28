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
  errorMessage,
}: TAuthPage) {
  return (
    <Container component="section">
      <form onSubmit={authClickHandler}>
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
            errorMessage={errorMessage}
          />
        </InputWrapper>
        <ButtonsContainer>
          <RequestAccessButton>Запросить доступ</RequestAccessButton>
          <AuthorizeButton variant="contained" type="submit">
            Войти
          </AuthorizeButton>
        </ButtonsContainer>
      </form>
    </Container>
  );
}
