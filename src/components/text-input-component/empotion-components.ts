import styled from '@emotion/styled';
import { TextField, Typography } from '@mui/material';

export const Input = styled(TextField)`
  width: 100%;
  border: 0.5px solid #becad6;
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
  font-weight: 400;
  font-size: 10.5px;
  line-height: 12px;
  color: #495057;
`;

export const Error = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  color: #c4183c;
  margin-top: 4.5px;
  margin-left: 9px;
`;
