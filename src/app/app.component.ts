import { Component, OnInit } from '@angular/core';

import { getProjects } from './configs/project';
import { getSkills } from './configs/skill';
import { getContact } from './configs/contact';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardData } from './models/card';



@Component({
  selector: 'app-root',
  imports: [CardComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  projects!: CardData[];
  skills!: CardData[];
  contacts!: CardData[];

  ngOnInit() {
    this.projects = getProjects().map((project) => new CardData(project.title, project.description, project.imageUrl, project.displayButton))
    this.skills = getSkills().map((skill) => new CardData(skill.title, skill.description, skill.imageUrl))
    this.contacts = getContact().map((contact) => new CardData(contact.title, contact.description, contact.imageUrl))
  }
}