import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';

import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe/recipe_service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  readonly recipe: Observable<Recipe> = this.route.paramMap.pipe(
      map((value) => this.recipeService.getRecipe(Number(value.get('id')))))
  constructor(
      private readonly route: ActivatedRoute,
      private readonly recipeService: RecipeService) {}
}
