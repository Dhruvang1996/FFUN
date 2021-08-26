import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
  },
  reducers: {
    addNewCar(state, action) {
      console.log(state, 'state111');
      console.log(action, 'action111111');
      return state.cars.push(action.payload);
    },
    setCars(state, action) {
      console.log(state, 'state');
      console.log(action, 'action');
      return state.cars.concat(action.payload);
    },
  },
});

export const { addNewCar, setCars } = carsSlice.actions;

export default carsSlice.reducer;
