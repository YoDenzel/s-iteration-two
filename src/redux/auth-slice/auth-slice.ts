import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPostAuthResponse } from '../../shared/types';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    authObj: {} as TPostAuthResponse,
    isAuthenticated: false,
  },
  reducers: {
    setAuthObj: (
      state,
      action: PayloadAction<{ authObj: TPostAuthResponse }>,
    ) => {
      state.authObj = action.payload.authObj;
    },
    setIsAuthenticated: (
      state,
      action: PayloadAction<{ isAuthenticated: boolean }>,
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});


export const {setAuthObj, setIsAuthenticated} = authSlice.actions

export default authSlice.reducer