import {
  Container,
  InfoBlock,
  ErrorStatus,
  SomethingWentWrong,
  TryReload,
  GoBackButton,
} from './emotion-components';
import { TErrorComponent } from './types';

export function ErrorComponent({
  errorCodeStatus,
  reloadButtonClickhandler,
}: TErrorComponent) {
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
    </Container>
  );
}
