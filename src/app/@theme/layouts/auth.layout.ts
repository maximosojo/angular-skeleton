import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-auth-layout',
  template: `
    <main class="no-padding">
    	<ng-content select="router-outlet"></ng-content>
    </main>
  `,
})
export class AuthLayoutComponent  implements OnDestroy {
  ngOnDestroy() {
    
  }  
}
