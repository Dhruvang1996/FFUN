import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createCar } from '../../services/clientApiService';
import { addNewCar } from '../../redux/reducers/addCarReducer';

const FormDialog = () => {
  const initialState = {
    make: '',
    model: '',
    year: undefined,
    price: undefined,
  };

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCar = await createCar(state);
    dispatch(addNewCar(newCar));
    setState(initialState);
    setOpen(false);
  };

  const handleChange = ({ target }) => {
    setState((oldData) => ({ ...oldData, [target.name]: target.value }));
  };

  const validateForm = () => {
    if (state.make && state.model && (state.year) && (state.price)) return false;
    return true;
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{
          color: 'black', background: '#DFA274', padding: '0.8em 2em', maxWidth: 'max-content',
        }}
        onClick={handleClickOpen}
      >
        Add New Vehicle
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Vehicle</DialogTitle>
        <DialogContent style={{ width: '15em' }}>
          <TextField
            margin="dense"
            id="make"
            name="make"
            value={state.make}
            onChange={handleChange}
            placeholder="Make"
            autoComplete="off"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="model"
            name="model"
            value={state.model}
            onChange={handleChange}
            placeholder="Model"
            autoComplete="off"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="year"
            name="year"
            value={state.year}
            onChange={handleChange}
            placeholder="Year"
            autoComplete="off"
            type="Number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            value={state.price}
            onChange={handleChange}
            placeholder="Price"
            autoComplete="off"
            type="Number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} disabled={validateForm()} color="primary">
            Add
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
