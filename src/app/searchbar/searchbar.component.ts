import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from 'rxjs';

import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe/recipe_service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  recipeCtrl = new FormControl('');
  filteredRecipes: Observable<Recipe[]>;
  recipes: Recipe[] = [];
  allRecipes = this.recipeService.listRecipes();


  constructor(public recipeService: RecipeService) {
    this.filteredRecipes = this.recipeCtrl.valueChanges.pipe(
        startWith(null),
        debounceTime(130),
        distinctUntilChanged(),
        switchMap(
            (recipe: string|null) => this.recipeService.listRecipes(recipe)),
    );
  }
}
