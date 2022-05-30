import {CdkDragDrop, copyArrayItem} from '@angular/cdk/drag-drop';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe/recipe_service';

@Component({
  selector: 'drag-drop-grid-recipe',
  templateUrl: './drag-drop-grid.component.html',
  styleUrls: ['./drag-drop-grid.component.css']
})
export class DragDropGridComponent {
  readonly recipes$: Observable<Recipe[]> = this.recipeService.listRecipes();

  constructor(private recipeService: RecipeService) {}

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
