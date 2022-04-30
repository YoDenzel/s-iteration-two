import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';

export const Container = styled(Box)`
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
  display: flex;
`;

export const SearchLoop = styled(Box)`
  position: relative;
  top: 29px;
  left: 29px;
`;

export const SearchField = styled(TextField)`
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
    padding-left: 42px;
    &::placeholder {
      color: #767f9d;
    }
  }
`;

export const NotificationBlock = styled(Box)`
  width: 69.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5px 0px 0px #cacedb, -0.5px 0px 0px #cacedb;
`;

export const ProfileBlock = styled(Box)`
  display: flex;
  align-items: center;
  padding-left: 26.5px;
  padding-right: 22.5px;
  flex-direction: column;
  justify-content: center;
  margin-right: 4px;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 42px;
  width: 42px;
  margin-right: 13px;
`;

export const ProfileTitle = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.471429px;
  color: #5a6169;
  margin-right: 26px;
`;

export const OpenDropdown = styled(Button)`
  &:hover {
    background: none;
  }
`;

export const ProfileFlexWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dropdown = styled(Box)`
  position: absolute;
  top: 75px;
  background-color: white;
  width: 185px;
  padding-left: 24px;
  padding-right: 29px;
  box-shadow: 1.5px 1px 1px #cacedb, -0.5px 0px 0px #cacedb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled(Button)`
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  text-align: center;
  width: 100%;
  color: #121212;
  padding: 10px 40px;
  margin: 8px 0;
`;
