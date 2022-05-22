import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOptionsArr } from '../../shared/types';

export const filterActiveData = createSlice({
  name: 'fiterActiveData',
  initialState: {
    activeRateObj: null as TOptionsArr | null,
    activeCitiesObj: null as TOptionsArr | null,
    activeCarObj: null as TOptionsArr | null,
    activeStatusObj: null as TOptionsArr | null,
  },
  reducers: {
    setActiveObj: (
      state,
      action: PayloadAction<{ id?: number; activeObj: TOptionsArr }>,
    ) => {
      switch (action.payload.id) {
        case 0: {
          state.activeRateObj = action.payload.activeObj;
          break;
        }
        case 1: {
          state.activeCitiesObj = action.payload.activeObj;
          break;
        }
        case 2: {
          state.activeStatusObj = action.payload.activeObj;
          break;
        }
        case 3: {
          state.activeCarObj = action.payload.activeObj;
          break;
        }
        default: {
          break;
        }
      }
    },
  },
});

export const { setActiveObj } = filterActiveData.actions;

export default filterActiveData.reducer;
