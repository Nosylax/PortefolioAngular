import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contacts';

@Component({
  selector: 'app-contacts',
  imports: [TitleCasePipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  @Input() contact!: Contact;


  ngOnInit(): void {

   
  }

}
