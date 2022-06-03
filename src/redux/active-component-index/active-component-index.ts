import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const activeComponentIndex = createSlice({
  name: 'activeComponentIndex',
  initialState: {
    activeComponentIndex: 0,
  },
  reducers: {
    setActiveComponentIndex: (
      state,
      action: PayloadAction<{ activeComponentIndex: number }>,
    ) => {
        state.activeComponentIndex = action.payload.activeComponentIndex
    },
  },
});

export const {setActiveComponentIndex} = activeComponentIndex.actions

export default activeComponentIndex.reducer