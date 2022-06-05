import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';

import {RecipeCardModule} from '../recipe/recipe.module';
import {SharedModule} from '../shared/shared.module';

import {DetailComponent} from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    RouterModule,
    MatTabsModule,
    RecipeCardModule,
  ],
})
export class DetailModule {
}
