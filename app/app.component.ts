import { Component } from '@angular/core';
import { appRoutes as AppRoutes } from './app-routes-module/app-routes.module';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor() {}  
}