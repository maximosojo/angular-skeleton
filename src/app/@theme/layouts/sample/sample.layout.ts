import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-sample-layout',
  template: `
    <app-header></app-header>
    <main class="no-padding">
    	<ng-content select="router-outlet"></ng-content>
    </main>
  `,
})
export class SampleLayoutComponent  implements OnDestroy {
  ngOnDestroy() {
    
  }  
}
