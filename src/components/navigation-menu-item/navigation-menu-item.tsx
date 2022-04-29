import { Container, Title } from './emotion-components';
import { TNavigationMenuItem } from './types';

export function NavigationMenuItem({
  Icon,
  title,
  clickHandler,
  activeIndex,
  itemIndex,
}: TNavigationMenuItem) {
  return (
    <Container onClick={() => clickHandler(itemIndex)} disableFocusRipple>
      {Icon}
      <Title
        sx={{
          color: activeIndex === itemIndex ? '#007bff' : '#CACEDB',
        }}
      >
        {title}
      </Title>
    </Container>
  );
}
