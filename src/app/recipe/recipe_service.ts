/** Service to handle recipe CRUD. */
import {Injectable} from '@angular/core';

import {Recipe} from './recipe';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private readonly recipe: Recipe[] = []
}
