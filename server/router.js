const router = require('express').Router();

const carsController = require('./controller/carsController');

router.get('/', carsController.getAllCars);
router.post('/', carsController.createCar);
router.put('/', carsController.updateCar);
router.delete('/', carsController.deleteCar);

module.exports = router;
