import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {SearchbarComponent} from './searchbar.component';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [SearchbarComponent]
})
export class SearchbarModule {
}
