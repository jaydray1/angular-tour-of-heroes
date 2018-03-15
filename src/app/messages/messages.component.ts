import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // the messageService property MUST be public because you are about to 
  // bind it in the template - I think public and private has to do with 
  // component scopage - private can only be utilized in the component
  // and public can be utilized in other components/files
  // Angular ONLY binds to public component properties
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
