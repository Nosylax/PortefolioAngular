import { Component, OnInit } from '@angular/core';
import { ProjetsComponent } from './projets/projets.component';
import { Projet } from './models/projets';
import { Skill } from './models/skills';
import { SkillsComponent } from './skills/skills.component';
import { Contact } from './models/contacts';
import { ContactsComponent } from './contacts/contacts.component';
import { getProjects } from './configs/project';
import { getSkills } from './configs/skill';
import { getContact } from './configs/contact';



@Component({
  selector: 'app-root',
  imports: [ProjetsComponent, SkillsComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  projets!: Projet[];
  skills!: Skill[];
  contacts!: Contact[];

  ngOnInit() {
    this.projets = getProjects().map((project) => new Projet(project.title, project.description, project.imageUrl))
    this.skills = getSkills().map((skill) => new Skill(skill.title, skill.description, skill.imageUrl))
    this.contacts = getContact().map((contact) => new Contact(contact.title, contact.description, contact.imageUrl))
  }
}

