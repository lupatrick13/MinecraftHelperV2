import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DetailComponent} from './detail/detail.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './shared/components';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'detail', component: DetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
