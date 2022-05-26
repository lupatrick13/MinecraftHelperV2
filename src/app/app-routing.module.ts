import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddRecipeComponent} from './add-recipe/add-recipe.component';
import {DetailComponent} from './detail/detail.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './shared/components';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
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
