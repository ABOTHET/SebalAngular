import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {LoginDto} from "../../services/auth/dto/login.dto";
import {LoginResult} from "../../services/auth/results/login.result";
import {CreateAccountDto} from "../../services/auth/dto/create-account.dto";
import {CreateAccountResult} from "../../services/auth/results/create-account.result";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(public authService: AuthService, private router: Router) {

  }

  createAccountDto: CreateAccountDto = {
    email: "Email",
    password: "Пароль"
  }

  async registration($event: object) {
    const data: CreateAccountDto = $event as CreateAccountDto;
    const res: CreateAccountResult = await this.authService.registration(data);
    await this.router.navigate([`/${res.id}`]);
  }

}
