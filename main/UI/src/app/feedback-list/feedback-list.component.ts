import { Component, OnInit } from '@angular/core';
import {FeedbackService}  from '../services/feedback.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {

  feedbackList!:any;

  constructor(public feedbackService:FeedbackService,public messageService:MessageService) { }

  ngOnInit(): void {
    this.getFeedList();
  }

  getFeedList(){
    this.feedbackService.getFeedbackList().subscribe(data=>{
      this.feedbackList=data;
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })
  }

}
