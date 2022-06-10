import { addDays } from 'date-fns';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { usePostLogout } from '../../shared/custom-hooks';
import {
  Container,
  InfoBlock,
  ErrorStatus,
  SomethingWentWrong,
  TryReload,
  GoBackButton,
  SignOutButton,
} from './emotion-components';
import { TErrorComponent } from './types';

export function ErrorComponent({
  errorCodeStatus,
  reloadButtonClickhandler,
  isButton,
}: TErrorComponent) {
  const [cookie, _, removeCookie] = useCookies(['access']);
  const { mutateAsync } = usePostLogout();
  const navigate = useNavigate();

  const logoutClickhandler = () => {
    mutateAsync({ accessToken: cookie.access });
    removeCookie('access', {
      path: '/s-iteration-two',
      expires: addDays(new Date(), 1),
    });
    navigate('/s-iteration-two/admin');
  };
  return (
    <Container component="section">
      <InfoBlock component="article">
        <ErrorStatus variant="h1">{errorCodeStatus}</ErrorStatus>
        <SomethingWentWrong variant="h2">
          Что-то пошло не так
        </SomethingWentWrong>
        <TryReload>Попробуйте перезагрузить страницу</TryReload>
        <GoBackButton onClick={() => reloadButtonClickhandler()}>
          Назад
        </GoBackButton>
      </InfoBlock>
      {/* эта кнопка чисто для gh-pages, из-за того что мэйн пэйдж имеет ссылку отличную от
      s-iteration-two/, то gh pages перекидывает вас на экран ошибки, в нормальных условиях такой штуки нет */}
      {isButton && (
        <SignOutButton onClick={() => logoutClickhandler()}>
          Выйти
        </SignOutButton>
      )}
    </Container>
  );
}
