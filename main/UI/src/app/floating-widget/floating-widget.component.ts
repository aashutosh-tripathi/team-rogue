import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { BugReportComponent } from '../bug-report/bug-report.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../services/notification.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-floating-widget',
  templateUrl: './floating-widget.component.html',
  styleUrls: ['./floating-widget.component.scss'],
  providers: [DialogService]
})
export class FloatingWidgetComponent implements OnInit {

  unreadCount!: number
  userId=0

  

  constructor(public dialogService: DialogService,public notificationService:NotificationService,public messageService:MessageService) { }

  ngOnInit(): void {

    localStorage.setItem('userId', '102');

    this.userId=Number(localStorage.getItem('userId'));
    console.log(this.userId);
    console.log(localStorage.getItem('userId'));
    
    this.getunreadCount();
  }

  getunreadCount(){
    this.notificationService.getUserUnreadCount(this.userId).subscribe(data=>{
      this.unreadCount=data.count;
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })
  }

  shownotifications() {
    const ref = this.dialogService.open(NotificationComponent, {
      header: 'Notifications',
      width: '70%'
    });
  }

  showchatbot() {
    // const ref = this.dialogService.open(ChatbotComponent, {
    //   header: 'Chatbot',
    //   width: '70%'
    // });

    window.open('http://konnexchat.unaux.com/?i=1', '', 'width=600,height=400,left=200,top=200');
  }

  showfeedback() {
    const ref = this.dialogService.open(FeedbackComponent, {
      header: 'Feedback from',
      width: '70%'
    });
  }

  showbugreport() {
    const ref = this.dialogService.open(BugReportComponent, {
      header: 'Report a Bug',
      width: '70%'
    });
  }

}
