import { Component, OnDestroy } from '@angular/core';

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
