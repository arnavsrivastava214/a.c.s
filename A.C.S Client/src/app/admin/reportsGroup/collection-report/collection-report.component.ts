import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-report',
  templateUrl: './collection-report.component.html',
  styleUrls: ['./collection-report.component.css']
})
export class CollectionReportComponent {
  collectionParticularDate:any = true;
  collectionAdmissionWise:any = false;
  collectionBetweenTwoDates:any = false;

  colParticulardate(){
    this.collectionParticularDate = true;
    this.collectionAdmissionWise = false
    this.collectionBetweenTwoDates =false
  }
  collAdmissionWise(){
    this.collectionAdmissionWise = true
    this.collectionParticularDate = false;
    this.collectionBetweenTwoDates =false

    
  }
  
  collBetweenTwoDates(){
    this.collectionBetweenTwoDates = true;
    this.collectionAdmissionWise = false
    this.collectionParticularDate = false;


    
  }


}
