import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from 'material-ui-search-bar';
import AddNewVehicle from '../AddNewVehicle/AddNewVehicle';
import { setCars } from '../../redux/reducers/addCarReducer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '7vh',
    width: '88vw',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [holdingOrigionalState, setHoldingOrigionalState] = useState([]);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  const allCars = useSelector((state) => state.cars);
  let filterArray;

  const onChange = (event) => {
    if (flag) {
      setHoldingOrigionalState([...allCars.cars]);
      filterArray = allCars.cars;
    }
    if (holdingOrigionalState.length) filterArray = holdingOrigionalState;
    if (event.trim() !== '') {
      setFlag(false);
      const temp = filterArray.map((car) => ((JSON.stringify(Object.values(car))
        .toLocaleLowerCase())));
      const indexOfAll = (arr, val) => arr
        .reduce((acc, el, i) => (el.includes(val) ? [...acc, i] : acc), []);
      const temp1 = indexOfAll(temp, event.toLocaleLowerCase()).map((index) => filterArray[index]);
      dispatch(setCars(temp1));
    } else {
      dispatch(setCars(holdingOrigionalState));
      setFlag(true);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'lightGray', height: '7vh', padding: '0 2em' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <AddNewVehicle />
          <SearchBar style={{ width: '25vw' }} placeholder="Search..." onChange={onChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
