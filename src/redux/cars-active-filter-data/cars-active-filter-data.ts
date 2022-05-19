import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOptionsArr } from '../../shared/types';

const carsActiveFilterData = createSlice({
  name: 'carsActiveFilterData',
  initialState: {
    activeCarCategoryObj: null as TOptionsArr | null,
  },
  reducers: {
    setActiveCarObj: (
      state,
      action: PayloadAction<{ id?: number; activeCarCategoryObj: TOptionsArr }>,
    ) => {
      switch (action.payload.id) {
        case 0: {
          state.activeCarCategoryObj = action.payload.activeCarCategoryObj;
          break;
        }
      }
    },
  },
});

export const { setActiveCarObj } = carsActiveFilterData.actions;

export default carsActiveFilterData.reducer;
