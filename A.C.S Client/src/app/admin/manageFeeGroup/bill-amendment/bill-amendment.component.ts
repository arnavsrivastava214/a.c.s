import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-amendment',
  templateUrl: './bill-amendment.component.html',
  styleUrls: ['./bill-amendment.component.css']
})
export class BillAmendmentComponent {
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  }
