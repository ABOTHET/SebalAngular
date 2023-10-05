import {Component, OnInit} from '@angular/core';
import {AccountsService} from "../../services/accounts/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) {
  }

  async ngOnInit() {
    console.log(await this.accountsService.findInformationFromAccount(1));
  }

}
