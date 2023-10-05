import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonFormComponent } from './components/button-form/button-form.component';
import { ErrorComponent } from './components/error/error.component';
import { BackgroundFormComponent } from './components/background-form/background-form.component';
import { MainComponent } from './pages/main/main.component';
import {AccessTokenInterceptor} from "./interceptors/access-token.interceptor";
import { LogoComponent } from './components/logo/logo.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    NavbarComponent,
    TitleComponent,
    FormComponent,
    ButtonFormComponent,
    ErrorComponent,
    BackgroundFormComponent,
    MainComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
