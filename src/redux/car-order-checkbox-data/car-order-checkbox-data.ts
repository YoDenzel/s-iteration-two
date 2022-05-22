import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSetCheckboxesStatus } from './types';

export const carOrderCheckboxData = createSlice({
  name: 'carOrderCheckboxData',
  initialState: {
    checkboxArr: [
      {
        title: 'Полный бак',
        isActive: null as boolean | null,
        price: 500,
      },
      {
        title: 'Детское кресло',
        isActive: null as boolean | null,
        price: 200,
      },
      {
        title: 'Правый руль',
        isActive: null as boolean | null,
        price: 1600,
      },
    ],
  },
  reducers: {
    setCheckboxesStatus: (
      state,
      action: PayloadAction<TSetCheckboxesStatus>,
    ) => {
      (state.checkboxArr[0].isActive = action.payload.isTankFull),
        (state.checkboxArr[1].isActive = action.payload.isChildChair);
      state.checkboxArr[2].isActive = action.payload.isRightWheel;
    },
    setCheckboxArr: (state, action: PayloadAction<{ activeTitle: string }>) => {
      state.checkboxArr = state.checkboxArr.map(item => {
        if (item.title === action.payload.activeTitle) {
          return { ...item, isActive: !item.isActive };
        } else return item;
      });
    },
  },
});

export const { setCheckboxArr, setCheckboxesStatus } =
  carOrderCheckboxData.actions;

export default carOrderCheckboxData.reducer;
