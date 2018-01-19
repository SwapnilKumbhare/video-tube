import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LandingComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
