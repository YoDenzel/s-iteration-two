import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOptionsArr } from '../../shared/types';

const pointsActiveFilterData = createSlice({
  name: 'pointsActiveFilterData',
  initialState: {
    activeCityObj: null as TOptionsArr | null,
  },
  reducers: {
    removeActiveCitytFilter: state => {
      state.activeCityObj = null;
    },
    setActiveCityFilterData: (
      state,
      action: PayloadAction<{ id?: number; activeCityObj: TOptionsArr }>,
    ) => {
      switch (action.payload.id) {
        case 0: {
          state.activeCityObj = action.payload.activeCityObj;
        }
      }
    },
  },
});

export const { removeActiveCitytFilter, setActiveCityFilterData } =
  pointsActiveFilterData.actions;

export default pointsActiveFilterData.reducer;
