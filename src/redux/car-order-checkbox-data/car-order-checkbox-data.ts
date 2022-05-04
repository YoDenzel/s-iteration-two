import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const carOrderCheckboxData = createSlice({
  name: 'carOrderCheckboxData',
  initialState: {
    checkboxArr: [
      {
        title: 'Полный бак',
        isActive: false,
        price: 500,
      },
      {
        title: 'Детское кресло',
        isActive: false,
        price: 200,
      },
      {
        title: 'Правый руль',
        isActive: false,
        price: 1600,
      },
    ],
  },
  reducers: {
    setCheckboxArr: (state, action: PayloadAction<{ activeTitle: string }>) => {
      state.checkboxArr = state.checkboxArr.map(item => {
        if (item.title === action.payload.activeTitle) {
          return { ...item, isActive: !item.isActive };
        } else return item;
      });
    },
  },
});

export const { setCheckboxArr } = carOrderCheckboxData.actions;

export default carOrderCheckboxData.reducer;
