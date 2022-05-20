import { useState } from 'react';
import { useAppDispatch } from '../../shared/custom-hooks';
import { DropdownBothWaysArrow } from '../../shared/icons/dropdown-both-ways-arrow';
import { TOptionsArr } from '../../shared/types';
import {
  Container,
  Dropdown,
  DropdownItem,
  FilterButton,
} from './emotion-components';
import { TFilterButtonComponent } from './types';

export function FilterButtonComponent({
  optionsArr,
  buttonTitle,
  activeIndex,
  selectedOption,
  dropdownItemClickhandler,
}: TFilterButtonComponent) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val?: TOptionsArr, index?: number) => {
    val && dropdownItemClickhandler(val, index);
    setAnchorEl(null);
  };
  return (
    <Container>
      <FilterButton onClick={handleClick} endIcon={<DropdownBothWaysArrow />}>
        {selectedOption || buttonTitle}
      </FilterButton>
      {(optionsArr?.length || 0) > 0 && (
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
              key={index + item.name}
              onClick={() => handleClose(item, activeIndex)}
              disableRipple
            >
              {item.name}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Container>
  );
}
