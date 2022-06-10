import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const carId = createSlice({
  name: 'carId',
  initialState: {
    carId: '6152e00d18f5c2264119b3b7' as string | null,
  },
  reducers: {
    setCarId: (state, action: PayloadAction<{ carId: null | string }>) => {
      state.carId = action.payload.carId;
    },
  },
});

export const { setCarId } = carId.actions;

export default carId.reducer;
