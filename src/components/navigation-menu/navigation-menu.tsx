import { Icons } from '../../shared/icons';
import { NavigationMenuItem } from '../navigation-menu-item';
import { menuTabsDataArr } from './constants';
import {
  Container,
  ApplicationTitleContainer,
  ApplicationTitleWrapper,
  Title,
} from './emotion-components';
import { TNavigationMen } from './types';

export function NavigationMenu({
  activeIndex,
  setActiveIndex,
}: TNavigationMen) {
  return (
    <Container component="nav">
      <ApplicationTitleWrapper>
        <ApplicationTitleContainer>
          <Icons.NeedForDriveLogo />
          <Title>Need for car</Title>
        </ApplicationTitleContainer>
      </ApplicationTitleWrapper>
      {menuTabsDataArr.map((item, index) => (
        <NavigationMenuItem
          key={item.title + index}
          clickHandler={setActiveIndex}
          Icon={
            <item.icon color={activeIndex === index ? '#007BFF' : '#CACEDB'} />
          }
          title={item.title}
          activeIndex={activeIndex}
          itemIndex={index}
        />
      ))}
    </Container>
  );
}
