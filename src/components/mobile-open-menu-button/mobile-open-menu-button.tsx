import styled from '@emotion/styled';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TMobileOpenMenuButton } from './types';

const MenuButton = styled(Button)``;

export function MobileOpenMenuButton({ clickHandler }: TMobileOpenMenuButton) {
  return (
    <MenuButton onClick={() => clickHandler()} disableRipple>
      <MoreHorizIcon htmlColor="#889098" />
    </MenuButton>
  );
}
