import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
  },
  reducers: {
    addNewCar: (state, action) => {
      return { ...state, cars: state.cars.concat([action.payload]) };
    },
    setCars: (state, action) => {
      return { ...state, cars: action.payload };
    },
    soldCar(state, action) {
      const index = state.cars.findIndex((findCar) => findCar._id === action.payload._id);
      state.cars.splice(index, 1, action.payload);
    },
  },
});

export const { addNewCar, setCars, soldCar } = carsSlice.actions;

export default carsSlice.reducer;
