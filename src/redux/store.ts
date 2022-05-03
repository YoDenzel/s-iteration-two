import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import filterActiveData from './filter-active-data/filter-active-data';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    filterActiveData: filterActiveData,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
