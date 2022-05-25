import {TestBed, waitForAsync} from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

import {AppComponent} from './app.component';
import {ElectronService} from './core/services';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          declarations: [AppComponent],
          providers: [ElectronService],
          imports: [
            NoopAnimationsModule,
            RouterTestingModule,
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            TranslateModule.forRoot(),
          ],
        })
        .compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
     }));
});
