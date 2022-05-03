import { FilterButtonComponent } from '../filter-button-component';
import {
  Wrapper,
  FilterButtonContainer,
  ApplyFilterButton,
} from './emotion-components';
import { TOrdersFilterComponent } from './types';

export function OrderFilterComponent({
  filterDataArr,
  submitHandler,
}: TOrdersFilterComponent) {
  return (
    <Wrapper component="form" onSubmit={e => submitHandler(e)}>
      <FilterButtonContainer>
        {filterDataArr.map((item, index) => (
          <FilterButtonComponent
            key={item.title + index}
            optionsArr={item.data}
            buttonTitle={item.title}
            selectedOption={item.activeTitle?.name}
            activeIndex={index}
          />
        ))}
      </FilterButtonContainer>
      <ApplyFilterButton type="submit">Применить</ApplyFilterButton>
    </Wrapper>
  );
}
