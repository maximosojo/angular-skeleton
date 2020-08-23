import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { AuthComponent } from './auth.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  	declarations: [
  		LoginComponent,
  		SignupComponent,
  		ConfirmComponent,
  		PasswordresetComponent,
      AuthComponent
  	],
  	imports: [
    	CommonModule,
    	ReactiveFormsModule,
    	NgbAlertModule,
      ThemeModule,
    	AuthRoutingModule
  	]
})
export class AuthModule { }
