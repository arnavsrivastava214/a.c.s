import { Component } from '@angular/core';
import { StalkOutBookSaleServiceService } from './stalk-out-book-sale-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stalk-out-book-sale',
  templateUrl: './stalk-out-book-sale.component.html',
  styleUrls: ['./stalk-out-book-sale.component.css']
})
export class StalkOutBookSaleComponent {
  admissionNO: any;
  showContent: any = false;
  showModal: any = false;
  PatchValueForm: any
  displayData: any
  options: string[] = ["B001", "B002", "B003", "B004", "B005", "B006", "B007", "B008", "B009", "B0010"];
  filteredOptions: string[] = [];
  selectedOption: any;
  searchTerm: string = '';
  isDropdownOpen: boolean = false;
  punchSaleRateContent: any = false
  arr: any = []
  quantity: any
  rate: any
  amount: any
  obj: any
  id:any

  constructor(private service: StalkOutBookSaleServiceService, private _fb: FormBuilder) {

    this.PatchValueForm = _fb.group({
      name: [],
      id: [],
      fee_date_nov: []

    })
  }
  


  ngOnInit() {
    this.obj = [{
      quantity: 0,
      rate: 0,
      bookCode:''
    }]

  }
 


  getAdmisssonId() {
    let obj = {
      admissiomId: this.admissionNO
    }
    this.service.fetchBookSaleDetails(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data[0];
        callback.data.forEach((el:any)=>{
        this.id = el.id
          
        })
        

        this.displayData.fee_date_nov = this.formatDate(new Date());
        this.PatchValueForm.patchValue(this.displayData)
        this.showContent = true;

      } else {
        this.showModal = true;
        this.showContent = false;
      }
    })
  }


  formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectOption(option:any,item: any) {
    item.bookCode = option;
    item.dropdown = false;
    this.searchTerm = ''; // Reset search when option is selected
    this.filteredOptions = this.options; // Reset the filtered list
  }

  inrementMultipleFields() {
    let newObj: any = {
      quantity: 0,
      rate: 0,
      isNewAdded: true,
      bookCode:''
    }
    this.obj.push(newObj);
    

  }

  decreaseMultipleFields(idx:any){
    this.obj.splice(idx,1);
    console.log(this.obj);
    
  }
  getBookDetails(){

    this.obj.forEach((e:any)=>{
      e.amount = e.rate*e.quantity;
      e.id = this.id
    })
    this.service.saveBookPurchaseDetails(this.id, this.obj, (callback:any)=>{
      console.log(callback);
      
    })
    
    
    
    
  }
  




}

