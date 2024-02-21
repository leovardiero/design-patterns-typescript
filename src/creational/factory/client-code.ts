import { randomCarAlgorithm } from './random-car-algorithm';
import { randomNumber } from './utils/random-numbers';

const customerNames = ['Leo', 'Pedro', 'Marcos', 'Fernando', 'Rafael'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumber(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
