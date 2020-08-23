import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  template: `
  	<app-auth-layout>
    	<router-outlet></router-outlet>
    </app-auth-layout>
  `,
})
export class AuthComponent {
	constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}
