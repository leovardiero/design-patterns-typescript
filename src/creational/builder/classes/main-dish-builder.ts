import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans, Meat, Beverage, Desert } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBevarage(): this {
    const beverage = new Beverage('CocaCola', 7);
    this._meal.add(beverage);
    return this;
  }
  makeDesert(): this {
    const desert = new Desert('Pudim', 10);
    this._meal.add(desert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
