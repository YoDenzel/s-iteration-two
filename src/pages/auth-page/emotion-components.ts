import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  background-color: #f5f6f8;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 767px) {
    background-color: #ffffff;
  }
`;

export const TitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 11px;
  margin-bottom: 17px;
  margin-top: 175px;
`;

export const Title = styled(Typography)`
  color: #3d5170;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;
