import { setCheckboxArr } from '../../redux/car-order-checkbox-data/car-order-checkbox-data';
import { useAppDispatch } from '../../shared/custom-hooks';
import { Icons } from '../../shared/icons';
import { Checkbox, ButtonTitle, Container } from './emotion-components';
import { TCheckboxItem } from './types';

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
      {/* из-за какой то ошибки в эмоушне пришлось заюзать такой костыль */}
      <ButtonTitle active={isActive ? 1 : 0}>{title}</ButtonTitle>
    </Container>
  );
}
