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
import { LibraryComponent } from './landing/library/library.component';
import { MarketComponent } from './landing/market/market.component';
import { EmbedVideoService } from './_shared/embed-video.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LandingComponent,
        SignInComponent,
        SignUpComponent,
        LibraryComponent,
        MarketComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        EmbedVideoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
