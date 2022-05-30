/** Service to handle recipe CRUD. */
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Recipe} from './recipe';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private readonly recipes: Recipe[] = [
    new Recipe('iron ingot', 1),
    new Recipe('iron plate', 1),
    new Recipe('wood', 1),
    new Recipe('plank', 1),
    new Recipe('gold ingot', 1),
    new Recipe('gold plate', 1),
    new Recipe('iron ingot', 1),
    new Recipe('iron plate', 1),
    new Recipe('wood', 1),
    new Recipe('plank', 1),
    new Recipe('gold ingot', 1),
    new Recipe('gold plate', 1),
  ];

  listRecipes(filter?: string): Observable<Recipe[]> {
    // Copy array so the array is readonly. Array is only modifiable by the
    // functions.
    return of(this.recipes);
  }

  getRecipe(recipeId: number): Observable<Recipe> {
    return of(this.recipes[recipeId]);
  };

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  addRecipePath(
      targetRecipe: Recipe, recipePath: number,
      recipesToAdd: Map<Recipe, number>) {
    recipesToAdd.forEach((amount, recipe) => {
      targetRecipe.addRecipeToPath(recipePath, recipe, amount);
    });
  }
}
