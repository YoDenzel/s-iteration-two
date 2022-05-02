import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

export const Container = styled(Button)`
  display: flex;
  gap: 14px;
  box-shadow: inset 0px -1px 0px #e1e5eb;
  justify-content: flex-start;
  padding-left: 28px;
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  padding: 20px 0;
`;
