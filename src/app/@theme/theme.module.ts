import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslatePipe} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  HeaderComponent
} from './components';

import {
  AuthLayoutComponent,
  SampleLayoutComponent
} from './layouts';

@NgModule({
  exports: []
})
export class MaterialModule {}

const BASE_MODULES = [
  CommonModule, 
  FormsModule, 
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  TranslateModule
];

const COMPONENTS = [
  HeaderComponent,
  AuthLayoutComponent,
  SampleLayoutComponent
];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return <ModuleWithProviders<ThemeModule>>{
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
