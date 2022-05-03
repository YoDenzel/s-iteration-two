import { useState } from 'react';
import { DropdownBothWaysArrow } from '../../shared/icons/dropdown-both-ways-arrow';
import { TOptionsArr } from '../../shared/types';
import { Dropdown, DropdownItem, FilterButton } from './emotion-components';
import { TFilterButtonComponent } from './types';

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
    val && setObj && setObj(val);
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
            key={index + item.name}
            onClick={() => handleClose(item)}
            disableRipple
          >
            {item.name}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
