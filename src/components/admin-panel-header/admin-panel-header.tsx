import { Icons } from '../../shared/icons';
import { Images } from '../../shared/images';
import {
  Container,
  Dropdown,
  FlexWrapper,
  Icon,
  MenuItem,
  NotificationBlock,
  NotificationCount,
  OpenDropdown,
  ProfileBlock,
  ProfileFlexWrapper,
  ProfilePicture,
  ProfileTitle,
  SearchField,
  SearchLoop,
  TabletHeaderPanel,
} from './emotion-components';
import { TAdminPanelHeader } from './types';

export function AdminPanelHeader({
  logoutClickhandler,
  dropdownRef,
  isDropdownActive,
  searchValue,
  setIsDropdownActive,
  setSearchValue,
}: TAdminPanelHeader) {
  return (
    <FlexWrapper>
      <TabletHeaderPanel />
      <Container component="header">
        <SearchLoop>
          <Icons.SearchLoop />
        </SearchLoop>
        <SearchField
          variant="outlined"
          value={searchValue}
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Поиск"
          inputProps={{
            autoComplete: 'off',
          }}
        />
        <NotificationBlock>
          <Icon>
            <Icons.NotificationBell />
          </Icon>
          <NotificationCount>2</NotificationCount>
        </NotificationBlock>
        <ProfileBlock ref={dropdownRef}>
          <ProfileFlexWrapper>
            <ProfilePicture src={Images.profilePicture} />
            <ProfileTitle typography="h2">Admin</ProfileTitle>
            <OpenDropdown
              variant="text"
              disableRipple
              onClick={() => setIsDropdownActive(!isDropdownActive)}
              startIcon={<Icons.DropdownArrow />}
            />
          </ProfileFlexWrapper>
          {isDropdownActive && (
            <Dropdown component="ul">
              <MenuItem variant="text" onClick={() => logoutClickhandler()}>
                Выйти
              </MenuItem>
            </Dropdown>
          )}
        </ProfileBlock>
      </Container>
    </FlexWrapper>
  );
}
