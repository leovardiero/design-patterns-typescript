import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDesert();
console.log(mainDishBuilder.getMeal());
