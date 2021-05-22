import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent implements OnInit {

  notificationForm!: FormGroup
  notification!: any
  submitted = false;

  constructor(private router:Router,private readonly fb: FormBuilder, public notificationService: NotificationService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.notificationForm.controls; }

  createForm(): void {
    this.notificationForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]]
    })
  }

  onSubmit() {

    this.submitted = true;

    if (this.notificationForm.invalid) {
      return;
    }

    this.notification = this.notificationForm.getRawValue();

    this.notificationService.createNotification(this.notification).subscribe(data => {
      this.router.navigate(['admin']);
      this.messageService.add({ severity: 'success', summary: 'Notification created successfully' });
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Something went wrong' });
    })


  }

}
