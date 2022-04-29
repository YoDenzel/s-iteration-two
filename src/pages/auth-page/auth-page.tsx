import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { addDays } from 'date-fns';
import { AuthWindow } from '../../components';
import {
  setAuthObj,
  setIsAuthenticated,
} from '../../redux/auth-slice/auth-slice';
import { useAppDispatch, usePostAuth } from '../../shared/custom-hooks';
import { Icons } from '../../shared/icons';
import { Wrapper, TitleContainer, Title } from './emotion-components';

export function AuthPage() {
  const { data, mutateAsync, isError } = usePostAuth();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['auth']);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync({
      username: login,
      password: password,
    });
  };

  useEffect(() => {
    if ((!login || !password) && isError)
      setErrorMessage('Введите логин или пароль');
    else if (isError) setErrorMessage('Неправильный логин или пароль');
  }, [isError]);

  useEffect(() => {
    if (data) {
      dispatch(
        setAuthObj({
          authObj: data,
        }),
      );
      setCookie('auth', data.access_token, {
        path: '/s-iteration-two',
        expires: addDays(new Date(), 1),
      });
      dispatch(
        setIsAuthenticated({
          isAuthenticated: true,
        }),
      );
      navigate('/s-iteration-two/admin/order-list');
    }
  }, [data]);
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
        errorMessage={errorMessage}
      />
    </Wrapper>
  );
}
