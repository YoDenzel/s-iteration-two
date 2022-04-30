import { useState } from 'react';
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

export function AdminPanelHeader() {
  const [value, setValue] = useState('');
  const [isDropdownActive, setIsDropdownActive] = useState(true);

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
          <Dropdown>
            <MenuItem variant="text">Выйти</MenuItem>
          </Dropdown>
        )}
      </ProfileBlock>
    </Container>
  );
}
