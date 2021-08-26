import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from 'material-ui-search-bar';
import AddNewVehicle from '../AddNewVehicle/AddNewVehicle';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '7vh',
    width: '88vw',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'lightGray', height: '7vh', padding: '0 2em' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <AddNewVehicle />
          <SearchBar style={{ width: '25vw' }} placeholder="Search..." />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
