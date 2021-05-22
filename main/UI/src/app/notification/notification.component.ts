import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { NotificationService } from '../services/notification.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications!:any;
  unreadCount!: number

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,public notificationService:NotificationService,public messageService:MessageService) { }

  ngOnInit(): void {
    this.getnotify();
    this.getunreadCount();
  }

  getnotify(){
    this.notificationService.getNotificationList().subscribe(data=>{
      this.notifications=data;
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })
  }

  getunreadCount(){
    this.notificationService.getUserUnreadCount(102).subscribe(data=>{
      this.unreadCount=data.count;
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })
  }

}
