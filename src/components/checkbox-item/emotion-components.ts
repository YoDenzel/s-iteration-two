import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8.5px;
`;

export const Checkbox = styled.span`
  border: 0.5px solid #becad6;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled(Typography)<{ active: number }>`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.175439px;
  color: ${({ active }) => (active ? '#121212' : '#999999')};
  text-align: left;
`;
