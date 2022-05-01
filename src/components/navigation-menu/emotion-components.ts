import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 285px;
  background-color: #ffffff;
  height: 100vh;
  box-shadow: 0px 1px 75px rgba(90, 97, 105, 0.11),
    0px 2px 4px rgba(90, 97, 105, 0.12), 0px 7.5px 11px rgba(90, 97, 105, 0.1),
    0px 3.5px 17.5px rgba(165, 182, 201, 0.1);
  z-index: 1;
`;

export const ApplicationTitleWrapper = styled(Box)`
  width: 100%;
  box-shadow: 0px 1px 0px #e1e5eb;
`;

export const ApplicationTitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 15px 0;
  padding-left: 49px;
`;

export const Title = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #3d5170;
`;
