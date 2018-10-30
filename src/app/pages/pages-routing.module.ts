import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { 
      path: '', 
      component: IndexComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
