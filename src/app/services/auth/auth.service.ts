import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginDto} from "./dto/login.dto";
import {env} from "../../../env";
import {LoginResult} from "./results/login.result";
import {catchError, firstValueFrom, retry, throwError} from "rxjs";
import {CreateAccountDto} from "./dto/create-account.dto";
import {CreateAccountResult} from "./results/create-account.result";
import {AccessTokenResult} from "./results/access-token.result";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  errors: string[] = [];

  private handleError(error: HttpErrorResponse) {
    this.errors = [];
    if (error.error.message) {
      if (!Array.isArray(error.error.message)) {
        this.errors.push(error.error.message);
      } else {
        this.errors = error.error.message;
      }
    }
    return throwError(() => error);
  }

  async login(loginDto: LoginDto) {
    const url: string = env.url + "/auth/login";
    const res: LoginResult = await firstValueFrom<LoginResult>(this.http
      .post<LoginResult>(url, loginDto, {withCredentials: true})
      .pipe(
        catchError(this.handleError.bind(this))
      ));
    localStorage.setItem("account_id", res.id.toString());
    localStorage.setItem("account_email", res.email);
    localStorage.setItem("access_token", res.access_token);
    return res;
  }
  async registration(createAccountDto: CreateAccountDto) {
    const url: string = env.url + "/accounts";
    const res: CreateAccountResult = await firstValueFrom<CreateAccountResult>(this.http
      .post<CreateAccountResult>(url, createAccountDto, {withCredentials: true})
      .pipe(
        catchError(this.handleError.bind(this))
      ));
    localStorage.setItem("account_id", res.id.toString());
    localStorage.setItem("account_email", res.email);
    localStorage.setItem("access_token", res.access_token);
    return res;
  }

  logout() {
    const url: string = env.url = "/auth/logout";
    this.http.post(url, {}, {withCredentials: true});
    localStorage.clear();
  }

  refresh() {
    const url: string = env.url + "/auth/refresh";
    return this.http.post<AccessTokenResult>(url, {}, {withCredentials: true});
  }

}
