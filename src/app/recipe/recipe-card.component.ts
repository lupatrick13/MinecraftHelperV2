import {CdkDragDrop, copyArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, map, Observable, switchMap} from 'rxjs';

import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe/recipe_service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  readonly id$: Observable<number> = this.route.paramMap.pipe(
      map((value) => Number(value.get('id'))),
  );
  readonly recipe$: Observable<Recipe> = this.id$.pipe(
      switchMap((value: number) => this.recipeService.getRecipe(value)),
  )
  readonly merged$ = combineLatest([this.id$, this.recipe$]);
  readonly recipePaths$ = this.recipe$.pipe(
      switchMap((recipe) => recipe.listRecipePaths()),
  );

  userDragHover = false;

  constructor(
      private readonly route: ActivatedRoute,
      readonly recipeService: RecipeService) {}

  drop(event: CdkDragDrop<Recipe[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
          event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
      );
    }
  }
}
