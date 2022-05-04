import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import carOrderCheckboxData from './car-order-checkbox-data/car-order-checkbox-data';
import filterActiveData from './filter-active-data/filter-active-data';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    filterActiveData: filterActiveData,
    carOrderCheckboxArr: carOrderCheckboxData,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
