import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pages',
  template: `
  	<app-sample-layout>
    	<router-outlet></router-outlet>
    </app-sample-layout>
  `,
})
export class PagesComponent {
	constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}
