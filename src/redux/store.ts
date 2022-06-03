import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import activeComponentIndex from './active-component-index/active-component-index';
import authSlice from './auth-slice/auth-slice';
import carId from './car-id/car-id';
import carOrderCheckboxData from './car-order-checkbox-data/car-order-checkbox-data';
import carsActiveFilterData from './cars-active-filter-data/cars-active-filter-data';
import orderActiveFilterData from './order-active-filter-data/order-active-filter-data';
import pointsActiveFilterData from './points-active-filter-data/points-active-filter-data';

const persistConfig = {
  key: 'activeComponentIndex',
  version: 1,
  storage,
  whitelist: ['activeComponentIndex'],
};

const rootReducer = combineReducers({
  authSlice: authSlice,
  orderActiveFilterData: orderActiveFilterData,
  carOrderCheckboxArr: carOrderCheckboxData,
  carsActiveFilterData: carsActiveFilterData,
  pointsActiveFilterData: pointsActiveFilterData,
  carId: carId,
  activeComponentIndex: activeComponentIndex,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
