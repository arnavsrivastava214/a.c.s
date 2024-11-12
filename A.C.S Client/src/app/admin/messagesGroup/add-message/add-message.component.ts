import { Component } from '@angular/core';
import { AddMessageService } from './add-message.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent {

  messageConfig: any = {};
  messageList: any = [];
  showModal: boolean = false;
  isEdit: boolean = false;


  constructor(private _service: AddMessageService,private alert:AlertService) {

  }

  ngOnInit() {
    this.fetchMessage();
  }

  fetchMessage() {
    this._service.getMessage((calback: any) => {
      if (calback.status == 200) {
        this.messageList = calback.data;
      }
    })
  }
  addMessage() {
    this._service.addMessage(this.messageConfig, (res: any) => {
      if (res.status == 200) {
        this.fetchMessage();
        this.showModal = false;
      }
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal(){
    this.showModal=false;
    this.messageConfig = {};
  }

  selectMessage(event: any) {
    this.isEdit = true;
    this.messageConfig = JSON.parse(event.target.value);
  }

  deleteMessage() {
    if(!this.messageConfig.message_id){
      this.alert.error('Please select message to delete');
      return;
    }
    this._service.deleteMessageById(this.messageConfig.message_id, (res: any) => {
      if (res.status == 200) {
        this.fetchMessage();
      }
    })
  }

  editMessage() {
    this._service.editMessage(this.messageConfig, (res: any) => {
      if (res.status == 200) {
        this.fetchMessage();
        this.showModal = false;
        this.isEdit = false;
      }
    })
  }

}
