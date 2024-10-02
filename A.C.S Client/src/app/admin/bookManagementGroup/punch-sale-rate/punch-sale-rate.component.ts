import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { PunchSaleRateServiceService } from './punch-sale-rate-service.service';

@Component({
  selector: 'app-punch-sale-rate',
  templateUrl: './punch-sale-rate.component.html',
  styleUrls: ['./punch-sale-rate.component.css']
})
export class PunchSaleRateComponent {
  options: string[] = ["B001", "B002", "B003", "B004", "B005", "B006", "B007", "B008", "B009", "B0010"];
  filteredOptions: string[] = [];
  selectedOption: string = '';
  searchTerm: string = '';
  isDropdownOpen: boolean = false;
  changeSaleRateContent: any = false
  punchSaleRateContent: any = false
  displayData: any
  showModal: any = false;
  displayAllData: any;


  constructor(private service: PunchSaleRateServiceService) {
    this.filteredOptions = this.options;
  }
  ngOnInit() {
    this.service.fetchAllBookRecordsByBookCode((callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data
      } else {
        this.showModal = true;
      }

    })
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.searchTerm = ''; // Reset search when option is selected
    this.filteredOptions = this.options; // Reset the filtered list
  }
  changeSaleRate() {
    this.changeSaleRateContent = true
    this.punchSaleRateContent = false


  }
  punchSaleRate() {
    this.changeSaleRateContent = false
    this.punchSaleRateContent = true



  }
  getSelectedValues() {
    let obj = {
      bookCode: this.selectedOption
    }
    this.service.fetchBookRecordsByBookCode(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.displayAllData = callback.data
      } else {
        this.showModal = true;
      }

    })


  }
}
