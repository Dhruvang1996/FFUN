import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableList from '../TableList/TableList';
import { getCars } from '../../services/clientApiService';
import { setCars } from '../../redux/reducers/addCarReducer';

const Table = () => {
  const dispatch = useDispatch();
  const allCars = useSelector((state) => state.cars);
  useEffect(() => {
    getCars().then((res) => {
      dispatch(setCars(res));
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '4vh' }}>
      { allCars.cars.length ? <TableList allCars={allCars.cars} /> : <h2>No Cars To Show</h2>}
    </div>
  );
};

export default Table;
