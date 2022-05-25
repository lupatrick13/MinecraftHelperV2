import {TestBed} from '@angular/core/testing';

import {Recipe} from './recipe';

describe('Recipe class', () => {
  let recipe: Recipe;

  const recipes: Recipe[] = [
    new Recipe('iron ingot', 1),
    new Recipe('iron plate', 1),
    new Recipe('iron block', 1),
  ];

  it('should save recipes', () => {
    const recipe = new Recipe('test', 1);
    recipe.addComponent(0, 1, 10);
    recipe.addComponent(0, 0, 2);
    const recipePath = recipe.getRecipePath(0);
    for (const [key, value] of Array.from(recipePath)) {
      console.log(recipes[key].name, value * recipes[key].craft_amt);
    }
  });
});
