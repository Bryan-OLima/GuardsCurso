import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  

  exit(): boolean {
    if(confirm('você quer sair?')) {
      return true;
    }

    return false
  }
}
