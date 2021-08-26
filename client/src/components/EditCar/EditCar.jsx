import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import { updateStatus, updateCar } from '../../services/clientApiService';
import { soldCar } from '../../redux/reducers/addCarReducer';

const EditCar = ({ state }) => {
  const initialState = {
    ...state,
  };

  const [open, setOpen] = useState(false);
  const [origionalData, setOrigionalData] = useState(initialState);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (event) => {
    event.preventDefault();
    setOrigionalData((oldData) => ({ ...oldData, [event.target.name]: event.target.value }));
    const updatedCar = await updateCar(origionalData);
    dispatch(soldCar(updatedCar));
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (origionalData.status === 'Live') {
      const updatedCar = await updateStatus(origionalData);
      console.log(updatedCar);
      dispatch(soldCar(updatedCar));
    }
    setOpen(false);
  };

  const handleChange = ({ target }) => {
    setOrigionalData((oldData) => ({ ...oldData, [target.name]: target.value }));
  };

  const validateForm = () => {
    if (origionalData.make && origionalData.model
      && (origionalData.year) && (origionalData.price)) return false;
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
            value={origionalData.make}
            onChange={handleChange}
            placeholder="Make"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="model"
            name="model"
            value={origionalData.model}
            onChange={handleChange}
            placeholder="Model"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="year"
            name="year"
            value={origionalData.year}
            onChange={handleChange}
            placeholder="Year"
            type="Number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            value={origionalData.price}
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
            disabled={validateForm()}
            style={{
              color: 'black', background: !validateForm() ? '#DFA274' : 'lightGray', maxWidth: 'max-content',
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
