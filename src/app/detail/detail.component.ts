import {CdkDragDrop, copyArrayItem, transferArrayItem} from '@angular/cdk/drag-drop';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, map, Observable, switchMap, tap} from 'rxjs';

import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe/recipe_service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  readonly id$: Observable<number> = this.route.paramMap.pipe(
      tap(() => this.recipePath = [new Recipe('hjey', 1)]),
      map((value) => Number(value.get('id'))),
  );
  readonly recipe$: Observable<Recipe> = this.id$.pipe(
      switchMap((value: number) => this.recipeService.getRecipe(value)),
  )

  readonly allRecipes$: Observable<Recipe[]> = this.id$.pipe(
      switchMap(() => this.recipeService.listRecipes()),
  );

  readonly merged$ = combineLatest([this.id$, this.recipe$]);

  recipePath: Recipe[] = [];
  constructor(
      private readonly route: ActivatedRoute,
      readonly recipeService: RecipeService) {}

  drop(event: CdkDragDrop<Recipe[]>) {
    if (event.previousContainer === event.container) return;
    copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
    );
  }
}
