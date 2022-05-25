import {Component} from '@angular/core';
import {Subject} from 'rxjs';

import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe/recipe_service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {
  recipes$ = this.recipeService.listRecipes();

  constructor(public recipeService: RecipeService) {}

  add(name: string) {
    this.recipeService.addRecipe(new Recipe(name, 1));
  }
}
