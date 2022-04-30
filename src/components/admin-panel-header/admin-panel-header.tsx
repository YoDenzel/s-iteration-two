import { useState } from 'react';
import { useClickOutside } from '../../shared/custom-hooks';
import { Icons } from '../../shared/icons';
import { Images } from '../../shared/images';
import {
  Container,
  Dropdown,
  MenuItem,
  NotificationBlock,
  OpenDropdown,
  ProfileBlock,
  ProfileFlexWrapper,
  ProfilePicture,
  ProfileTitle,
  SearchField,
  SearchLoop,
} from './emotion-components';
import { TAdminPanelHeader } from './types';

export function AdminPanelHeader({ logoutClickhandler }: TAdminPanelHeader) {
  const [value, setValue] = useState('');
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() =>
    setIsDropdownActive(false),
  );

  return (
    <Container component="header">
      <SearchLoop>
        <Icons.SearchLoop />
      </SearchLoop>
      <SearchField
        variant="outlined"
        value={value}
        type="text"
        onChange={e => setValue(e.target.value)}
        placeholder="Поиск"
        inputProps={{
          autoComplete: 'off',
        }}
      />
      <NotificationBlock>
        <Icons.NotificationBell />
      </NotificationBlock>
      <ProfileBlock>
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
          <Dropdown component="ul" ref={dropdownRef}>
            <MenuItem variant="text" onClick={() => logoutClickhandler()}>
              Выйти
            </MenuItem>
          </Dropdown>
        )}
      </ProfileBlock>
    </Container>
  );
}
