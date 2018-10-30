import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { IndexComponent } from './index/index.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  IndexComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [
  	...PAGES_COMPONENTS,
  ],
})
export class PagesModule {	
}
