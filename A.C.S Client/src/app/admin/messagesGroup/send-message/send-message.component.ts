import { Component } from '@angular/core';
import { SendMessageService } from './send-message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {

  messageList:any=[];
  message:any='';
  class:any='';
  inputGroupConfig:any={single:true,whole:false,all:false};

  constructor(private _service:SendMessageService){}

  ngOnInit(){
    this.getMessage();
  }

  getMessage(){
    this._service.getMessage((calback:any)=>{
      if(calback.status==200){
        this.messageList = calback.data;
      }
    })
  }

}
