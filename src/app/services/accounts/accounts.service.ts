import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../../env";
import {InfoAccountResult} from "./results/info-account.result";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  async findInformationFromAccount(id: number) {
    const url: string = env.url + `/accounts/${id}`;
    let res: InfoAccountResult = await firstValueFrom<InfoAccountResult>(this.http
      .get<InfoAccountResult>(url, {withCredentials: true}));
    return res;
  }

}
