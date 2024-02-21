import { BicycleFactory } from './factories/bicycle-factory';
import { CarFactory } from './factories/car-factory';
import { randomNumber } from './utils/random-numbers';
import { Vehicle } from './vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const car3 = carFactory.getVehicle('Gol');
  const bike1 = bicycleFactory.getVehicle('Bike1');
  const bike2 = bicycleFactory.getVehicle('Bike2');
  const bike3 = bicycleFactory.getVehicle('Bike3');

  const vehicles = [car1, car2, car3, bike1, bike2, bike3];

  return vehicles[randomNumber(vehicles.length)];
}
