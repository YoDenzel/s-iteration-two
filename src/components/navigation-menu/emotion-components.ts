import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 255px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
`;

export const ApplicationTitleWrapper = styled(Box)`
  width: 100%;
  box-shadow: 0px 1px 0px #e1e5eb;
`;

export const ApplicationTitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)}px;
  padding: 23px 0;
  padding-left: 49px;
`;

export const Title = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.titleFont};
`;
