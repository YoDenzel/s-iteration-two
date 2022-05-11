import { Icons } from '../../shared/icons';
import { MobileOpenMenuButton } from '../mobile-open-menu-button';
import { NavigationMenuItem } from '../navigation-menu-item';
import { menuTabsDataArr } from './constants';
import {
  Container,
  ApplicationTitleContainer,
  ApplicationTitleWrapper,
  Title,
  TabsContainer,
} from './emotion-components';
import { TNavigationMen } from './types';

export function NavigationMenu({
  activeIndex,
  setActiveIndex,
  isMenuActive,
  setIsMenuActive,
  windowWidth,
  mobileMenuRef,
}: TNavigationMen) {
  return (
    <Container component="nav" ref={mobileMenuRef}>
      <ApplicationTitleWrapper>
        <ApplicationTitleContainer>
          <Icons.NeedForDriveLogo />
          <Title>Need for car</Title>
        </ApplicationTitleContainer>
        {windowWidth < 1024 && (
          <MobileOpenMenuButton
            clickHandler={() => setIsMenuActive(!isMenuActive)}
          />
        )}
      </ApplicationTitleWrapper>
      {isMenuActive && (
        <TabsContainer>
          {menuTabsDataArr.map((item, index) => (
            <NavigationMenuItem
              key={item.title + index}
              clickHandler={setActiveIndex}
              Icon={
                <item.icon
                  color={activeIndex === index ? '#007BFF' : '#CACEDB'}
                />
              }
              title={item.title}
              activeIndex={activeIndex}
              itemIndex={index}
            />
          ))}
        </TabsContainer>
      )}
    </Container>
  );
}
