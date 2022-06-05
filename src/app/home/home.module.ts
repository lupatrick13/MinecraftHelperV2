import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    SharedModule,
    RouterModule,
    MatChipsModule,
  ],
})
export class HomeModule {
}
