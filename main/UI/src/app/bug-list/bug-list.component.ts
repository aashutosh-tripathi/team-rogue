import { Component, OnInit } from '@angular/core';
import {BugService}  from '../services/bug.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  bugList!:any;

  constructor(public bugService:BugService,public messageService:MessageService) { }

  ngOnInit(): void {
    this.getBugList();
  }

  getBugList(){
    this.bugService.getBugList().subscribe(data=>{
      this.bugList=data;
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })
  }

  changeStatus(bug:any){
    console.log(bug);
    this.bugService.fixedBug(bug).subscribe(data=>{
      this.getBugList();
    },err=>{
      this.messageService.add({severity:'error', summary:'Something went wrong'});
    })
  }

}
