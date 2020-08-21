import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
		  path: 'account',
      loadChildren: './account/account.module#AccountModule'
    },
  	{ 
    	path: '', 
    	loadChildren: './pages/pages.module#PagesModule',
    	canActivate: [AuthGuard]
  	}
];

@NgModule({
  	imports: [
		RouterModule.forRoot(routes)
  	],
  	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }