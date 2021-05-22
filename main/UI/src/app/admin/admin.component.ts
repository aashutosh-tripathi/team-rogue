import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createAnnouncement(){
    this.router.navigate(['admin/announcement'])
  }

  showBugList(){
    this.router.navigate(['admin/buglist'])
  }

  showFeedbackList(){
    this.router.navigate(['admin/feedbacklist'])
  }

}
