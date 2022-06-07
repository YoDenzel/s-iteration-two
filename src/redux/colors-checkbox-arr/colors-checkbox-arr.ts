import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TColorItem } from './types';

const colorsCheckboxArr = createSlice({
  name: 'colorsCheckboxArr',
  initialState: {
    colorsArr: [] as TColorItem[],
  },
  reducers: {
    setInitialColorsCheckboxArr: (
      state,
      action: PayloadAction<{ titles: string[] }>,
    ) => {
      state.colorsArr = action.payload.titles.map(item => ({
        title: item,
        isActive: true,
      }));
    },
    setColorCheckboxIsActive: (
      state,
      action: PayloadAction<{ activeTitle: string }>,
    ) => {
      state.colorsArr = state.colorsArr.map(item => {
        if (item.title === action.payload.activeTitle) {
          return { ...item, isActive: !item.isActive };
        } else return item;
      });
    },
    addColor: (state, action: PayloadAction<{ colorObj: TColorItem }>) => {
      state.colorsArr = state.colorsArr.concat(action.payload.colorObj);
    },
  },
});

export const {
  setInitialColorsCheckboxArr,
  setColorCheckboxIsActive,
  addColor,
} = colorsCheckboxArr.actions;

export default colorsCheckboxArr.reducer;
