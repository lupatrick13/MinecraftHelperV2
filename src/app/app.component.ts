import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {startWith, Subject, switchMap} from 'rxjs';

import {APP_CONFIG} from '../environments/environment';

import {ElectronService} from './core/services';
import {RecipeService} from './recipe/recipe_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recipes$ = this.recipeService.listRecipes();

  constructor(
      private electronService: ElectronService,
      private translate: TranslateService,
      public router: Router,
      private readonly recipeService: RecipeService,
  ) {
    this.recipeService.initializeMockRecipes();
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }
}
