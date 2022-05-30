import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {DragDropGridComponent} from './drag-drop-grid.component';

@NgModule({
  declarations: [DragDropGridComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DragDropModule,
    SharedModule,
    RouterModule,
    MatGridListModule,
  ],
  exports: [DragDropGridComponent],
})
export class DragDropGridModule {
}
