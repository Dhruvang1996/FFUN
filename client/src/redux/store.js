import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './reducers/addCarReducer';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
