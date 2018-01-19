import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showSignIn: boolean = true;

  @ViewChild(SignInComponent) signInComponent: SignInComponent;
  @ViewChild(SignUpComponent) signUpComponent: SignUpComponent;

  constructor() { }

  ngOnInit() {
  }

  public showSignInComponent(): void {
    this.showSignIn = true;
  }

  public showSignUpComponent(): void {
    this.showSignIn = false;
  }

}
