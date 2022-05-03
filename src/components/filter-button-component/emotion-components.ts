import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';

export const FilterButton = styled(Button)`
  background: #ffffff;
  border: 0.5px solid #becad6;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #868e96;
  &:hover {
    background-color: #ffffff;
  }
  padding: 8px 18px 8.5px 18px;
  justify-content: space-between;
  text-align: left;
  display: flex;
  width: 120px;
  text-transform: none;
`;

export const Dropdown = styled(Menu)``;

export const DropdownItem = styled(MenuItem)`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #868e96;
  min-height: 24px;
  width: 120px;
`;
