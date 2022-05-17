import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const Container = styled(Box)`
  padding-bottom: ${({ theme }) => theme.spacing(1.2)}px;
  padding-top: ${({ theme }) => theme.spacing(0.5)}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -0.5px 0px #e0e2e8, 0px 0.5px 0px #e0e2e8;
`;

export const PrevPage = styled(Button)<{ isactive: number }>`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 3px;
  text-align: center;
  display: inline-flex;
  border: 1px solid transparent;
  padding: 0px 6px;
  border-radius: 50%;
  cursor: ${({ isactive }) => (isactive ? 'pointer' : 'default')};
  min-width: unset;
  &:hover {
    border-radius: 50%;
    border: ${({ isactive }) => (isactive ? '1px solid #007BFF' : '0px')};
  }
`;

export const Dots = styled(Box)`
  margin-bottom: 5px;
  align-self: flex-end;
  height: auto;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  margin: 0 3px;
  color: var(--black);
  text-align: center;
  bottom: 11px;
`;

export const PaginationItem = styled(Button)<{ isactive: number }>`
  min-width: unset;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 3px;
  color: ${({ isactive }) => (isactive ? '#ffffff' : ' #007BFF')};
  text-align: center;
  display: inline-flex;
  width: 40px;
  height: 40px;
  padding: 0px 6px;
  background-color: ${({ isactive }) => (isactive ? ' #007BFF' : 'none')};
  border-radius: 50%;
  &:hover {
    background-color: ${({ isactive }) => (isactive ? '#007BFF' : 'none')};
  }
`;

export const NextPage = styled(Button)<{ isactive: number }>`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 3px;
  text-align: center;
  display: inline-flex;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 0px 6px;
  cursor: ${({ isactive }) => (isactive ? 'pointer' : 'default')};
  min-width: unset;
  &:hover {
    border-radius: 50%;
    border: ${({ isactive }) => (isactive ? '1px solid #007BFF' : '0px')};
  }
  transform: rotate(180deg);
  min-width: unset;
`;
