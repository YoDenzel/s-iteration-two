import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { FilterButtonComponent } from '../filter-button-component';
import { TOrdersFilterComponent } from './types';

const Wrapper = styled(Box)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  padding: 16px 0px 14px 21px;
  box-shadow: 0px -0.5px 0px #e0e2e8, 0px 0.5px 0px #e0e2e8;
  justify-content: space-between;
  border-radius: inherit;
`;

const FilterButtonContainer = styled(Box)`
  display: flex;
  gap: 15px;
`;

const ApplyFilterButton = styled(Button)`
  font-family: 'Helvetica';
  font-style: normal;
  background: #007bff;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #ffffff;
  text-transform: none;
  &:hover {
    background: #007bff;
  }
  margin-right: 21px;
  padding: 8px 15px 8.5px 15px;
  border-radius: 4px;
`;

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
            setObj={item.setActiveObj}
          />
        ))}
      </FilterButtonContainer>
      <ApplyFilterButton type="submit">Применить</ApplyFilterButton>
    </Wrapper>
  );
}
