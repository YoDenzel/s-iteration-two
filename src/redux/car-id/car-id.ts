import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const carId = createSlice({
  name: 'carId',
  initialState: {
    carId: null as string | null,
  },
  reducers: {
    setCarId: (state, action: PayloadAction<{ carId: null | string }>) => {
      state.carId = action.payload.carId;
    },
  },
});

export const { setCarId } = carId.actions;

export default carId.reducer;
