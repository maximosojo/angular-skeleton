import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslatePipe} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    ThemeModule,
    HttpClientModule,
    TranslateModule
  ],
  declarations: [
  	...PAGES_COMPONENTS,
  ],
})
export class PagesModule {	
}
