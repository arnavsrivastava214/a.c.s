import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-left',
  templateUrl: './balance-left.component.html',
  styleUrls: ['./balance-left.component.css']
})
export class BalanceLeftComponent {
  showModal: any = false;

  ngOnInit() {
    if (window.location.pathname == '/admin/balance-left') {
      this.showModal = true;
    } else {
      this.showModal = false;

    }
  }

}
