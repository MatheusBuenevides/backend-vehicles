import fs from 'fs';
import path from 'path';
import { default as VehicleModel } from '../models/vehicleModel.js';

let chai;
let expect;

// Importa Chai dinamicamente no início do teste
before(async () => {
  chai = await import('chai');
  expect = chai.expect;
});

// Defina o caminho do arquivo de dados
const filePath = './data/vehicles.json';

describe('VehicleModel', () => {

  beforeEach(() => {
    // Verifica se o diretório 'data' existe, caso contrário, cria o diretório
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Limpa os dados antes de cada teste
    fs.writeFileSync(filePath, '[]');
  });

  it('should create a vehicle', () => {
    const vehicle = {
      id: '1', 
      placa: 'ABC-1234', 
      chassi: '123456', 
      renavam: '654321', 
      modelo: 'Model X', 
      marca: 'Tesla', 
      ano: 2021
    };
    VehicleModel.create(vehicle);
    const allVehicles = VehicleModel.getAll();
    expect(allVehicles).to.deep.include(vehicle);
  });

  it('should get all vehicles', () => {
    const vehicle1 = {
      id: '1', 
      placa: 'ABC-1234', 
      chassi: '123456', 
      renavam: '654321', 
      modelo: 'Model X', 
      marca: 'Tesla', 
      ano: 2021
    };
    const vehicle2 = {
      id: '2', 
      placa: 'DEF-5678', 
      chassi: '789012', 
      renavam: '987654', 
      modelo: 'Model S', 
      marca: 'Tesla', 
      ano: 2020
    };

    VehicleModel.create(vehicle1);
    VehicleModel.create(vehicle2);

    const allVehicles = VehicleModel.getAll();
    expect(allVehicles).to.have.lengthOf(2);
    expect(allVehicles).to.deep.include(vehicle1);
    expect(allVehicles).to.deep.include(vehicle2);
  });

  it('should find a vehicle by id', () => {
    const vehicle = {
      id: '1', 
      placa: 'ABC-1234', 
      chassi: '123456', 
      renavam: '654321', 
      modelo: 'Model X', 
      marca: 'Tesla', 
      ano: 2021
    };

    VehicleModel.create(vehicle);

    const foundVehicle = VehicleModel.findById('1');
    expect(foundVehicle).to.deep.equal(vehicle);
  });

  it('should update a vehicle by id', () => {
    const vehicle = {
      id: '1', 
      placa: 'ABC-1234', 
      chassi: '123456', 
      renavam: '654321', 
      modelo: 'Model X', 
      marca: 'Tesla', 
      ano: 2021
    };

    const updatedVehicle = {
      id: '1', 
      placa: 'XYZ-9876', 
      chassi: '654321', 
      renavam: '123456', 
      modelo: 'Model 3', 
      marca: 'Tesla', 
      ano: 2022
    };

    VehicleModel.create(vehicle);
    VehicleModel.update('1', updatedVehicle);

    const allVehicles = VehicleModel.getAll();
    expect(allVehicles).to.have.lengthOf(1);
    expect(allVehicles[0]).to.deep.equal(updatedVehicle);
  });

  it('should delete a vehicle by id', () => {
    const vehicle1 = {
      id: '1', 
      placa: 'ABC-1234', 
      chassi: '123456', 
      renavam: '654321', 
      modelo: 'Model X', 
      marca: 'Tesla', 
      ano: 2021
    };

    const vehicle2 = {
      id: '2', 
      placa: 'DEF-5678', 
      chassi: '789012', 
      renavam: '987654', 
      modelo: 'Model S', 
      marca: 'Tesla', 
      ano: 2020
    };

    VehicleModel.create(vehicle1);
    VehicleModel.create(vehicle2);

    VehicleModel.delete('1');

    const allVehicles = VehicleModel.getAll();
    expect(allVehicles).to.have.lengthOf(1);
    expect(allVehicles[0]).to.deep.equal(vehicle2);
  });

});
