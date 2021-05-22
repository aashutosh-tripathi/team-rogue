import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-chatbot',
  templateUrl: 'chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {

  }

}