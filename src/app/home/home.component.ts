import {Component} from '@angular/core';
import {startWith, Subject, switchMap} from 'rxjs';

import {RecipeService} from '../recipe/recipe_service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  refresh$ = new Subject<void>();
  recipes$ = this.refresh$.asObservable().pipe(
      startWith(null),
      switchMap(() => this.recipeService.listRecipes()),
  );
  constructor(private readonly recipeService: RecipeService) {}
}
