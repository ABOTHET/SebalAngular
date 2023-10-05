import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {env} from "../../env";
import {AccessTokenResult} from "../services/auth/results/access-token.result";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const headers = {
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}` as const
      }
    };
    const req = request.clone(headers);
    return next.handle(req).pipe(catchError((error) => {
      console.log(error);
      if (error.url == env.url + "/auth/refresh") {
        localStorage.clear();
        this.router.navigate(['login']).then();
        return throwError(() => error);
      }
      return this.authService.refresh().pipe(switchMap((res: AccessTokenResult) => {
        localStorage.setItem("access_token", res.access_token);
        const req = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}` as const
          }
        })
        return next.handle(req);
      }));
    }));
  }
}
