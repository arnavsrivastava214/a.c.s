import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { SideBarServiceService } from './side-bar-service.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  displayUserCredential: any
  isActive:any = true;

  @Output() emitToParent:any = new EventEmitter();
  
  constructor(private common:CommonService){
  }

  ngAfterViewInit() {
    let arrow: any = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e: any) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar: any = document.querySelector(".sidebar");
    let sidebarBtn: any = document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
      this.isActive = !this.isActive;
      console.log(this.isActive);
      
     this.emitToParent.emit(this.isActive);

    });
  }

}


