import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

const EditCar = ({ state }) => {
  // const initialState = {
  //   make: '',
  //   model: '',
  //   year: undefined,
  //   price: undefined,
  // };

  const [open, setOpen] = useState(false);
  // const [state, setState] = useState(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    // setState(initialState);
    setOpen(false);
  };

  const handleChange = ({ target }) => {
    console.log(target);
    // setState((oldData) => ({ ...oldData, [target.name]: target.value }));
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
          border: 'none',
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Vehicle Data</DialogTitle>
        <DialogContent style={{ width: '15em' }}>
          <TextField
            margin="dense"
            id="make"
            name="make"
            value={state.make}
            onChange={handleChange}
            placeholder="Make"
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
            type="Number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            disabled={validateForm()}
            style={{
              color: 'black', background: !validateForm() ? '#DFA274' : 'lightGray', maxWidth: 'max-content',
            }}
          >
            Mark As Sold
          </Button>
          <Button
            onClick={handleClose}
            style={{
              color: 'black', background: '#DFA274', maxWidth: 'max-content',
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditCar;
