import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';

export const Container = styled(Box)`
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
  display: flex;
  justify-content: flex-end;
`;

export const SearchLoop = styled(Box)`
  position: relative;
  top: 29px;
  left: 29px;
`;

export const SearchField = styled(TextField)`
  flex: 1;
  font-family: 'Helvetica';
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
    padding-left: ${({ theme }) => theme.spacing(5)}px;
    &::placeholder {
      color: #767f9d;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      padding-right: ${({ theme }) => theme.spacing(1.5)}px;
    }
  }
`;

export const NotificationBlock = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5px 0px 0px #cacedb, -0.5px 0px 0px #cacedb;
  padding: 0 35px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing(2)}px;
  }
  @media (max-width: 305px) {
    display: none;
  }
`;

export const Icon = styled(Box)`
  position: relative;
  left: 4px;
`;

export const NotificationCount = styled(Box)`
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 14px;
  color: #ffffff;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #c4183c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 8px;
`;

export const ProfileFlexWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileBlock = styled(Box)`
  display: flex;
  align-items: center;
  padding-left: 26.5px;
  padding-right: 22.5px;
  flex-direction: column;
  justify-content: center;
  margin-right: 4px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-left: ${({ theme }) => theme.spacing(1.5)}px;
    padding-right: 0;
    margin-right: 0;
  }
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 42px;
  width: 42px;
  margin-right: 13px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 0;
  }
`;

export const ProfileTitle = styled(Typography)`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.471429px;
  color: #5a6169;
  margin-right: 26px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: none;
  }
`;

export const OpenDropdown = styled(Button)`
  &:hover {
    background: none;
  }
`;

export const Dropdown = styled(Box)`
  position: absolute;
  top: 59px;
  background-color: white;
  width: 185px;
  padding-left: 24px;
  padding-right: 29px;
  box-shadow: 1.5px 1px 1px #cacedb, -0.5px 0px 0px #cacedb;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    left: 0;
    margin-right: 0;
    padding-right: 0;
    width: 100%;
    top: 133px;
    padding: 0;
  }
`;

export const MenuItem = styled(Button)`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  text-align: center;
  width: 100%;
  color: #121212;
  padding: 10px 40px;
  margin: 8px 0;
`;

export const FlexWrapper = styled(Box)`
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-wrap: wrap;
  }
`;

export const TabletHeaderPanel = styled(Box)`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 165px;
    height: 75px;
    display: block;
  }
`;
