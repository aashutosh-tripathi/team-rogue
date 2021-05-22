import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { BugService } from '../services/bug.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss']
})
export class BugReportComponent implements OnInit {

  bugForm!: FormGroup
  bug!:any
  submitted=false;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private readonly fb: FormBuilder, public bugService:BugService,public messageService:MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.bugForm.controls; }

  createForm(): void {
    this.bugForm = this.fb.group({
      severity: [''],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      category: [''],
      uid:['101']
    })
  }

  onSubmit(){

    this.submitted=true;

    if(this.bugForm.invalid){
      return;
    }

    this.bug=this.bugForm.getRawValue();
    
    this.bugService.createBug(this.bug).subscribe(data=>{
      this.ref.close();
      this.messageService.add({severity:'success', summary:'Bug reported successfully'});
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })


  }


}
