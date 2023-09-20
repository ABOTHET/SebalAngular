import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {env} from "../../../env";
import {LoginDto} from "../../services/auth/dto/login.dto";
import {LoginResult} from "../../services/auth/results/login.result";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, private router: Router) {

  }

  loginDto: LoginDto = {
    email: "Email",
    password: "Пароль"
  }

  async login($event: object) {
    const data: LoginDto = $event as LoginDto;
    const res: LoginResult = await this.authService.login(data);
    await this.router.navigate([`/${res.id}`]);
  }

}
