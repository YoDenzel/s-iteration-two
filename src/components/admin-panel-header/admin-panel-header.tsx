import styled from '@emotion/styled';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Icons } from '../../shared/icons';
import { Images } from '../../shared/images';

const Container = styled(Box)`
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
  display: flex;
`;

const SearchLoop = styled(Box)`
  position: relative;
  top: 29px;
  left: 29px;
`;

const SearchField = styled(TextField)`
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #121212;
  & fieldset {
    border: none;
  }
  & input {
    padding: 26px 0;
    padding-left: 51px;
    &::placeholder {
      color: #767f9d;
    }
  }
`;

const NotificationBlock = styled(Box)`
  width: 69.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5px 0px 0px #cacedb, -0.5px 0px 0px #cacedb;
`;

const ProfileBlock = styled(Box)`
  display: flex;
  align-items: center;
  padding-left: 26.5px;
  padding-right: 22.5px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 42px;
  width: 42px;
  margin-right: 13px;
`;

const ProfileTitle = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.471429px;
  color: #5a6169;
  margin-right: 26px;
`;

export function AdminPanelHeader() {
  return (
    <Container component="header">
      <SearchLoop>
        <Icons.SearchLoop />
      </SearchLoop>
      <SearchField placeholder="Поиск" />
      <NotificationBlock>
        <Icons.NotificationBell />
      </NotificationBlock>
      <ProfileBlock>
        <ProfilePicture src={Images.profilePicture} />
        <ProfileTitle typography="h2">Admin</ProfileTitle>
        <Icons.DropdownArrow />
      </ProfileBlock>
    </Container>
  );
}
