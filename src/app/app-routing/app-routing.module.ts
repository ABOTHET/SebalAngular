import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../pages/login/login.component";
import {RegistrationComponent} from "../pages/registration/registration.component";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {AccountComponent} from "../pages/account/account.component";
import {MainComponent} from "../pages/main/main.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "main", component: MainComponent },
  { path: ":id", component: AccountComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
