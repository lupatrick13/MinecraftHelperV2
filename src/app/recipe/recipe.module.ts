import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {RecipeCardComponent} from './recipe-card.component';

@NgModule({
  declarations: [RecipeCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [RecipeCardComponent]
})
export class RecipeCardModule {
}
