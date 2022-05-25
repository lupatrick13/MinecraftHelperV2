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
    return of(this.recipes);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
