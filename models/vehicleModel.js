import fs from 'fs';

const filePath = './data/vehicles.json';

class VehicleModel {
  static getAll() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
  }

  static saveAll(vehicles) {
    fs.writeFileSync(filePath, JSON.stringify(vehicles, null, 2));
  }

  static create(vehicle) {
    const vehicles = this.getAll();
    vehicles.push(vehicle);
    this.saveAll(vehicles);
  }

  static findById(id) {
    const vehicles = this.getAll();
    return vehicles.find(v => v.id === id);
  }

  static update(id, updatedVehicle) {
    let vehicles = this.getAll();
    vehicles = vehicles.map(v => (v.id === id ? updatedVehicle : v));
    this.saveAll(vehicles);
  }

  static delete(id) {
    let vehicles = this.getAll();
    vehicles = vehicles.filter(v => v.id !== id);
    this.saveAll(vehicles);
  }
}

export default VehicleModel;
