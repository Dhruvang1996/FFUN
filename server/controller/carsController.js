const CarsTable = require('../models/Cars');

exports.getAllCars = async (req, res) => {
  try {
    const cars = await CarsTable.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createCar = async (req, res) => {
  try {
    const cars = await CarsTable.create(req.body);
    res.status(201).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const cars = await CarsTable.findByIdAndUpdate(req.body._id, req.body, { new: true });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const cars = await CarsTable.findByIdAndDelete(req.body._id);
    res.status(202).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
