import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {
  HeaderComponent
} from './components';

import {
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
  RouterModule
];

const COMPONENTS = [
  HeaderComponent,
  SampleLayoutComponent
];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
