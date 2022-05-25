import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {AddRecipeComponent} from './add-recipe.component';

@NgModule({
  declarations: [AddRecipeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    RouterModule,
  ],
})
export class AddRecipeModule {
}
