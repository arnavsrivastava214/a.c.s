import { Component } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { StkInBkRecdService } from './stk-in-bk-recd.service';
import { LoginComponent } from 'src/app/Authentication/login/login.component';



@Component({
  selector: 'app-stock-in-book-record',
  templateUrl: './stock-in-book-record.component.html',
  styleUrls: ['./stock-in-book-record.component.css']
})
export class StockInBookRecordComponent {
  bookPurchaseForm:any
  stockRecordsDisplay:any
  vendors = [{ name: 'Vendor 1' }, { name: 'Vendor 2' }];
  classes = ['Class 1', 'Class 2', 'Class 3'];
  purchasedBooks = [];
  copyArray:any = []
  id:any
  isEdit:any = false
  inputValues:any

  constructor(private fb: FormBuilder,private service:StkInBkRecdService) {
    this.bookPurchaseForm = this.fb.group({
      vendorId: [''],
      invoiceNo: [''],
      invoiceDate: [''],
      bookCode: [''],
      bookName: [''],
      bookPublisher: [''],
      class_Assign: [''],
      quantity: [''],
      mrpRate: [''],
      discount: [''],
      totalPurchasingAmount: [''],
      totalAmount: ['']
    });
  }
  ngOnInit(){
    this.fetchTeacherList();
    
  }

 
  fetchTeacherList() {
    this.service.fetchBookRecords((callback: any) => {
      this.stockRecordsDisplay = callback;

      this.copyArray = [].concat(this.stockRecordsDisplay)
    })
  }

  getsearchedValues() {
    let copy: any = [].concat(this.stockRecordsDisplay)

    this.copyArray = copy.filter((e: any) => e.bookName.includes(this.inputValues));

  }
  deleteValue(item:any,idx:any){
      
    this.id = item.id
    
    
    this.service.deleteDataFromteacher(item.id,(callback:any)=>{
      console.log(callback);
      
    })
    this.copyArray.splice(idx,1)
  }
  
  editValue(home:any){
    this.id = home.id;
    this.bookPurchaseForm.patchValue(home)
    this.isEdit=true;
  }

  onSubmit() {
    if(this.isEdit){
      this.service.editDataFromBookRecords(this.id,this.bookPurchaseForm.value,(res:any)=>{
        if(res.status == 200){
          this.isEdit = false;
          this.fetchTeacherList();
        }
      })
        
    }else{
      this.service.saveBookRecords(this.bookPurchaseForm.value,(res:any)=>{
        if(res.status == 200){
          this.fetchTeacherList();
        }

      })
}
}

}