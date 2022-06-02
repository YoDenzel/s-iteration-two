import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import carId from './car-id/car-id';
import carOrderCheckboxData from './car-order-checkbox-data/car-order-checkbox-data';
import carsActiveFilterData from './cars-active-filter-data/cars-active-filter-data';
import orderActiveFilterData from './order-active-filter-data/order-active-filter-data';
import pointsActiveFilterData from './points-active-filter-data/points-active-filter-data';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    orderActiveFilterData: orderActiveFilterData,
    carOrderCheckboxArr: carOrderCheckboxData,
    carsActiveFilterData: carsActiveFilterData,
    pointsActiveFilterData: pointsActiveFilterData,
    carId: carId
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
