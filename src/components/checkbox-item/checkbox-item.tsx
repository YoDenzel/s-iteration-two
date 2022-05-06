import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { setCheckboxArr } from '../../redux/car-order-checkbox-data/car-order-checkbox-data';
import { useAppDispatch } from '../../shared/custom-hooks';
import { Icons } from '../../shared/icons';
import { TButtonTitle, TCheckboxItem } from './types';

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8.5px;
`;

const Checkbox = styled.span`
  border: 0.5px solid #becad6;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTitle = styled(({ isActive, children, ...props }: TButtonTitle) => (
  <Typography {...props}>{children}</Typography>
))`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.175439px;
  color: ${props => (props.isActive ? '#121212' : '#999999')};
  text-align: left;
`;

export function CheckboxItem({ isActive, title }: TCheckboxItem) {
  const dispatch = useAppDispatch();
  return (
    <Container
      onClick={() =>
        dispatch(
          setCheckboxArr({
            activeTitle: title,
          }),
        )
      }
    >
      <Checkbox>{isActive && <Icons.CheckMark />}</Checkbox>
      <ButtonTitle isActive={isActive}>{title}</ButtonTitle>
    </Container>
  );
}
