const VehicleModel = require('../models/vehicleModel');

exports.getAllVehicles = (req, res) => {
  res.json(VehicleModel.getAll());
};

exports.createVehicle = (req, res) => {
  const vehicle = req.body;
  VehicleModel.create(vehicle);
  res.status(201).json(vehicle);
};

exports.getVehicleById = (req, res) => {
  const vehicle = VehicleModel.findById(req.params.id);
  if (vehicle) res.json(vehicle);
  else res.status(404).json({ message: 'Vehicle not found' });
};

exports.updateVehicle = (req, res) => {
  const vehicle = VehicleModel.findById(req.params.id);
  if (vehicle) {
    VehicleModel.update(req.params.id, req.body);
    res.json(req.body);
  } else {
    res.status(404).json({ message: 'Vehicle not found' });
  }
};

exports.deleteVehicle = (req, res) => {
  VehicleModel.delete(req.params.id);
  res.status(204).send();
};
