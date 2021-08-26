const router = require('express').Router();

const carsController = require('./controller/carsController');

router.get('/', carsController.getAllCars);
router.post('/', carsController.createCar);
router.put('/updateStatus', carsController.updateStatus);
router.put('/updateCar', carsController.updateCar);
router.delete('/', carsController.deleteCar);

module.exports = router;
