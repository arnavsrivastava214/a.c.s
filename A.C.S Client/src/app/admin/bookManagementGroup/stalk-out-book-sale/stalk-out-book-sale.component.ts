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
  PatchValueForm:any
  displayData:any
  constructor(private service: StalkOutBookSaleServiceService, private _fb:FormBuilder) { 

    this.PatchValueForm = _fb.group({
      name:[],
      id:[],
      fee_date_nov:[]
      
    })
  }


















  getAdmisssonId(student:any) {
    let obj = {
      admissiomId: this.admissionNO
    }
    this.service.fetchBookSaleDetails(obj, (callback: any) => {
      if (callback.status == 200 && callback.data.length > 0) {
        this.displayData = callback.data

        this.PatchValueForm.patchValue(student)
        this.showContent = true;

      } else {
        this.showModal = true;
      }

    })

    // this.showContent = true


  }

}
