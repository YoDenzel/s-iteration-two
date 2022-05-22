import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  font-family: 'Helvetica';
  color: ${({ theme }) => theme.colors.titleFont};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;
