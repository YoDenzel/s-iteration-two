import styled from '@emotion/styled';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { DropdownBothWaysArrow } from '../../shared/icons/dropdown-both-ways-arrow';
import { TOptionsArr } from '../../shared/types';
import { TFilterButtonComponent } from './types';

const FilterButton = styled(Button)`
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
  padding-top: 8px;
  padding-bottom: 8.5px;
  padding-right: 18px;
  padding-left: 18px;
  gap: 18px;
  display: flex;
  width: 120px;
  text-transform: none;
  text-align: left;
`;

const Dropdown = styled(Menu)``;

const DropdownItem = styled(MenuItem)`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #868e96;
  min-height: 24px;
  width: 120px;
`;

export function FilterButtonComponent({
  optionsArr,
  buttonTitle,
  setObj,
  selectedOption,
}: TFilterButtonComponent) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val?: TOptionsArr) => {
    val && setObj(val);
    setAnchorEl(null);
  };
  return (
    <div>
      <FilterButton onClick={handleClick} endIcon={<DropdownBothWaysArrow />}>
        {selectedOption || buttonTitle}
      </FilterButton>
      <Dropdown
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            maxHeight: 24 * 4.5,
          },
        }}
      >
        {optionsArr?.map((item, index) => (
          <DropdownItem
            key={index + item.title}
            onClick={() => handleClose(item)}
            disableRipple
          >
            {item.title}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
