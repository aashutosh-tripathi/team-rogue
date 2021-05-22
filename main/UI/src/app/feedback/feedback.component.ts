import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FeedbackService } from '../services/feedback.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm!: FormGroup
  feedback!:any
  submitted=false;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private readonly fb: FormBuilder, public feedbackService:FeedbackService,public messageService:MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.feedbackForm.controls; }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      refLink: [''],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      category: [''],
      uid:['101']
    })
  }

  onSubmit(){

    this.submitted=true;

    if(this.feedbackForm.invalid){
      return;
    }

    this.feedback=this.feedbackForm.getRawValue();

   
    
    this.feedbackService.createFeedback(this.feedback).subscribe(data=>{
      this.ref.close();
      this.messageService.add({severity:'success', summary:'Feedback/Suggesstion submitted successfully'});
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })


  }


}
