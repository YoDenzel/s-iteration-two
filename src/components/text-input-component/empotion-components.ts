import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@mui/material';

export const Container = styled(Box)<{ flx?: string }>`
  flex: ${({ flx }) => flx || '100%'};
`;

export const Input = styled(TextField)`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 4px;
  margin-top: 8px;
  padding: 0;
  & fieldset {
    border: none;
  }
  & fieldset:hover {
    border: none;
  }
  & input {
    padding: 8px 7px 8.5px 11px;
  }
`;

export const InputTitle = styled(Typography)`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 10.5px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Error = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  color: ${({ theme }) => theme.colors.red};
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
  margin-left: ${({ theme }) => theme.spacing(1.125)}px;
`;
