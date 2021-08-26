import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditCar from '../EditCar/EditCar';

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
    width: 'auto',
  },
});

export default function BasicTable({ allCars }) {
  const classes = useStyles();
  return (
    <TableContainer style={{ maxWidth: '600px' }} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={100}>No</TableCell>
            <TableCell width={100} align="center">Model</TableCell>
            <TableCell width={100} align="center">Make</TableCell>
            <TableCell width={100} align="center">Year</TableCell>
            <TableCell width={100} align="center">Price</TableCell>
            <TableCell width={100} align="center">Status</TableCell>
            <TableCell width={100} align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCars.map((car, index) => (
            <TableRow key={car._id}>
              <TableCell width={100} component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell width={100} align="center">{car.make}</TableCell>
              <TableCell width={100} align="center">{car.model}</TableCell>
              <TableCell width={100} align="center">{car.year}</TableCell>
              <TableCell width={100} align="center">
                <span>$</span>
                {car.price}
              </TableCell>
              <TableCell width={100} align="center">{car.status}</TableCell>
              <TableCell width={100} align="center">
                <EditCar state={car} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
