import { normalizeFilterButtonTitle } from '../../shared/functions';
import { FilterButtonComponent } from '../filter-button-component';
import {
  Wrapper,
  FilterButtonContainer,
  ApplyFilterButton,
  CancelFilterButton,
} from './emotion-components';
import { TOrdersFilterComponent } from './types';

export function OrderFilterComponent({
  filterDataArr,
  submitHandler,
  cancelButtonClickhandler,
}: TOrdersFilterComponent) {
  return (
    <Wrapper component="form" onSubmit={e => submitHandler(e)}>
      <FilterButtonContainer>
        {filterDataArr.map((item, index) => (
          <FilterButtonComponent
            key={item.title + index}
            optionsArr={item.data}
            buttonTitle={item.title}
            selectedOption={normalizeFilterButtonTitle(
              item.activeTitle?.name || '',
            )}
            activeIndex={index}
          />
        ))}
      </FilterButtonContainer>
      {cancelButtonClickhandler && (
        <CancelFilterButton onClick={() => cancelButtonClickhandler()}>
          Отменить
        </CancelFilterButton>
      )}
      <ApplyFilterButton type="submit">Применить</ApplyFilterButton>
    </Wrapper>
  );
}
