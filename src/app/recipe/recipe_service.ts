/** Service to handle recipe CRUD. */
import {Injectable} from '@angular/core';
import {map, Observable, of, startWith, Subject} from 'rxjs';

import {Recipe} from './recipe';
import {VANILLA_ITEMS} from './vanilla_items';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private readonly addRequest$ = new Subject<void>();
  private readonly recipes: Recipe[] =
      VANILLA_ITEMS.map(item => new Recipe(item, 1));

  listRecipes(filter?: string): Observable<Recipe[]> {
    return this.addRequest$.asObservable().pipe(
        startWith(null),
        map(() => this.recipes.filter(
                recipe =>
                    recipe.name.toLowerCase().includes(filter ? filter : ''))),
    );
  }

  getRecipe(recipeId: number): Observable<Recipe> {
    return of(this.recipes[recipeId]);
  };

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipes.sort((a, b) => a.name > b.name ? 1 : -1);
    this.addRequest$.next(null);
  }

  addRecipePath(
      targetRecipe: Recipe, recipePath: number,
      recipesToAdd: Map<Recipe, number>) {
    recipesToAdd.forEach((amount, recipe) => {
      targetRecipe.addRecipeToPath(recipePath, recipe, amount);
    });
  }

  initializeMockRecipes() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 25; j++) {
        this.recipes[0].addRecipeToPath(
            i, this.recipes[Math.floor(Math.random() * this.recipes.length)],
            Math.floor(Math.random() * 64));
      }
    }
  }
}
